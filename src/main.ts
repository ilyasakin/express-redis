import express, {Express} from "express";
import ViteExpress from "vite-express";
import {sleep} from "./helper";
import {createClient, RedisClientType} from "redis";

const app: Express = express();
const client: RedisClientType = createClient();

interface IUser {
    name: string;
    age: number;
    email: string;
}

const users: IUser[] = [
    {
        name: "John",
        age: 25,
        email: "john@randomemalilproviderthatcertainlydoesntmatter.com"
    }
];

app.get("/getUsersWithoutCache", async (_, res) => {
    // Artificial delay to simulate a slow API
    await sleep(5000);
    res.json(users);
});

app.get("/getUsers", async (_, res) => {
    const isRedisUsersExists = await client.exists('users');
    if (isRedisUsersExists) {
        const redisUsers = await client.get('users');

        if (!redisUsers) {
            throw new Error('Redis users is null');
        }

        const users = JSON.parse(redisUsers);
        res.json(users);
        return;
    } else {
        await client.set('users', JSON.stringify(users));
        await sleep(5000);
        res.json(users);
        return;
    }
});

app.post("/addUserWithoutCache", express.json(), (req, res) => {
    const {name, age, email} = req.body;
    users.push({name, age, email});

    res.sendStatus(200);
});

app.post("/addUser", express.json(), async (req, res) => {
    const {name, age, email} = req.body;
    users.push({name, age, email});
    await client.set('users', JSON.stringify(users));

    res.sendStatus(200);
});

ViteExpress.listen(app, 3000, async () => {
        console.log("Server is listening on port 3000...");
        client.on('error', err => console.log('Redis Client Error', err));
        await client.connect();
        console.log('Redis Client Connected')
    }
);

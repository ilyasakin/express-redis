import express from "express";
import ViteExpress from "vite-express";
import {sleep} from "./helper";

const app = express();

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


ViteExpress.listen(app, 3000, () =>
    console.log("Server is listening on port 3000...")
);

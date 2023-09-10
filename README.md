# express-redis

# Express Redis API

This is a simple Express.js API that demonstrates the usage of Redis for caching data. It provides four endpoints:

1. **getUsers**: Returns users from the cache if they exist; otherwise, it simulates a long waiting endpoint by waiting for 5 seconds and then returns the users' array.

2. **getUsersWithoutCache**: Simulates a long waiting endpoint by waiting for 5 seconds and then returns the users' array without utilizing the cache.

3. **addUser**: Adds a user to the array and refreshes the cache to keep the data up to date.

4. **addUserWithoutCache**: Adds a user to the array without refreshing the cache.

## Prerequisites

Before running this API, ensure you have the following dependencies and tools installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Redis](https://redis.io/)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/express-redis.git
   cd express-redis
   ```
2. Start redis using Docker
   ```bash
   docker build -t express-redis .
   docker run -d --name express-redis -p 6379:6379 express-redis
   ```
   This command will start a Redis container in detached mode (-d) with the name express-redis and map the container's 6379 port to the host's 6379 port.
3. Install the required packages:
   ```bash
   yarn install
   ```
4. Start Express Server
   ```bash
   yarn dev
   ```
   The API should now be running on http://localhost:3000.

## Endpoints

### 1. getUsers

- **Description**: Returns users from the cache if they exist; otherwise, it simulates a long waiting endpoint by waiting for 5 seconds and then returns the users' array.

- **HTTP Method**: GET
- **Endpoint**: `/getUsers`

### 2. getUsersWithoutCache

- **Description**: Simulates a long waiting endpoint by waiting for 5 seconds and then returns the users' array without utilizing the cache.

- **HTTP Method**: GET
- **Endpoint**: `/getUsersWithoutCache`

### 3. addUser

- **Description**: Adds a user to the array and refreshes the cache to keep the data up to date.

- **HTTP Method**: POST
- **Endpoint**: `/addUser`
- **Request Body**: JSON object with user data.

### 4. addUserWithoutCache

- **Description**: Adds a user to the array without refreshing the cache.

- **HTTP Method**: POST
- **Endpoint**: `/addUserWithoutCache`
- **Request Body**: JSON object with user data.

## Usage

You can use tools like `curl`, `Postman`, or any HTTP client to interact with the API and test the endpoints.

Example request to `getUsers` using `curl`:

```bash
curl http://localhost:3000/getUsers
```

Example request to addUser using curl:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john@example.com", "age": 25}' http://localhost:3000/addUser
```

## License

MIT License

Copyright (c) 2023 ilyas akın

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


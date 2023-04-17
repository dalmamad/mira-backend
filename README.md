# Mira-backend

this project is a backend of Mira which is a realtime chat-app.
for now only backend is completed. however api-docs are privided and you can make your own frontend for this backend.

# Technologies Used

- nodejs/express
- postgresql
- socket.io
- prisma

# Prerequisites

- nodejs
- npm
- postgresql
- docker
- docker compose

# installation

## production

this project is also dockerized. so to run it on production enviroment follow this steps:

1. clone project:

```bash
git clone https://github.com/dalmamad/mira-backend.git
```

2. go to the project root folder:

```bash
cd mira-backend
```

3. use docker:

```bash
sudo docker compose build
sudo docker compose up
```

## development

you can run this project in development enviroment with or without docker

### without docker

1. make sure `nodejs` and `postgresql` are installed on your system.
2. make sure `postgresql` is running on port 5432
3. after downloading repo, go in project root folder and execute this command on terminal

```bash
npm i
```

### with docker

1. make sure docker and docker compose are installed on your system.
2. run this command:

```bash
sudo docker compose -f docker-compose.development.yml build
sudo docker compose -f docker-compose.development.yml up
```

# Documents

both `Http` and `WebSocket` protocols are used in this project.

## Http

http documents are provided using swagger.

after running server you can get document on path `http://localhost:3040/docs/http`

## WebSocket

unfortunately there is no tool similar to swagger for describing WebSocket so for this reason document is provided is markdown format.

after running server you can get this document on path `http://localhost:3040/docs/ws`

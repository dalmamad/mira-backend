# Mira-backend

# Overview

this project is a backend of Mira which is realtime chat-app.
now only backend is complete. however api-docs are privided and you can make your own frontend for this backend.

# Technologies

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

this project is also dockerized. so to run this on production enviroment follow this steps:

1. clone project:

```bash
git clone ......
```

2. cd into repositor root folder:

```bash
cd .......
```

3. user docker:

```bash
sudo docker compose build
sudo docker compose up
```

## development

you can run run it in development enviroment with docker or without docker

### without docker

after downloading repo, go in project root folder and run:

```bash
npm i
```

### with docker

run this command:

```bash
sudo docker compose -f docker-compose.development.yml build
sudo docker compose -f docker-compose.development.yml up
```

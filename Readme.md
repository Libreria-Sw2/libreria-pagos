# Payments Channel Gateway

## Instalation

Once you have the repository, you must open a terminal and write the following command:

    npm i

This command will install all the necessary libraries for the project

## Running the project

Once the libraries are installed, and you want to run project locally, you should open a terminal and execute the following commands in a terminal:

    $env:NODE_CONFIG_DIR="./src/config"

this will generate an environment variable that will indicate where the config file can be found.

    $env:NODE_ENV="development"

this will create another environment variable indicating that the project is running under a development environment.

    npm run dev

this command will run the project, if the config file have not been changed you should be able to access it on the following link:

- [localhost:50000/](localhost:5000/)

## Deploying the project

Once the project is ready to be deployed, you will need to generate the javascript files, For this open a terminal and execute the following command:

    npx tsc

this command will transform all typescript files to javascript

<!-- # Inicio por primera vez del proyecto -->

## Para consumir los tokens

Desde la tienda de Microsoft instalar el programa Ubuntu 18.4 LTS y ejecutar los siguientes comandos.

    wget http://download.redis.io/redis-stable.tar.gz
    tar xvzf redis-stable.tar.gz
    cd redis-stable
    make
    sudo apt-get install build-essential
    sudo apt-get install --reinstall make
    sudo apt update && apt upgrade
    sudo apt install redis-server
    sudo nano /etc/redis/redis.conf
    supervised systemd
    sudo service redis-server start

## Crear y poblar la base de datos

Para crear la base de datos y ejecutar las migraciones y seeders creados utilizar

    npm run db:create:dev
    npm run migrate:dev

## Levantar proyecto

    sudo service redis-server start
    npm run start:dev

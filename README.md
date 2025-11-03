# Framework e Interoperabilidad

## Año 2025 - Tecnicatura Universitaria en Desarrollo Web

## Trabajo práctico Nº 3 - Servicios Web e Interoperabilidad

## Estudiantes:

- [FAI-3169] Benitez, Franco Fabian
- [FAI-4594] Pesce, Matías Nicolás
- [FAI-3220] Reyes Castelló, José Vicente

## Dominio

<h3> <i> I Know More Than You! </i> </h3>


## Ejercicio 1

El servicio web SOAP utilizado es [...]. <br>
La implementación del wrapper REST para el servicio SOAP se puede encontrar en [...].

## Ejercicio 2

Elegimos las siguientes API RESTful a implementar:
- <a href= "https://opentdb.com/">Open Trivia Database</a>: API con una base de datos de preguntas y respuestas en inglés.
- <a href= "https://qrandom.io/docs/dice">Roll the Dice with Quantum Randomness</a>: API para obtener un resultado aleatorio simulando un dado de seis caras.

## Trabajo Páctico 4

Se encuentra en la rama "TP4" que utiliza de origen la rama "main".

## Aclaraciones

- El proyecto cuenta con la dependencia concurrently a fin de facilitar la ejecución del proyecto, para poder utilizarlo es necesario ejecutar los siguientes comandos en la consola desde la ruta principal:
    - Para instalar la dependencia:
        ```bash
        npm install
        ```
    - Para iniciar el frontend y backend en simultaneo:
        ```bash
        npm start
        ```

- La base de datos utiliza el motor MySQL en la plataforma XAMPP.

- Para poder utilizarlos es necesario correr los siguientes comandos en la consola desde la ruta principal:
    - Para el frontend:
    ```bash
    cd .\Frontend\
    npm install
    cp .env.example .env
    ```
    - Para Laravel:
    ```bash
    cd .\Laravel-TP2-FEI\
    cp .env.example .env
    ```
    ```bash
    php artisan key:generate
    ```
    ```bash
    php composer install
    ```
    ```bash
    php artisan migrate
    ```
- Los archivos .env de cada subdirectorio deben contener los siguientes parámetros:
Para el frontend debe contener:
    ```js
    VITE_API_LARAVEL=http://localhost:8000/api
    ```
- Para el framework Laravel:
    ```js
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=ikmtyfei
    DB_USERNAME=root
    DB_PASSWORD=
    CACHE_STORE=file
    ```
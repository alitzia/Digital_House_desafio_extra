DESAFIO EXTRA

-- 1. DESCRIPCIÓN DEL DESAFIO --
El desafió consistió en desarrollar el CRUD de una aplicación conectada a una base de datos SQL. El desarrollo inlcuyó sólo el backend tipo API REST.


-- 2. PASOS QUE SEGUÍ PARA LA SOLUCIÓN --
1. Crear un proyecto de node con express e instalar los modulos necesarios (ej: Express, Sequelize, Mysql2).

2. Tomar como base la estructura de la base de datos que me enviaron para definir tipos de datos y relaciones.  
    - En cuanto a tipos de datos, por ejemplo, los ids de algunas tablas no eran autoincrementales en la base de datos original.
    - Con base en la descripción que me enviaron, todas las relaciones eran de uno a muchos porque:
        · Una canción tienen un albúm, un género y un artista.
        · Cada género, album y artista tiene muchas canciones.
    * El archivo diagrama_ER muestra los campos y relaciones de la base de datos.
    * Con el script musicando_ok.sql se puede replicar la base de datos resultante al final del desafio, con algunos datos de prueba.

3. Explicar el modelo de la base de datos en el proyecto de node, usando Sequelize. Generé un archivo .js para cada tabla, explicando tipos de datos y relaciones entre las tablas. Ver carpeta src/database/models. 

4. Conectar la aplicación con la base de datos. La configuración que utilicé para la conexión está en el archivo src/database/config/config.js.

5. Crear las rutas y controladores para cada uno de los endpoints solicitados: 
    - /canciones (GET) que muestre un listado de las canciones con sus propiedades
    - /canciones (POST) para crear un nuevo registro de una canción
    - /canciones/:id (GET) que muestre una canción 
    - /canciones/:id (PUT) para editar una canción
    - /canciones/:id (DELETE) para eliminar una canción 
    - /generos (GET) listado de todos los géneros con sus canciones 

Los archivos de rutas se localizan en src/routes. 
    - Hay un archivo para las rutas de canciones y otro para las rutas de generos. También generé un archivo index.js para tener una estructura más ordenada. 
Los archivos de de controladores se localizan en src/controllers. Hay un archivo para canciones y otro para géneros.

6. Probar que cada endpoint regrese los datos conforme a las especificaciones. Para ello utilicé Postman. En el archivo pruebas.pdf muestro algunas capturas de pantalla con las pruebas de los endpoints en Postman. 

-- 3. DESCRIPCIÓN DE LOS ENDPOINTS --
    /canciones (GET)
        Lista las canciones con sus propiedades.
    /canciones (POST)
        Crear un nuevo registro de una canción. Para crearla a través de Postman, se coloca un JSON en el body. Ejemplo de los datos que se deben ingresar:
                {
                    "titulo" : "In My Place",
                    "duracion" : 56,
                    "genero_id" : 2, 
                    "album_id" : 5, 
                    "artista_id" : 3
                    }
    /canciones/:id (GET)
        Muestra una canción con base en su id. Para probarla, reemplazar ":id" por un número del 1 al 6 o del 23 al 30.
    /canciones/:id (PUT) 
        Edita la canción con el id ingresado. Para probarla, reemplazar ":id" por el id de la canción a modificar y colocar en el body de Postman un JSON con los nuevos datos.
    - /canciones/:id (DELETE) 
        Eliminar la canción cuyo id se proporciona en la url.
    - /generos (GET) 
        Lista todos los géneros con sus canciones. Al probarla, considerar que sólo los géneros 1 y 2 (Rock y Pop) tienen canciones.
    - /generos:id (GET)   
        Lista un género en específico con sus canciones. Se debe proporcionar el id del género en la url (probarla con el id 1 o 2, son los únicos que tienen canciones).

-- 4. CONCLUSIONES
Este desafio adicional fue valioso porque:
    - Uno de los temas que más me interesaba aprender del desarrollo web era la conexión con bases de datos y
    - Las APIs tienen infinidad de aplicaciones en la industria.

Con respecto al curso en general, aprendí que el desarollo web full stack requiere de múltiples conocimientos, tales como: programación en general, lenguajes para front end como html y css, diseño de bases de datos, diseño de interfaces (paletas de colores, tipografías, distribución de elementos), diferentes arquitecturas de desarrollo web, usabilidad y experiencia de usuario, gestión de proyectos, uso de herramientas colaborativas (ej. GitHub, Slack, Trello) y muchos otros. 

Debido a la complejidad del desarrollo web full stack, aprenderlo de manera autodidacta es complicado. Puede resultar frustrante. Hay mucha información en Internet pero no toda es correcta, clara, completa o actual. Saber implementar UNA arquitectura es un excelente punto de partida para comprender el proceso completo del desarrollo web. También fue muy enriquecedor escuchar sobre otras tecnologías y experiencias reales de los profesores.

Alicia
# Test_25Watts - Héctor Allende

El proyecto es una landing page en ReactJs. El contenido de cada sección se consumen de manera asíncrona de una API REST basada en un documento JSON (db.json creado en la raíz del proyecto), por lo que se monta un servidor virtual JSON-SERVER. La navegación por las distintas secciones es con efecto smooth scrolling, la sección formulario valida que los campos no queden vacios dando mensaje cuando faltan campos y confirmando cuando se envía el mensaje.  

## Instalación - Pasos:

Abrir en la terminal la carpeta del proyecto/ clonar del repositorio git

### `npm install`

Luego para levantar el json-server, hay que correrlo en el puerto 8000. Ya que la petición se consume de ese puerto. Con el siguiente comando en la terminal:

### `json-server --watch db.json --port 8000`

Por último para abrir la página ejecutar en otra ventana de la terminal:

### `npm start`

# Página Principal

![image](https://user-images.githubusercontent.com/54869462/149269073-a53c16cf-371f-4059-aed7-77a13e4dc6ad.png)




Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

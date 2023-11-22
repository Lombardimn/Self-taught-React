# Estructura de Rounting con REACT ![Logo React](https://api.iconify.design/logos:react.svg)

***
React es una de las bibliotecas más populares para construir interfaces de usuario interactivas y eficientes. Aquí encontrarás una colección de proyectos prácticos.

## Contenido

1. [Información General](#información-general)

2. [Tecnologias](#tecnologias)

3. [Estructura](#estructura)

4. [Acceso](#acceso)

### Información General

Este repositorio presenta un proyectos práctico presentado por [**Gentleman-Programing**](https://www.twitch.tv/gentleman_programming) con el fin de instruir a programadores en las buenas practicas en el enrutamiento de páginas, asi como la utilizacion de una buena estructura de una aplicacion React mediante el uso de Clean Architecture.

![Imagen de React](https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png)

## Tecnologias

Lista de tecnologías utilizadas en el proyecto:

* [React](https://es.react.dev/): Version 18.2.0
* [Next.js](https://nextjs.org/): Version 13.4.19
* [Vite.js](https://vitejs.dev/): Version 4.4.5
* [react-router-dom](https://reactrouter.com/en/main): Version 6.19.0
* [@reduxjs/toolkit](https://redux-toolkit.js.org/): Version 1.9.7

## Estructura

La arquitectura limpia, o **"Clean Architecture"**, es un patrón de diseño de software que se centra en la separación de los aspectos del software en capas individuales, cada una con una responsabilidad única, lo que facilita la prueba, el mantenimiento y la comprensión del código.

Las capas en la arquitectura limpia incluyen:

* **Entidades:** Son las clases que contienen la lógica de negocio principal.
* **Casos de uso:** Contienen la lógica de las operaciones específicas que la aplicación puede realizar.
* **Controladores y presentadores:** Son responsables de la interacción con los casos de uso y la presentación de los datos a las capas exteriores.
* **Capas externas:** Incluyen bases de datos, interfaces de usuario, API externas, etc.

La "Clean Architecture" se puede aplicar en una aplicación React para obtener los siguientes beneficios:

* **Separación de preocupaciones:** Al separar la lógica de negocio de la lógica de la interfaz de usuario, puedes probar y mantener cada parte de manera independiente.

* **Pruebas más fáciles:** Al aislar la lógica de negocio en sus propias capas, puedes probarla por separado sin tener que preocuparte por la interfaz de usuario o la base de datos.

* **Mantenibilidad:** Los cambios en una capa no afectan a las otras capas. Por ejemplo, puedes cambiar la base de datos o la biblioteca de UI sin afectar la lógica de negocio.

* **Reutilización del código:** Al separar la lógica de negocio de las capas específicas de la plataforma (como la interfaz de usuario), puedes reutilizar esta lógica en diferentes plataformas.

En resumen, la "Clean Architecture" puede hacer que tu aplicación React **sea más fácil de entender, probar y mantener**, lo que puede ser especialmente beneficioso a medida que tu aplicación crece en tamaño y complejidad.

## Acceso

El repositorio es publico y se comprende en el marco de la licencia [**MIT**](dadsad)

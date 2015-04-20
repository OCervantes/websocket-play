# WebSocket-Play

>Esta es una simple aplicación que implementa un chat anónimo, utilizando webSockets, además se ilustra el uso de actores con Akka y Play Framework.

# Contenido
- **[Antes de comenzar](#antesde)**
- [Herramientas sugeridas](#herramientas)
- [Instalación](#instalacion)
- **[Actividad 1 - Análisis](#analisis)**
- **[Actividad 2 - Desarrollo](#desarrollo)**
- **[Actividad 3 - Limpieza](#limpieza)**
- **[Actividad 4 - Preguntas](#preguntas)**

# Antes de comenzar

### <a name="herramientas"></a>Herramientas sugeridas:
- **Eclipse**, **IntelliJ** u otro editor como <a href="https://atom.io/">(Atom)</a>.
- Si utilizan Mac es recomendable usar <a href="http://brew.sh/">**Homebrew**</a>.
- **JDK 6** ó superior.
- Conocimientos de **Javascript**.

### <a name="instalacion"></a>Instalación:

La actividad se encuentra **en este repositorio** por lo que deberás **clonar** este repositorio en tu computadora.

- **Clonar** el proyecto mediante:
```Bash
$ git clone https://github.com/Innova4DLab/websocket-play.git
```
- **Ejecutar** el proyecto con:
```Bash
$ activator run
```
- **Abrir** el navegador en: https://github.com/Innova4DLab/websocket-play
- **Abrir** la carpeta del proyecto en un editor de su preferencia.

# <a name="analisis"></a>Actividad 1 - Análisis

**WebSocket** es un protocolo que provee canales de  comunicación bidireccional sobre una conexión TCP única. Desde el 2011 el protocolo es un estándar y la API Web está en proceso de estandarizarse por la W3C.

<img src="http://www.innova4d.mx/wp-content/uploads/2015/04/httpsocket.png"/>

Los **WebSockets** utilizan un único canal de comunicación bidireaccinal en donde se asegura una alta velocidad de intercambio de datos en demanda.

La **aplicación** muestra una simple sesión de **chat anónimo**, si abres otro navegador ó una sesión anónima en **Google Chrome** deberías observar una segunda sesión.

### Estructura de la Aplicación

La **aplicación** se encuentra desarrollada en Scala y JavaScript. A continuación se muestra un diagrama con la estructura del proyecto:

<img src="http://www.innova4d.mx/wp-content/uploads/2015/04/estructureApp.png">

Como se observa, la naturaleza de **Play Framework** nos permite mantener un orden en la
estructura de la aplicación. El uso del patrón **Modelo Vista Controlador** es muy clara, puesto que Play separa las características de la **vista** (HTML, CSS), de la implementación de la lógica de los **WebSockets**. A continuación se muestra la arquitectura de la aplicación.

<img src="http://www.innova4d.mx/wp-content/uploads/2015/04/socket.png">

Algunos **plugins** utilizados en este proyecto, que no son explotados en su totalidad pero son interesantes de analizar y considerar para futuros desarrollos:

- **Coffee Script** es un lenguaje que compila a **JavaScript** utilizando un precompilador, es decir, antes de compilar la aplicación un precompilador compila los archivos .coffee y devuelve un **JavaScript**. Coffee Script permite agregar características que serían difíciles de implementar en JavaScript, dichas características están inspiradas en Ruby, Python y Haskell.

- **Less** es un lenguaje que compila a CSS utilizando un precompilador. Less agrega muchas características a CSS, como el uso de variables, funciones, operadores, entro otros. Less permite agregar dinamismo al desarrollo de código CSS, permite la reutilización de código y agrega un poco de orden al código CSS.

- **BootStrap** es un framework para el front-end, es una colección de herramientas para desarrollar sitios Web responsivos (tanto para dispositivos móviles como para escritorio). Bootstrap incluye templates en HTML y CSS para agregar componentes, como botones, formularios, tipografías y componentes de navegación que pueden utilizarse instantáneamente.

# <a name="desarrollo"></a>Actividad 2 - Desarrollo

Ahora que ya saben implementar un servicio Web y algunos conceptos básicos de **HTML y CSS** en la actividad 2 vamos a implementar un **Mashup**. Un **Mashup** es un conjunto de servicios, ya sean propios o de terceros que se unen para crear una aplicación completamente diferentes, algunos servicios de terceros pueden son ofrecidos por **Flickr, Wikipedia, WeatherReport, Google Maps**, etc.

Vamos a generar una aplicación que utilice todos estos servicios. Nuestra aplicación será una **WebApp** que permitirá ofrecer información sobre un país a las personas de negocios. Para esto ofreceremos un pequeño parrafo introductorio con la información del país **(Wikipedia)**, un pequeño mapa con la ubicación de la embajada **(Google Maps)**, el clima en la capital del país **(OpenWeather)**, una serie de fotografías relacionadas al país **(Flickr)**. Para esta actividad vamos a desarrollar una nueva vista, para esto es deberás seguir las siguientes instrucciones:
- **Cambiar** el nombre del archivo **main.scala.html** a **main.scala(act1).html**
- **Crear** un nuevo archivo **main.scala.html**
  - (Si están en **Atom**, pueden dar click derecho y seleccionar New file, ó pueden duplicar el anterior **main.scala.html**),
- **Copiar** el contenido del archivo **main.scala(2).html** que se encuentra **dentro de este repositorio** a **main.scala.html** del proyecto de Play.

En esta actividad vamos a **separar asuntos**, es decir, vamos a utilizar **CSS** para manejar únicamente el estilo, **HTML** para crear los elementos y **JavaScript** para implementar la lógica de la aplicación. Para hacer más claro el uso de *[Separation of concerns](http://en.wikipedia.org/wiki/Separation_of_concerns)* vamos a utilizar de la carpeta **public** de Play. La carpeta **public** es un directorio en donde el contenido es accesible por cualquiera que tenga acceso al servidor, es un lugar ideal para agregar imágenes que deseemos mostrar en la aplicación, código JavaScript y hojas de estilo CSS, ahora deberás:
- **Copiar** el contenido de la hoja de estilo **main(2).css** que se encuentra en este repositorio y pegar el contenido dentro de **public/stylesheets/main.css**

- **Analizar** el código, la principal diferencia en estos nuevos servicios es la integración de **API** de terceros, en algunos casos, como en la **API** de **Wikipedia** por cuestiones de seguridad se utiliza **JSONP**. Es por esto que al utilizar una API de un tercero es importante conocer la documentación. La **API** mas extensa es la API de **Flickr**, a continuación se presentan enlaces a la documentación así como definiciones de algunos conceptos presentes en esta aplicación:

  - **API** es el conjunto de subrutinas, funciones y procedimientos que ofrece cierta biblioteca para ser utilizado por otro software como una capa de abstracción. Son usadas generalmente en las bibliotecas.

  - **JSON**, acrónimo de JavaScript Object Notation, es un formato ligero para el intercambio de datos. JSON es un subconjunto de la notación literal de objetos de JavaScript que no requiere el uso de XML.

  - **JSONP** es una técnica de comunicación utilizada en los programas JavaScript para realizar llamadas asíncronas a dominios diferentes. JSONP es un método concebido para suplir la limitación de AJAX entre dominios, que únicamente permite realizar peticiones a páginas que se encuentran bajo el mismo dominio y puerto por razones de seguridad.

  - **AJAX**, acrónimo de Asynchronous JavaScript And XML (JavaScript asíncrono y XML), es una técnica de desarrollo web para crear aplicaciones interactivas. Estas aplicaciones se ejecutan en el cliente, es decir, en el navegador de los usuarios mientras se mantiene la comunicación asíncrona con el servidor en segundo plano.

  - **Access-Control-Allow-Origin** Es un mecanismo que por cuestiones de seguridad permite o niega que varios recursos en un sitio web puedan ser solicitados desde otro dominio fuera del domino en donde la llamada fue solicitada.

### Documentación:

  - Documentación [Flickr](https://www.flickr.com/services/api/flickr.photos.search.html)
  - Documentación [Wikipedia](https://www.mediawiki.org/wiki/API:Main_page)
  - Documentación [OpenWeather](http://openweathermap.org/api)
  - Documentación [GoogleMaps](https://developers.google.com/maps/documentation/javascript/)

### Actividad:

En el documento **main.scala(2).html** de este repositorio se encuentra un Mashup en donde se han implementado algunos **servicios Web** desarrollados por terceros, **Google**, **Flickr**, **OpenWeather**, etc. El objetivo de la práctica es integrar los  servicios Web que ya desarrollaste en esta aplicación:

  - Utilizando **los servicios Web** previamente desarrollados en la actividad anterior, la nueva aplicación deberá:
    - **Mostrar** la capital al lado del país.

    <img src="http://www.innova4d.mx/wp-content/uploads/2015/04/capital.png" width="50%" height="50%">  

    - **Mostrar** en el mapa la ubicación de la embajada.
    <img src="http://www.innova4d.mx/wp-content/uploads/2015/04/mapWS.png" width="75%" height="75%">  

    - **Mostrar** la temperatura en grados Celsius.

    <img src="http://www.innova4d.mx/wp-content/uploads/2015/04/tempServ.png" width="75%" height="75%">  

    - **Mostrar** fotografías cercanas a la embajada mexicana para cada país.
      - **Revisar** la [documentación de Flickr](https://www.flickr.com/services/api/flickr.photos.search.html) para implementar la API utilizando latitud y longitud (Geolocalización).

    <img src="http://www.innova4d.mx/wp-content/uploads/2015/04/flickrPhotos.png" width="75%" height="75%">  

    - **Explicar** ampliamente en el reporte los pasos seguidos para integrar los servicios.

# <a name="limpieza"></a> Actividad 3 - Limpieza
En el desarrollo de aplicaciones Web es importante mantener un estilo al programar, por esto deberás:
- **Nombrar** adecuadamente las variables y métodos.
- **Agregar** un comentario antes de un método para indicar su funcionamiento.
- **Comentar** las líneas de código que podrían ser no muy claras.
- **Realizar** un identado adecuado del código.
- **Revisar** el código para detectar usos inadecuados de variables ó errores al escribir.

Recordando que el estilo debe ser siguiendo las guías de [Google](https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml) para **JavaScript**.

# <a name="preguntas"></a>Actividad 4 - Preguntas

Responder ampliamente a las siguientes preguntas en el reporte, tomando en cuenta todas las actividades realizadas en este repositorio.
  - ¿Qué es un **Mashup**?
  - ¿Cuál es la diferencia entre **Get** y **Post**?
  - Describe la utilidad de Ajax para llamar **servicios Web**.
  - Explica la utilidad del formato **Json**.
    - Explica la diferencia entre **Json** y **Jsonp**.
  - Explica la **separación de asuntos** en términos de desarrollo Web.
  - ¿Cómo se implementa el **patrón MVC** en **Play**?
    - ¿Qué se hace en el **controlador**?
    - ¿Cómo se implementa la **vista**?
    - ¿Cuál es la utilidad de la carpeta **public** en **Play**?
  - ¿Cómo se implementa la API de Google Maps?
    - ¿Por qué su implementación es diferente?

**Notas:** Explica ampliamente y justifica tus respuestas.

**Cualquier comentario o duda, discutir en la sección de [issues](https://github.com/Innova4DLab/webservices-mashup/issues).**

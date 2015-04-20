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
  - Por el momento deberías ver **errores al compilar la aplicación**, puesto que se encuentra incompleta, continua la actividad para resolver estos problemas.
- **Abrir** la carpeta del proyecto en un editor de su preferencia.

# <a name="analisis"></a>Actividad 1 - Análisis

**WebSocket** es un protocolo que provee canales de  comunicación bidireccional sobre una conexión TCP única. Desde el 2011 el protocolo es un estándar y la API Web está en proceso de estandarizarse por la W3C.

<img src="http://www.innova4d.mx/wp-content/uploads/2015/04/httpsocket.png"/>

Los **WebSockets** utilizan un único canal de comunicación bidireaccinal en donde se asegura una alta velocidad de intercambio de datos en demanda.

La **aplicación** muestra una simple sesión de **chat anónimo**, si abres otro navegador ó una sesión anónima en **Google Chrome** deberías observar una segunda sesión.

### Estructura de la Aplicación

La **aplicación** se encuentra desarrollada en Scala y JavaScript. A continuación se muestra un diagrama con la estructura del proyecto:

<img src="http://www.innova4d.mx/wp-content/uploads/2015/04/estructureApp.png">

La naturaleza de **Play Framework** nos permite mantener un orden en la
estructura de la aplicación. El uso del patrón **Modelo Vista Controlador** es muy claro, puesto que Play separa las características de la **vista** (HTML, CSS), de la implementación de  los **WebSockets**. Cabe mencionar que debido a la naturaleza de Play para desarrollar fácilmente métodos REST a partir del controlador es muy fácil desarrollar servicios como WebSocket. A continuación se muestra la arquitectura de la aplicación.

<img src="http://www.innova4d.mx/wp-content/uploads/2015/04/socket.png">

Ahora que has observado las características de la aplicación, explica el resultado de tu análisis ampliamente en tu reporte.

- **Analizar** la estructura del proyecto en Play Framework.
  - ¿Cuál es el objetivo de la carpeta **App**?
  - ¿Cuál es el objetivo del patrón **Modelo Vista Controlador**?
- **Analizar** la arquitectura Cliente-Servidor del proyecto.
  - **Identificar** el Cliente y explicar su objetivo.
  - **Identificar** el Servidor y explicar su objetivo.

A continuación se listan algunos **plugins** utilizados en este proyecto, que no son explotados en su totalidad pero son interesantes de analizar y considerar para futuros desarrollos:

- **Coffee Script** es un lenguaje que compila a **JavaScript** utilizando un precompilador, es decir, antes de compilar la aplicación un precompilador compila los archivos .coffee y devuelve un **JavaScript**. Coffee Script permite agregar características que serían difíciles de implementar en JavaScript, dichas características están inspiradas en Ruby, Python y Haskell.

- **Less** es un lenguaje que compila a CSS utilizando un precompilador. Less agrega muchas características a CSS, como el uso de variables, funciones, operadores, entro otros. Less permite agregar dinamismo al desarrollo de código CSS, permite la reutilización de código y agrega un poco de orden al código CSS.

- **Bootstrap** es un framework para el front-end, es una colección de herramientas para desarrollar sitios Web responsivos (tanto para dispositivos móviles como para escritorio). Bootstrap incluye templates en HTML y CSS para agregar componentes, como botones, formularios, tipografías y componentes de navegación que pueden utilizarse instantáneamente.

# <a name="desarrollo"></a>Actividad 2 - Desarrollo

Ahora que hemos analizado y comprendido la estructura de la aplicación

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

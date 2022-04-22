# Enlace del proyecto en Github Pages 

Este proyecto se encuentra alojado en (https://wilo96.github.io/FrontendAPI).

## Solución 

Se generó una página que presenta principalmente los personajes consumidos de la API, cada Imagen es un Link de paso a un detalle de la misma, el texto de Rick & Morty es un botón que regresa a la vista principal, las pantallas son responsivas, posee una paginación en el Footer que muestra los distintos personajes de la API, contiene un cuadro de Search que permite buscar al personaje deseado que cumpla con contener la letra o palabra escrita en el cuadro de Search. 

## Arquitectura

Por medio de la herramienta React se realizó un proyecto usando fetch para el consumo de la api gratuita.

Esta dividido todo en carpetas que generan un mejor orden para el manejo de los componentes, se a generado modulos de CSS para un diseño dedicado a los objetos de interes y se tiene un documento llamado App.scss con un estilo global del proyecto en aspectos generales.

Se a generado dos rutas, la primera es la ruta general de visualizacion total y la segunda es la ruta dedicada al detalle de un personaje, cada una con su respectivo enrutamiento como se lo podrá observar en el archivo App.jsx donde se tiene en breves rasgos la estructura y entutamiento inicial del proyecto, se a utilizaso la extensión .jsx ya que en react tiene mejor adaptación.

En la carpeta src se encuentra el contenido por carpetas:

### components

Contiene tres archivos principales como son Persona que contiene la estructura para mostrar la imagen y descripción en la vista global, Search que contiene el componente de búsqueda y Spinner que se presenta mientras se esta cargando las imágenes.

Cada uno tiene un modulo CSS que genera en tema de imágenes una opacidad al posicionar un puntero sobre estas y con el uso de los @media se genera que las mismas sean escalables en torno al tamaño de la pantalla que se muestra haciendo responsivo a dispositivos móviles. Al componente Search se generó un estilo con un focus verde al seleccionarlo y a su vez un estilo combinado entre cuandro de texto y boton de búsqueda. Al Spinner se le dio una animación de rotación mientras se cargan las páginas.

### Grid

Contiene el consumo a la API de forma global o por medio de la búsqueda en el cuadro Search, se tiene dos métodos useEffect, en el primero se genera un cambio en la muestra cuando se realiza una búsqueda cambiando la ruta de la misma a una forma general o enviando el parámetro del personaje a buscar para mostrarlo posteriormente en la vista a detalle, en el segundo useEffect se manda a mostrar los personajes de acuerdo al cambio que se tenga en sus items al recibir el llamado de la paginación.

Este tiene un objeto styles que se llama de un modulo CSS en donde se le indica que todo el display es de formato grid y se auto rellena las columnas acorde al espacio que tenga en su pantalla, posterior usando los @media se generó una condicion indicando que si la vista es menor a una cantidad de pixeles establecidos, las proporciones de la imagen y su textop cambiarian a ocupar la pantalla completa, haciendo de esta manera responsibo a dispositivos móviles.

Aquí se utilizó un Hook que proviene de la carpeta Hooks llamado useQuery, lo que permite obtener la locación actual de la URL y obtener el parámetro enviado en este caso es ?name lo que permite consumir el API de busqueda individual.

### pages

Aquí se encuentra dos páginas tanto la principal donde esta englobado la paginación y el Grid de imágenes, como la página del detalle del personaje seleccionado.

En el archivo PersonajeDetalle se llamó al consumo de la API pasando el parámetro del ID con el uso del método useParam, se genera un estilo de display en flex para mostrar el contenido de Imagen junto al texto, generando un corte en el flex a manera de mostrar uno a bajo del otro en caso de que el tamaño de la pantalla sea reducido y por medio de los @media se genera una responsividad en el tamaño del texto e imagen mostrado.

### Página Principal

**Paginación**

Con el uso de react-paginate se establece un objeto ReactPaginate en el pie de página, se carga los items a mostrar y se pasa de parámetro el número de página para consumir el API que mostrará los personajes según sea el caso donde tras la primera carga mostrará la página 1, posterior se alterará la misma indicando los otems de cada página según corresponda, esto se aprecia en el useEffect principal, posterior se consume el api con la nueva página y se pasa de parámetros estos nuevos items a la página Grid para ser mostrado ahí.

### SCSS

Son páginas de estilo independietes para ciertos elementos y variables.

### Utils

Aquí se consume el API para busquedas generales o específicas, retornando un json que será mapeado en el Grid o Detalle de los personajes.

### Enfoque, Metodología y Mejoras

El enfoque está basado en una vista atractiva para el usuario, un estilo minimalista que cumpla con lo funcional pero que genere agrado en el impacto visual, se utilizó un fondo negro generando de esta manera una menor perturbación luminosa en cuando al brillo de pantalla siendo un fondo blanco en lo contrario, se optó por letras blancas dando un mejor realce y contraste al texto, se jugó con colores propios de las imágenes como son el verde para dar unos shadows tanto al texto como al objeto Search. Se utilizó una metodología Incremental ya que se puede generar actualizaciones de este proyecto y mejoras. Entre las mejoras se realizaria un cuadro de sugerencias para la búsqueda, se implementaria una busqueda más rapida a través del teclado, se mejoraria apariencia y funcionalidad de la paginación ya que al no encontrar el personaje escrito la API retornaba un String causando un error en el mapeo del json, razón por la cual se generó un seteo del mismo objeto en caso de no entontrar resultados mostrando de esta manera una busqueda infinita.

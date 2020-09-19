
# ¿Cómo repensar el desarrollo web usando React? 

#### Un tutorial para entender cómo idear y desarrollar ideas utilizando React

> “We’re all optimists in our profession or we’d be forced to shoot ourselves." Joshua Bloch

## Introducción 

Año tras año, la comunidad web ha ganado adeptos y aunque esto no es ninguna ciencia, hoy por hoy ingresar al mundo del desarrollo web nunca fue tan fácil (y tan complejo a la vez). La idea fundamental de este tutorial no es enseñar a crear sino a pensar para que ustedes puedan luego, crear.

En términos de decisiones y técnicas, nunca fue tan difícil elegir una que se adapte a los que busquemos realmente, sin antes encontrar veinte alternativas similares que a primera vista, se adaptan a lo que buscábamos desde un principio, pero sin antes dar el paso en falso: debemos entender que cada una existe producto de una problemática ajena a nuestra realidad. Es por eso que uno debe interpretar primero dónde está parado para luego comenzar a desarrollar una idea y convertirla en realidad. Cada vez más en el mundo del desarrollo, muchos ante la primera distracción, desvían la atención de lo que vale la pena realmente. 

Desde la idea hasta la materialización del producto, se pierde el objetivo principal y éste se ve reemplazado por un híbrido entre: el mejor entorno de desarrollo que se pueda encontrar, la decisión sobre ¿cuál es el mejor? y el terminar de entender el ¿por qué? de nuestra idea. 

Muchas preguntas para una persona que recién empieza y quiere arrancar con el desarrollo web. Es por eso que escribo este artículo, para aquellos que buscan arrancar a desarrollar pero no saben bien por donde o esas personas que se sienten abrumadas (cómo me sucedió a mí) por la cantidad de información dando vueltas por la Internet (además del sesgo que existe dependiendo de qué páginas uno visite regularmente). 

Sin más preámbulos, comencemos... 

## Requisitos
Para seguir este tutorial vamos a necesitar, antes que nada:

 - [x] Lápiz y Papel
 - [x] Editor de texto preferido (En mi caso, usare Visual Studio Code)
 - [x] Node.JS instalador (Mostraremos cómo instalarlo en el anexo)
 - [x] Conocimientos sobre lenguajes OOP
 - [x] Conocimientos sobre Modelado de Entidades 
 - [x] Conocimientos básicos sobre computación 

## ¿Comenzar? Enseñar a diseñar
Primero que nada hay que tener en claro dos cosas y en el camino, desmentir mitos comunes:

**Programar es una tarea relativamente sencilla**

En cuanto a programar respecta, tenemos que entender y dejar de verlo con miedo dado que no es una tarea compleja si estamos hablando de desarrollar una aplicación web. Prácticamente toda la información que necesitamos, ya existe y es cuestión de búsquedas certeras para encontrar lo que buscamos. Un ejercicio mental, bastante divertido de hecho, es intentar desarrollar una aplicación sin arrojar ninguna línea de código a la computadora. Van a encontrar que es más plausible de lo que pensamos y prácticamente las tendencias de los últimos tiempos con herramientas cómo GTP-3 (sus aplicaciones), Figma, InVision, etc, giran entorno a proveer al usuario una manera visual o descriptiva de desarrollar lo que tenemos en mente. Comenzar desde un boceto o una descripción de la funcionalidad que buscamos y obtener una interfaz funcional ya no es más ciencia oscura y estás aplicaciones comentadas hasta pueden obtener el código resultante partiendo de estas bases. 

**Idear y diseñar de inicio a fin, una aplicación, es una tarea monumental**

Acá es donde la automatización comienza a caerse a pedazos. Ninguna máquina puede entender lo que pensamos con la misma claridad e interpretación. La capacidad de entender lo que las personas quieren es lo que nos diferencia de las computadoras y es por eso que nuestro trabajo no es programar sino diseñar soluciones que nos faciliten la vida un poco más que ayer. 

## Sobre tutoriales y documentación

> “Nobody ever figures out what life is all about, and it doesn't
> matter. Explore the world. Nearly everything is really interesting if
> you go into it deeply enough.”
> **Richard Feynman**

Muchas veces, uno se confunde entre el ir y venir de paginas en una documentación obscura que poco aporta a nuestra causa por lo que elige seguir un tutorial y entender como una persona, paso por paso, nos explica como realizar lo que buscamos hacer. El problema con esto es el siguiente: **Seguir pasos no ayuda demasiado si estas arrancando** ya que nos pone en un lugar de comodidad donde creemos y normalizamos que las cosas se hacen de una manera, siguiendo un recetario de pasos, donde de saltarnos uno no podemos volver y completar lo que buscamos. 

Ojo, con esto no quiero decir que los tutoriales guiados no ayudan, ayudan, el único problema es que normalizan la ayuda. Es por eso que para leer documentación tenemos que sentarnos frente a la pantalla de nuestro ordenador, dentro de la pagina de documentación de nuestra herramienta elegida y perder una hora entendiendo la estructura de lo que estamos por usar para construir lo que buscamos. 

Sucede que uno busca un tutorial especifico de algo especifico y luego intentar cambiar eso es casi utópico por lo que terminamos atados a estructuras prestadas, perdiendo tiempo modificando cosas que desde el momento cero estuvieron pensadas para un problema distinto.

Los tutoriales son útiles, no crean que no, pero para entender el potencial de una herramienta y no para generar código util listo para producción. **Es por eso que en este tutorial no vamos a seguir pasos sino consejos, útiles para aquellos que están arrancando a decidir que utilizar para construir sus ideas.** 

## Elegir luego emprender
Herramientas, estilos, patrones, diferencias las hay. El problema, la mayoría de las veces es elegir mal y terminar adaptando lo que hacemos en función de la herramienta que tenemos. Más allá de limitaciones técnicas, es interesante entender que cuando nuestros problemas están siendo modificados y acotados constantemente por las herramientas que elegimos para solucionarlos, claramente estamos ante la clara mala elección de la herramienta. 

Entender el **como** es una lucha constante entre la *herramienta que usamos y la teoría agnóstica* y aplicar justamente este "**como hacerlo**" a nuestro problema y convertirlo en una solución util es un tema complejo. Es por eso que para este tutorial, voy a presentar un caso de uso acotado, un **problema** con su respectiva **solución**, para que podamos entender el **como** y el **por que** de React como librería desarrollo web.

## Caso de Ejemplo

El sistema que vamos a proponer diseñar en este tutorial esta basado en un pequeño sistema informático, capaz de actualizar currículos de estudio para así mantener sincronizadas a las demás escuelas y que de esta manera, los alumnos puedan consultarlas y aferrarse de un camino de estudio al que seguir, sin necesidad de asistir a una escuela en especifica.

**Nota**: Recomiendo fervientemente que diseñen su propio modelo de datos, sin aferrarse al que usaremos en este tutorial, para poner en practica el razonamiento más allá de la compresión de texto. 

Teniendo en cuenta el caso de estudio de arriba, podemos inferir que existen cuatro entidades en nuestro sistema:

 1. Curricula
 2. Alumno
 3. Profesor
 4. Escuela

Donde, representado en forma de diagrama, obtenemos:

![Imagen 1](imagen_diagrama_1.png)

Obviamente estamos simplificando la situación y llevándola a lo ideal, donde no existen mas relaciones que las existentes en el diagrama. 

## Anexo

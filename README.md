

# ¿Cómo pensar el desarrollo web usando React? 

#### Un tutorial para entender cómo idear y desarrollar ideas utilizando React

> Antes de empezar,  este no es un tutorial basado en etapas o pasos
> para obtener un resultado funcional sino que centra la idea las bases
> fundamentales del desarrollo web usando React y proponiendo pequeños
> fragmentos de código para ayudar al lector a la compresión.

## Introducción 

> “We’re all optimists in our profession or we’d be forced to shoot ourselves." Joshua Bloch
> 
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

## ¿Por qué React?
Después de jugar con varias herramientas, desde **Angular** hasta Razor Views de **.NET** no puedo lograr liberarme de la sencillez que me provee React a la hora de conectar: pensamiento con diseño. 

React nos presenta la oportunidad única de olvidarnos de la pregunta ¿Cómo ***hacer esto*** en esta herramienta? y preguntarnos ¿Cómo ***diseñar esto*** usando React?

Un libro muy interesante, orientado al diseño y que les recomiendo para aprender a pensar en el usuario primero es [Design of Everyday Things](https://www.amazon.com/-/es/Don-Norman/dp/0465050654) de Don Norman.

## Caso de Ejemplo

El sistema que vamos a proponer diseñar en este tutorial esta basado en un pequeño sistema informático, capaz de actualizar currículos de estudio para así mantener sincronizadas a las demás escuelas y que de esta manera, los alumnos puedan consultarlas y aferrarse de un camino de estudio al que seguir, sin necesidad de asistir a una escuela en especifica.

**Nota**: Recomiendo fervientemente que diseñen su propio modelo de datos, sin aferrarse al que usaremos en este tutorial, para poner en practica el razonamiento más allá de la compresión de texto. 

Teniendo en cuenta el caso de estudio de arriba, podemos inferir que existen cuatro entidades en nuestro sistema:

 1. Curricula
 2. Alumno
 3. Profesor
 4. Escuela
 
 ![Diagrama de Clases](https://raw.githubusercontent.com/Warkanlock/ComoPensarEnReact/master/imgs/diagrama_entidades.png)

Obviamente estamos simplificando la situación y llevándola a lo ideal, donde no existen mas relaciones que las existentes en el diagrama. 

Luego, convertido a código, podemos obtener las diferentes clases de cada una de las entidades, aunque en este caso nos centraremos solo en una sola (Persona, Alumno) para luego comenzar a explicar el por que de React en este ejemplo

```javascript
export class Persona {
	constructor(DNI, nombre, email){
		this.DNI = DNI,
		this.nombre = nombre,
		this.email = email
	}
}

export class Alumno {
	constructor(persona, GP, profesor){
		this.persona = persona,
		this.GP = GP,
		this.profesor = profesor
	}
}
class 
```

Es importante entender que las clases estructuran como los datos van a ser mostrados, entendidos y manipulados luego en el sistema. Por eso es que muy importante definir bien los esquemas y estructuras que van a tomar nuestros datos. Acá podemos observar que un Alumno básicamente corresponde a una Persona, y quiero que mantengan esa relación en mente, porque vamos a empezar a construir nuestra idea en función de esta relación.

## Pensar en React

**React** (haciendo la vista gorda obviamente a toda la historia del desarrollo web) y su manejo **virtual del DOM**, nuestra herramienta elegida para materializar nuestra idea y convertirla en solución. Si llegaron hasta acá se preguntaran ¿por que diseñamos anteriormente nuestros datos primero? y la respuesta es mas sencilla de lo que parece, simplemente porque diseñar nos ahorra tiempo. Desde el momento cero sabemos como va a ser la forma de nuestra entidad persona, entendemos como Persona y Alumno se comportan y ademas, como si fuera poco, tenemos los datos que estas entidades van a contener dentro de nuestra aplicación. Ahora, ¿Que papel juega React en todo esto?

Según la pagina oficial de la herramienta, 

> React te ayuda a **crear interfaces de usuario** interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación...

Analizando la frase, podemos hacer una inferencia y relacionar nuestros modelos a lo que React entienda e interprete, interfaces. Entonces, tomamos el lápiz y el papel (que estaban como requerimientos) y boceamos lo que vendría a ser lo que la persona observa en la aplicación cuando es un alumno, su perfil y la pagina principal:

##### Pagina de Inicio
![Pagina de Inicio](https://raw.githubusercontent.com/Warkanlock/ComoPensarEnReact/master/imgs/vista_alumno.png?token=ADFY5IDSKSFOPS5R6DUKNA27M2L5A)

##### Perfil de Usuario

![Perfil de Usuario](https://raw.githubusercontent.com/Warkanlock/ComoPensarEnReact/master/imgs/vista_alumno_perfil.png?token=ADFY5IBUXU6L2URTBJA2M227M2L5C)

Ya tenemos la estructura de la aplicación, como se diagramara y como sera la aplicacion para los usuarios finales. Ahora vamos a empezar a desmembrar nuestro boceto y entender varios **conceptos esenciales de React** (a mi parecer, de los mas importantes).

### Componentes
Para comprender realmente como React funciona tenemos que entender que son los componentes, y para eso, que mejor que mostrarlo mediante un ejemplo:

Volviendo a la imagen anterior, la del perfil de usuario del alumno:

Viendo la imagen, les propongo que hagan el ejemplo mental de dividir por funcionalidades la imagen, es decir, dividir por bloques cada parte de la imagen y entender que corresponde a que en cuanto a funcionalidades. 

React posee la simpleza de poder "separar" contenidos visuales y traspasarlos fácilmente a código.

Comenzamos con la **vista general del perfil** y como podemos observar, hay una division lógica entre el encabezado de la pagina, la navegación y lo que respecta a la información del alumno

Ahora, imagínense como si estuviéramos observando el boceto, pero por capas, la primer capa, llamemos capa cero, representa un vistazo general del boceto, la division de funcionalidades mas superficial que engloba las funcionalidades similares. Ahora, observando la imagen, podemos ver que tenemos claramente dos nuevas divisiones: **PerfilUsuario** y **Navegación** (los nombres deben ser consistentes con las funcionalidades que se engloban para aumentar escalabilidad y mantenimiento de código). 

Perfecto, iterando sobre las divisiones, independientemente una de la otra, obtenemos cada vez mas partes en cuestión pertenecientes a estas partes lógicas de la aplicación. Obteniendo así una estructura en árbol como la siguiente

```json
Usuario {
	PerfilUsuario : [
		DatosUsuario,
		ImagenUsuario
	],
	Navegacion : [
		Encabezado : [
			Logo
		],
		Menu
	]
}
```

Este ejercicio de iterar sobe ele diseño se puede realizar una y otra vez, siguiendo el pseudocodigo:

```
1. dividir funcionalidades logicas
2. nombrar la totalidad de divisiones con un nombre descriptivo
3. tomar un objeto, evaluar si hay divisiones para hacer:
	2.1 si las hay, volver al paso 1 con el objeto como un todo y comenzar desde cero
	2.2 si no las hay, considerar el componente como un todo
4. si no hay mas elementos, terminar de dividir
```

Una vez que finalizamos la division de lógica dentro de nuestra vista, procedemos a crear los componentes, tal cual se representan en el árbol.

> En este tutorial utilizaremos la nueva nomenclatura de
> componentes de React 16

Por lo que obtenemos, a modo de ejemplo:

```javascript
import React from 'react';
import Navegacion from './src/components/Navegacion';
import PerfilUsuario from './src/components/PerfilUsuario';

const VistaPerfil = () => {
	return (
		<>
			<Navegacion></Navegacion>
			<PerfilUsuario></PerfilUsuario>
		</>
	);
}; 

export default PerfilUsuario;
```

### Propiedades


### Estados


Espero que este tutorial no haya sido un tutorial mas de una larga lista de tutoriales sino algo que puedas entender con gusto y compartir a aquellas personas que intentan entender el flujo de information de estos días y largarse a desarrollar algo por su cuenta. El conocimiento por suerte, y hasta ahora, se comparte.

Gracias por leer,
Ignacio

## Anexo

### Como instalar Node.JS
1. Ingresar al [sitio de Node.JS](https://nodejs.org/es/download/) y descargan cualquier version estable (LTS) del entorno Node.JS. 
> Para los que no saben, Node es un entorno de ejecución, en el cual nos permite correr JavaScript fuera del contexto de un navegador. Esta basado en el motor de Javascript V8 diseñado por Google 

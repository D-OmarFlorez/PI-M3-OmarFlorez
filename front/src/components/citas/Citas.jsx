import React from "react"
import Cita from "./citas.css"
const Citas = [  
    {
      cita: "Todos los cambios, aun los más ansiados, llevan consigo cierta melancolía.",
      autor: "Anatole France",
      palabrasClave: ["cambio", "melancolía"]
    },
    {
      cita: "Si algo he aprendido en la vida es a no perder el tiempo intentando cambiar el modo de ser del prójimo.",
      autor: "Carmen Martín Gaite",
      palabrasClave: ["cambio"]
    },
    {
      cita: "Todos piensan en cambiar el mundo, pero nadie piensa en cambiarse a sí mismo.",
      autor: "Alexei Tolstoi",
      palabrasClave: ["cambio"]
    },
    {
      cita: "Cuando no se puede lograr lo que se quiere, mejor cambiar de actitud.",
      autor: "Terencio",
      palabrasClave: ["cambio", "actitud"]
    },
    {
      cita: "Las masas humanas más peligrosas son aquellas en cuyas venas ha sido inyectado el veneno del miedo.... del miedo al cambio.",
      autor: "Octavio Paz",
      palabrasClave: ["miedo", "cambio", "multitud"]
    },
    {
      cita: "Si queremos que todo siga como está, es necesario que todo cambie.",
      autor: "Giuseppe Tomasi di Lampedusa",
      palabrasClave: ["cambio"]
    },
    {
      cita: "Las personas cambian cuando se dan cuenta del potencial que tienen para cambiar las cosas.",
      autor: "Paulo Coelho",
      palabrasClave: ["cambio"]
    },
    {
      cita: "En un mundo superior puede ser de otra manera, pero aquí abajo, vivir es cambiar y ser perfecto es haber cambiado muchas veces.",
      autor: "John H. Newman",
      palabrasClave: ["perfección", "cambio"]
    },
    {
      cita: "Las cosas no cambian; cambiamos nosotros.",
      autor: "Henry David Thoreau",
      palabrasClave: ["cambio"]
    },
    {
      cita: "Si quieres cambiar al mundo, cámbiate a ti mismo.",
      autor: "Mahatma Gandhi",
      palabrasClave: ["cambio"]
    },
    {
      cita: "¿Por qué se ha de temer a los cambios? Toda la vida es un cambio. ¿Por qué hemos de temerle?",
      autor: "George Herbert",
      palabrasClave: ["cambio"]
    },
    {
      cita: "Al fin y al cabo, somos lo que hacemos para cambiar lo que somos.",
      autor: "Eduardo Galeano",
      palabrasClave: ["cambio"]
    },
    {
      cita: "No cambies la salud por la riqueza, ni la libertad por el poder.",
      autor: "Benjamin Franklin",
      palabrasClave: ["cambio"]
    },
    {
      cita: "Discúlpeme, no le había reconocido: he cambiado mucho.",
      autor: "Oscar Wilde",
      palabrasClave: ["cambio"]
    },
    {
      cita: "Si existiera algo que quisiéramos cambiar en los chicos, en primer lugar deberíamos examinarlo y observar si no es algo que podría ser mejor cambiar en nosotros mismos.",
      autor: "Carl Gustav Jung",
      palabrasClave: ["educación", "cambio"]
    },
    {
      cita: "Todo cambia nada es.",
      autor: "Heráclito de Efeso",
      palabrasClave: ["cambio"]
    },
    {
      cita: "Nadie puede ser esclavo de su identidad: cuando surge una posibilidad de cambio, hay que cambiar.",
      autor: "Elliot Gould",
      palabrasClave: ["cambio", "identidad"]
    },
    {
      cita: "Aunque estoy convencido de que nada cambia, para mí es importante actuar como si no lo supiera.",
      autor: "Leonard Cohen",
      palabrasClave: ["cambio"]
    },
    {
      cita: "Nadie se baña en el río dos veces porque todo cambia en el río y en el que se baña.",
      autor: "Heráclito de Efeso",
      palabrasClave: ["cambio"]
    },
    {
      cita: "Sólo la renovación puede mantener, el que se queda parado, se retrasa.",
      autor: "Everhardus Johannes Potgieter",
      palabrasClave: ["cambio"]
    },
    {
      cita: "No tenemos otro mundo al que podernos mudar.",
      autor: "Gabriel García Márquez",
      palabrasClave: ["cambio"]
    },
    {
      cita: "La diferencia entre un esclavo y un ciudadano es que el ciudadano puede preguntarse por su vida y cambiarla.",
      autor: "Alejandro Gándara",
      palabrasClave: ["cambio", "esclavos", "ciudadanos"]
    },
    {
      cita: "Las personas cambian y generalmente se olvidan de comunicar dicho cambio a los demás.",
      autor: "Lilliam Hellman",
      palabrasClave: ["cambio"]
    },
    {
      cita: "Es improcedente hablar de reforma sin hacer referencia a la forma.",
      autor: "Gilbert Keith Chesterton",
      palabrasClave: ["cambio"]
    },
    {
        cita: "No puede impedirse el viento. Pero pueden construirse molinos.",
        autor: "Proverbio holandés",
        palabrasClave: ["viento", "molinos"]
      },
      {
        cita: "Aceptar nuestra vulnerabilidad en lugar de tratar de ocultarla es la mejor manera de adaptarse a la realidad.",
        autor: "David Viscott (1938-1996) Psiquiatra y escritor estadounidense.",
        palabrasClave: ["vulnerabilidad", "realidad", "adaptación"]
      },
      {
        cita: "A los elefantes les cuesta mucho adaptarse, las cucarachas sobreviven a todo.",
        autor: "Peter Drucker (1909-2005) Escritor y consultor austriaco.",
        palabrasClave: ["elefantes", "cucarachas", "adaptación"]
      },
      {
        cita: "Con los zorros hay que ser un poco zorro.",
        autor: "Thomas Fuller (1610-1661) Clérigo y escritor británico.",
        palabrasClave: ["zorros", "astucia", "adaptación"]
      },
      {
        cita: "Opino con los romanos de antaño que el general de hoy debe ser mañana, si es necesario, soldado raso.",
        autor: "Thomas Jefferson (1743-1826) Político Estadounidense.",
        palabrasClave: ["romanos", "general", "soldado", "adaptación"]
      },
      {
        cita: "Hay dos cosas infinitas: el Universo y la estupidez humana. Y del Universo no estoy seguro.",
        autor: "Albert Einstein (1879-1955) Científico alemán nacionalizado estadounidense.",
        palabrasClave: ["Universo", "estupidez"]
      },
      {
        cita: "Nadie está libre de decir estupideces, lo malo es decirlas con énfasis.",
        autor: "Michel de Montaigne (1533-1592) Escritor y filósofo francés.",
        palabrasClave: ["estupideces"]
      },
      {
        cita: "Nada en el mundo es más peligroso que la ignorancia sincera y la estupidez concienzuda.",
        autor: "Martin Luther King (1929-1968) Religioso estadounidense.",
        palabrasClave: ["ignorancia", "estupidez"]
      },
      {
        cita: "Todos los cerebros del mundo son impotentes contra cualquier estupidez que esté de moda.",
        autor: "Jean de La Fontaine (1621-1695) Escritor y poeta francés.",
        palabrasClave: ["cerebros", "estupidez"]
      },
      {
        cita: "Una mujer amablemente estúpida es una bendición del cielo.",
        autor: "Voltaire (1694-1778) Filósofo y escritor francés.",
        palabrasClave: ["mujer", "estúpida"]
      },
      {
        cita: "Todos los que parecen estúpidos, lo son y, además también lo son la mitad de los que no lo parecen.",
        autor: "Francisco de Quevedo (1580-1645) Escritor español.",
        palabrasClave: ["estúpidos"]
      },
      {
        cita: "Estupidez humana. Humana sobra, realmente los únicos estúpidos son los hombres.",
        autor: "Jules Renard (1864-1910) Escritor y dramaturgo francés.",
        palabrasClave: ["estupidez", "hombres"]
      },
      {
        cita: "Contra la estupidez, hasta los dioses luchan en vano.",
        autor: "Goethe (1749-1832) Poeta y dramaturgo alemán.",
        palabrasClave: ["estupidez", "dioses"]
      },
      {
        cita: "La estupidez insiste siempre.",
        autor: "Albert Camus (1913-1960) Escritor francés.",
        palabrasClave: ["estupidez"]
      },
      {
        cita: "El mundo atribuye sus infortunios a las conspiraciones y maquinaciones de grandes malvados. Entiendo que se subestima la estupidez.",
        autor: "Adolfo Bioy Casares (1914-1999) Escritor argentino.",
        palabrasClave: ["mundo", "infortunios", "estupidez"]
      },
      {
        cita: "Es solo por su estupidez que algunos pueden estar tan seguros de sí mismos.",
        autor: "Franz Kafka (1883-1924) Escritor checoslovaco.",
        palabrasClave: ["estupidez", "seguros"]
      },
      {
        cita: "El hombre más irremediablemente estúpido es aquel que ignora su sabiduría.",
        autor: "Isaac Asimov (1920-1992) Escritor y bioquímico estadounidense.",
        palabrasClave: ["hombre", "estúpido", "sabiduría"]
      },
      {
        cita: "La estupidez real siempre vence a la inteligencia artificial.",
        autor: "Terry Pratchett (1948-2015) Escritor británico.",
        palabrasClave: ["estupidez", "inteligencia artificial"]
      },
      {
        cita: "La estupidez humana es la única cosa que nos da una idea del infinito.",
        autor: "Ernest Renan (1823-1892) Escritor francés.",
        palabrasClave: ["estupidez", "infinito"]
      },
      {
        cita: "Has atribuido a la villanía condiciones que resultan simplemente de la estupidez.",
        autor: "Robert Heinlen (1907-1988) Escritor estadounidense.",
        palabrasClave: ["villanía", "estupidez"]
      }
  ];
const citaRandom=(Citas)=>{
const indice = Math.floor(Math.random()*Citas.length)
return Citas[indice];
}
const Aleatorio = ()=>{

const random = citaRandom(Citas);

return(
    <div className="Cita">
        <p>{random.cita}</p>
        <p style={{
            fontFamily:"cursive"
        }}>{random.autor}</p>
    </div>
    )
}
export default Aleatorio;

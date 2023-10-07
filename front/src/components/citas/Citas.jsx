import React from "react"
import Cita from "./citas.css"
const Citas = [  
  {
    cita: "La vida es una obra teatral que no importa cuánto haya durado, sino lo bien que haya sido representada.",
    autor: "Séneca",
    palabrasClave: ["vida", "obra teatral", "representación"]
  },
  {
    cita: "Elige un trabajo que ames, y no tendrás que trabajar un solo día de tu vida.",
    autor: "Confucio",
    palabrasClave: ["trabajo", "amor", "no trabajar"]
  },
  {
    cita: "Nuestra mayor gloria no es no caer nunca, sino levantarnos cada vez que caemos.",
    autor: "Confucio",
    palabrasClave: ["gloria", "caer", "levantarse"]
  },
  {
    cita: "No hagas a los otros lo que no te gustaría que te hicieran a ti.",
    autor: "Confucio",
    palabrasClave: ["otros", "no hacer", "gustar"]
  },
  {
    cita: "Si das pescado a un hombre hambriento lo nutrirás durante una jornada. Si le enseñas a pescar, le nutrirás toda su vida.",
    autor: "Lao-Tsé",
    palabrasClave: ["pescado", "hombre hambriento", "enseñar a pescar"]
  },
  {
    cita: "La victoria más difícil es la victoria sobre uno mismo.",
    autor: "Aristóteles",
    palabrasClave: ["victoria", "uno mismo"]
  },
  {
    cita: "Es sencillo hacer que las cosas sean complicadas, pero es difícil hacer que sean sencillas.",
    autor: "Friedrich Nietzsche",
    palabrasClave: ["sencillez", "complicación"]
  },
  {
    cita: "La peor lucha es la que no se hace.",
    autor: "Karl Marx",
    palabrasClave: ["peor lucha"]
  },
  {
    cita: "La felicidad no brota de la razón, sino de la imaginación.",
    autor: "Immanuel Kant",
    palabrasClave: ["felicidad", "razón", "imaginación"]
  },
  {
    cita: "La experiencia no es lo que te ocurre, es lo que haces con lo que te ocurre.",
    autor: "Aldous Huxley",
    palabrasClave: ["experiencia", "ocurrir", "hacer"]
  },
  {
    cita: "Construimos demasiados muros y no suficientes puentes.",
    autor: "Isaac Newton",
    palabrasClave: ["muros", "puentes", "construcción"]
  },
  {
    cita: "Estar preparado es importante, saber esperar lo es aún más, pero aprovechar el momento adecuado es la clave de la vida.",
    autor: "Arthur Schnitzler",
    palabrasClave: ["preparación", "espera", "oportunidad"]
  },
  {
    cita: "No hay noche, por larga que sea, que no encuentre el día.",
    autor: "William Shakespeare",
    palabrasClave: ["noche", "día", "encuentro"]
  },
  {
    cita: "La mejor manera de librarse de la tentación es caer en ella.",
    autor: "Oscar Wilde",
    palabrasClave: ["tentación", "caer", "liberación"]
  },
  {
    cita: "La vida es una película que vuelve a empezar cada mañana al despertarnos. Olvídate de tus errores, cada día tienes una nueva oportunidad para triunfar y alcanzar la felicidad.",
    autor: "Norkin Gilbert",
    palabrasClave: ["vida", "película", "oportunidad"]
  },
  {
    cita: "En la vida hay algo peor que el fracaso: el no haber intentado nada.",
    autor: "Franklin D. Roosevelt",
    palabrasClave: ["fracaso", "intentar", "nada"]
  },
  {
    cita: "Si tú crees que puedes, puedes. Si tú crees que no puedes, no puedes. Tanto si piensas una cosa como la otra, estás en lo cierto.",
    autor: "Henry Ford",
    palabrasClave: ["creer", "poder", "certeza"]
  },
  {
    cita: "Cuando escuches una voz interior que te dice que no puedes pintar, pinta tanto como puedas y verás cómo se callará.",
    autor: "Vincent Van Gogh",
    palabrasClave: ["voz interior", "pintar", "callar"]
  },
  {
    cita: "Según algunas reveladoras pruebas de técnica aeronáutica, el abejorro no puede volar debido a la forma y el peso de su cuerpo en relación a la superficie de sus alas. Pero el abejorro no lo sabe y por eso continúa volando.",
    autor: "Igor Sikorski",
    palabrasClave: ["abejorro", "volar", "técnica aeronáutica"]
  },
  {
    cita: "El secreto de la existencia humana no solo está en vivir, sino también en saber para qué se vive.",
    autor: "Fiódor Dostoioevski",
    palabrasClave: ["existencia", "vivir", "saber"]
  },
  {
    cita: "Si la oportunidad no llama, construye una puerta.",
    autor: "Milton Berle",
    palabrasClave: ["oportunidad", "llamar", "construir"]
  },
  {
    cita: "La suerte favorece sólo a la mente preparada.",
    autor: "Isaac Asimov",
    palabrasClave: ["suerte", "mente preparada"]
  },
  {
    cita: "Sólo le falta el tiempo a quien no sabe aprovecharlo.",
    autor: "Gaspar Melchor de Jovellanos",
    palabrasClave: ["tiempo", "aprovechar"]
  },
  {
    cita: "Un día sin risa es un día perdido.",
    autor: "Charles Chaplin",
    palabrasClave: ["risa", "día perdido"]
  },
  {
    cita: "Muchas personas no gozan de las pequeñas alegrías, porque esperan la gran felicidad.",
    autor: "Pearl S. Buck",
    palabrasClave: ["alegrías", "felicidad", "esperar"]
  },
  {
    cita: "Aprendí que no se puede dar marcha atrás, que la esencia de la vida es ir hacia adelante.",
    autor: "Agatha Christie",
    palabrasClave: ["marcha atrás", "esencia de la vida", "ir hacia adelante"]
  },
  {
    cita: "El mundo pertenece a los optimistas; los pesimistas son meros espectadores.",
    autor: "Dwight D. Eisenhower",
    palabrasClave: ["mundo", "optimistas", "pesimistas"]
  },
  {
    cita: "La creatividad requiere el coraje de dejar ir las certezas.",
    autor: "Erich Fromm",
    palabrasClave: ["creatividad", "coraje", "dejar ir"]
  },
  {
    cita: "La vida es lo que ocurre mientras estas ocupado haciendo otros planes.",
    autor: "John Lennon",
    palabrasClave: ["vida", "ocurrir", "otros planes"]
  },
  {
    cita: "La inteligencia es la habilidad de adaptarse al cambio.",
    autor: "Stephen Hawking",
    palabrasClave: ["inteligencia", "adaptarse", "cambio"]
  },
  {
    cita: "La inteligencia sin ambición es un pájaro sin alas.",
    autor: "Salvador Dalí",
    palabrasClave: ["inteligencia", "ambición", "pájaro sin alas"]
  },
  {
    cita: "Aquellos que no quieren imitar nada no producirán nada.",
    autor: "Salvador Dalí",
    palabrasClave: ["imitar", "producción"]
  },
  {
    cita: "Tu actitud, no tu aptitud, determinará tu altitud.",
    autor: "Zig Ziglar",
    palabrasClave: ["actitud", "aptitud", "altitud"]
  },  
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

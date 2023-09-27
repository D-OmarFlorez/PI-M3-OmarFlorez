import react, {useState} from 'react';


const About = () => {
const [evento, setEvento]= useState(null);    

const event=[
    {año:2002, estado: 'vivo'}, 
    {año: 2006, trauma:'atropellaron mi perro😢', estado: 'enfermo', },
    {año: 2010, vida :'sin amigos', causa: 'constantes mudanzas', emociones: 'primer beso xd'},
    {año: 2013, mudanza: 'venezuela', trabajo: 'taller mecanico', sueños:'primeros contactos con informatica'},
    {año: 2015, mudanza:'Brasil', estado:' estable', logros: '1° lugar campeonato de volei', metas: 'contacto con la programacion', impedimentos: 'hacienda sin internet'},
    {año:2023, mudanza: 'colombia', estado:'estudiando', metas: 'full stack developer'}
];
    return(
    <div>
        <h1>yo me llamo Omar Florez</h1>
        <h2> nacimiento: colombia</h2>
        {events.map((event, index) =>(
            <div key = {index} onClick ={()=>
            setEvento(event)} 
            style = {{
                cursor: 'url("https://es.cursor.style/cursors/1753-krombopulos-michael-cursor.svg"), pointer'}}>
        
            <h2>{event.año}: {event.estado}</h2>
        </div>
        ))}
        {evento && (
            <div>
                <p>{evento.mudanza}</p>
                <p>{evento.metas}</p>
            </div>
        )}
        
        
        <nav>
            <h1>soy Omar</h1>
        </nav>
        </div>
    )
}

export default About
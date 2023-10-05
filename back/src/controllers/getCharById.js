 const axios = require ("axios")
 const express =require ("express")
const app =express();


    app.use(express.json())

    const getCharById =(response, query)=>{  
   

    if(!NaN(query)){
    axios(`https://rickandmortyapi.com/api/character/${query}`)
    .then(({data})=>{
            const character = {
                id: query,
                name: data.name,
                gender: data.gender, 
                species: data.species,
                origin: data.origin, 
                image: data.image, 
                status: data.status
            } 
           return response
            .writeHead(200,{"Content-Type":"application.json"})
            .end(JSON.stringify(character))
    
        })
                
        .catch((error)=>{
           return response
           .writeHead(500, {"Content-Type":"text/plain"})
           .end(error.message)
        })
    }else{
        axios(`https://rickandmortyapi.com/api/character/?name= ${query}`)
        .then(({data})=>{
            if(data.results && data.results.length > 0){
                const character = {
                    id: data.results[0].id,
                    name: data.results[0].name,
                    gender: data.results[0].gender, 
                    species: data.results[0].species,
                    origin: data.results[0].origin, 
                    image: data.results[0].image, 
                    status: data.results[0].status
                } 
               return response
                .writeHead(200,{"Content-Type":"application.json"})
                .end(JSON.stringify(character))
        
            }else{
                return response
                .writeHead(404, {"Content-Type": "application.json"})
                .end(JSON.stringify({error: "no se encontraron personajes con este nombre"}))
            }
            })  
                    
            .catch((error)=>{
               return response
               .writeHead(500, {"Content-Type":"text/plain"})
               .end(error.message)
            })

    }
    
}
module.exports={
    getCharById,
}
 const axios = require ("axios")
//  const express =require ("express")
// const app =express();


    // app.use(express.json())

    const getCharById =(response, id)=>{  
   
       
    if(!isNaN(id)){
       
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data})=>{
        
        
            const characters = {
                id: id,
                name: data?.name,
                gender: data?.gender, 
                type: data?.type,
                location:data?.location,
                created:data?.created,
                species: data?.species,
                origin: data?.origin, 
                image: data?.image, 
                status: data?.status
            } 
            const character=characters
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
        
        axios(`https://rickandmortyapi.com/api/character/?name=${id}`)
        .then(({data})=>{
            

            if(data.results && data.results.length > 0){
              
                const personaje=  data.results[0]
              const character={
                                    
              
                    id: personaje?.name,
                    name: personaje?.name,
                    gender: personaje?.gender, 
                    species: personaje?.species,
                    type:personaje?.type,
                    origin: personaje.origin?.name,
                    location: personaje.location?.name,
                    created: personaje?.created, 
                    image: personaje?.image, 
                    status: personaje?.status
            
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
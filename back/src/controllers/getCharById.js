const URL=`https://rickandmortyapi.com/api/character/`
const axios = require ('axios')

const getCharById = async(req, res)=>{

    const id= req.params.id;
    const name = req.params.name? req.params.name.toLowerCase() :undefined
    if(!isNaN(id)){
    await axios(URL+id)
    .then(({data})=>{
        const character={
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
        if(character) {res.status(200).json(character)
        }else{
    return res.status(404).send("Not found")
        }
    })
    .catch((error)=>{
        return res.status(500).send(error.message)
    })
}else{
    await axios (URL+req.params.name)
    .then(({data})=>{
        if(data.results && data.results.length > 0){
              
            const personaje=  data.results.find(p=>p.name.tolowercase()===name)
        if(personaje){                    
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

        return res.status(200).json(character)
        }
    }


    return res.status(404).send("Not found")
    })

    .catch((error)=>{
        return res.status(500).send(error.message)
    })
}
}
    module.exports={
        getCharById
    }
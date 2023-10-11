const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = async (req, res) => {
  try {
    const id = req.params.id;
    const name = req.params.name ? req.params.name.toLowerCase() : undefined;

    if (!isNaN(id)) {
      const { data } = await axios(URL + id);

      const character = {
        id: id,
        name: data?.name,
        gender: data?.gender,
        type: data?.type,
        location: data?.location,
        created: data?.created,
        species: data?.species,
        origin: data?.origin,
        image: data?.image,
        status: data?.status,
      };

      if (character) {
        res.status(200).json(character);
      } else {
        return res.status(404).send('Not found');
      }
    } else {
      const { data } = await axios(URL + name)
        
      if (data.results && data.results.length > 0) {
        
        const personaje = data.results.toLowerCase()[0];
        const character = {
          id: personaje?.name,
          name: personaje?.name,
          gender: personaje?.gender,
          species: personaje?.species,
          type: personaje?.type,
          origin: personaje.origin?.name,
          location: personaje.location?.name,
          created: personaje?.created,
          image: personaje?.image,
          status: personaje?.status,
        };

        return res.status(200).json(character);
      }

      return res.status(404).send('Not found');
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getCharById,
};

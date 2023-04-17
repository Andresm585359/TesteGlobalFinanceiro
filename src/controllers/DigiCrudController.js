const Digimon = require('../models/Digimon');
const axios = require('axios');

module.exports = {

    async store(req, res){
        // Fiz essa parte só para salvar no banco 
        // os digimons que estão no link
        axios.get('https://digimon-api.vercel.app/api/digimon')
        .then(function(response) {
          const jsonData = response.data;
        
          for (let i = 0; i < jsonData.length; i++) {
            const instance = jsonData[i];

                if(  Digimon.find(instance.name) == false){
                     Digimon.create(instance);
                };
            };
          })    
      
        return res.json({message : 'done'});
    },



    async detail(req, res){
            
        const { nome } = req.query; 

        const digimon = await Digimon.find({ name: nome });

        return res.json(digimon);
    }
};
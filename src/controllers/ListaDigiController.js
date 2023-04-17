const Digimon = require('../models/Digimon');

module.exports = {

    async search(req, res){
            
        const { name , level } = req.query; 

        let lista = {};
        if (level !== '' && name !== '') {
            lista = { $and: [{ level }, { name }] };
        }   else if (level !== '') {
            lista = { level };
            }   else if (name !== '') {
                lista = { name };
                } 

    
        const list = await Digimon.find(lista);

        return res.json(list);
    },

    async list(_, res){

        const list = await Digimon.find();

        return res.json(list);
    }
};
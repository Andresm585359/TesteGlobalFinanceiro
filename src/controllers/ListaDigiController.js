const Digimon = require('../models/Digimon');

module.exports = {

    async list(req, res){
            
        const { level , name } = req.query; 

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
    }
};
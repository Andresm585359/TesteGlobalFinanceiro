const Digimon = require('../models/Digimon');



module.exports = {
    try:{
        async store(req, res){
            const { name , img , level } = req.body;

            const digimon = await Digimon.create({ name , img , level });

            return res.json(digimon);
        }
    }, catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server Error' });
  }

};
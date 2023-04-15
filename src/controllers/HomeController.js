const express = require('express');
const routes = express.Router();

module.exports = {
    home(_, res){
        return res.json({message: "potato"});
    }
};
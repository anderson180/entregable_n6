const catchError = require('../utils/catchError');
const ProductImg = require('../models/ProductImg');
const path = require('path');
const fs = require('fs')

const getAll = catchError(async(req, res) => {
    const results = await ProductImg.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const { filename } = req.file
    const imageDB = await ProductImg.findOne({ where: {
        filename
    }})

    if (imageDB) return res.sendStatus(404)
        
    const url = `${req.protocol}://${req.headers.host}/uploads/${filename}`
    const result = await ProductImg.create({filename, url});
    return res.status(201).json(result);
});

//__dirname -> Ruta absoluta, nos da el directorio exacto desde la rais de un archivo
//Ejemplo: '../controllers/productImg.controllers' => Rula relativa
//Ejemplo: 'C:/Users/javie/node/week2/entregable-n6/src/controllers/productImg.controllers' => Ruta absoluta

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await ProductImg.findByPk(id)
    if(!result) return res.sendStatus(404);
    
    //__dirname => nos lleva a src debemos completar
    //public
    //uploads
    //archivo
    const imageFilePath = path.join(__dirname, '..', 'public', 'uploads', result.filename)

fs.unlinkSync(imageFilePath)//> traigo el archivo
await result.destroy()//>Y se elimina

    return res.sendStatus(204);
});

module.exports = {
    getAll,
    create,
    remove
}
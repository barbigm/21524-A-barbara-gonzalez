// const router = require('express').Router();

const { Router } = require('express');
const { getPosts, newPost, updatePost, deletePost } = require('../controllers/blog.controllers');
const Publicacion = require('../models/Publicaciones');
const router = Router()

// =====================================
//      RUTAS PARA RENDERIZAR VISTAS
// =====================================

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/admin', (req, res) => {
    res.render('admin')
})


// =====================================
//      RUTAS PARA MANEJAR DATOS
// =====================================

router.get('/publicaciones', getPosts)

router.post('/publicacion', newPost)

router.put('/publicacion/:id', updatePost)

router.delete('/publicacion/:id', deletePost)

/* Creacion de cada ruta sin el archico controllers
router.post('/publicacion', async (res, req) => {
    const { titulo, detalle , url_imagen, fecha_publicacion} = req.body;
   
    try {
        const publicacion = await Publicacion.create({
            titulo, detalle , url_imagen, fecha_publicacion 
        });
    
        res.send({ msg: "Se ha creado la publicación con éxito"}, publicacion)
    } catch (error) {
        //console.log(error);
        return res.statusCode(500).json({
            msg: "Error al crear la publicación"
        })
    }

    res.send({ msg: "Se ha creado la publicacion con exito"})
})

router.get('/publicaciones', async(res, req) => {
    try {
        const publicaciones = await Publicacion.findAll();
        return res.json(publicaciones)
    } catch (error) {
        //console.log(error);
        return res.statusCode(500).json({
          msg: "Error al consultar las publicaciones"
            
        })
    }

} )

router.put('/publicacion/:id', async (res, req) => {
    try {
        const publicacionid = await Publicacion.update();
        return res.json(publicacionid)
    } catch (error) {
        //console.log(error);
        return res.statusCode(500).json({
          msg: "Error al actualizar publicación"
            
        })
    }
})*/
 
module.exports = router;
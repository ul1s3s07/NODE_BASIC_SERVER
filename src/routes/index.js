//Enrutador de express

const { Router } = require('express');

//Ejecuta Router

const router = Router();

//routes

router.get('/test', (req, res) => {
    const data = {
        'name': 'ulises',
        'website': 'algo.com'
    };
    res.json(data);
});


//Exporta el modulo de router (para poder crear rutas desde otro archivo)

module.exports = router;
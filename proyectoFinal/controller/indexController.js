let buzos = require ("../data/data");
const { json } = require ('express');  


let indexController = { 
    index : function(req, res) {
        return res.render ('index', {buzos_buzos: buzos.lista})
    },

    search: function(req, res) {
        let search = req.query.searchResults

        let result = []
        for ( let i = 0; i < buzos.lista.length; i++) {
            var marcaModelo = buzos.lista[i].marca.toLowerCase() + ' ' + buzos.lista[i].modelo.toLowerCase() + ' ' 
            var marca = buzos.lista[i].marca.toLowerCase() + ' ' 
            if(buzos.lista[i].marca.toLowerCase().includes(search.toLowerCase()) || buzos.lista[i].modelo.toLowerCase().includes(search.toLowerCase())){
                result.push(buzos.lista[i])
            }
            else if(marcaModelo.includes(search.toLowerCase()) || marca.includes(search.toLowerCase())){
                result.push(buzos.lista[i])
            }
        }
        return res.render('search', {resultadoSearch: result, buzos_buzos: buzos.lista, parametroSearch: search})
    },
    


};
    module.exports = indexController;
    
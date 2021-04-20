let buzos = require ("../data/data");
const { json } = require ('express') 



let indexController = { 
    index : function(req, res) {
        return res.render ('index', {buzos_buzos: buzos.lista})
    },

    search: function(req, res) {
        return res.render('search', {buzos_buzos: buzos.lista})
    },
    
};


module.exports = indexController;
    
let buzos = require ("../data/data");

let productsController = {
    product : function(req, res) {
        let id = req.params.id 
        return res.render ('product', {buzos_buzos: buzos.lista, idSearch:id})
    },

    productAdd: function(req, res) {
        return res.render ('productAdd', {buzos_buzos: buzos.lista})
    },

    allProducts: function(req, res) {
        return res.render ('allProducts', {buzos_buzos: buzos.lista})
    },

}

module.exports = productsController;
    
let buzos = require ("../data/data");

let productsController = {
    product : function(req, res) {
        let id = req.params.id
        return res.render ('product', {producto: buzos.lista, idSearch: id, usuario: buzos.usuario})
    },

    productAdd: function(req, res) {
        return res.render ('productAdd', {producto: buzos.lista})
    },

}

module.exports = productsController;
    
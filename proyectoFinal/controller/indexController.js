const express = require('express');

let indexController = { 
    index : function(req, res) {
        res.render ('index.ejs')
    },

    headerLogueado: function(req, res) {
        res.render ('headerLogueado.ejs')
    },

    search: function(req, res) {
        res.render ('search.ejs')
    },
    } ;

    module.exports = indexController;
    
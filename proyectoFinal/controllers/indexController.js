const express = require('express');


let indexController = { 
    index : function(req, res) {
        res.render ('index.ejs')
    },

    login: function(req, res) {
        res.render ('login.ejs')
    },

    headerLogueado: function(req, res) {
        res.render ('headerLogueado.ejs')
    },

    product: function(req, res) {
        res.render ('product.ejs')
    },

    productAdd: function(req, res) {
        res.render ('productAdd.ejs')
    },

    profile : function(req, res) {
        res.render ('profile.ejs')
    },

    profileEdit: function(req, res) {
        res.render ('profileEdit.ejs')
    },

    register: function(req, res) {
        res.render ('register.ejs')
    },

    search: function(req, res) {
        res.render ('search.ejs')
    },
    } ;

    module.exports = indexController;
    
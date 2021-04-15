const express = require('express');

let usersController = {
    login: function(req, res) {
        res.render ('login.ejs')
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
}

module.exports = usersController;
    
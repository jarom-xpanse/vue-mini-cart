import Vue from "vue"
window.Vue = Vue;

let axios = require('axios');
window.axios = axios;


// let jQuery = require('jquery');
// window.jQuery = window.$ = jQuery;


// window.Noty = require('noty');


// javascript modules
// require('./modules/header.js')

window.onload = init;

function init() {
    require('./components/ProductForm.js');
}
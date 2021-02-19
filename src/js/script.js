window.addEventListener('DOMContentLoaded', () => {
    
    const tabs = require('./modules/tabs'),
        modal = require('./modules/modal'),
        calc = require('./modules/calc'),
        cards = require('./modules/cards'),
        slider = require('./modules/slider'),
        forms = require('./modules/forms'),
        timer = require('./modules/timer');

        tabs();
        modal();
        calc();
        cards();
        slider();
        forms();
        timer();
    
});
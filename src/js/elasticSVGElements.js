(function(){
    'use strict';

    /*
     * @requires draggabilly.pkgd.min.js
     * @requires modernizr.custom.js
     * @requires button.js
     * @requires input.js
     * @requires dropdown.js
     * @requires collapser.js
     * @requires expander.js
     * @requires hamburger.js
     * @requires circlemenu.js
     * @requires pullupmenu.js
     */
    angular.module('elasticSVGElements', [
        'elasticSVGElementsButton',
        'elasticSVGElementsInput',
        'elasticSVGElementsDropdown',
        'elasticSVGElementsCollapser',
        'elasticSVGElementsExpander',
        'elasticSVGElementsHamburger',
        'elasticSVGElementsCircleMenu',
        'elasticSVGElementsPullupMenu'
    ]);

})();
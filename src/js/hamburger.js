(function(){
    'use strict';

    function SVGHamburger( el, options ) {
        this.el = el;
        this.init();
    }

    SVGHamburger.prototype.init = function() {
        this.shapeEl = this.el.querySelector( 'span.morph-shape' );

        var s = Snap( this.shapeEl.querySelector( 'svg' ) );
        this.pathEl1 = s.select( 'path:nth-of-type(1)' );
        this.pathEl2 = s.select( 'path:nth-of-type(2)' );
        this.paths = {
            reset : {
                path1 : this.pathEl1.attr( 'd' ),
                path2 : this.pathEl2.attr( 'd' )
            },
            open : this.shapeEl.getAttribute( 'data-morph-open' ).split( ';' ),
            close : this.shapeEl.getAttribute( 'data-morph-close' ).split( ';' )
        };

        this.isOpen = false;

        this.initEvents();
    };

    SVGHamburger.prototype.initEvents = function() {
        this.el.addEventListener( 'click', this.toggle.bind(this) );
    };

    SVGHamburger.prototype.toggle = function() {
        var self = this,
            paths = this.isOpen ? this.paths.close : this.paths.open;

        if( self.isOpen ) {
            setTimeout( function() { classie.remove( self.el, 'menu-button--open' ); }, 200 );
        }
        else {
            setTimeout( function() { classie.add( self.el, 'menu-button--open' ); }, 200 );
        }

        this.pathEl1.stop().animate( { 'path' : paths[0] }, 300, mina.easeout, function() {
            self.pathEl1.stop().animate( { 'path' : self.paths.reset.path1 }, 800, mina.elastic );
        } );
        this.pathEl2.stop().animate( { 'path' : paths[1] }, 300, mina.easeout, function() {
            self.pathEl2.stop().animate( { 'path' : self.paths.reset.path2 }, 800, mina.elastic );
        } );

        this.isOpen = !this.isOpen;
    };

    var compile = function(tElement, tAttrs, transclude) {
        return {
            pre: function preLink(scope, iElement, iAttrs, controller) {
            },
            post: function postLink(scope, iElement, iAttrs, controller) {
                for(var k in iElement){
                    if ("object" === typeof iElement[k]){
                        new SVGHamburger(iElement[k]);
                    }
                }
            }
        };
    };

    angular.module('elasticSVGElementsHamburger', [])
        .directive('elasticHamburger', function(){
            return {
                restrict: 'E',
                replace: true,
                template:
                    '<button class="menu-button">' +
                        '<span id="morph-shape" class="morph-shape" data-morph-open="M3,20c0,0,12-4,27-4s27,4,27,4;M3,60c0,0,12,4,27,4s27-4,27-4" data-morph-close="M3,20c0,0,12,4,27,4s27-4,27-4;M3,60c0,0,12-4,27-4s27,4,27,4">' +
                            '<svg width="100%" height="100%" viewBox="0 0 60 80" preserveAspectRatio="none">' +
                                '<path d="M3,20c0,0,12,0,27,0s27,0,27,0"/>' +
                                '<line x1="3" y1="40" x2="57" y2="40"/>' +
                                '<path d="M3,60c0,0,12,0,27,0s27,0,27,0"/>' +
                            '</svg>' +
                        '</span>' +
                    '</button>',
                compile: compile
            };
        });
})();

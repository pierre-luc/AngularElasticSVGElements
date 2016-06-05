(function(){
    'use strict';

    function SVGMenu( el, options ) {
        this.el = el;
        this.init();
    }

    SVGMenu.prototype.init = function() {
        this.trigger = this.el.querySelector( 'button.trigger' );
        this.shapeEl = this.el.querySelector( 'span.morph-shape' );

        var s = Snap( this.shapeEl.querySelector( 'svg' ) );
        this.pathEl = s.select( 'path' );
        this.paths = {
            reset : this.pathEl.attr( 'd' ),
            active : this.shapeEl.getAttribute( 'data-morph-active' )
        };

        this.isOpen = false;

        this.initEvents();
    };

    SVGMenu.prototype.initEvents = function() {
        this.trigger.addEventListener( 'click', this.toggle.bind(this) );
    };

    SVGMenu.prototype.toggle = function() {
        var self = this;

        if( this.isOpen ) {
            classie.remove( this.el, 'menu--open' );
        }
        else {
            setTimeout( function() { classie.add( self.el, 'menu--open' ); }, 175 );
        }

        this.pathEl.stop().animate( { 'path' : this.paths.active }, 150, mina.easein, function() {
            self.pathEl.stop().animate( { 'path' : self.paths.reset }, 800, mina.elastic );
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
                        new SVGMenu(iElement[k]);
                    }
                }
            }
        };
    };

    angular.module('elasticSVGElementsCircleMenu', [])
        .directive('elasticCircleMenu', function(){
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    label: '@label'
                },
                transclude: true,
                template:
                    '<nav id="menu" class="menu">' +
                        '<span class="morph-shape" data-morph-active="M251,150c0,93.5-29.203,143-101,143S49,243.5,49,150C49,52.5,78.203,7,150,7S251,51.5,251,150z">' +
                            '<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="none">' +
                                '<path d="M281,150c0,71.797-59.203,131-131,131S19,221.797,19,150S78.203,19,150,19S281,78.203,281,150z"/>' +
                            '</svg>' +
                        '</span>' +
                        '<button class="trigger"><i class="fa fa-fw fa-share"></i><span>{{label}}</span></button>' +
                        '<ul class="menu__items" ng-transclude></ul>' +
                    '</nav>',
                compile: compile
            };
        });
})();

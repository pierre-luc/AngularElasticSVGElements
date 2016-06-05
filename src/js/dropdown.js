(function(){
    'use strict';

    function SVGDDMenu( el, options ) {
        this.el = el;
        this.init();
    }

    SVGDDMenu.prototype.init = function() {
        this.shapeEl = this.el.querySelector( 'div.morph-shape' );

        var s = Snap( this.shapeEl.querySelector( 'svg' ) );
        this.pathEl = s.select( 'path' );
        this.paths = {
            reset : this.pathEl.attr( 'd' ),
            open : this.shapeEl.getAttribute( 'data-morph-open' )
        };

        this.isOpen = false;

        this.initEvents();
    };

    SVGDDMenu.prototype.initEvents = function() {
        this.el.addEventListener( 'click', this.toggle.bind(this) );

        // For Demo purposes only
        [].slice.call( this.el.querySelectorAll('a') ).forEach( function(el) {
            el.onclick = function() { return false; }
        } );
    };

    SVGDDMenu.prototype.toggle = function() {
        var self = this;

        if( this.isOpen ) {
            classie.remove( self.el, 'menu--open' );
        }
        else {
            classie.add( self.el, 'menu--open' );
        }

        this.pathEl.stop().animate( { 'path' : this.paths.open }, 320, mina.easeinout, function() {
            self.pathEl.stop().animate( { 'path' : self.paths.reset }, 1000, mina.elastic );
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
                        new SVGDDMenu( iElement[k] );
                    }
                }
            }
        }
    };

    angular.module('elasticSVGElementsDropdown', [])
        .directive('elasticDropdown', function(){
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                scope: {
                    label: '@label'
                },
                template:
                    '<nav class="menu">'
                +       '<div class="morph-shape" data-morph-open="M260,500H0c0,0,8-120,8-250C8,110,0,0,0,0h260c0,0-8,110-8,250C252,380,260,500,260,500z">'
                +           '<svg width="100%" height="100%" viewBox="0 0 260 500" preserveAspectRatio="none">'
                +               '<path fill="none" d="M260,500H0c0,0,0-120,0-250C0,110,0,0,0,0h260c0,0,0,110,0,250C260,380,260,500,260,500z"/>'
                +           '</svg>'
                +       '</div>'
                +       '<button class="menu__label"><i class="fa fa-fw fa-bars"></i><span>{{label}}</span></button>'
                +       '<ul class="menu__inner" ng-transclude></ul>'
                +   '</nav>',
                compile: compile
            };
        })

})();

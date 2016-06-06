(function(){
    'use strict';

    function SVGMenu( el, options ) {
        this.el = el;
        this.init();
    }

    SVGMenu.prototype.init = function() {
        this.trigger = this.el.querySelector( 'button.menu__handle' );
        this.shapeEl = this.el.querySelector( 'div.morph-shape' );

        var s = Snap( this.shapeEl.querySelector( 'svg' ) );
        this.pathEl = s.select( 'path' );
        this.paths = {
            reset : this.pathEl.attr( 'd' ),
            open : this.shapeEl.getAttribute( 'data-morph-open' ),
            close : this.shapeEl.getAttribute( 'data-morph-close' )
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
            classie.remove( self.el, 'menu--anim' );
            setTimeout( function() { classie.remove( self.el, 'menu--open' );	}, 250 );
        }
        else {
            classie.add( self.el, 'menu--anim' );
            setTimeout( function() { classie.add( self.el, 'menu--open' );	}, 250 );
        }
        this.pathEl.stop().animate( { 'path' : this.isOpen ? this.paths.close : this.paths.open }, 350, mina.easeout, function() {
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

    angular.module('elasticSVGElementsSidebar', [])
        .directive('elasticSidebar', function(){
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    label: '@label'
                },
                transclude: true,
                template:
                    '<nav class="sidebar menu">' +
                        '<button class="menu__handle"><span>{{label}}</span></button>' +
                        '<div class="menu__inner">' +
                            '<ul ng-transclude></ul>' +
                        '</div>' +
                        '<div class="morph-shape" data-morph-open="M300-10c0,0,295,164,295,410c0,232-295,410-295,410" data-morph-close="M300-10C300-10,5,154,5,400c0,232,295,410,295,410">' +
                            '<svg width="100%" height="100%" viewBox="0 0 600 800" preserveAspectRatio="none">' +
                                '<path fill="none" d="M300-10c0,0,0,164,0,410c0,232,0,410,0,410"/>' +
                            '</svg>' +
                        '</div>' +
                    '</nav>',
                compile: compile
            };
        });
})();

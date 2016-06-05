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

            this.pathEl.stop().animate( { 'path' : this.paths.close }, 350, mina.easeout, function() {
                self.pathEl.stop().animate( { 'path' : self.paths.reset }, 700, mina.elastic );
            } );
        }
        else {
            classie.add( self.el, 'menu--anim' );
            setTimeout( function() { classie.add( self.el, 'menu--open' );	}, 250 );

            this.pathEl.stop().animate( { 'path' : this.paths.open }, 350, mina.backin, function() {
                self.pathEl.stop().animate( { 'path' : self.paths.reset }, 700, mina.elastic );
            } );
        }
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
        }
    };

    angular.module('elasticSVGElementsPullupMenu', [])
        .directive('elasticPullupMenu', function(){
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                scope: {
                    label: '@label'
                },
                template:
                    '<nav class="menu">'
                +       '<button class="menu__handle"><span>{{label}}</span></button>'
                +           '<div class="menu__inner">'
                +              '<ul ng-transclude></ul>'
                +           '</div>'
                +           '<div class="morph-shape" data-morph-open="M-10,100c0,0,44-95,290-95c232,0,290,95,290,95" data-morph-close="M-10,100c0,0,44,95,290,95c232,0,290-95,290-95">'
                +               '<svg width="100%" height="100%" viewBox="0 0 560 200" preserveAspectRatio="none">'
                +                   '<path fill="none" d="M-10,100c0,0,44,0,290,0c232,0,290,0,290,0"/>'
                +               '</svg>'
                +           '</div>'
                +   '</nav>',
                compile: compile
            };
        })

})();

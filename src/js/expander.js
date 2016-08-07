(function(){
    'use strict';

    function SVGExpander( el, options ) {
        this.el = el;
        this.init();
    }

    SVGExpander.prototype.init = function() {
        this.trigger = this.el.querySelector( 'button.trigger' );
        this.shapeEl = this.el.querySelector( 'span.morph-shape' );

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

    SVGExpander.prototype.initEvents = function() {
        this.trigger.addEventListener( 'click', this.toggle.bind(this) );
    };

    SVGExpander.prototype.toggle = function() {
        var self = this;

        if( this.isOpen ) {
            this.pathEl.stop().animate( { 'path' : this.paths.close }, 250, mina.easeout, function() {
                self.pathEl.stop().animate( { 'path' : self.paths.reset }, 800, mina.elastic );
            } );
            setTimeout( function() { classie.remove( self.el, 'box--sizeup' ); }, 250 );
        }
        else {
            this.pathEl.stop().animate( { 'path' : this.paths.open }, 250, mina.easeout, function() {
                self.pathEl.stop().animate( { 'path' : self.paths.reset }, 800, mina.elastic );
            } );
            setTimeout( function() { classie.add( self.el, 'box--sizeup' ); }, 250 );
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
                        scope.expander = new SVGExpander(iElement[k]);
                    }
                }
            }
        };
    };

    angular.module('elasticSVGElementsExpander', [])
        .directive('elasticExpand', function(){
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                scope: {
                    type: '@type'
                },
                template:
                    '<div class="box box--expander">' +
                        '<span class="morph-shape morph-shape--{{type}}" data-morph-open="M273,273c0,0-55.8-23-123-23c-78.2,0-123,23-123,23s23-37.7,23-123C50,79.936,27,27,27,27s46,23,124,23    c85,0,122-23,122-23s-23,38.43-23,123C250,229.646,273,273,273,273z" data-morph-close="M273,273c0,0-55.8,24-123,24c-78.2,0-123-24-123-24S3,235.3,3,150C3,79.936,27,27,27,27S72,3,150,3 c85,0,123,24,123,24s24,38.43,24,123C297,229.646,273,273,273,273z">' +
                            '<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="none">' +
                                '<path d="M273,273c0,0-55.8,0-123,0c-78.2,0-123,0-123,0s0-37.7,0-123c0-70.064,0-123,0-123s45,0,123,0c85,0,123,0,123,0s0,38.43,0,123C273,229.646,273,273,273,273z"/>' +
                            '</svg>' +
                        '</span>' +
                        '<div class="content" ng-transclude></div>' +
                        '<button class="trigger"><i class="fa fa-expand"></i><i class="fa fa-compress"></i></button>' +
                    '</div>',
                compile: compile
            };
        });
})();

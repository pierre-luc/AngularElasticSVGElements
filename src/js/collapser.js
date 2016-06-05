(function(){
    'use strict';

    function SVGCollapser( el, options ) {
        this.el = el;
        this.init();
    }

    SVGCollapser.prototype.init = function() {
        this.trigger = this.el.querySelector( 'button.trigger' );
        this.shapeEl = this.el.querySelector( 'span.morph-shape' );

        var s = Snap( this.shapeEl.querySelector( 'svg' ) );
        this.pathEl = s.select( 'path' );
        this.paths = {
            active : this.shapeEl.getAttribute( 'data-morph-active' ).split(';')
        };
        this.stepsTotal = this.paths.active.length;

        this.initEvents();
    };

    SVGCollapser.prototype.initEvents = function() {
        this.trigger.addEventListener( 'click', this.collapse.bind(this) );
    };

    SVGCollapser.prototype.collapse = function() {
        var self = this, pos = 0,
            nextStep = function( pos ) {
                if( pos > self.stepsTotal - 1 ) { return; }
                self.pathEl.stop().animate( { 'path' : self.paths.active[pos] }, pos === 0 ? 200 : 150, pos === 0 ? mina.easeinout : mina.easeout, function() { nextStep(pos); } );
                pos++;
            };

        nextStep(pos);

        setTimeout( function() { classie.add( self.el, 'box--close' ); }, 350 );
    };

    var compile = function(tElement, tAttrs, transclude) {
        return {
            pre: function preLink(scope, iElement, iAttrs, controller) {
            },
            post: function postLink(scope, iElement, iAttrs, controller) {
                for(var k in iElement){
                    if ("object" === typeof iElement[k]){
                        new SVGCollapser(iElement[k]);
                    }
                }
            }
        }
    };

    angular.module('elasticSVGElementsCollapser', [])
        .directive('elasticCollapse', function(){
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                scope: {
                    type: '@type'
                },
                template:
                    '<div class="box box--collapser">'
                +       '<span class="morph-shape morph-shape--{{type}}" data-morph-active="M273,273c0,0-55.8,24-123,24c-78.2,0-123-24-123-24S3,235.3,3,150C3,79.936,27,27,27,27S72,3,150,3 c85,0,123,24,123,24s24,38.43,24,123C297,229.646,273,273,273,273z;M273,273c0,0-55.8-23-123-23c-78.2,0-123,23-123,23s23-37.7,23-123C50,79.936,27,27,27,27s46,23,124,23 c85,0,122-23,122-23s-23,38.43-23,123C250,229.646,273,273,273,273z">'
                +           '<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="none">'
                +               '<path d="M273,273c0,0-55.8,0-123,0c-78.2,0-123,0-123,0s0-37.7,0-123c0-70.064,0-123,0-123s45,0,123,0 c85,0,123,0,123,0s0,38.43,0,123C273,229.646,273,273,273,273z"/>'
                +           '</svg>'
                +       '</span>'
                +       '<div class="content" ng-transclude></div>'
                +       '<button class="trigger"><i class="fa fa-close"></i></button>'
                +   '</div>',
                compile: compile
            };
        })

})();

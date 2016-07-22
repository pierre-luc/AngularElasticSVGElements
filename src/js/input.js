(function(){
    'use strict';

    var effects = {
        shrink: {
            path: 'M359,70c0,0-59,0-174,0C84,70,9,70,9,70s0-10,0-30c0-16,0-30,0-30s75,0,176,0c115,0,174,0,174,0s0,14,0,30C359,60,359,70,359,70z',
            active: 'M359,70c0,0-59,0-174,0C84,70,9,70,9,70s5-10,5-30c0-16-5-30-5-30s75,0,176,0c115,0,174,0,174,0s-5,14-5,30    C354,60,359,70,359,70z'
        }
    };

    function SVGInput( el, options ) {
        this.el = el;
        this.inputEl = this.el.querySelector( 'input' );
        this.init();
    }

    SVGInput.prototype.init = function() {
        this.shapeEl = this.el.querySelector( 'span.morph-shape' );

        var s = Snap( this.shapeEl.querySelector( 'svg' ) );
        this.pathEl = s.select( 'path' );
        this.paths = {
            reset : this.pathEl.attr( 'd' ),
            active : this.shapeEl.getAttribute( 'data-morph-active' )
        };

        this.initEvents();
    };

    SVGInput.prototype.initEvents = function() {
        if( this.inputEl.type === 'checkbox' || this.inputEl.type === 'radio' ) {
            this.el.addEventListener( 'mousedown', this.down.bind(this) );
            this.el.addEventListener( 'touchstart', this.down.bind(this) );

            this.el.addEventListener( 'mouseup', this.up.bind(this) );
            this.el.addEventListener( 'touchend', this.up.bind(this) );

            this.el.addEventListener( 'mouseout', this.up.bind(this) );
        }
        else {
            this.el.addEventListener( 'click', this.toggle.bind(this) );
        }
    };

    SVGInput.prototype.down = function() {
        this.pathEl.stop().animate( { 'path' : this.paths.active }, 150, mina.easein );
    };

    SVGInput.prototype.up = function() {
        this.pathEl.stop().animate( { 'path' : this.paths.reset }, 1000, mina.elastic );
    };

    SVGInput.prototype.toggle = function() {
        var self = this;

        this.pathEl.stop().animate( { 'path' : this.paths.active }, 200, mina.easein, function() {
            self.pathEl.stop().animate( { 'path' : self.paths.reset }, 600, mina.elastic );
        } );
    };


    var compile = function(tElement, tAttrs, transclude) {
        return {
            pre: function preLink(scope, iElement, iAttrs, controller) {
            },
            post: function postLink(scope, iElement, iAttrs, controller) {
                for(var k in iElement){
                    if ("object" === typeof iElement[k]){
                        new SVGInput( iElement[k] );
                    }
                }
            }
        };
    };

    angular.module('elasticSVGElementsInput', [])
        .directive('elasticInput', function(){
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                scope: {
                    label: '@label',
                    type: '@type',
                    model: '=ngModel'
                },
                template:
                        '<div class="input-wrap">' +
                            '<input type="{{type}}" ng-model="model" placeholder="{{label}}"/>' +
                            '<span class="morph-shape" data-morph-active="' + effects.shrink.active + '">' +
                                '<svg width="100%" height="100%" viewBox="0 0 370 80" preserveAspectRatio="none">' +
                                    '<path d="' + effects.shrink.path + '"/>' +
                                '</svg>' +
                            '</span>' +
                        '</div>',
                compile: compile
            };
        })

        .directive('elasticCheckbox', function(){
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                scope: {
                    bindID: '@bindID'
                },
                template:
                    '<div class="input-container input-container--indent">' +
                        '<div class="input-wrap input-wrap--small">' +
                            '<input type="checkbox" id="{{bindID}}" />' +
                                '<i class="fa fa-fw fa-check"></i>' +
                                '<span class="morph-shape" data-morph-active="M273,273c0,0-55.8,24-123,24c-78.2,0-123-24-123-24S3,235.3,3,150C3,79.936,27,27,27,27S72,3,150,3c85,0,123,24,123,24s24,38.43,24,123C297,229.646,273,273,273,273z">' +
                                    '<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="none">' +
                                        '<path d="M273,273c0,0-55.8,0-123,0c-78.2,0-123,0-123,0s0-37.7,0-123c0-70.064,0-123,0-123s45,0,123,0c85,0,123,0,123,0s0,38.43,0,123C273,229.646,273,273,273,273z"/>' +
                                    '</svg>' +
                                '</span>' +
                        '</div>' +
                        '<label class="input-label input-label--long" for="{{bindID}}" ng-transclude></label>' +
                   '</div>',
                compile: compile
            };
        })

        .directive('elasticRadio', function(){
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                scope: {
                    bindID: '@bindID'
                },
                template:
                    '<div class="input-container input-container--indent input-container--space">' +
                        '<div class="input-wrap input-wrap--small">' +
                            '<input type="radio" id="{{bindID}}" name="radiogroup" />' +
                            '<i class="fa fa-fw fa-circle"></i>' +
                            '<span class="morph-shape" data-morph-active="M251,150c0,71.797-29.203,149-101,149S49,221.797,49,150S78.203,1,150,1S251,78.203,251,150z">' +
                                '<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="none">' +
                                    '<path d="M281,150c0,71.797-59.203,131-131,131S19,221.797,19,150S78.203,19,150,19S281,78.203,281,150z"/>' +
                                '</svg>' +
                            '</span>' +
                        '</div>' +
                        '<label class="input-label input-label--long" for="{{bindID}}" ng-transclude></label>' +
                    '</div>',
                compile: compile
            };
        });
})();

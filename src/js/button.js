(function(){
    'use strict';

    function extend( a, b ) {
        for( var key in b ) {
            if( b.hasOwnProperty( key ) ) {
                a[key] = b[key];
            }
        }
        return a;
    }

    var effects = {
        press: {
            path: 'M286.5,113c0,0-104,0-136.5,0c-35.75,0-136.5,0-136.5,0s0-39.417,0-52.5c0-12.167,0-48.5,0-48.5s101.833,0,136.5,0c33.583,0,136.5,0,136.5,0s0,35.917,0,48.5C286.5,73.167,286.5,113,286.5,113z',
            active: 'M286,113c0,0-68.8,9-136,9c-78.2,0-137-9-137-9S3,97.198,3,62.5C3,33.999,13,12,13,12S72,2,150,2c85,0,136,10,136,10s11,17.598,11,52C297,96.398,286,113,286,113z'
        },
        hit: {
            path: 'M286,113c0,0-68.8,0-136,0c-78.2,0-137,0-137,0s0-15.802,0-50.5C13,33.999,13,12,13,12s59,0,137,0c85,0,136,0,136,0s0,17.598,0,52C286,96.398,286,113,286,113z',
            active: 'M286,113c0,0-68.8-5-136-5c-78.2,0-137,5-137,5s5-15.802,5-50.5C18,33.999,13,12,13,12s59,5,137,5c85,0,136-5,136-5s-5,17.598-5,52C281,96.398,286,113,286,113z'
        },
        click: {
            path: 'M290,95c0,11.046-8.954,20-20,20c0,0-90,0-120,0s-120,0-120,0c-11.046,0-20-9-20-20c0-8.715,0-25.875,0-34.5c0-7.625,0-22.774,0-30.5c0-11.625,8.954-20,20-20c0,0,90,0,120,0s120,0,120,0c11.046,0,20,8.954,20,20c0,7.25,0,22.875,0,30.5C290,69.125,290,84.5,290,95z',
            active: 'M287,95.25c0,11.046-5.954,19.75-17,19.75c0,0-90-4-120-4s-120,4-120,4c-11.046,0-17.25-9.5-17.25-20.5c0-8.715,0.25-10.75,0.25-34s-0.681-26.257-1-33.75C11.5,15,18.954,10,30,10c0,0,90,3,120,3s120-3,120-3c11.046,0,17.75,6.5,17,20c-0.402,7.239,0,6.75,0,30.5C287,83.5,287,84.75,287,95.25z'
        },
        poke: {
            path: 'M286,113c0,0-68.8,0-136,0c-78.2,0-137,0-137,0s0-15.802,0-50.5C13,33.999,13,12,13,12s59,0,137,0c85,0,136,0,136,0s0,17.598,0,52C286,96.398,286,113,286,113z',
            active: 'M286,113c0,0-68.8-6-136-6c-78.2,0-137,6-137,6s2-15.802,2-50.5C15,33.999,13,12,13,12s59-6,137-6c85,0,136,6,136,6s-3,17.598-3,52C283,96.398,286,113,286,113z'
        },
        nudge: {
            path: 'M286.5,62.5c0,27.891-22.609,50.5-50.5,50.5c-21.5,0-64.355,0-86,0c-21.645,0-64.5,0-86,0c-27.891,0-50.5-22.609-50.5-50.5l0,0C13.5,34.609,36.109,12,64,12c21.5,0,64.355,0,86,0c21.645,0,64.5,0,86,0C263.891,12,286.5,34.609,286.5,62.5L286.5,62.5z',
            active: 'M282.5,62.5c0,27.891-17.583,50.176-46.5,53.5c-21.75,2.5-64.355,4-86,4c-21.645,0-65-1-86-4c-29.408-4.201-46.5-25.609-46.5-53.5l0,0C17.5,34.609,36.594,13.177,64,8c22.5-4.25,64.355-4,86-4c21.645,0,64.669,1.31,86,4C263.75,11.5,282.5,34.609,282.5,62.5L282.5,62.5z'
        },
        hold: {
            path: 'M286.5,62.5c0,27.891-12.609,50.5-40.5,50.5c-44.25,0-44.75,0-96,0c-56.75,0-56.5,0-96,0c-27.891,0-40.5-22.609-40.5-50.5l0,0C13.5,34.609,26.109,12,54,12c39.5,0,39.75,0,96,0c51.502,0,51.5,0,96,0C273.891,12,286.5,34.609,286.5,62.5L286.5,62.5z',
            active: 'M282.5,62.5c0,27.891-8.648,51.994-36.5,50.5c-24.049-1.29-44.75-8-96-8c-56.75,0-71.952,6.71-96,8c-27.851,1.494-36.5-22.609-36.5-50.5l0,0C17.5,34.609,26.215,9.572,54,12c23.973,2.095,39.75,7,96,7c51.502,0,72.01-5.125,96-7C273.807,9.827,282.5,34.609,282.5,62.5L282.5,62.5z'
        },
        blob: {
            path: 'M281,150c0,71.797-59.203,131-131,131S19,221.797,19,150S78.203,19,150,19S281,78.203,281,150z',
            active: 'M251,150c0,93.5-29.203,143-101,143S49,243.5,49,150C49,52.5,78.203,7,150,7S251,51.5,251,150z'
        }
    };

    function SVGButton( el, options ) {
        this.el = el;
        this.options = extend( {}, this.options );
        extend( this.options, options );
        this.init();
    }

    SVGButton.prototype.options = {
        speed : { reset : 800, active : 150 },
        easing : { reset : mina.elastic, active : mina.easein },
        effect: 'press'
    };

    SVGButton.prototype.init = function() {
        this.shapeEl = this.el.querySelector( 'span.morph-shape' );
        var s = Snap( this.shapeEl.querySelector( 'svg' ) );
        var effect = effects[this.options.effect] ? effects[this.options.effect] : 'bulge';
        this.pathEl = s.select( 'path' );
        this.paths = {
            reset : effect.path,
            active : effect.active
        };
        this.pathEl.attr( 'd', effect.path);
        this.shapeEl.setAttribute( 'data-morph-active', effect.active );
        this.initEvents();
    };

    SVGButton.prototype.initEvents = function() {
        this.el.addEventListener( 'mousedown', this.down.bind(this) );
        this.el.addEventListener( 'touchstart', this.down.bind(this) );

        this.el.addEventListener( 'mouseup', this.up.bind(this) );
        this.el.addEventListener( 'touchend', this.up.bind(this) );

        this.el.addEventListener( 'mouseout', this.up.bind(this) );
    };

    SVGButton.prototype.down = function() {
        this.pathEl.stop().animate( { 'path' : this.paths.active }, this.options.speed.active, this.options.easing.active );
    };

    SVGButton.prototype.up = function() {
        this.pathEl.stop().animate( { 'path' : this.paths.reset }, this.options.speed.reset, this.options.easing.reset );
    };



    var buttons = {
        rectangle: '<button class="button button--{{type}} button--effect-1">' +
                '<span class="morph-shape" data-morph-active>' +
                    '<svg width="100%" height="100%" viewBox="0 0 300 125" preserveAspectRatio="none">' +
                        '<path d/>' +
                    '</svg>' +
                '</span>' +
                '<span class="button__text" ng-transclude></span>' +
            '</button>',

        round: '<button class="button button--{{type}} button--round button--effect-1">' +
                '<span class="morph-shape" data-morph-active>' +
                    '<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="none">' +
                        '<path d/>' +
                    '</svg>' +
                '</span>' +
                '<span class="button__text" ng-transclude></span>' +
            '</button>'
    };

    function prepareDirective(buttonType){
        return {
            restrict: 'E',
            scope: {
                type: '@type',
                effect: '@effect'
            },
            replace: true,
            transclude: true,
            template: buttonType,
            compile: function compile(tElement, tAttrs, transclude) {
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {
                    },
                    post: function postLink(scope, iElement, iAttrs, controller) {
                        for(var k in iElement){
                            if ("object" === typeof iElement[k]){
                                new SVGButton( iElement[k], {
                                    speed : { reset : 650, active : 650 },
                                    easing : { reset : mina.elastic, active : mina.elastic },
                                    effect: scope.effect
                                } );
                            }
                        }
                    }
                };
            }
        };
    }

    angular.module('elasticSVGElementsButton', [])
        .directive('elasticButton', function(){
            return prepareDirective(buttons.rectangle);
        })
        .directive('elasticRoundButton', function(){
            return prepareDirective(buttons.round);
        });
})();

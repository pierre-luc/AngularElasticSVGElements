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
                                scope.button = new SVGButton( iElement[k], {
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
                        scope.menu = new SVGMenu(iElement[k]);
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
                        scope.collapser = new SVGCollapser(iElement[k]);
                    }
                }
            }
        };
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
                    '<div class="box box--collapser">' +
                        '<span class="morph-shape morph-shape--{{type}}" data-morph-active="M273,273c0,0-55.8,24-123,24c-78.2,0-123-24-123-24S3,235.3,3,150C3,79.936,27,27,27,27S72,3,150,3 c85,0,123,24,123,24s24,38.43,24,123C297,229.646,273,273,273,273z;M273,273c0,0-55.8-23-123-23c-78.2,0-123,23-123,23s23-37.7,23-123C50,79.936,27,27,27,27s46,23,124,23 c85,0,122-23,122-23s-23,38.43-23,123C250,229.646,273,273,273,273z">' +
                            '<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="none">' +
                                '<path d="M273,273c0,0-55.8,0-123,0c-78.2,0-123,0-123,0s0-37.7,0-123c0-70.064,0-123,0-123s45,0,123,0 c85,0,123,0,123,0s0,38.43,0,123C273,229.646,273,273,273,273z"/>' +
                            '</svg>' +
                        '</span>' +
                        '<div class="content" ng-transclude></div>' +
                        '<button class="trigger"><i class="fa fa-close"></i></button>' +
                    '</div>',
                compile: compile
            };
        });
})();

/*!
 * Draggabilly PACKAGED v1.1.1
 * Make that shiz draggable
 * http://draggabilly.desandro.com
 * MIT license
 */

!function(a){function b(a){return new RegExp("(^|\\s+)"+a+"(\\s+|$)");}function c(a,b){var c=d(a,b)?f:e;c(a,b);}var d,e,f;"classList"in document.documentElement?(d=function(a,b){return a.classList.contains(b);},e=function(a,b){a.classList.add(b);},f=function(a,b){a.classList.remove(b);}):(d=function(a,c){return b(c).test(a.className);},e=function(a,b){d(a,b)||(a.className=a.className+" "+b);},f=function(a,c){a.className=a.className.replace(b(c)," ");});var g={hasClass:d,addClass:e,removeClass:f,toggleClass:c,has:d,add:e,remove:f,toggle:c};"function"==typeof define&&define.amd?define("classie/classie",g):a.classie=g;}(window),function(){function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1;}function c(a){return function(){return this[a].apply(this,arguments);};}var d=a.prototype;d.getListeners=function(a){var b,c,d=this._getEvents();if("object"==typeof a){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if("object"===c)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],f=c.listener.apply(this,b||[]),(f===this._getOnceReturnValue()||c.once===!0)&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:this.EventEmitter=a}.call(this),function(a){var b=document.documentElement,c=function(){};b.addEventListener?c=function(a,b,c){a.addEventListener(b,c,!1)}:b.attachEvent&&(c=function(b,c,d){b[c+d]=d.handleEvent?function(){var b=a.event;b.target=b.target||b.srcElement,d.handleEvent.call(d,b)}:function(){var c=a.event;c.target=c.target||c.srcElement,d.call(b,c)},b.attachEvent("on"+c,b[c+d])});var d=function(){};b.removeEventListener?d=function(a,b,c){a.removeEventListener(b,c,!1)}:b.detachEvent&&(d=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var e={bind:c,unbind:d};"function"==typeof define&&define.amd?define("eventie/eventie",e):a.eventie=e}(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):a.getStyleProperty=b}(window),function(a){function b(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function c(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=g.length;c>b;b++){var d=g[b];a[d]=0}return a}function d(a){function d(a){if("string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var d=f(a);if("none"===d.display)return c();var i={};i.width=a.offsetWidth,i.height=a.offsetHeight;for(var j=i.isBorderBox=!(!h||!d[h]||"border-box"!==d[h]),k=0,l=g.length;l>k;k++){var m=g[k],n=d[m],o=parseFloat(n);i[m]=isNaN(o)?0:o}var p=i.paddingLeft+i.paddingRight,q=i.paddingTop+i.paddingBottom,r=i.marginLeft+i.marginRight,s=i.marginTop+i.marginBottom,t=i.borderLeftWidth+i.borderRightWidth,u=i.borderTopWidth+i.borderBottomWidth,v=j&&e,w=b(d.width);w!==!1&&(i.width=w+(v?0:p+t));var x=b(d.height);return x!==!1&&(i.height=x+(v?0:q+u)),i.innerWidth=i.width-(p+t),i.innerHeight=i.height-(q+u),i.outerWidth=i.width+r,i.outerHeight=i.height+s,i}}var e,h=a("boxSizing");return function(){if(h){var a=document.createElement("div");a.style.width="200px",a.style.padding="1px 2px 3px 4px",a.style.borderStyle="solid",a.style.borderWidth="1px 2px 3px 4px",a.style[h]="border-box";var c=document.body||document.documentElement;c.appendChild(a);var d=f(a);e=200===b(d.width),c.removeChild(a)}}(),d}var e=document.defaultView,f=e&&e.getComputedStyle?function(a){return e.getComputedStyle(a,null)}:function(a){return a.currentStyle},g=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],d):a.getSize=d(a.getStyleProperty)}(window),function(a){function b(a,b){for(var c in b)a[c]=b[c];return a}function c(){}function d(d,e,g,j,k){function m(a,c){this.element="string"==typeof a?f.querySelector(a):a,this.options=b({},this.options),b(this.options,c),this._create()}function n(){return!1}function o(a,b){a.x=void 0!==b.pageX?b.pageX:b.clientX,a.y=void 0!==b.pageY?b.pageY:b.clientY}function p(a,b,c){return c=c||"round",b?Math[c](a/b)*b:a}var q=j("transform"),r=!!j("perspective");b(m.prototype,e.prototype),m.prototype.options={},m.prototype._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition=b({},this.position);var a=h(this.element);"relative"!==a.position&&"absolute"!==a.position&&(this.element.style.position="relative"),this.enable(),this.setHandles()},m.prototype.setHandles=function(){this.handles=this.options.handle?this.element.querySelectorAll(this.options.handle):[this.element];for(var b=0,c=this.handles.length;c>b;b++){var d=this.handles[b];a.navigator.pointerEnabled?(g.bind(d,"pointerdown",this),d.style.touchAction="none"):a.navigator.msPointerEnabled?(g.bind(d,"MSPointerDown",this),d.style.msTouchAction="none"):(g.bind(d,"mousedown",this),g.bind(d,"touchstart",this),t(d))}};var s="attachEvent"in f.documentElement,t=s?function(a){"IMG"===a.nodeName&&(a.ondragstart=n);for(var b=a.querySelectorAll("img"),c=0,d=b.length;d>c;c++){var e=b[c];e.ondragstart=n}}:c;m.prototype._getPosition=function(){var a=h(this.element),b=parseInt(a.left,10),c=parseInt(a.top,10);this.position.x=isNaN(b)?0:b,this.position.y=isNaN(c)?0:c,this._addTransformPosition(a)},m.prototype._addTransformPosition=function(a){if(q){var b=a[q];if(0===b.indexOf("matrix")){var c=b.split(","),d=0===b.indexOf("matrix3d")?12:4,e=parseInt(c[d],10),f=parseInt(c[d+1],10);this.position.x+=e,this.position.y+=f}}},m.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},m.prototype.getTouch=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];if(d.identifier===this.pointerIdentifier)return d}},m.prototype.onmousedown=function(a){var b=a.button;b&&0!==b&&1!==b||this.dragStart(a,a)},m.prototype.ontouchstart=function(a){this.isDragging||this.dragStart(a,a.changedTouches[0])},m.prototype.onMSPointerDown=m.prototype.onpointerdown=function(a){this.isDragging||this.dragStart(a,a)};var u={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"],MSPointerDown:["MSPointerMove","MSPointerUp","MSPointerCancel"]};m.prototype.dragStart=function(b,c){this.isEnabled&&(b.preventDefault?b.preventDefault():b.returnValue=!1,this.pointerIdentifier=void 0!==c.pointerId?c.pointerId:c.identifier,this._getPosition(),this.measureContainment(),o(this.startPoint,c),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this._bindEvents({events:u[b.type],node:b.preventDefault?a:f}),d.add(this.element,"is-dragging"),this.isDragging=!0,this.emitEvent("dragStart",[this,b,c]),this.animate())},m.prototype._bindEvents=function(a){for(var b=0,c=a.events.length;c>b;b++){var d=a.events[b];g.bind(a.node,d,this)}this._boundEvents=a},m.prototype._unbindEvents=function(){var a=this._boundEvents;if(a&&a.events){for(var b=0,c=a.events.length;c>b;b++){var d=a.events[b];g.unbind(a.node,d,this)}delete this._boundEvents}},m.prototype.measureContainment=function(){var a=this.options.containment;if(a){this.size=k(this.element);var b=this.element.getBoundingClientRect(),c=i(a)?a:"string"==typeof a?f.querySelector(a):this.element.parentNode;this.containerSize=k(c);var d=c.getBoundingClientRect();this.relativeStartPosition={x:b.left-d.left,y:b.top-d.top}}},m.prototype.onmousemove=function(a){this.dragMove(a,a)},m.prototype.onMSPointerMove=m.prototype.onpointermove=function(a){a.pointerId===this.pointerIdentifier&&this.dragMove(a,a)},m.prototype.ontouchmove=function(a){var b=this.getTouch(a.changedTouches);b&&this.dragMove(a,b)},m.prototype.dragMove=function(a,b){o(this.dragPoint,b);var c=this.dragPoint.x-this.startPoint.x,d=this.dragPoint.y-this.startPoint.y,e=this.options.grid,f=e&&e[0],g=e&&e[1];c=p(c,f),d=p(d,g),c=this.containDrag("x",c,f),d=this.containDrag("y",d,g),c="y"===this.options.axis?0:c,d="x"===this.options.axis?0:d,this.position.x=this.startPosition.x+c,this.position.y=this.startPosition.y+d,this.dragPoint.x=c,this.dragPoint.y=d,this.emitEvent("dragMove",[this,a,b])},m.prototype.containDrag=function(a,b,c){if(!this.options.containment)return b;var d="x"===a?"width":"height",e=this.relativeStartPosition[a],f=p(-e,c,"ceil"),g=this.containerSize[d]-e-this.size[d];return g=p(g,c,"floor"),Math.min(g,Math.max(f,b))},m.prototype.onmouseup=function(a){this.dragEnd(a,a)},m.prototype.onMSPointerUp=m.prototype.onpointerup=function(a){a.pointerId===this.pointerIdentifier&&this.dragEnd(a,a)},m.prototype.ontouchend=function(a){var b=this.getTouch(a.changedTouches);b&&this.dragEnd(a,b)},m.prototype.dragEnd=function(a,b){this.isDragging=!1,delete this.pointerIdentifier,q&&(this.element.style[q]="",this.setLeftTop()),this._unbindEvents(),d.remove(this.element,"is-dragging"),this.emitEvent("dragEnd",[this,a,b])},m.prototype.onMSPointerCancel=m.prototype.onpointercancel=function(a){a.pointerId===this.pointerIdentifier&&this.dragEnd(a,a)},m.prototype.ontouchcancel=function(a){var b=this.getTouch(a.changedTouches);this.dragEnd(a,b)},m.prototype.animate=function(){if(this.isDragging){this.positionDrag();var a=this;l(function(){a.animate()})}};var v=r?function(a,b){return"translate3d( "+a+"px, "+b+"px, 0)"}:function(a,b){return"translate( "+a+"px, "+b+"px)"};return m.prototype.setLeftTop=function(){this.element.style.left=this.position.x+"px",this.element.style.top=this.position.y+"px"},m.prototype.positionDrag=q?function(){this.element.style[q]=v(this.dragPoint.x,this.dragPoint.y)}:m.prototype.setLeftTop,m.prototype.enable=function(){this.isEnabled=!0},m.prototype.disable=function(){this.isEnabled=!1,this.isDragging&&this.dragEnd()},m}for(var e,f=a.document,g=f.defaultView,h=g&&g.getComputedStyle?function(a){return g.getComputedStyle(a,null)}:function(a){return a.currentStyle},i="object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1===a.nodeType&&"string"==typeof a.nodeName},j=0,k="webkit moz ms o".split(" "),l=a.requestAnimationFrame,m=a.cancelAnimationFrame,n=0;n<k.length&&(!l||!m);n++)e=k[n],l=l||a[e+"RequestAnimationFrame"],m=m||a[e+"CancelAnimationFrame"]||a[e+"CancelRequestAnimationFrame"];l&&m||(l=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-j)),e=a.setTimeout(function(){b(c+d)},d);return j=c+d,e},m=function(b){a.clearTimeout(b)}),"function"==typeof define&&define.amd?define(["classie/classie","eventEmitter/EventEmitter","eventie/eventie","get-style-property/get-style-property","get-size/get-size"],d):"object"==typeof exports?module.exports=d(require("desandro-classie"),require("wolfy87-eventemitter"),require("eventie"),require("desandro-get-style-property"),require("get-size")):a.Draggabilly=d(a.classie,a.EventEmitter,a.eventie,a.getStyleProperty,a.getSize)}(window);
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
            el.onclick = function() { return false; };
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

        this.pathEl.stop().animate( { 'path' : this.paths.open }, 420, mina.easeinout, function() {
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
                        scope.dropdown = new SVGDDMenu( iElement[k] );
                    }
                }
            }
        };
    };

    angular.module('elasticSVGElementsDropdown', [])
        .directive('elasticDropdown', function(){
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                scope: {
                    label: '@label',
                    icon: '@icon'
                },
                template:
                    '<nav class="dropdown menu">' +
                        '<div class="morph-shape" data-morph-open="M260,500H0c0,0,8-120,8-250C8,110,0,0,0,0h260c0,0-8,110-8,250C252,380,260,500,260,500z">' +
                            '<svg width="100%" height="100%" viewBox="0 0 260 500" preserveAspectRatio="none">' +
                                '<path fill="none" d="M260,500H0c0,0,0-120,0-250C0,110,0,0,0,0h260c0,0,0,110,0,250C260,380,260,500,260,500z"/>' +
                            '</svg>' +
                        '</div>' +
                        '<button class="menu__label"><i class="{{icon==\'\' ? \'fa fa-fw fa-bars\' : icon}}"></i><span>{{label}}</span></button>' +
                        '<ul class="menu__inner" ng-transclude></ul>' +
                    '</nav>',
                compile: compile
            };
        });
})();

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
 */
(function(){window.Modernizr=function(a,b,c){function x(a){j.cssText=a;}function y(a,b){return x(prefixes.join(a+";")+(b||""));}function z(a,b){return typeof a===b;}function A(a,b){return!!~(""+a).indexOf(b);}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0;}return!1;}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f;}return!1;}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c));}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b);}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined");},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError();var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a(),g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f;}return c.apply(b,d.concat(t.call(arguments)));};return e;}),p.cssanimations=function(){return D("animationName");};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b;}return e;},x(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild);}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a;}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b;}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g;}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d;}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c);},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")';})+");return n}")(s,b.frag);}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a;}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined";}();}catch(c){g=!0,k=!0;}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b);}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a]);},e.testAllProps=D,e.prefixed=function(a,b,c){return b?D(a,b,c):D(a,"pfx");},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e;}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a);}function e(a){return"string"==typeof a;}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a;}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1);},0):(a(),h()):q=0;}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})));}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l();}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b;}(),a);a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};})();

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
                        scope.input = new SVGInput( iElement[k] );
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
                        scope.hamburger = new SVGHamburger(iElement[k]);
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

    SVGMenu.prototype.open = function(){
      var self = this;
      classie.add( self.el, 'menu--anim' );
      setTimeout( function() { classie.add( self.el, 'menu--open' );	}, 250 );

      this.pathEl.stop().animate( { 'path' : this.paths.open }, 350, mina.backin, function() {
          self.pathEl.stop().animate( { 'path' : self.paths.reset }, 700, mina.elastic );
      } );
      this.isOpen = true;
    };

    SVGMenu.prototype.close = function(){
      var self = this;
      classie.remove( self.el, 'menu--anim' );
      setTimeout( function() { classie.remove( self.el, 'menu--open' );	}, 250 );

      this.pathEl.stop().animate( { 'path' : this.paths.close }, 350, mina.easeout, function() {
          self.pathEl.stop().animate( { 'path' : self.paths.reset }, 700, mina.elastic );
      } );
      this.isOpen = false;
    }

    SVGMenu.prototype.toggle = function() {
        if( this.isOpen ) {
            this.close();
        } else {
            this.open();
        }
    };

    var compile = function(tElement, tAttrs, transclude) {
        return {
            pre: function preLink(scope, iElement, iAttrs, controller) {
            },
            post: function postLink(scope, iElement, iAttrs, controller) {
                for(var k in iElement){
                    if ("object" === typeof iElement[k]){
                        scope.menu = new SVGMenu(iElement[k]);
                    }
                }
            }
        };
    };

    angular.module('elasticSVGElementsPullupMenu', [])
        .directive('elasticPullupMenu', function(){
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                scope: {
                    label: '@label',
                    open: '='
                },
                template:
                    '<nav class="menu">' +
                        '<button class="menu__handle"><span>{{label}}</span></button>' +
                            '<div class="menu__inner">' +
                               '<ul ng-transclude></ul>' +
                            '</div>' +
                            '<div class="morph-shape" data-morph-open="M-10,100c0,0,44-95,290-95c232,0,290,95,290,95" data-morph-close="M-10,100c0,0,44,95,290,95c232,0,290-95,290-95">' +
                                '<svg width="100%" height="100%" viewBox="0 0 560 200" preserveAspectRatio="none">' +
                                    '<path fill="none" d="M-10,100c0,0,44,0,290,0c232,0,290,0,290,0"/>' +
                                '</svg>' +
                            '</div>' +
                    '</nav>',
                compile: compile,
                controller: function($scope){
                  $scope.open = $scope.menu.isOpen;

                  $scope.toggle = function(){
                    $scope.menu.toggle();
                    $scope.open = $scope.menu.isOpen;
                  };

                  $scope.$watch('open', function(newValue, oldValue){
                    if (newValue){
                      $scope.menu.open();
                    } else {
                      $scope.menu.close();
                    }
                  })
                }
            };
        });
})();

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
                        scope.menu = new SVGMenu(iElement[k]);
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
     * @requires sidebar.js
     */
    angular.module('elasticSVGElements', [
        'elasticSVGElementsButton',
        'elasticSVGElementsInput',
        'elasticSVGElementsDropdown',
        'elasticSVGElementsCollapser',
        'elasticSVGElementsExpander',
        'elasticSVGElementsHamburger',
        'elasticSVGElementsCircleMenu',
        'elasticSVGElementsPullupMenu',
        'elasticSVGElementsSidebar'
    ]);

})();

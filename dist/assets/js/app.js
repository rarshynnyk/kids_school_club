(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("VueStarRating",[],e):"object"==typeof exports?exports.VueStarRating=e():t.VueStarRating=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=4)}([function(t,e){function r(t,e){var r=t[1]||"",i=t[3];if(!i)return r;if(e&&"function"==typeof btoa){var o=n(i);return[r].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([o]).join("\n")}return[r].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=r(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(t,e){t.exports=function(t,e,r,n,i){var o,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,a=t.default);var u="function"==typeof a?a.options:a;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n);var d;if(i?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=d):r&&(d=r),d){var l=u.functional,c=l?u.render:u.beforeCreate;l?u.render=function(t,e){return d.call(e),c(t,e)}:u.beforeCreate=c?[].concat(c,d):[d]}return{esModule:o,exports:a,options:u}}},function(t,e,r){function n(t){for(var e=0;e<t.length;e++){var r=t[e],n=l[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(o(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(o(r.parts[i]));l[r.id]={id:r.id,refs:1,parts:a}}}}function i(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function o(t){var e,r,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(h)return g;n.parentNode.removeChild(n)}if(v){var o=p++;n=f||(f=i()),e=a.bind(null,n,o,!1),r=a.bind(null,n,o,!0)}else n=i(),e=s.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}function a(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function s(t,e){var r=e.css,n=e.media,i=e.sourceMap;if(n&&t.setAttribute("media",n),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=r(14),l={},c=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,g=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,r){h=r;var i=d(t,e);return n(i),function(e){for(var r=[],o=0;o<i.length;o++){var a=i[o],s=l[a.id];s.refs--,r.push(s)}e?(i=d(t,e),n(i)):i=[];for(var o=0;o<r.length;o++){var s=r[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var m=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e,r){function n(t){r(13)}var i=r(1)(r(5),r(11),n,"data-v-34cbeed1",null);t.exports=i.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(3),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=i.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(9),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={components:{star:i.default},model:{prop:"rating",event:"rating-selected"},props:{increment:{type:Number,default:1},rating:{type:Number,default:0},roundStartRating:{type:Boolean,default:!0},activeColor:{type:String,default:"#ffd055"},inactiveColor:{type:String,default:"#d8d8d8"},maxRating:{type:Number,default:5},starPoints:{type:Array,default:function(){return[]}},starSize:{type:Number,default:50},showRating:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1},textClass:{type:String,default:""},inline:{type:Boolean,default:!1},borderColor:{type:String,default:"#999"},borderWidth:{type:Number,default:0},roundedCorners:{type:Boolean,default:!1},padding:{type:Number,default:0},rtl:{type:Boolean,default:!1},fixedPoints:{type:Number,default:null},glow:{type:Number,default:0},glowColor:{type:String,default:"#fff"}},created:function(){this.step=100*this.increment,this.currentRating=this.rating,this.selectedRating=this.currentRating,this.createStars(this.roundStartRating)},methods:{setRating:function(t,e){if(!this.readOnly){var r=this.rtl?(100-t.position)/100:t.position/100;this.currentRating=(t.id+r-1).toFixed(2),this.currentRating=this.currentRating>this.maxRating?this.maxRating:this.currentRating,this.createStars(),e?(this.selectedRating=this.currentRating,this.$emit("rating-selected",this.selectedRating),this.ratingSelected=!0):this.$emit("current-rating",this.currentRating)}},resetRating:function(){this.readOnly||(this.currentRating=this.selectedRating,this.createStars(this.shouldRound))},createStars:function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&this.round();for(var t=0;t<this.maxRating;t++){var e=0;t<this.currentRating&&(e=this.currentRating-t>1?100:100*(this.currentRating-t)),this.$set(this.fillLevel,t,Math.round(e))}},round:function(){var t=1/this.increment;this.currentRating=Math.min(this.maxRating,Math.ceil(this.currentRating*t)/t)}},computed:{formattedRating:function(){return null===this.fixedPoints?this.currentRating:this.currentRating.toFixed(this.fixedPoints)},shouldRound:function(){return this.ratingSelected||this.roundStartRating},margin:function(){return this.padding+this.borderWidth}},watch:{rating:function(t){this.currentRating=t,this.selectedRating=t,this.createStars()}},data:function(){return{step:0,fillLevel:[],currentRating:0,selectedRating:0,ratingSelected:!1}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{fill:{type:Number,default:0},points:{type:Array,default:function(){return[]}},size:{type:Number,default:50},starId:{type:Number,required:!0},activeColor:{type:String,required:!0},inactiveColor:{type:String,required:!0},borderColor:{type:String,default:"#000"},borderWidth:{type:Number,default:0},roundedCorners:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},glow:{type:Number,default:0},glowColor:{type:String,required:!1}},created:function(){this.starPoints=this.points.length?this.points:this.starPoints,this.calculatePoints(),this.grad=this.getRandomId(),this.glowId=this.getRandomId()},computed:{starPointsToString:function(){return this.starPoints.join(",")},getGradId:function(){return"url(#"+this.grad+")"},getSize:function(){var t=this.roundedCorners&&this.borderWidth<=0?parseInt(this.size)-parseInt(this.border):this.size;return parseInt(t)+parseInt(this.border)},getFill:function(){return this.rtl?100-this.fill+"%":this.fill+"%"},border:function(){return this.roundedCorners&&this.borderWidth<=0?6:this.borderWidth},getBorderColor:function(){return this.roundedCorners&&this.borderWidth<=0?this.fill<=0?this.inactiveColor:this.activeColor:this.borderColor},maxSize:function(){return this.starPoints.reduce(function(t,e){return Math.max(t,e)})},viewBox:function(){return"0 0 "+this.maxSize+" "+this.maxSize}},methods:{mouseMoving:function(t){this.$emit("star-mouse-move",{event:t,position:this.getPosition(t),id:this.starId})},getPosition:function(t){var e=.92*this.size,r=this.rtl?Math.min(t.offsetX,45):Math.max(t.offsetX,1),n=Math.round(100/e*r);return Math.min(n,100)},selected:function(t){this.$emit("star-selected",{id:this.starId,position:this.getPosition(t)})},getRandomId:function(){return Math.random().toString(36).substring(7)},calculatePoints:function(){var t=this;this.starPoints=this.starPoints.map(function(e){return t.size/t.maxSize*e+1.5*t.border})}},data:function(){return{starPoints:[19.8,2.2,6.6,43.56,39.6,17.16,0,17.16,33,43.56],grad:"",glowId:""}}}},function(t,e,r){e=t.exports=r(0)(void 0),e.push([t.i,".vue-star-rating-star[data-v-21f5376e]{overflow:visible!important}",""])},function(t,e,r){e=t.exports=r(0)(void 0),e.push([t.i,".vue-star-rating-star[data-v-34cbeed1]{display:inline-block}.vue-star-rating-pointer[data-v-34cbeed1]{cursor:pointer}.vue-star-rating[data-v-34cbeed1]{display:flex;align-items:center}.vue-star-rating-inline[data-v-34cbeed1]{display:inline-flex}.vue-star-rating-rating-text[data-v-34cbeed1]{margin-top:7px;margin-left:7px}.vue-star-rating-rtl[data-v-34cbeed1]{direction:rtl}.vue-star-rating-rtl .vue-star-rating-rating-text[data-v-34cbeed1]{margin-right:10px;direction:rtl}",""])},function(t,e,r){function n(t){r(12)}var i=r(1)(r(6),r(10),n,"data-v-21f5376e",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"vue-star-rating-star",attrs:{height:t.getSize,width:t.getSize,viewBox:t.viewBox},on:{mousemove:t.mouseMoving,click:t.selected}},[r("linearGradient",{attrs:{id:t.grad,x1:"0",x2:"100%",y1:"0",y2:"0"}},[r("stop",{attrs:{offset:t.getFill,"stop-color":t.rtl?t.inactiveColor:t.activeColor}}),t._v(" "),r("stop",{attrs:{offset:t.getFill,"stop-color":t.rtl?t.activeColor:t.inactiveColor}})],1),t._v(" "),r("filter",{attrs:{id:t.glowId,height:"130%",width:"130%",filterUnits:"userSpaceOnUse"}},[r("feGaussianBlur",{attrs:{stdDeviation:t.glow,result:"coloredBlur"}}),t._v(" "),r("feMerge",[r("feMergeNode",{attrs:{in:"coloredBlur"}}),t._v(" "),r("feMergeNode",{attrs:{in:"SourceGraphic"}})],1)],1),t._v(" "),r("polygon",{directives:[{name:"show",rawName:"v-show",value:t.fill>1,expression:"fill > 1"}],attrs:{points:t.starPointsToString,fill:t.getGradId,stroke:t.glowColor,filter:"url(#"+this.glowId+")"}}),t._v(" "),r("polygon",{attrs:{points:t.starPointsToString,fill:t.getGradId,stroke:t.getBorderColor,"stroke-width":t.border,"stroke-linejoin":t.roundedCorners?"round":"miter"}}),t._v(" "),r("polygon",{attrs:{points:t.starPointsToString,fill:t.getGradId}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["vue-star-rating",{"vue-star-rating-rtl":t.rtl},{"vue-star-rating-inline":t.inline}]},[r("div",{staticClass:"vue-star-rating",on:{mouseleave:t.resetRating}},[t._l(t.maxRating,function(e){return r("span",{key:e,class:[{"vue-star-rating-pointer":!t.readOnly},"vue-star-rating-star"],style:{"margin-right":t.margin+"px"}},[r("star",{attrs:{fill:t.fillLevel[e-1],size:t.starSize,points:t.starPoints,"star-id":e,step:t.step,"active-color":t.activeColor,"inactive-color":t.inactiveColor,"border-color":t.borderColor,"border-width":t.borderWidth,"rounded-corners":t.roundedCorners,rtl:t.rtl,glow:t.glow,"glow-color":t.glowColor},on:{"star-selected":function(e){t.setRating(e,!0)},"star-mouse-move":t.setRating}})],1)}),t._v(" "),t.showRating?r("span",{class:["vue-star-rating-rating-text",t.textClass]},[t._v(" "+t._s(t.formattedRating))]):t._e()],2)])},staticRenderFns:[]}},function(t,e,r){var n=r(7);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(2)("0ab8a16d",n,!0)},function(t,e,r){var n=r(8);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(2)("2e648ff1",n,!0)},function(t,e){t.exports=function(t,e){for(var r=[],n={},i=0;i<e.length;i++){var o=e[i],a=o[0],s=o[1],u=o[2],d=o[3],l={id:t+":"+i,css:s,media:u,sourceMap:d};n[a]?n[a].parts.push(l):r.push(n[a]={id:a,parts:[l]})}return r}}])});

},{}],2:[function(require,module,exports){
'use strict';

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _App2.default)();

},{"./components/App":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GridItem = require('./GridItem');

var _GridItem2 = _interopRequireDefault(_GridItem);

var _const = require('../const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {

  if (!Vue) return;

  Vue.debug = true;

  new Vue({
    el: '#app',
    data: function data() {
      return {
        isMobileNavVisible: false,
        isBodyVisible: false,
        isSpecialsVisible: true,
        schools: [],
        types: {
          current: 'public',
          options: ['public', 'private']
        },
        tags: ['art', 'music', 'sports', 'dance', 'theater', 'math', 'engineering', 'science'],
        specialsCurrent: [],
        specials: [{ 'value': 'adhd', 'label': 'ADHD' }, { 'value': 'asd', 'label': 'ASD' }, { 'value': 'asperger', 'label': 'Asperger’s syndrome' }, { 'value': 'down syndrome', 'label': 'Down syndrome' }, { 'value': 'deaf of hearing', 'label': 'Deaf or hard of hearing' }, { 'value': 'disabilities', 'label': 'Physical disabilities' }],
        periods: {
          current: 'weekly',
          options: ['weekly', 'monthly', 'annually']
        },
        days: {
          current: 'weekdays',
          options: ['weekdays', 'weekends', 'all days']
        },
        price: {
          min: 250,
          max: 600,
          tooltip: false,
          width: '100%',
          style: 'padding: 5px 0; margin: 0 0 15px;',
          dotSize: 22,
          height: 4,
          value: [300, 500]
        },
        location: {
          max: 5,
          tooltip: false,
          value: 3,
          width: '100%',
          style: 'padding: 5px 0; margin: 0 0 15px;',
          dotSize: 22,
          height: 4
        },
        hours: {
          min: 6,
          max: 22,
          tooltip: false,
          value: [8, 17],
          width: '100%',
          style: 'padding: 5px 0; margin: 0 0 15px;',
          dotSize: 22,
          height: 4
        },
        years: {
          min: 0,
          max: 11,
          tooltip: false,
          value: 3,
          width: '100%',
          style: 'padding: 5px 0; margin: 0 0 15px;',
          dotSize: 22,
          height: 4
        },
        filtersApplied: [],
        filteredSchools: []
      };
    },

    components: {
      GridItem: _GridItem2.default,
      'vueSlider': window['vue-slider-component']
    },
    methods: {
      fetchData: function fetchData(url) {
        var _this = this;

        return this.$http.get(url).then(function (res) {
          if (res.body.schools) {
            _this.schools = res.body.schools;
          }
        });
      },
      setActive: function setActive(element) {
        if (this.filtersApplied.indexOf(element) > -1) {
          this.filtersApplied.pop(element);
        } else {
          this.filtersApplied.push(element);
        }
      },
      isActive: function isActive(menuItem) {
        return this.filtersApplied.indexOf(menuItem) > -1;
      },
      toggleNav: function toggleNav() {
        this.isMobileNavVisible = !this.isMobileNavVisible;
        var isBodyHidden = document.body.classList.contains('body-hidden');
        if (!isBodyHidden) {
          document.body.classList.add('body-hidden');
        } else {
          document.body.classList.remove('body-hidden');
        }
      },
      specialsToggle: function specialsToggle() {
        this.isSpecialsVisible = !this.isSpecialsVisible;
      }
    },
    computed: {
      filteredItems: function filteredItems() {
        var _this2 = this;

        return this.schools.filter(function (item) {
          return _this2.filtersApplied.every(function (filterApplied) {

            if (item.tags.includes(filterApplied)) {
              return item.tags.includes(filterApplied);
            }

            if (item.periods.includes(filterApplied)) {
              return item.periods.includes(filterApplied);
            }
          });
        });
      }
    },
    filters: {
      capitalize: function capitalize(value) {
        if (!value) return '';
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
    },
    created: function created() {
      this.fetchData(_const.API_URL);
    }
  });
};

},{"../const":7,"./GridItem":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Favorite = Vue.component('Favorite', {
  props: ['isFavorited'],
  template: '\n    <button \n      :class="{\'like\': true, \'active\': isFavorited }" \n      type="button" \n      title="like"\n      @click="toogleFavorite"\n    >\n      <div class="text-hidden">like</div>\n    </button>\n  ',
  methods: {
    toogleFavorite: function toogleFavorite() {
      this.isFavorited = !this.isFavorited;
    }
  }
});

exports.default = Favorite;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Favorite = require('../components/Favorite');

var _Favorite2 = _interopRequireDefault(_Favorite);

var _Rating = require('../components/Rating');

var _Rating2 = _interopRequireDefault(_Rating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridItem = Vue.component('grid-item', {
  props: ['item'],
  components: {
    Favorite: _Favorite2.default,
    Rating: _Rating2.default
  },
  filters: {
    capitalize: function capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  template: '\n    <article class="card">\n      <div class="card__media">\n        <img \n          :src="item.coverUrl" \n          :alt="item.title" \n          class="card__img"\n        />\n      </div>\n      <div class="card__content">\n        <div class="card__info card__info--short">\n            <h1 class="card__title">{{item.title}}</h1>\n            <div class="card__rating">\n              <rating :rating="item.rating" />\n              <span class="card__type">{{item.typesLabel}}</span>\n            </div>\n            <div class="card__tags">\n              <span v-for="(tag, index) in item.tags" :key="index">{{tag | capitalize}}</span>\n            </div>\n        </div>\n        <div class="card__info card__info--extra">\n          <ul class="card__contacts">\n            <li>\n              <span>Weekdays </span><time>{{item.weekdays.start}}\u2014{{item.weekdays.end}}</time>\n            </li>\n            <li>\n              <address>\n                <span>{{item.address}}</span>\n                <i class="icon-directions"></i>\n              </address>\n            </li>\n            <li>\n              <a :href="item.phoneHref">{{item.phone}}</a>\n            </li>\n          </ul>\n        </div>\n        <div class="card__footer">\n          <div class="row">\n            <div class="col-6">\n              <span class="price">${{item.price}}</span>\n              <span>{{item.periods}}</span>\n            </div>\n            <div class="col-6 text-right">\n              <favorite :isFavorited="item.isFavorited" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </article>\n  '
});

exports.default = GridItem;

},{"../components/Favorite":4,"../components/Rating":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueStarRating = require('vue-star-rating');

var _vueStarRating2 = _interopRequireDefault(_vueStarRating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rating = Vue.component('Rating', {
  props: ['rating'],
  components: {
    StarRating: _vueStarRating2.default
  },
  template: '\n    <div class="rating">\n      <span class="rating__text">{{rating.currentValue}}</span>\n      <star-rating\n        class="rating__stars"\n        :border-width="0"\n        inactive-color="#b7efb7" \n        active-color="#11ca11"\n        :rating="rating.currentValue"\n        :star-size="13"\n        :read-only="true"\n      />\n    </div>\n  '
});

exports.default = Rating;

},{"vue-star-rating":1}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = exports.API_URL = 'http://www.mocky.io/v2/5b1450bb3100004a0078bf4f';

},{}]},{},[2]);

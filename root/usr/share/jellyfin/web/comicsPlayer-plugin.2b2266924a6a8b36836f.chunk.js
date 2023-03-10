"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2430,2126],{30952:function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,{ComicsPlayer:function(){return S},default:function(){return I}}),n(86248),n(5769),n(61484),n(63238),n(17460),n(14078),n(95289),n(61418),n(98010),n(58112),n(95623),n(72410),n(69217),n(70684),n(68581),n(55849),n(99785),n(15610),n(52077),n(25901),n(92189),n(91047),n(92571),n(23938),n(72482),n(20252),n(14009),n(12699);var i=function(){function e(t,n,r,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._size=n,this._path=r,this._archiveRef=i}var t,n;return t=e,(n=[{key:"name",get:function(){return this._name}},{key:"size",get:function(){return this._size}},{key:"extract",value:function(){return this._archiveRef.extractSingleFile(this._path)}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._worker=new Worker(n.workerUrl),this._worker.addEventListener("message",this._workerMsg.bind(this)),this._callbacks=[],this._content={},this._processed=0,this._file=t}var t,n,r,o,s;return t=e,n=[{key:"open",value:(o=regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._postMessage({type:"HELLO"},(function(e,t,n){"READY"===n.type&&e()}));case 2:return e.next=4,this._postMessage({type:"OPEN",file:this._file},(function(e,n,r){"OPENED"===r.type&&e(t)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)})),s=function(){var e=this,t=arguments;return new Promise((function(n,r){var i=o.apply(e,t);function a(e){f(i,n,r,a,s,"next",e)}function s(e){f(i,n,r,a,s,"throw",e)}a(void 0)}))},function(){return s.apply(this,arguments)})},{key:"hasEncryptedData",value:function(){return this._postMessage({type:"CHECK_ENCRYPTION"},(function(e,t,n){"ENCRYPTION_STATUS"===n.type&&e(n.status)}))}},{key:"usePassword",value:function(e){return this._postMessage({type:"SET_PASSPHRASE",passphrase:e},(function(e,t,n){"PASSPHRASE_STATUS"===n.type&&e(n.status)}))}},{key:"getFilesObject",value:function(){var e=this;return this._processed>0?Promise.resolve().then((function(){return e._content})):this._postMessage({type:"LIST_FILES"},(function(t,n,r){if("ENTRY"===r.type){var o=r.entry,a=c(e._getProp(e._content,o.path),2),s=a[0],u=a[1];return"FILE"===o.type&&(s[u]=new i(o.fileName,o.size,o.path,e)),!0}"END"===r.type&&(e._processed=1,t(e._cloneContent(e._content)))}))}},{key:"getFilesArray",value:function(){var e=this;return this.getFilesObject().then((function(t){return e._objectToArray(t)}))}},{key:"extractSingleFile",value:function(e){return this._postMessage({type:"EXTRACT_SINGLE_FILE",target:e},(function(e,t,n){"FILE"===n.type&&e(new File([n.entry.fileData],n.entry.fileName,{type:"application/octet-stream"}))}))}},{key:"extractFiles",value:function(e){var t=this;return this._processed>1?Promise.resolve().then((function(){return t._content})):this._postMessage({type:"EXTRACT_FILES"},(function(n,r,i){if("ENTRY"===i.type){var o=c(t._getProp(t._content,i.entry.path),2),a=o[0],s=o[1];return"FILE"===i.entry.type&&(a[s]=new File([i.entry.fileData],i.entry.fileName,{type:"application/octet-stream"}),void 0!==e&&setTimeout(e.bind(null,{file:a[s],path:i.entry.path}))),!0}"END"===i.type&&(t._processed=2,t._worker.terminate(),n(t._cloneContent(t._content)))}))}},{key:"_cloneContent",value:function(e){if(e instanceof File||e instanceof i||null===e)return e;for(var t={},n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];t[o]=this._cloneContent(e[o])}return t}},{key:"_objectToArray",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=[],r=0,o=Object.keys(e);r<o.length;r++){var a=o[r];e[a]instanceof File||e[a]instanceof i||null===e[a]?n.push({file:e[a]||a,path:t}):n.push.apply(n,u(this._objectToArray(e[a],"".concat(t).concat(a,"/"))))}return n}},{key:"_getProp",value:function(e,t){var n=t.split("/");""===n[n.length-1]&&n.pop();var r,i=e,o=null,a=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=l(e))){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}(n);try{for(a.s();!(r=a.n()).done;){var s=r.value;i[s]=i[s]||{},o=i,i=i[s]}}catch(e){a.e(e)}finally{a.f()}return[o,n[n.length-1]]}},{key:"_postMessage",value:function(e,t){var n=this;return this._worker.postMessage(e),new Promise((function(e,r){n._callbacks.push(n._msgHandler.bind(n,t,e,r))}))}},{key:"_msgHandler",value:function(e,t,n,r){if("BUSY"===r.type)n("worker is busy");else{if("ERROR"!==r.type)return e(t,n,r);n(r.error)}}},{key:"_workerMsg",value:function(e){var t=e.data;(0,this._callbacks[this._callbacks.length-1])(t)||this._callbacks.pop()}}],r=[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e._options=a({workerUrl:"../dist/worker-bundle.js"},t),e._options}},{key:"open",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n=n||e._options||e.init()&&console.warn("Automatically initializing using options: ",e._options);var r=new e(t,n);return r.open()}}],n&&h(t.prototype,n),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),y=n(56705),d=n(90914),v=n(74783),g=n(86628),m=n(53913),b=n(98566);function w(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return t&&B(e.prototype,t),n&&B(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n(68443),n(33609);var S=function(){function e(){P(this,e),this.name="Comics Player",this.type="mediaplayer",this.id="comicsplayer",this.priority=1,this.imageMap=new Map,this.onDialogClosed=this.onDialogClosed.bind(this),this.onWindowKeyUp=this.onWindowKeyUp.bind(this)}return C(e,[{key:"play",value:function(e){this.currentPage=0,this.pageCount=0;var t=this.createMediaElement();return this.setCurrentSrc(t,e)}},{key:"stop",value:function(){var e;this.unbindEvents();var t={src:this.item};Events.trigger(this,"stopped",[t]),null===(e=this.archiveSource)||void 0===e||e.release();var n=this.mediaElement;n&&(d.default.close(n),this.mediaElement=null),y.ZP.hide()}},{key:"destroy",value:function(){}},{key:"currentTime",value:function(){return this.currentPage}},{key:"duration",value:function(){return this.pageCount}},{key:"currentItem",value:function(){return this.item}},{key:"volume",value:function(){return 100}},{key:"isMuted",value:function(){return!1}},{key:"paused",value:function(){return!1}},{key:"seekable",value:function(){return!0}},{key:"onDialogClosed",value:function(){this.stop()}},{key:"onWindowKeyUp",value:function(e){"Escape"===v.ZP.getKeyName(e)&&this.stop()}},{key:"bindMediaElementEvents",value:function(){var e=this.mediaElement;null==e||e.addEventListener("close",this.onDialogClosed,{once:!0}),null==e||e.querySelector(".btnExit").addEventListener("click",this.onDialogClosed,{once:!0})}},{key:"bindEvents",value:function(){this.bindMediaElementEvents(),document.addEventListener("keyup",this.onWindowKeyUp)}},{key:"unbindMediaElementEvents",value:function(){var e=this.mediaElement;null==e||e.removeEventListener("close",this.onDialogClosed),null==e||e.querySelector(".btnExit").removeEventListener("click",this.onDialogClosed)}},{key:"unbindEvents",value:function(){this.unbindMediaElementEvents(),document.removeEventListener("keyup",this.onWindowKeyUp)}},{key:"createMediaElement",value:function(){var e=this.mediaElement;return e||((e=document.getElementById("comicsPlayer"))||((e=d.default.createDialog({exitAnimationDuration:400,size:"fullscreen",autoFocus:!1,scrollY:!1,exitAnimation:"fadeout",removeOnClose:!0})).id="comicsPlayer",e.classList.add("slideshowDialog"),e.innerHTML='<div class="slideshowSwiperContainer"><div class="swiper-wrapper"></div></div>\n<div class="actionButtons">\n    <button is="paper-icon-button-light" class="autoSize btnExit" tabindex="-1"><span class="material-icons actionButtonIcon close" aria-hidden="true"></span></button>\n</div>',d.default.open(e)),this.mediaElement=e,this.bindEvents(),e)}},{key:"setCurrentSrc",value:function(e,t){var n=this,r=t.items[0];this.item=r,this.streamInfo={started:!0,ended:!1,item:this.item,mediaSource:{Id:r.Id}},y.ZP.show();var i=r.ServerId,o=m.Z.getApiClient(i);p.init({workerUrl:g.appRouter.baseUrl()+"/libraries/worker-bundle.js"});var a=o.getItemDownloadUrl(r.Id);return this.archiveSource=new j(a),this.archiveSource.load().then((function(){y.ZP.hide(),n.pageCount=n.archiveSource.urls.length,n.currentPage=t.startPositionTicks/1e4||0,n.swiperInstance=new b.t(e.querySelector(".slideshowSwiperContainer"),{direction:"horizontal",loop:!1,zoom:{minRatio:1,toggle:!0,containerClass:"slider-zoom-container"},autoplay:!1,keyboard:{enabled:!0},preloadImages:!0,slidesPerView:1,slidesPerColumn:1,initialSlide:n.currentPage,virtual:{slides:n.archiveSource.urls,cache:!0,renderSlide:n.getImgFromUrl,addSlidesBefore:1,addSlidesAfter:1}}),n.swiperInstance.on("slideChange",(function(){n.currentPage=n.swiperInstance.activeIndex,Events.trigger(n,"pause")}))}))}},{key:"getImgFromUrl",value:function(e){return'<div class="swiper-slide">\n                   <div class="slider-zoom-container">\n                       <img src="'.concat(e,'" class="swiper-slide-img">\n                   </div>\n               </div>')}},{key:"canPlayMediaType",value:function(e){return"book"===(e||"").toLowerCase()}},{key:"canPlayItem",value:function(e){return!(!e.Path||!e.Path.endsWith("cbz")&&!e.Path.endsWith("cbr"))}}]),e}(),Y=["jpg","jpeg","jpe","jif","jfif","jfi","png","avif","gif","bmp","dib","tiff","tif","webp"],j=function(){function e(t){P(this,e),this.url=t,this.files=[],this.urls=[]}var t,n;return C(e,[{key:"load",value:(t=regeneratorRuntime.mark((function e(){var t,n,r,i,o,a,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.url);case 2:if((t=e.sent).ok){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,t.blob();case 7:return n=e.sent,e.next=10,p.open(n);case 10:return this.archive=e.sent,e.next=13,this.archive.getFilesArray();case 13:return this.raw=e.sent,e.next=16,this.archive.extractFiles();case 16:return e.next=18,this.archive.getFilesArray();case 18:r=(r=e.sent).filter((function(e){var t=e.file.name,n=t.lastIndexOf(".");return-1!==n&&Y.includes(t.slice(n+1))})),r.sort((function(e,t){return e.file.name<t.file.name?-1:1})),i=w(r);try{for(i.s();!(o=i.n()).done;)a=o.value,s=URL.createObjectURL(a.file),this.urls.push(s)}catch(e){i.e(e)}finally{i.f()}case 23:case"end":return e.stop()}}),e,this)})),n=function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(e){k(o,r,i,a,s,"next",e)}function s(e){k(o,r,i,a,s,"throw",e)}a(void 0)}))},function(){return n.apply(this,arguments)})},{key:"release",value:function(){this.files=[],this.urls.forEach(URL.revokeObjectURL),this.urls=[]}}]),e}(),I=S},18375:function(e,t,n){var r=n(54933),i=n.n(r),o=n(93476),a=n.n(o)()(i());a.push([e.id,"#comicsPlayer{background:#fff}#comicsPlayer .slideshowSwiperContainer{height:100%}#comicsPlayer .slider-zoom-container{height:100%;text-align:center}#comicsPlayer .swiper-slide-img{max-height:100%}",""]),t.Z=a},33609:function(e,t,n){n.r(t);var r=n(1892),i=n.n(r),o=n(95760),a=n.n(o),s=n(38311),u=n.n(s),c=n(58192),l=n.n(c),A=n(38060),f=n.n(A),h=n(54865),p=n.n(h),y=n(18375),d={};d.styleTagTransform=p(),d.setAttributes=l(),d.insert=u().bind(null,"head"),d.domAPI=a(),d.insertStyleElement=f(),i()(y.Z,d),t.default=y.Z&&y.Z.locals?y.Z.locals:void 0},49954:function(e){e.exports="data:application/font-woff;charset=utf-8;base64, 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"}}]);
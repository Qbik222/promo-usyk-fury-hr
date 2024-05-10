"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ownKeys(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){_defineProperty(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _defineProperty(t,e,n){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"==_typeof(t)?t:t+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return("string"===e?String:Number)(t);n=n.call(t,e||"default");if("object"!=_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}!function(){var o,t=new Date("2024-05-18T22:30:00.000Z"),n="https://fav-prom.com/api_guessfight_hr",c=document.querySelector(".tableResults__body"),e=document.querySelectorAll(".unauth-msg"),r=document.querySelectorAll(".took-part"),i=document.querySelector(".predictBtn"),u=document.querySelectorAll(".forecast__list button"),a=document.querySelector("#hrLeng"),s="hr",l=(a&&(s="hr"),{}),d={team:1},f=[];function y(){var t=document.querySelectorAll("[data-translate]"),e=(t&&t.length&&t.forEach(function(t){var e=t.getAttribute("data-translate");t.innerHTML=function(t){if(t)return l[t]||"*----NEED TO BE TRANSLATED----*   key:  "+t}(e),t.removeAttribute("data-translate")}),"en"===s&&_.classList.add("en"),void 0),n=void 0;if(e){for(var r=0,o=["hr"];r<o.length;r++){var c=o[r];e.classList.remove(n+c)}e.classList.add(n+s)}}var m=function(t,e){return fetch(n+t,_objectSpread({headers:{Accept:"application/json","Content-Type":"application/json"}},e||{})).then(function(t){return t.json()})};var p=function(){m("/users").then(function(t){var e,n=o,r=c;r.innerHTML="",t&&t.length&&((e=o&&t.find(function(t){return t.userid===n}))&&v(e,!0,r),t.forEach(function(t){t.userid!==n&&v(t,!1,r)})),y()})};function v(t,e,n){var r,o,c,i,a=document.createElement("div"),s=(a.classList.add("tableResults__row"),t.team&&0<t.team?f[t.team]:"");e&&(o=s,c=document.querySelector(".forecast__des"),o?(c.classList.remove("hide"),document.getElementById("roundWinner").innerHTML=o):c.classList.add("hide"),r=t.team,d.team=r,u.forEach(function(t){t.classList.remove("active");var e=+t.dataset.teamId;r===e&&t.classList.add("active")}),a.classList.add("_yourPlace")),a.innerHTML='\n                        <div class="tableResults__body-col">'.concat(e?t.userid:"**"+t.userid.toString().slice(2),'</div>\n                        <div class="tableResults__body-col">').concat((o=t.lastForecast,o=new Date(o),c=o.getDate().toString().padStart(2,"0"),e=(o.getMonth()+1).toString().padStart(2,"0"),t=o.getFullYear(),i=o.getHours().toString().padStart(2,"0"),o=o.getMinutes().toString().padStart(2,"0"),"".concat(c,".").concat(e,".").concat(t," / ").concat(i,":").concat(o)),'</div>\n                        <div class="tableResults__body-col">').concat(s,'</div>\n                        <div class="tableResults__body-col">************</div>\n                    '),n.append(a)}function b(){o&&(e.forEach(function(t){return t.classList.add("hide")}),r.forEach(function(t){return t.classList.remove("hide")}))}var h;fetch("".concat(n,"/translates/").concat(s)).then(function(t){return t.json()}).then(function(t){l=t,y(),new MutationObserver(function(t){y()}).observe(document.getElementById("predictor"),{childList:!0,subtree:!0})}).then(function(){var t,e;u.forEach(function(t){var e=+t.dataset.teamId;f[e]=t.innerHTML,t.addEventListener("click",function(){u.forEach(function(t){t.classList.remove("active")}),d.team=e,t.classList.add("active")})}),document.addEventListener("click",function(t){!t.target.closest(".predictBtn")||h||(setTimeout(function(){r.forEach(function(t){return t.classList.remove("showBtn")})},5e3),r.forEach(function(t){return t.classList.add("showBtn")}),h=!0,i.classList.add("pointer-none"),m("/bet",{method:"POST",body:JSON.stringify({userid:o,team:d.team})}).then(function(t){h=!1,i.classList.remove("pointer-none"),p()}).catch(function(t){h=!1,i.classList.remove("pointer-none")}))}),window.store?(t=window.store.getState(),o=t.auth.isAuthorized&&t.auth.id||"",p()):(p(),e=setInterval(function(){window.g_user_id&&(o=window.g_user_id,p(),b(),clearInterval(e))},200)),b()});var _=document.querySelector(".fav__page");setTimeout(function(){return _.classList.add("overflow")},1e3),t<=new Date&&i.classList.add("blockBtn")}();
function e(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=a.parcelRequirec944;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},a.parcelRequirec944=i),i.register("27Lyk",(function(t,a){var n,r;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var i={};n=function(e){for(var t=Object.keys(e),a=0;a<t.length;a++)i[t[a]]=e[t[a]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("27Lyk").register(JSON.parse('{"f9fpV":"index.aea767b0.js","hfd23":"icons.c14567a0.svg","3FECK":"coinStar.7ba2e6f8.png"}'));const s=async function(e){try{const t=await fetch(e),a=await t.json();if(!t.ok)throw new Error(`${a.message} (${t.status})`);return a}catch(e){throw e}},o={search:{cryptoInfo:[],resultsPerPage:10,currentPage:1},activeCoin:{},favorites:[]},c=function(e=o.search.currentPage){o.search.currentPage=e;const t=(e-1)*o.search.resultsPerPage,a=e*o.search.resultsPerPage;return o.search.cryptoInfo.slice(t,a)};var l;l=new URL(i("27Lyk").resolve("hfd23"),import.meta.url).toString();class _{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const t=this._generateMarkup();this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentEl.innerHTML=""}renderError(){const e=`<div class="error">\n                      <p>${this._errorMessage}</p>\n                    </div>`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",e)}renderSpinner(){const e=`<div class="spinner">\n                    <svg>\n                    <use href="${t(l)}#icon-loader"></use>\n                    </svg>\n                    </div>`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",e)}}var d,p=new class extends _{_parentEl=document.querySelector(".results");_errorMessage="Could not match any coin/token to your search... Please try with a different query!";_generateMarkup(){return['<li class="preview">\n    <div class="preview__data">\n        <div class="preview__rank ">Rank</div>\n      \n        <h4 class="preview__name preview__head-coin">Coin/Token</h4>\n       \n        <p class="preview__price preview__head-price">Price</p>\n\n    </div>\n    </a>\n </li>',this._data.map((e=>`<li class="preview">\n      <a class="preview__link preview__link--active" href="#${e.id}">\n      <div class="preview__data">\n          <div class="preview__rank">${e.rank}</div>\n          <div class="preview__title"> \n            <img class="preview__img" src="${e.img}"/>\n            <h4 class="preview__name">${e.name}</h4>\n            <h2 class="preview__symbol">(${e.symbol.toUpperCase()})</h2>\n          </div>\n          <p class="preview__price">$${e.price}</p>\n\n      </div>\n      </a>\n   </li>`)).join("")].join("")}};d=new URL(i("27Lyk").resolve("3FECK"),import.meta.url).toString();var h=new class extends _{_parentEl=document.querySelector(".details");_errorMessage="Did not find details for this item :(";loadCoinDetails(e){console.log(e),this._data=e}addHandlerDetails(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerAddFavorite(e){this._parentEl.addEventListener("click",(t=>{const a=t.target.closest(".btn-fav");a&&(a.classList.add("bounce"),e())}))}_generateMarkup(){const e=this._data.priceChangePerc>0?"--g":"--r",a=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0});return`\n    <div class="crypto-details__top">\n        <div class="crypto-details__top__header">\n        <img src="${this._data.img}" class="crypto-details__top__header__img"/>\n        <span class="crypto-details__top__header__name">${this._data.name} </span>\n        <span class="crypto-details__top__header__symbol">(${this._data.symbol.toUpperCase()})</span>\n        <img src = "${t(d)}" class="crypto-details__top__header__${this._data.bookmark?"fav-enabled btn-fav":"fav-disabled btn-fav"}"/>\n        </div>\n        <div class="crypto-details__top__price">        \n          <span class="crypto-details__top__price__value">${a.format(this._data.price)}</span>\n          <span class="crypto-details__top__price__perc${e}">(${this._data.priceChangePerc>0?["+",this._data.priceChangePerc.toFixed(2)].join(""):this._data.priceChangePerc.toFixed(2)}%)</span>\n        </div>\n    </div>\n    <div class="crypto-details__bottom">\n        <li class="crypto-details__bottom__fixed">ATH</li>\n        <li class="crypto-details__bottom__data">$${this._data.ath} </li>\n\n        ${this._data.fromAthPerc<0?'<li class ="crypto-details__bottom__fixed">From ATH</li> ':""}\n        ${this._data.fromAthPerc<0?`<li class="crypto-details__bottom__data">${this._data.fromAthPerc.toFixed(2)}%</li> `:""}\n       \n        <li class="crypto-details__bottom__fixed">Market Cap</li>\n        <li class="crypto-details__bottom__data">${a.format(this._data.marketCap)} (#${this._data.rank})</li>\n        \n        <li class="crypto-details__bottom__fixed">Volume 24h</li>\n        <li class="crypto-details__bottom__data">${a.format(this._data.volume24h)}</li>\n        \n        <li class="crypto-details__bottom__fixed">Circ. supply</li>\n        <li class="crypto-details__bottom__data">${this._data.circulatingSupply}</li>\n        \n        <li class="crypto-details__bottom__fixed">Total supply</li>\n        <li class="crypto-details__bottom__data">${this._data.totalSupply?this._data.totalSupply:"-"}</li>\n       \n    </div>\n    `}};var u=new class extends _{_parentEl=document.querySelector(".pagination");addHandlerPageChange(e){this._parentEl.addEventListener("click",(t=>{const a=t.target.closest(".btn--inline");if(!a)return;const n=+a.dataset.goto;e(n)}))}_generateMarkup(){const e=this._data.currentPage,t=Math.ceil(this._data.cryptoInfo.length/this._data.resultsPerPage);return 1===e&&t>1?`\n    <button data-goto="${e+1}" class="btn--inline  pagination__btn--next">\n    <span>Page ${e+1}</span>\n \n  </button> \n    `:t>1&&e===t?`\n    <button data-goto="${e-1}" class="btn--inline  pagination__btn--prev">\n            <span>Page${e-1}</span>\n          </button>\n    `:e<t?`\n        <button data-goto="${e-1}" class="btn--inline  pagination__btn--prev">\n         \n            <span>Page ${e-1}</span>\n          </button>\n\n          <button data-goto="${e+1}" class="btn--inline  pagination__btn--next">\n            <span>Page ${e+1}</span>\n    \n          </button> \n    `:""}};var m=new class{_parentElement=document.querySelector(".search");getQuery(){const e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}addHandlerSearch(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault(),e()}))}_clearInput(){this._parentElement.querySelector(".search__field").value=""}};const g=function(){!function(e){const t=o.search.cryptoInfo.find((t=>t.id===e));console.log(t),o.activeCoin=t}(window.location.hash.slice(1)),h.render(o.activeCoin)},v=function(e){p.render(c(e)),u.render(o.search)},f=async function(){try{h.renderSpinner();const e=m.getQuery();await async function(e){try{const t=await s(`https://api.coingecko.com/api/v3/coins/${e}`);o.activeCoin={id:t.id,symbol:t.symbol,marketCap:t.market_data.market_cap.usd,img:t.image.large,name:t.name,price:t.market_data.current_price.usd,priceChangePerc:t.market_data.price_change_percentage_24h,volume24h:t.market_data.total_volume.usd,rank:t.market_cap_rank,circulatingSupply:t.market_data.circulating_supply,totalSupply:t.market_data.max_supply,ath:t.market_data.ath.usd,fromAthPerc:t.market_data.ath_change_percentage.usd,bookmark:!1}}catch(e){throw console.log(e),e}}(e),console.log(o.activeCoin),h.render(o.activeCoin)}catch(e){console.log(e)}},y=function(){!function(){if(o.activeCoin.bookmark||o.favorites.push(o.activeCoin),o.activeCoin.bookmark){const e=o.favorites.findIndex((e=>e.id===o.activeCoin.id));o.favorites.splice(e,1)}o.activeCoin.bookmark=!o.activeCoin.bookmark}(),h.render(o.activeCoin)};!async function(){try{p.renderSpinner(),await async function(){try{const e=await s("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'");o.search.cryptoInfo=e.map((e=>({id:e.id,symbol:e.symbol,marketCap:e.market_cap,img:e.image,name:e.name,price:e.current_price,priceChangePerc:e.price_change_percentage_24h,volume24h:e.total_volume,rank:e.market_cap_rank,circulatingSupply:e.circulating_supply,totalSupply:e.max_supply,ath:e.ath,fromAthPerc:e.ath_change_percentage})))}catch(e){throw console.log(e),e}}(),p.render(c()),u.render(o.search),g(),h.render(o.activeCoin)}catch(e){console.log(e)}}(),h.addHandlerDetails(g),h.addHandlerAddFavorite(y),u.addHandlerPageChange(v),m.addHandlerSearch(f);
//# sourceMappingURL=index.aea767b0.js.map
import{S as p,i as g}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function y(e,n){if(e.hits&&e.hits.length>0){const s=e.hits.map(({webformatURL:t,largeImageURL:o,likes:i,views:u,comments:d,downloads:f,tags:h})=>{const m=h.split(",").join(", ");return`<div class="card">
              <a href="${o}">
                <img src="${t}" alt="${m}" />
              </a>
            <div class="card-properties">
                <ul class="card-list">
                    <li>Likes <span class="accent-item">${i}</span></li>
                    <li>Views <span class="accent-item">${u}</span></li>
                    <li>Comments <span class="accent-item">${d}</span></li>
                    <li>Downloads <span class="accent-item">${f}</span></li>
                </ul>
            </div>
            </div>`}).join("");n.insertAdjacentHTML("beforeend",s),new p(".card-container a",{captionsData:"alt",captionDelay:250}).refresh()}else l("Sorry, there are no images matching your search query. Please try again!")}function L(e){e.style.display="block"}function b(e){e.style.display="none"}function l(e){g.error({message:e,position:"topRight",titleColor:"white",messageColor:"white",timeout:5e3,backgroundColor:"#EF4040"})}function w(e){return fetch(`https://pixabay.com/api/?key=48242250-abd806f4b021d280ea207da17&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).then(r=>r).catch(r=>{throw console.log(r),r})}const a=document.querySelector(".card-container"),S=document.querySelector(".search-form"),c=document.querySelector(".loader");S.addEventListener("submit",E);function E(e){e.preventDefault();const n=e.currentTarget,s=n.elements.query.value;a.innerHTML="",L(c),w(s).then(r=>y(r,a)).catch($).finally(()=>{n.reset(),b(c)})}function $(e){console.log(e),l("Sorry, there was an error with the request. Please try again later.")}
//# sourceMappingURL=index.js.map

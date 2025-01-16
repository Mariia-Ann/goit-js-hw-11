import{S as f,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function p(o){return fetch(`https://pixabay.com/api/?key=48242250-abd806f4b021d280ea207da17&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>t).catch(t=>{throw console.log(t),t})}const c=document.querySelector(".card-container"),g=document.querySelector(".search-form"),l=document.querySelector(".loader");g.addEventListener("submit",y);function y(o){o.preventDefault();const n=o.currentTarget,i=n.elements.query.value;c.innerHTML="",w(),p(i).then(b).catch(L).finally(()=>{n.reset(),S()})}function b(o){if(o.hits&&o.hits.length>0){const n=o.hits.map(({webformatURL:t,largeImageURL:e,likes:r,views:s,comments:u,downloads:d,tags:h})=>{const m=h.split(",").join(", ");return`<div class="card">
      <a href="${e}">
        <img src="${t}" alt="${m}" />
      </a>
    <div class="card-properties">
        <ul class="card-list">
            <li>Likes <span class="accent-item">${r}</span></li>
            <li>Views <span class="accent-item">${s}</span></li>
            <li>Comments <span class="accent-item">${u}</span></li>
            <li>Downloads <span class="accent-item">${d}</span></li>
        </ul>
    </div>
    </div>`}).join("");c.insertAdjacentHTML("beforeend",n),new f(".card-container a",{captionsData:"alt",captionDelay:250}).refresh()}else a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",titleColor:"white",messageColor:"white",timeout:5e3,backgroundColor:"#EF4040"})}function L(o){console.log(o),a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",titleColor:"white",messageColor:"white",timeout:5e3,backgroundColor:"#EF4040"})}function w(){l.style.display="block"}function S(){l.style.display="none"}
//# sourceMappingURL=index.js.map

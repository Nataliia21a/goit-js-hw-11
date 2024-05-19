import"./assets/vendor-86291ea8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const n="https://pixabay.com/api/",a="43905959-78fd6b1a15a9bfecd4ebaa3d3",i=(o="dog")=>{const r=new URLSearchParams({key:a,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${n}?${r}`).then(l=>{if(!l.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return l.json()})},u=o=>o.map(r=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
          />
          <ul class="gallery-card">
            <li>
              <p>likes</p>
              <p>${r.likes}</p>
            </li>
            <li>
              <p>views</p>
              <p>${r.views}</p>
            </li>
            <li>
              <p>comments</p>
              <p>${r.comments}</p>
            </li>
            <li>
              <p>downloads</p>
              <p>${r.downloads}</p>
            </li>
          </ul>
        </a>
      </li>`).join("");document.querySelector(".input-search");document.querySelector(".btn-search");const d=document.querySelector(".gallery");document.querySelector(".gallery-item");document.querySelector(".gallery-link");document.querySelector(".gallery-image");document.querySelector(".gallery-card");document.querySelector(".loader");i().then(o=>{d.innerHTML=u(o.hits)}).catch(o=>console.log(o));
//# sourceMappingURL=commonHelpers.js.map

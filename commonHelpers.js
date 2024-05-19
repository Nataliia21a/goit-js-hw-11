import{i,S as u}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const p="https://pixabay.com/api/",d="43905959-78fd6b1a15a9bfecd4ebaa3d3",y=(s="dog")=>{const e=new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${p}?${e}`).then(o=>{if(!o.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return o.json()})},m=s=>s.map(e=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
          />
          <ul class="gallery-card">
            <li>
              <p>likes</p>
              <p>${e.likes}</p>
            </li>
            <li>
              <p>views</p>
              <p>${e.views}</p>
            </li>
            <li>
              <p>comments</p>
              <p>${e.comments}</p>
            </li>
            <li>
              <p>downloads</p>
              <p>${e.downloads}</p>
            </li>
          </ul>
        </a>
      </li>`).join(""),f=document.querySelector(".search-form");document.querySelector(".input-search");document.querySelector(".btn-search");const l=document.querySelector(".gallery");document.querySelector(".gallery-item");document.querySelector(".gallery-link");document.querySelector(".gallery-image");document.querySelector(".gallery-card");const c=document.querySelector(".loader");function h(s){s.preventDefault();const e=s.target.elements.searchImages.value.trim();if(console.log(e),e===""){l.innerHTML="",s.target.reset(),i.error({message:"Input field can not be empty",position:"topRight",timeout:2e3,color:"red"});return}l.innerHTML="",c.classList.remove("is-hidden"),y(e).then(o=>{console.log(o),o.total===0&&i.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),l.innerHTML=m(o.hits),l.style.display="flex",l.style.flexWrap="wrap",l.style.gap="20px 24px",l.style.justifyContent="center",new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}).catch(o=>console.log(o)).finally(()=>{s.target.reset(),c.classList.add("is-hidden")})}f.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map

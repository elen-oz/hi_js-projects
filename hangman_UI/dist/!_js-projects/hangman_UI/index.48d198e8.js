//* ------ Model ------- //
const e=["leg","foot","arm","hand","toe","finger","tongue"];let o=e[Math.floor(Math.random()*e.length)];console.log(o);const t=[],s=[];let n=0,r=!1;const l=o.length,a=document.querySelector("#word"),i=document.querySelector("#wrong-letters"),c=document.querySelector("#message"),d=()=>{a&&(a.innerHTML=`
      ${o.split("").map(e=>`
            <span class="letter">
              ${t.includes(e)?e.toUpperCase():""}
            </span>
          `).join("")}
    `);let e="";a&&(e=a.innerText.split("\n").join("")),c&&e.toUpperCase()===o.toUpperCase()&&(c.innerText="You won! \uD83D\uDE08",c.classList.add("win-color"),r=!0)},p=()=>{i&&(i.innerHTML=`
      ${s.length>0?"<p> Wrong Letters:</p>":""}
      ${s.map(e=>`<span>${e.toUpperCase()}</span>`)}
    `)};//* ------ Game starts here ----- //
window.addEventListener("keydown",e=>{if(c&&n===l&&(c.innerText="You lost \uD83E\uDD21",c.classList.add("lose-color"),r=!0),!r){let r=e.key;/^[a-zA-Z]$/.test(r)?o.includes(r)?t.includes(r)?c&&(c.innerText=`${r.toUpperCase()} - was already!`,c.classList.add("info-color"),setTimeout(()=>{c.innerText="",c.classList.remove("info-color")},2e3)):(t.push(r),d()):s.includes(r)?c&&(c.innerText=`${r.toUpperCase()} - was already!`,c.classList.add("info-color"),setTimeout(()=>{c.innerText="",c.classList.remove("info-color")},2e3)):(s.push(r),n+=1,p()):c&&(c.innerText=`${r.toUpperCase()} - is not a letter!`,c.classList.add("info-color"),setTimeout(()=>{c.innerText="",c.classList.remove("info-color")},2e3))}}),d();
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function d(){}function E(e){return e()}function L(){return Object.create(null)}function m(e){e.forEach(E)}function I(e){return typeof e=="function"}function N(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function H(e){return Object.keys(e).length===0}function P(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function T(e){return document.createElement(e)}function A(e){return Array.from(e.childNodes)}let v;function f(e){v=e}const c=[],w=[],h=[],k=[],M=Promise.resolve();let y=!1;function S(){y||(y=!0,M.then(C))}function b(e){h.push(e)}const g=new Set;let u=0;function C(){if(u!==0)return;const e=v;do{try{for(;u<c.length;){const t=c[u];u++,f(t),z(t.$$)}}catch(t){throw c.length=0,u=0,t}for(f(null),c.length=0,u=0;w.length;)w.pop()();for(let t=0;t<h.length;t+=1){const n=h[t];g.has(n)||(g.add(n),n())}h.length=0}while(c.length);for(;k.length;)k.pop()();y=!1,g.clear(),f(e)}function z(e){if(e.fragment!==null){e.update(),m(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(b)}}const J=new Set;function W(e,t){e&&e.i&&(J.delete(e),e.i(t))}function B(e,t,n,i){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),i||b(()=>{const l=e.$$.on_mount.map(E).filter(I);e.$$.on_destroy?e.$$.on_destroy.push(...l):m(l),e.$$.on_mount=[]}),o.forEach(b)}function F(e,t){const n=e.$$;n.fragment!==null&&(m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function D(e,t){e.$$.dirty[0]===-1&&(c.push(e),S(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(e,t,n,i,r,o,l,O=[-1]){const p=v;f(e);const s=e.$$={fragment:null,ctx:[],props:o,update:d,not_equal:r,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:L(),dirty:O,skip_bound:!1,root:t.target||p.$$.root};l&&l(s.root);let _=!1;if(s.ctx=n?n(e,t.props||{},(a,$,...x)=>{const q=x.length?x[0]:$;return s.ctx&&r(s.ctx[a],s.ctx[a]=q)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](q),_&&D(e,a)),$}):[],s.update(),_=!0,m(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){const a=A(t.target);s.fragment&&s.fragment.l(a),a.forEach(j)}else s.fragment&&s.fragment.c();t.intro&&W(e.$$.fragment),B(e,t.target,t.anchor,t.customElement),C()}f(p)}class Q{$destroy(){F(this,1),this.$destroy=d}$on(t,n){if(!I(n))return d;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!H(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function U(e){let t;return{c(){t=T("main"),t.innerHTML=`<div class="headerTitle svelte-1nnahqd"><span><h1 class="title"><img src="./logo.png" class="topLogo" alt="FLL Hydrog\xE8ne"/>Hydrog\xE8ne</h1></span></div> 
  <hr class="hr1"/> 
  <div><h2 class="subtitle">Qu&#39;est-ce que l\u2019hydrog\xE8ne</h2> 
    <p class="subtitle">L&#39;hydrog\xE8ne est la plus petite mol\xE9cule qui existe dans la nature. Elle se compose de deux atomes identiques combinant simplement un proton et un \xE9lectron. L&#39;atome d&#39;hydrog\xE8ne est si petit qu&#39;il se faufile partout. La combustion d&#39;hydrog\xE8ne produit 3 fois plus d&#39;\xE9nergie que l&#39;essence. Il est pr\xE9sent dans l&#39;eau et dans beaucoup de gaz.</p> 
    <hr class="hr2"/> 
    <h2 class="subtitle">Comment produire de l\u2019hydrog\xE8ne</h2> 
    <p class="subtitle">Pour produire de l&#39;hydrog\xE8ne, on utilise principalement le gaz naturel CH<sub>4</sub>. \xC0 la fin de ce processus, on obtient du CO<sub>2</sub> qui contribue \xE0 l&#39;effet de serre. Une autre solution est d&#39;utiliser une \xE9lectrolyse de l&#39;eau. Le principe est que, \xE0 l&#39;aide de deux \xE9lectrodes, l&#39;anode et la cathode, on fait passer du courant \xE9lectrique dans l&#39;eau, s\xE9parant ainsi l&#39;hydrog\xE8ne de l&#39;oxyg\xE8ne.</p></div> 
  <hr class="hr1"/> 
  <h2 class="subtitle">Mais encore...</h2> 
  <div class="grid"><div class="card"><img src="./Toyota.jpg" alt="Image 1"/> 
      <div class="card-overlay"><h3>Premi\xE8rement</h3> 
        <p>Les moteurs \xE0 hydrog\xE8ne peuvent \xEAtre une solution int\xE9ressante pour de
          nombreuses raisons. Tout d&#39;abord, l&#39;hydrog\xE8ne est une source d&#39;\xE9nergie
          propre et renouvelable qui ne produit pas de gaz \xE0 effet de serre
          lorsqu&#39;elle est utilis\xE9e dans un moteur. Cela peut contribuer \xE0
          r\xE9duire l&#39;impact de l&#39;utilisation de v\xE9hicules sur l&#39;environnement et
          \xE0 lutter contre le changement climatique.</p></div></div> 
    <hr class="separationhr"/> 
    <div class="card"><img src="./Hydrogene-vert.jpg" alt="Image 2"/> 
      <div class="card-overlay"><h3>Deuxi\xE8mement</h3> 
        <p>L&#39;hydrog\xE8ne peut \xEAtre produit \xE0 partir de diff\xE9rentes
          sources d&#39;\xE9nergie renouvelables, telles que l&#39;\xE9nergie solaire ou
          \xE9olienne. Cela signifie que les moteurs \xE0 hydrog\xE8ne peuvent
          fonctionner sans d\xE9pendre des combustibles fossiles, qui sont limit\xE9s
          et non durables.</p></div></div> 
    <hr class="separationhr"/> 
    <div class="card"><img src="./wasserstoff.jpg" alt="Image 3"/> 
      <div class="card-overlay"><h3>Troisi\xE8mement</h3> 
        <p>Les moteurs \xE0 hydrog\xE8ne peuvent \xEAtre plus efficaces et plus
          performants que les moteurs \xE0 essence ou diesel. Ils peuvent offrir
          des performances sup\xE9rieures en termes de puissance, de vitesse et
          d&#39;autonomie, ce qui peut \xEAtre attrayant pour les conducteurs.</p></div></div> 
    <hr class="separationhr"/> 
    <div class="card"><img src="./hydrogene.jpg" alt="Image 4"/> 
      <div class="card-overlay"><h3>En resum\xE9</h3> 
        <p>Les moteurs \xE0 hydrog\xE8ne sont une solution int\xE9ressante car
          ils peuvent contribuer \xE0 la protection de l&#39;environnement, \xEAtre
          aliment\xE9s par des sources d&#39;\xE9nergie renouvelables et offrir des
          performances sup\xE9rieures \xE0 celles des moteurs \xE0 essence ou diesel.</p></div></div></div> 
  <footer><p>\xA9 Copyright 2022 - JetWig &amp; imbwbl</p> 
    <i class="fa-brands fa-github"><a href="https://github.com/JetWig">\xA0 -- @JetWig</a></i> 
    <br/> 
    <br/> 
    <i class="fa-brands fa-github"><a href="https://github.com/Imbwbl">\xA0 -- @imbwbl</a></i></footer>`},m(n,i){P(n,t,i)},p:d,i:d,o:d,d(n){n&&j(t)}}}class G extends Q{constructor(t){super(),K(this,t,null,U,N,{})}}new G({target:document.getElementById("app")});

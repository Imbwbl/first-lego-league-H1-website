(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function a(){}function E(e){return e()}function L(){return Object.create(null)}function m(e){e.forEach(E)}function j(e){return typeof e=="function"}function N(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function P(e){return Object.keys(e).length===0}function S(e,t,n){e.insertBefore(t,n||null)}function I(e){e.parentNode&&e.parentNode.removeChild(e)}function T(e){return document.createElement(e)}function A(e){return Array.from(e.childNodes)}let _;function d(e){_=e}const c=[],k=[],g=[],w=[],H=Promise.resolve();let y=!1;function M(){y||(y=!0,H.then(O))}function v(e){g.push(e)}const h=new Set;let p=0;function O(){const e=_;do{for(;p<c.length;){const t=c[p];p++,d(t),z(t.$$)}for(d(null),c.length=0,p=0;k.length;)k.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];h.has(n)||(h.add(n),n())}g.length=0}while(c.length);for(;w.length;)w.pop()();y=!1,h.clear(),d(e)}function z(e){if(e.fragment!==null){e.update(),m(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(v)}}const B=new Set;function D(e,t){e&&e.i&&(B.delete(e),e.i(t))}function F(e,t,n,i){const{fragment:s,after_update:o}=e.$$;s&&s.m(t,n),i||v(()=>{const l=e.$$.on_mount.map(E).filter(j);e.$$.on_destroy?e.$$.on_destroy.push(...l):m(l),e.$$.on_mount=[]}),o.forEach(v)}function K(e,t){const n=e.$$;n.fragment!==null&&(m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(e,t){e.$$.dirty[0]===-1&&(c.push(e),M(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(e,t,n,i,s,o,l,C=[-1]){const f=_;d(e);const r=e.$$={fragment:null,ctx:[],props:o,update:a,not_equal:s,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:L(),dirty:C,skip_bound:!1,root:t.target||f.$$.root};l&&l(r.root);let b=!1;if(r.ctx=n?n(e,t.props||{},(u,$,...x)=>{const q=x.length?x[0]:$;return r.ctx&&s(r.ctx[u],r.ctx[u]=q)&&(!r.skip_bound&&r.bound[u]&&r.bound[u](q),b&&Q(e,u)),$}):[],r.update(),b=!0,m(r.before_update),r.fragment=i?i(r.ctx):!1,t.target){if(t.hydrate){const u=A(t.target);r.fragment&&r.fragment.l(u),u.forEach(I)}else r.fragment&&r.fragment.c();t.intro&&D(e.$$.fragment),F(e,t.target,t.anchor,t.customElement),O()}d(f)}class G{$destroy(){K(this,1),this.$destroy=a}$on(t,n){if(!j(n))return a;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!P(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function J(e){let t;return{c(){t=T("main"),t.innerHTML=`<div class="headerTitle svelte-gy0fsy"><a href="#" target="_blank" rel="noreferrer"><img src="./logo.png" class="logo svelte svelte-gy0fsy" alt="Svelte Logo"/> 
      <h1 class="title svelte-gy0fsy">Hydrog\xE8ne</h1></a></div> 
  <hr class="hr1"/> 
  <div><h2 class="subtitle svelte-gy0fsy">Qu&#39;est-ce que l\u2019hydrog\xE8ne</h2> 
    <p class="subtitle svelte-gy0fsy">L&#39;hydrog\xE8ne est la plus petite mol\xE9cule qui existe dans la nature. Elle se compose de deux atomes identiques combinant simplement un proton et un \xE9lectron. L&#39;atome d&#39;hydrog\xE8ne est si petit qu&#39;il se faufile partout. La combustion d&#39;hydrog\xE8ne produit 3 fois plus d&#39;\xE9nergie que l&#39;essence. Il est pr\xE9sent dans l&#39;eau et dans beaucoup de gaz.</p> 
    <hr class="hr2"/> 
    <h2 class="subtitle svelte-gy0fsy">Comment produire de l\u2019hydrog\xE8ne</h2> 
    <p class="subtitle svelte-gy0fsy">Pour produire de l&#39;hydrog\xE8ne, on utilise principalement le gaz naturel CH<sub>4</sub>. \xC0 la fin de ce processus, on obtient du CO<sub>2</sub> qui contribue \xE0 l&#39;effet de serre. Une autre solution est d&#39;utiliser une \xE9lectrolyse de l&#39;eau. Le principe est que, \xE0 l&#39;aide de deux \xE9lectrodes, l&#39;anode et la cathode, on fait passer du courant \xE9lectrique dans l&#39;eau, s\xE9parant ainsi l&#39;hydrog\xE8ne de l&#39;oxyg\xE8ne.</p></div> 
  <hr class="hr1"/> 
  <h2 class="subtitle svelte-gy0fsy">Mais encore...</h2> 
  <div class="grid"><div class="card"><img src="./Toyota.jpg" alt="Image 1"/> 
      <div class="card-overlay"><h3>Premi\xE8rement</h3> 
        <p>Les moteurs \xE0 hydrog\xE8ne peuvent \xEAtre une solution int\xE9ressante pour de
          nombreuses raisons. Tout d&#39;abord, l&#39;hydrog\xE8ne est une source d&#39;\xE9nergie
          propre et renouvelable qui ne produit pas de gaz \xE0 effet de serre
          lorsqu&#39;elle est utilis\xE9e dans un moteur. Cela peut contribuer \xE0
          r\xE9duire l&#39;impact de l&#39;utilisation de v\xE9hicules sur l&#39;environnement et
          \xE0 lutter contre le changement climatique.</p></div></div> 
    <div class="card"><img src="./Hydrogene-vert.jpg" alt="Image 2"/> 
      <div class="card-overlay"><h3>Deuxi\xE8mement</h3> 
        <p>L&#39;hydrog\xE8ne peut \xEAtre produit \xE0 partir de diff\xE9rentes
          sources d&#39;\xE9nergie renouvelables, telles que l&#39;\xE9nergie solaire ou
          \xE9olienne. Cela signifie que les moteurs \xE0 hydrog\xE8ne peuvent
          fonctionner sans d\xE9pendre des combustibles fossiles, qui sont limit\xE9s
          et non durables.</p></div></div> 
    <div class="card"><img src="./wasserstoff.jpg" alt="Image 3"/> 
      <div class="card-overlay"><h3>Troisi\xE8mement</h3> 
        <p>Les moteurs \xE0 hydrog\xE8ne peuvent \xEAtre plus efficaces et plus
          performants que les moteurs \xE0 essence ou diesel. Ils peuvent offrir
          des performances sup\xE9rieures en termes de puissance, de vitesse et
          d&#39;autonomie, ce qui peut \xEAtre attrayant pour les conducteurs.</p></div></div> 
    <div class="card"><img src="./hydrogene.jpg" alt="Image 4"/> 
      <div class="card-overlay"><h3>En resum\xE9</h3> 
        <p>les moteurs \xE0 hydrog\xE8ne sont une solution int\xE9ressante car
          ils peuvent contribuer \xE0 la protection de l&#39;environnement, \xEAtre
          aliment\xE9s par des sources d&#39;\xE9nergie renouvelables et offrir des
          performances sup\xE9rieures \xE0 celles des moteurs \xE0 essence ou diesel.</p></div></div></div>`},m(n,i){S(n,t,i)},p:a,i:a,o:a,d(n){n&&I(t)}}}class R extends G{constructor(t){super(),U(this,t,null,J,N,{})}}new R({target:document.getElementById("app")});

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function u(){}function j(e){return e()}function q(){return Object.create(null)}function m(e){e.forEach(j)}function E(e){return typeof e=="function"}function I(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function O(e){return Object.keys(e).length===0}function N(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function S(e){return document.createElement(e)}function P(e){return Array.from(e.childNodes)}let v;function d(e){v=e}const c=[],L=[],h=[],w=[],z=Promise.resolve();let b=!1;function A(){b||(b=!0,z.then(C))}function y(e){h.push(e)}const g=new Set;let p=0;function C(){const e=v;do{for(;p<c.length;){const t=c[p];p++,d(t),M(t.$$)}for(d(null),c.length=0,p=0;L.length;)L.pop()();for(let t=0;t<h.length;t+=1){const n=h[t];g.has(n)||(g.add(n),n())}h.length=0}while(c.length);for(;w.length;)w.pop()();b=!1,g.clear(),d(e)}function M(e){if(e.fragment!==null){e.update(),m(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(y)}}const J=new Set;function W(e,t){e&&e.i&&(J.delete(e),e.i(t))}function B(e,t,n,o){const{fragment:s,after_update:i}=e.$$;s&&s.m(t,n),o||y(()=>{const a=e.$$.on_mount.map(j).filter(E);e.$$.on_destroy?e.$$.on_destroy.push(...a):m(a),e.$$.on_mount=[]}),i.forEach(y)}function F(e,t){const n=e.$$;n.fragment!==null&&(m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function D(e,t){e.$$.dirty[0]===-1&&(c.push(e),A(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(e,t,n,o,s,i,a,H=[-1]){const f=v;d(e);const r=e.$$={fragment:null,ctx:[],props:i,update:u,not_equal:s,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:q(),dirty:H,skip_bound:!1,root:t.target||f.$$.root};a&&a(r.root);let _=!1;if(r.ctx=n?n(e,t.props||{},(l,$,...x)=>{const k=x.length?x[0]:$;return r.ctx&&s(r.ctx[l],r.ctx[l]=k)&&(!r.skip_bound&&r.bound[l]&&r.bound[l](k),_&&D(e,l)),$}):[],r.update(),_=!0,m(r.before_update),r.fragment=o?o(r.ctx):!1,t.target){if(t.hydrate){const l=P(t.target);r.fragment&&r.fragment.l(l),l.forEach(T)}else r.fragment&&r.fragment.c();t.intro&&W(e.$$.fragment),B(e,t.target,t.anchor,t.customElement),C()}d(f)}class Q{$destroy(){F(this,1),this.$destroy=u}$on(t,n){if(!E(n))return u;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(t){this.$$set&&!O(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function U(e){let t;return{c(){t=S("main"),t.innerHTML=`<div class="nav"><input type="checkbox" id="nav-check"/> 
    <div class="nav-header"></div> 
    <div class="nav-btn"><label for="nav-check"><span></span> 
        <span></span> 
        <span></span></label></div> 

    <div class="nav-links"><button onclick="displayHome()">Home</button> 
      <button onclick="displayTeam()">Team</button> 
      <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">Contact</a></div></div> 
  <div class="team"><h1>Hi</h1></div> 

  <div class="headerTitle svelte-1nnahqd"><span><h1 class="title"><img src="./logo.png" class="topLogo" alt="FLL Hydrog\xE8ne"/>Hydrog\xE8ne</h1></span></div> 
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
    <i class="fa-brands fa-github"><a href="https://github.com/Imbwbl">\xA0 -- @imbwbl</a></i></footer> 
  <script>function displayTeam() {
      document.querySelector('.team').style.cssText = 'width: 600px; ' +
              'position: fixed; ' +
              'visibility: visible;' +
              'height: 100%;' +
              'width: 100%;' +
              'z-index: 9999999;' ;
    }

    function displayHome(){
      document.querySelector('.team').style.cssText = 'visibility: hidden;' +
              'position: absolute;' ;
    }<\/script>`},m(n,o){N(n,t,o)},p:u,i:u,o:u,d(n){n&&T(t)}}}class G extends Q{constructor(t){super(),K(this,t,null,U,I,{})}}new G({target:document.getElementById("app")});

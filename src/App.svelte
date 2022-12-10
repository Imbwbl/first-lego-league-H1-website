<script>
  import svelteLogo from './assets/logo.png'
  import Counter from './lib/Header.svelte'
  import LocomotiveScroll from 'locomotive-scroll';

</script>

<main>
  <div class="headerTitle">
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      <h1 class="title">Hydrogène</h1>
    </a>
  </div>

  <figure class="image-block">
    <figcaption>
      <h3>
        Premièrement
      </h3>
      <p>Les moteurs à hydrogène peuvent être une solution intéressante pour de nombreuses raisons. Tout d'abord, l'hydrogène est une source d'énergie propre et renouvelable qui ne produit pas de gaz à effet de serre lorsqu'elle est utilisée dans un moteur. Cela peut contribuer à réduire l'impact de l'utilisation de véhicules sur l'environnement et à lutter contre le changement climatique.</p>
    </figcaption>
  </figure>

  <figure class="image-block2">
    <figcaption>
      <h3>
        Deuxièmement
      </h3>
      <p>Deuxièmement, l'hydrogène peut être produit à partir de différentes sources d'énergie renouvelables, telles que l'énergie solaire ou éolienne. Cela signifie que les moteurs à hydrogène peuvent fonctionner sans dépendre des combustibles fossiles, qui sont limités et non durables.</p>
    </figcaption>
  </figure>

  <figure class="image-block3">
    <figcaption>
      <h3>
        Troisièmement
      </h3>
      <p>Les moteurs à hydrogène peuvent être plus efficaces et plus performants que les moteurs à essence ou diesel. Ils peuvent offrir des performances supérieures en termes de puissance, de vitesse et d'autonomie, ce qui peut être attrayant pour les conducteurs.</p>
    </figcaption>
  </figure>

  <figure class="image-block4">
    <figcaption>
      <h3>
        En resumé
      </h3>
      <p>
        En résumé, les moteurs à hydrogène sont une solution intéressante car ils peuvent contribuer à la protection de l'environnement, être alimentés par des sources d'énergie renouvelables et offrir des performances supérieures à celles des moteurs à essence ou diesel.</p>
    </figcaption>
  </figure>



</main>

<style>
  .logo {
    height: 5em;
    padding: 1.5em;
    padding-right: 2em;
    will-change: filter;
    position: relative;
    float: left;
  }
  @keyframes scale {
    from {
      transform: scale(0) rotate(180deg);
    }
    to {
      transform: scale(1) rotate(0deg);
    }
  }


  .headerTitle {
    display: inline-block;
    animation: scale 400ms linear alternate;
  }

  .title {
    float: right;
    color: #2a2a2a;
  }
  .headerTitle:hover {
    filter: drop-shadow(0 0 2em #646cffaa
    );
  }

</style>



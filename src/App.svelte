

<main>
  <div class="nav">
    <input type="checkbox" id="nav-check">
    <div class="nav-header">
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>

    <div class="nav-links">
      <a href="//github.io/jo_geek" target="_blank">Home</a>
      <a href="http://stackoverflow.com/users/4084003/" target="_blank">Team</a>
      <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">Contact</a>
    </div>
  </div>
  <div class="headerTitle">
    <span>
      <h1 class="title"><img src="./logo.png" class="topLogo" alt="FLL Hydrogène" />Hydrogène</h1>
    </span>
  </div>
  <hr class="hr1">
  <div>
    <h2 class="subtitle">Qu'est-ce que l’hydrogène</h2>
    <p class="subtitle">
      L'hydrogène est la plus petite molécule qui existe dans la nature. Elle se compose de deux atomes identiques combinant simplement un proton et un électron. L'atome d'hydrogène est si petit qu'il se faufile partout. La combustion d'hydrogène produit 3 fois plus d'énergie que l'essence. Il est présent dans l'eau et dans beaucoup de gaz.
    </p>
    <hr class="hr2">
    <h2 class="subtitle">Comment produire de l’hydrogène</h2>
    <p class="subtitle">
      Pour produire de l'hydrogène, on utilise principalement le gaz naturel CH<sub>4</sub>. À la fin de ce processus, on obtient du CO<sub>2</sub> qui contribue à l'effet de serre. Une autre solution est d'utiliser une électrolyse de l'eau. Le principe est que, à l'aide de deux électrodes, l'anode et la cathode, on fait passer du courant électrique dans l'eau, séparant ainsi l'hydrogène de l'oxygène.
    </p>
  </div>
  <hr class="hr1">
  <h2 class="subtitle">Mais encore...</h2>
  <div class="grid">
    <div class="card">
      <img src="./Toyota.jpg" alt="Image 1">
      <div class="card-overlay">
        <h3>Premièrement</h3>
        <p>Les moteurs à hydrogène peuvent être une solution intéressante pour de
          nombreuses raisons. Tout d'abord, l'hydrogène est une source d'énergie
          propre et renouvelable qui ne produit pas de gaz à effet de serre
          lorsqu'elle est utilisée dans un moteur. Cela peut contribuer à
          réduire l'impact de l'utilisation de véhicules sur l'environnement et
          à lutter contre le changement climatique.</p>
      </div>
    </div>
    <hr class="separationhr">
    <div class="card">
      <img src="./Hydrogene-vert.jpg" alt="Image 2">
      <div class="card-overlay">
        <h3>Deuxièmement</h3>
        <p>L'hydrogène peut être produit à partir de différentes
          sources d'énergie renouvelables, telles que l'énergie solaire ou
          éolienne. Cela signifie que les moteurs à hydrogène peuvent
          fonctionner sans dépendre des combustibles fossiles, qui sont limités
          et non durables.</p>
      </div>
    </div>
    <hr class="separationhr">
    <div class="card">
      <img src="./wasserstoff.jpg" alt="Image 3">
      <div class="card-overlay">
        <h3>Troisièmement</h3>
        <p>Les moteurs à hydrogène peuvent être plus efficaces et plus
          performants que les moteurs à essence ou diesel. Ils peuvent offrir
          des performances supérieures en termes de puissance, de vitesse et
          d'autonomie, ce qui peut être attrayant pour les conducteurs.</p>
      </div>
    </div>
    <hr class="separationhr">
    <div class="card">
      <img src="./hydrogene.jpg" alt="Image 4">
      <div class="card-overlay">
        <h3>En resumé</h3>
        <p>Les moteurs à hydrogène sont une solution intéressante car
          ils peuvent contribuer à la protection de l'environnement, être
          alimentés par des sources d'énergie renouvelables et offrir des
          performances supérieures à celles des moteurs à essence ou diesel.</p>
      </div>
    </div>
  </div>
  <footer>
    <p>© Copyright 2022 - JetWig & imbwbl</p>
    <i class="fa-brands fa-github"><a href=https://github.com/JetWig>&nbsp -- @JetWig</a></i>
    <br>
    <br>
    <i class="fa-brands fa-github"><a href="https://github.com/Imbwbl">&nbsp -- @imbwbl  </a></i>
  </footer>

</main>

<style>

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
    animatiomn: scale 400s linear alternate;
    transition: all 500ms;
  }

  .headerTitle:hover{
    transition: all 500ms;
    filter: drop-shadow(0 0 2em #646cffaa);
  }
</style>

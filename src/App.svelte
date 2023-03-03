<script>
  let number;
  function seconds(check) {
    number = check.currentTarget.id
  }
  let number2;
  function seconds2(check2) {
    number2 = check2.currentTarget.id
  }
</script>
<main>





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
  <hr class="hr2">
  <h1 class="subtitle">Qu'avons nous fait?</h1>
  <p class="subtitle">
    Nous avons choisi de faire une recherche sur le sujet de l'hydrogène et la mission du robot est de déposer dans l'unité de production de l'hydrogène des matériaux qui serviront à construire une “station service” où les véhicules qui roulent à l'hydrogène peuvent venir faire le plein.
    Nous avons choisi ce thème car nous entendons beaucoup parler de l'hydrogène dans les médias.
  </p>
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



  <hr class="hr1">
  <h1 class="subtitle" style="text-decoration: underline">Consultatation d'experts</h1>
  <h3 class="subtitle">Benjamin Goldmann</h3>
  <p class="subtitle">
    Nous sommes allés à l’EPFL interviewer Monsieur Benjamin Goldman, doctorant au laboratoire d’ingénierie moléculaire des nano matériaux optoélectroniques.
  </p>
  <div class="videos grid ">

    <div class="card">

      <div class="">
        <h4>Questions:</h4>
        <p>- Quelles études avez-vous faits, et faites actuellement? <button id="0" on:click={seconds}>00:00</button></p>
        <p>- Quel a été votre parcours scolaire? <button id="15" on:click={seconds}>00:15</button></p>
        <p>- Pourquoi avez-vous choisi le domaine de la chimie? <button id="33" on:click={seconds}>00:33</button></p>
        <p>- Comment fonctionnent ces feuilles concrétement? <button id="60" on:click={seconds}>01:00</button></p>
        <p>- Est-ce que vous pensez à l'industrialiser plus tard? <button id="105" on:click={seconds}>01:45</button></p>
        <p>- Que pourrait être le coût? <button id="143" on:click={seconds}>02:23</button></p>
        <p>- Quelles entreprises pourraient être visées? <button id="165" on:click={seconds}>02:45</button></p>
        <p>- Avez-vous posé un brevet? <button id="213" on:click={seconds}>03:33</button></p>
        <p>- Combien de molécules d'hydrogène sont produites par feuille? <button id="236" on:click={seconds}>03:56</button></p>
        <p>- Comptez-vous à monter une start-up? <button id="256" on:click={seconds}>04:16</button></p>
        <p>- Pourquoi utiliser l'hydrogène à la place d'autres énergies? <button id="267" on:click={seconds}>04:27</button></p>
        <p>- Comment ces molécules se transforment-t-elles? <button id="314" on:click={seconds}>05:14</button></p>
        <p>- Y-a-t-il des stations à hydrogène en Suisse? <button id="339" on:click={seconds}>05:39</button></p>
        <p>- Y-a-t-il d'autres laboratoires sur le campus qui travaillent sur l'hydrogène? <button id="367" on:click={seconds}>06:07</button></p>
        <p>- Comment récuperez-vous l'hydrogène de la feuille? <button id="415" on:click={seconds}>06:55</button></p>
        <p>- Pourrait-on éviter de mélanger l'oxygène avec l'hydrogène? <button id="439" on:click={seconds}>07:19</button></p>
        <p>- Quel est l'avenir de l'hydrogène? <button id="478" on:click={seconds}>07:58</button></p>
        <p>- Comment pourrons nous diminuer le contact avec l'air pendant la transportation? <button id="552" on:click={seconds}>09:12</button></p>
        <p>- Comment fonctionnerait le moteur à hydrogène? <button id="583" on:click={seconds}>09:43</button></p>
        <p>- A quelle température l'hydrogène devient-t-il liquide? <button id="620" on:click={seconds}>10:20</button></p>
        <p>- Quels sont les réserves d'hydrogène sur la planète? <button id="655" on:click={seconds}>10:55</button></p>
        <p>- Que pensez-vous sur les voitures à hydrogène? <button id="710" on:click={seconds}>11:50</button></p>

      </div>
    </div>
    <div class="card">
      <iframe style="border-radius: 10px" width="600" height="315" src="https://www.youtube.com/embed/uieAoV_ymEA?start={number}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <!-- <iframe style="border-radius: 20px" width="560" height="315" src="https://www.youtube.com/embed/mjVMFTAza3g?start={coucou}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
  </div>
  <br>
  <h3 class="subtitle">SoHHytec</h3>
  <p class="subtitle">
    Nous sommes également allé interviwer une compagnie s'appelant "SoHHytec" sur le campus de l'EPFL pour en savoir plus sur leur projet.
  </p>
  <div class="videos grid ">

    <div class="card">

      <div class="">
        <h4>Questions:</h4>
        <p>- Comment fonctionne votre projet? <button id="1" on:click={seconds2}>00:00</button></p>
        <p>- Que faites vous avec l'énergie produite? <button id="212" on:click={seconds2}>03:33</button></p>
        <p>- Quelle est la quantité d'énergie produite et consommée?<button id="368" on:click={seconds2}>06:08</button></p>
      </div>
    </div>
    <div class="card">
      <iframe style="border-radius: 10px" width="600" height="315" src="https://www.youtube.com/embed/moTCngPsY8E?start={number2}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    </div>
    <!-- <iframe style="border-radius: 20px" width="560" height="315" src="https://www.youtube.com/embed/mjVMFTAza3g?start={coucou}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
  </div>


  <hr class="hr1">
  <h2 class="subtitle" style="text-decoration: underline">Quelques liens importants</h2>
  <div class="card" style="width: 100%; padding: 20px; margin: 0;">

    <div class="">
      <h4>A step towards solar fuels out of thin air : </h4>
      <a href="https://youtu.be/2VGMw4dd23Q">https://youtu.be/2VGMw4dd23Q</a>
      <h4>C'est pas sorcier : Qu'est-ce que l'hydrogène : </h4>
      <a href="https://youtu.be/WQvDcmRpbN4">https://youtu.be/WQvDcmRpbN4</a>
      <h4>C'est pas sorcier : Hydrogène, combustible du futur : </h4>
      <a href="https://youtu.be/7Bn9Gp5kuyI">https://youtu.be/7Bn9Gp5kuyI</a>
      <h4>C'est pas sorcier : Comment fonctionne une pile à hydrogène : </h4>
      <a href="https://youtu.be/QDXqF4Qn7Wk">https://youtu.be/QDXqF4Qn7Wk</a>
      <h4>Esprit sorcier : "Hydrogène, combustible du futur" : </h4>
      <a style="margin-bottom: 50px" href="https://youtu.be/vyUW9gi0-gg">https://youtu.be/vyUW9gi0-gg</a>
    </div>
  </div>
    <footer>
    <p>© Copyright 2023 - JetWig & imbwbl</p>
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


<template>
  <div class="min-vw-100 background-gif-attack">
    <div class="row w-100 ">
      <div class="col-4 lg-6 ps-5 conteudo">
        
        <h1 class="display-4 fw-bold">{{ name }}</h1>
        <p class="lead">ALtura:
          <br></br> Habilidade:</p>
        <button class="btn btn-danger">Mais Detalhes</button>
      </div>


      <div class="col-lg-2 text-end pe-0 imgcentro">
        <img
        src="https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/04/Eren-Attack-Titan-Final-Season.jpeg"
        class="img-fluid"
        alt="Titã de Ataque"
        style="max-height: 80vh; object-fit: contain;"> 
      </img>
      </div>
    </div>
  </div>
</template>

<script>
const { name } = await $fetch("https://api.attackontitanapi.com/titans/1");

export default {
  data() {
    return {
      name,
    };
  },
};
</script>

<style>
.background-gif-attack {
  background-image: url("/attack.gif");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  margin: 0;
}
 .imgcentro {
    margin-top: 25vh;
    width: 70vh;
  }
.conteudo {
  height: 50vh;
  width: 30vw;
  margin-top: 20vh;
  margin-left: 45vh;
  background-image: linear-gradient(rgb(0, 0, 0), rgb(99, 0, 0));
  color: white;
  
}
</style>

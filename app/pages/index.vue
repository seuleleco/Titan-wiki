<template>
  <div>
    <button @click="alterar">Alterar</button>
    <div v-if="mostrarAttack">
      <Attack />
    </div>
    <div v-else>
      <Hammer />
    </div>
  </div>
</template>

<script setup>
import Attack from "../components/titans/Attack.vue";
import Hammer from "../components/titans/Hammer.vue";

const mostrarAttack = ref(true);

const alterar = () => {
  mostrarAttack.value = !mostrarAttack.value;
};
</script>

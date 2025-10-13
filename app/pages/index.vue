<template>
  <div>
    <button @click="componenteAtual = 'Attack'">Titan de ataque</button>
    <button @click="componenteAtual = 'Hammer'">Titan Martelo</button>
    <button @click="componenteAtual = 'Colossal'">Titan Colossal</button>
    <button @click="componenteAtual = 'Blindado'">Titan Blindado</button>
    <button @click="componenteAtual = 'Female'">Titan Femea</button>

    <transition name="fade" mode="out-in">
      <component :is="componenteAtivo" />
    </transition>
  </div>
</template>

<script setup>
import Attack from "~/components/titans/Attack.vue";
import Hammer from "~/components/titans/Hammer.vue";
import Colossal from "~/components/titans/Colossal.vue";
import Blindado from "~/components/titans/Blindado.vue";
import Female from "~/components/titans/Female.vue";

const componenteAtual = shallowRef("Attack");

const titansComponents = {
  Attack,
  Hammer,
  Colossal,
  Blindado,
  Female,
};

const componenteAtivo = computed(() => titansComponents[componenteAtual.value]);
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-out;
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
  filter: blur(10px);
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
</style>

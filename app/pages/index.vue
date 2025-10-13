<template>
  <div class="containerbg min-vw-100">
    <Header
      :modelValue="componenteAtual"
      @update:modelValue="componenteAtual = $event"
    ></Header>

    <transition name="fade" mode="out-in">
      <component :is="componenteAtivo" />
    </transition>
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Attack from "~/components/titans/Attack.vue";
import Hammer from "~/components/titans/Hammer.vue";
import Colossal from "~/components/titans/Colossal.vue";
import Blindado from "~/components/titans/Blindado.vue";
import Female from "~/components/titans/Female.vue";
import Bestial from "~/components/titans/Bestial.vue";
import Carroca from "~/components/titans/Carroca.vue";
import Mandibula from "~/components/titans/Mandibula.vue";

const titansComponents = {
  Attack,
  Hammer,
  Colossal,
  Blindado,
  Female,
  Bestial,
  Carroca,
  Mandibula,
};
const componenteAtual = ref("Attack");
const componenteAtivo = computed(() => titansComponents[componenteAtual.value]);
</script>

<style>
body {
  margin: 0;
  background-color: black;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
  filter: blur(10px);
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-30px);
  filter: blur(10px);
}
</style>

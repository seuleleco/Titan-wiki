<template>
  <div class="containerbg min-vw-100">
    <Header
      :modelValue="componenteAtual"
      @update:modelValue="componenteAtual = $event"
    />

    <transition name="fade" mode="out-in">
      <component :is="componenteAtivo" />
    </transition>
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";

const titansComponents = {
  Attack: resolveComponent("Attack"),
  Hammer: resolveComponent("Hammer"),
  Colossal: resolveComponent("Colossal"),
  Blindado: resolveComponent("Blindado"),
  Female: resolveComponent("Female"),
};
const componenteAtual = ref("Attack");
const componenteAtivo = computed(() => titansComponents[componenteAtual.value]);
</script>

<style>
body {
  margin: 0;
}
/* .containerbg {
  background-color: black;
  min-height: 100vh;
  min-width: 100vh;
} */

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

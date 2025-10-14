<template>
  <header>
    <div
      class="headerContainer d-flex align-items-center justify-content-center gap-3"
    >
      <button @click="set('Attack')">Titan de ataque</button>
      <button @click="set('Hammer')">Titan Martelo</button>
      <button @click="set('Colossal')">Titan Colossal</button>
      <button @click="set('Blindado')">Titan Blindado</button>
      <button @click="set('Female')">Titan Femea</button>
      <button @click="set('Bestial')">Titan Bestial</button>
      <button @click="set('Mandibula')">Titan Mandibula</button>
      <button @click="set('Carroca')">Titan Carroça</button>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({ modelValue: { type: String, required: true } });
const emit = defineEmits(["update:modelValue"]);

function set(novoComponente) {
  emit("update:modelValue", novoComponente);
}
</script>

<style>
.headerContainer {
  background-color: brown;
  min-height: 50px;
  min-width: 100vw;
  margin: 0;
}
</style>

<template>
  <header>
    <div
        class="headerContainer d-flex align-items-center justify-content-center gap-3"
    >
      <Motion
          v-for="(titan, index) in titans"
          :key="titan.value"
          :initial="{ '--rotation': '0deg' }"
          :animate="modelValue === titan.value ? { '--rotation': '360deg' } : { '--rotation': '0deg' }"
          :transition="{ duration: 2, repeat: modelValue === titan.value ? Infinity : 1, ease: 'linear' }"
          class="rotating-border-btn"
          :class="{ active: modelValue === titan.value }"
          @click="set(titan.value)"
      >
       <img :src="titan.image" :alt="titan.label" class="btn-titan">
      </Motion>
    </div>
  </header>
</template>

<script setup>
import { Motion } from 'motion-v'

const props = defineProps({ modelValue: { type: String, required: true } });
const emit = defineEmits(["update:modelValue"]);

const titans = [
  { value: 'Attack', label: 'Titan de ataque', image: 'https://imgur.com/77faZ91.jpg' },
  { value: 'Hammer', label: 'Titan Martelo', image: 'https://imgur.com/o1sRYYH.jpg' },
  { value: 'Colossal', label: 'Titan Colossal', image: 'https://imgur.com/INNeHsk.png' },
  { value: 'Blindado', label: 'Titan Blindado', image: 'https://imgur.com/oSMn3Ax.jpg' },
  { value: 'Female', label: 'Titan Femea', image: 'https://imgur.com/IF2lGbE.jpg' },
  { value: 'Bestial', label: 'Titan Bestial', image:'https://i.imgur.com/fGgnYTN.png' },
  { value: 'Mandibula', label: 'Titan Mandibula', image: 'https://imgur.com/ABlDQwR.png' },
  { value: 'Carroca', label: 'Titan Carroça', image: 'https://imgur.com/VXt1J1K.jpg' }
];

function set(novoComponente) {
  emit("update:modelValue", novoComponente);
}
</script>

<style>
.headerContainer {
  background: linear-gradient(#630000, black);
  min-height: auto;
  padding: 10px;
  min-width: 100vw;
  margin: 0;
}

.btn-titan {
  position: relative;
  z-index: 4;
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 7px;
}

.rotating-border-btn.active {
  transform: scale(1.2);
  z-index: 10;
}

.rotating-border-btn {
  position: relative;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  --rotation: 0deg;
  transition: transform 0.2s ease-in-out;
}

.rotating-border-btn.active::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: conic-gradient(from var(--rotation), #00a4ff, #a20000, #00a4ff, #a20000, #00a4ff, #a20000);
  border-radius: inherit;
}

.rotating-border-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background-color: black;
  border-radius: inherit;
  z-index: 3;
  border-radius: 7px;
}
</style>

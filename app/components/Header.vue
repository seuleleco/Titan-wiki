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
  { value: 'Attack', label: 'Titan de ataque', image: 'https://cdn.oneesports.gg/cdn-data/2021/12/Anime_AttackonTitan_Season4_Part2_Eren_Featured.jpg' },
  { value: 'Hammer', label: 'Titan Martelo', image: 'https://i.pinimg.com/736x/33/7a/79/337a7960c69545f10d1ac9d526a3d579.jpg' },
  { value: 'Colossal', label: 'Titan Colossal', image: 'https://static.wikia.nocookie.net/shingekinokyojin/images/c/c9/Colossal_Titan_%28Anime%29_character_image_%28Bertholdt_Hoover%29.png' },
  { value: 'Blindado', label: 'Titan Blindado', image: 'https://i.pinimg.com/736x/b5/f8/5a/b5f85a6383b3bd93154dcfdf6792b4e6.jpg' },
  { value: 'Female', label: 'Titan Femea', image: 'https://scontent.fpet4-1.fna.fbcdn.net/v/t39.30808-6/474587344_2107741936310773_8464016311505314497_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHYbaEwXZyMxHrjSS1XdavOyfVZCP0ym1fJ9VkI_TKbVzX6GS85MsMHDbxSs40pQNttReQgr6E473b2qUFNViyH&_nc_ohc=uCF7luVIL4MQ7kNvwGarB4B&_nc_oc=AdnnUODbuKURh05-TQVbAfW0sktdmAIQcRSr0-8W4uVDV1MlkHZP1KUPm73cgx-q1KuSIKSAEhM1Ute5uiuVZr_2&_nc_zt=23&_nc_ht=scontent.fpet4-1.fna&_nc_gid=jIsXUvvmfyX3YbcvYRBYfg&oh=00_AflHfSTs_j_JkZm9mN9JlZXZ51pJejNmrRRXzFEIi_pG8w&oe=6940EAB6' },
  { value: 'Bestial', label: 'Titan Bestial', image:'https://i.imgur.com/fGgnYTN.png' },
  { value: 'Mandibula', label: 'Titan Mandibula', image: 'https://static.wikia.nocookie.net/shingekinokyojin/images/c/c9/Jaw_Titan_%28Anime%29_character_image_%28Falco_Grice%29.png' },
  { value: 'Carroca', label: 'Titan Carroça', image: 'https://i.pinimg.com/736x/60/9f/38/609f38a4051026135d3757f4b25d31bc.jpg' }
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

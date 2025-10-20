<template>
  <div class="maintenance-page">
    <h1>🚧 Site em Construção</h1>
    
  </div>
</template>

<style scoped>
.maintenance-page {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000;
  color: white;
  text-align: center;
}

.maintenance-page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("/constu.png");
  background-size: cover;
  filter: blur(7px);
  z-index: -1;
  
 }

 .maintenance-page::after {
    content: "";
  position: absolute;
  inset: 0;                
  background: radial-gradient(circle, transparent 45%, #000 100%);
  pointer-events: none;   
 }

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}
</style>
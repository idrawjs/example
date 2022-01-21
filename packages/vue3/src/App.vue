<template>
  <div class="app">
    <div ref="mount"></div>
  </div>
</template>

<script setup >
import iDraw from 'idraw';
import { ref, onMounted } from 'vue'
const mount = ref();
onMounted(() => {
  const idraw = new iDraw(mount.value, {
    width: 600,
    height: 400,
    contextWidth: 600,
    contextHeight: 400,
    devicePixelRatio: 1,
  });
  idraw.addElement({
    name: "rect-001",
    x: 140,
    y: 120,
    w: 200,
    h: 100,
    type: "rect",
    desc: {
      bgColor: "#f7d3c1",
      borderRadius: 20,
      borderWidth: 4,
      borderColor: "#ff6032",
    },
  })
})
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
canvas {
  border: 1px solid #888888;
}
</style>

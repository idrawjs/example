<template>
  <div class="app">
    <div ref="mycanvas"></div>
  </div>
</template>

<script>
import iDraw from 'idraw';

export default {
  name: 'App',
  components: {},
  methods: {},
  mounted() {
    const idraw = new iDraw(this.$refs.mycanvas, {
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
  }
}
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

<template>
  <renderer :size="{ w: 600, h: 400 }">
    <scene>
      <camera :position="{ z: 15 }"></camera>
      <mesh :obj="importedStl" :position="{ y: -200 }"></mesh>
    </scene>
  </renderer>
</template>

<script>
import { ModelStl } from 'vue-3d-model'
export default {
  name: 'HelloWorld',
  components: { ModelStl },
  props: {
    msg: String
  },
  computed: {
    importedStl(){
      var THREE = require ('three');
      var STLLoader = require('three-stl-loader')(THREE);
      var loader = new STLLoader();
      loader.load('../assets/cube.stl', function(geometry){
        var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        var mesh = new THREE.Mesh(geometry, material);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

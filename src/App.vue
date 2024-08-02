<template>
  <div>
    <div class=" bg-blue-500 text-white p-4 ">
    <nav class=" container mx-auto flex justify-between items-center">
      <div class=" text-lg font-bold">
        App
      </div>
      <ul>
    <span class="text-3xl cursor-pointer flex " @click="openNav">&#9776;</span>
    <div v-if="isNavOpen" class="fixed inset-0 bg-black bg-opacity-90 z-50 transition-all duration-500">
      <a href="javascript:void(0)" class="absolute top-5 right-11 text-white text-6xl" @click="closeNav">&times;</a>
      <div class="flex flex-col items-center justify-center h-full space-y-8">
        <a href="/" class="text-2xl text-gray-400 hover:text-white transition-colors">Home</a>
        <a href="/about" class="text-2xl text-gray-400 hover:text-white transition-colors">About</a>
        <a href="/sigin" class="text-2xl text-gray-400 hover:text-white transition-colors">Singnup</a>
        <a href="/contact" class="text-2xl text-gray-400 hover:text-white transition-colors">Contact</a>
    </div>
    <span class="text-3xl cursor-pointer flex " @click="openNav">&#9776;</span>
  </div>
      </ul>
    </nav>
    </div>
  <router-view/>
  </div>
</template>
 
<script>
import IconLines from './components/IconLines.vue'

export default{
  name:'App',
  components: {
    IconLines
  },
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    openNav() {
      this.isNavOpen = true;
    },
    closeNav() {
      this.isNavOpen = false;
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

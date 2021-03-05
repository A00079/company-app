<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <router-view />
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style>
body::-webkit-scrollbar {
  display: none;
}
body {
  background: #0c0e13 !important;
}
</style>

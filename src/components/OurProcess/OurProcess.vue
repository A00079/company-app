<template>
  <section class="text-gray-600 body-font">
    <div
      class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center"
    >
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1
          class="text-5xl tracking-tight font-extrabold text-white md:text-8xl mb-4"
        >
          <span class="block xl:inline">Our Process</span>
        </h1>
        <p class="mb-8 leading-relaxed text-white md:text-1xl font-semi-bold">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park
          mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
          try-hard chambray.
        </p>
        <div class="flex justify-center">
          <lottie
            :options="defaultOptions"
            :height="120"
            :width="120"
            v-on:animCreated="handleAnimation"
          />
          <lottie
            :options="defaultOptions"
            :height="120"
            :width="120"
            v-on:animCreated="handleAnimation"
          />
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <lottie
          :options="defaultOptions2"
          :height="470"
          :width="470"
          v-on:animCreated="handleAnimation"
        />
      </div>
    </div>
    <SubOurProcess />
  </section>
</template>
<script>
import animationData from "@/assets/animations/arrow-down.json";
import animationData2 from "@/assets/animations/data-analyst.json";
import SubOurProcess from "./SubOurProcess.vue";

export default {
  name: "OurProcess",
  data() {
    return {
      defaultOptions: { animationData: animationData, loop: true },
      defaultOptions2: { animationData: animationData2, loop: true },
      animationSpeed: 1,
    };
  },
  components:{
      SubOurProcess
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },

    stop: function () {
      this.anim.stop();
    },

    play: function () {
      this.anim.play();
    },

    pause: function () {
      this.anim.pause();
    },

    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed);
    },
  },
};
</script>
<style scoped>
</style>
<template>
  <section>
    <div class="bg-white h-96 hidden md:hidden lg:block xl:block 2xl:block">
      <lottie
        :options="defaultOptions"
        :height="420"
        :width="820"
        v-on:animCreated="handleAnimation"
      />
    </div>
    <div class="bg-white h-80 hidden w-full mx-auto md:block lg:hidden xl:hidden">
      <lottie
        :options="defaultOptions"
        :height="350"
        :width="450"
        v-on:animCreated="handleAnimation"
      />
    </div>
    <div class="bg-white h-40 w-full mx-auto md:hidden lg:hidden xl:hidden 2xl:hidden">
      <lottie
        :options="defaultOptions"
        :height="180"
        :width="260"
        v-on:animCreated="handleAnimation"
      />
    </div>
  </section>
</template>
<script>
import animationData from "@/assets/animations/design-plan.json";

export default {
  name: "SubOurProcess",
  data() {
    return {
      defaultOptions: { animationData: animationData, loop: true },
      animationSpeed: 1,
    };
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
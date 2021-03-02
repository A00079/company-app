<template>
  <section>
    <div class="bg-white h-96 hidden md:block lg:block xl:block">
      <lottie
        :options="defaultOptions"
        :height="420"
        :width="820"
        v-on:animCreated="handleAnimation"
      />
    </div>
    <div class="bg-white h-72 w-full mx-auto md:hidden lg:hidden xl:hidden">
      <lottie
        :options="defaultOptions"
        :height="350"
        :width="350"
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
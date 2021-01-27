<template>
  <div class="bg-white h-96">
    <lottie
      :options="defaultOptions"
      :height="420"
      :width="820"
      v-on:animCreated="handleAnimation"
    />
  </div>
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
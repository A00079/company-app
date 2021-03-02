<template>
  <div class="home">
    <HomeScreen />
    <OurWork />
    <Slider />
    <OurProcess />
    <HelpSupport />
    <FeaturedAPI />
    <Technologics />
    <AwesomeServices />
    <OurServices />
    <Testimonials />
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import HomeScreen from "@/components/HomeScreen/HomeScreen.vue";
import OurWork from "@/components/OurWork/OurWork.vue";
import OurProcess from "@/components/OurProcess/OurProcess.vue";
import HelpSupport from "@/components/HelpSupport/HelpSupport.vue";
import FeaturedAPI from "@/components/FeaturedAPI/FeaturedAPI.vue";
import Technologics from "@/components/Technologics/Technologics.vue";
import OurServices from "@/components/OurServices/OurServices.vue";
import AwesomeServices from "@/components/AwesomeServices/AwesomeServices.vue";
import Testimonials from "@/components/Testimonials/Testimonials.vue";
import Footer from "@/components/Footer/Footer.vue";
import Slider from "@/components/Sliders/Slider.vue";

export default {
  name: "Home",
  components: {
    Technologics,
    Testimonials,
    OurServices,
    HomeScreen,
    OurProcess,
    HelpSupport,
    AwesomeServices,
    FeaturedAPI,
    OurWork,
    Footer,
    Slider,
  },
};
</script>

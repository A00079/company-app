<template>
  <div class="home">
    <HomeScreen />
    <OurWork />
    <OurProcess />
    <HelpSupport />
    <FeaturedAPI />
    <Technologics />
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
import Testimonials from "@/components/Testimonials/Testimonials.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: 'Home',
  components:{
    Technologics,
    Testimonials,
    OurServices,
    HomeScreen,
    OurProcess,
    HelpSupport,
    FeaturedAPI,
    OurWork,
    Footer
  }
}
</script>

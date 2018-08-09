<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
import HomeSection from '~/components/HomeSection.vue'
import ContactSection from '~/components/ContactSection.vue'
import SocialSection from '~/components/SocialSection.vue'

export default {
  components: {
    HomeSection,
    ContactSection,
    SocialSection
  }
}
</script>

<style>
html {
  background-color: #4e9bfa; /*#7EC0EE*/
}
*, *:before, *:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
} 
</style>



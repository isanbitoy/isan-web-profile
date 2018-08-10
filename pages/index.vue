<template>
  <main>
    <section class="container contact"><ContactSection/></section>
      
    <section class="container home"><HomeSection/></section>

    <section class="container social"><SocialSection/></section>

    <section class="container footer">
      <div class="footer-wrapper">
          Content &copy; 2018 
          | isanbitoy
          | powered by <a v-bind:title="nuxtLink" v-bind:href="nuxtLink" target="_blank" style="text-decoration:none; color:#fff">Nuxt</a> 
          | <a v-bind:title="vueLink" v-bind:href="vueLink" target="_blank" style="text-decoration:none; color:#fff">Vue</a>
      </div>
    </section>
  </main>
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
  },
  data() {
    return {
      nuxtLink: 'https://nuxtjs.org/',
      vueLink: 'https://vuejs.org/'
    }
  }
}
</script>

<style>
[v-cloak] {
    display: none;
}
main {
    display: grid;
    grid-template-columns: 45% 5% 50%;
    grid-template-rows: minmax(100vh, auto) auto;
    grid-template-areas: 
          "home social contact"
          "footer footer footer";
}
.container {
    position: relative;
    padding: 15px;
}
.home {
    grid-area: home;
}
.social {
    grid-area: social;
}
.contact {
    grid-area: contact;
}
.footer {
    grid-area: footer;
}
.footer-wrapper {
    z-index: 1;
    width: 100%;
    font-size: 14px;
    text-align: center;
    color: #fff;
    font-family: 'Raleway', sans-serif;
}

/* 62em === 992px */
@media only screen and (max-width: 62em) {
  main {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: minmax(100vh, auto) 120px auto;
    grid-template-areas: 
          "home contact"
          "social social"
          "footer footer";
  }
}
/* 48em === 768px */
@media only screen and (max-width: 48em) {
  main {
    grid-template-columns: 100vw;
    grid-template-rows: minmax(100vh, auto) 120px minmax(100vh, auto) auto;
    grid-template-areas: 
          "home"
          "social"
          "contact"
          "footer";
  }
}
/* 30em === 480px */
@media only screen and (max-width: 30em) {
  main {
    grid-template-columns: 100vh;
  }
}
</style>


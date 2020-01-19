// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/plugins/globalComponents'
import '~/assets/style/index.scss'

export default function (Vue, { router, head, isClient }) {
  	// Set default layout as a global component
  	Vue.component('Layout', DefaultLayout)
  	head.link.push({
  		rel: 'stylesheet',
  		href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
  	})
}

<template>
	<Layout>
		<section id="index-layout">
			<transition name="fade" appear>
				<div class="landing__page">
					<figure>
						<g-image class="page-img" src="/img/me.png" />
					</figure>
					<h1>Lisandro Bitoy</h1>
					<ul>
						<li>full-stack web developer</li>
						<li>software developer</li>
					</ul>
					<div class="menu__button">
						<a @click="openOverlayMenu"></a>
					</div>
				</div>
			</transition>
		</section>
	</Layout>
</template>

<script>
import EventBus from '~/plugins/TheEventBus'

export default {
	metaInfo: {
		title: 'Welcome'
	},
	data: () => {
		return {
			setRestriction: false
		}	
	},
	methods: {
		openOverlayMenu: function() {
			EventBus.$emit('overlayMenu')
		}
	},
	mounted() {
		EventBus.$emit('restrictHeaderAndFooter', this.setRestriction)
	}
};
</script>
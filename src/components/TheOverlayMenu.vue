<template>
	<section id="menu__component">
		<nav class="overlay-menu" ref="thisOverlayMenu">
			<a class="close__button" @click="closeNav">&times;</a>
			<ul>
				<g-link to="/about">
					<li class="menu-box" v-show="isAboutVisible">
						<figure>
							<img src="@/assets/svg/undraw_about_me.svg" />
						</figure>
						<h4>About me</h4>
					</li>
				</g-link>
				<g-link to="/portfolio">
					<li class="menu-box" v-show="isPortfolioVisible">
						<figure>
							<img src="@/assets/svg/undraw_tabs.svg" />
						</figure>
						<h4>My Work</h4>
					</li>
				</g-link>
				<g-link to="/contact">
					<li class="menu-box" v-show="isContactVisible">
						<figure>
							<img src="@/assets/svg/undraw_contact_me.svg" />
						</figure>
						<h4>Contact me</h4>
					</li>
				</g-link>
			</ul>
		</nav>
	</section>
</template>

<script>
import EventBus from '~/plugins/TheEventBus'

export default {
	data: () => {
		return {
			isAboutVisible: true,
			isPortfolioVisible: true,
			isContactVisible: true
		}
	},
	created() {
		EventBus.$on('overlayMenu', () => {
			this.openNav()
		})
		EventBus.$on('restrictAboutMenu', (value) => {
			this.isAboutVisible = value
		})
		EventBus.$on('restrictPortfolioMenu', (value) => {
			this.isPortfolioVisible = value
		})
		EventBus.$on('restrictContactMenu', (value) => {
			this.isContactVisible = value
		})
	},
	methods: {
		openNav: function() {
			//this.$refs.thisOverlayMenu.classList.add('active')
			let el = document.querySelectorAll('.overlay-menu')
			el.forEach(e => {
				e.classList.add('active')
			})
		},
		closeNav: function() {
			this.$refs.thisOverlayMenu.classList.remove('active')
		}
	}
};
</script>
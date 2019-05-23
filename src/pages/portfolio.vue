<template>
	<Layout>
		<section id="portfolio-page">
			<div class="grid__layout">
				<h2>Portfolio</h2>
				<ul>
					<li v-for="(project, index) in projects" :key="index">
						<a :href="project.url" target="_blank">
							<i class="fa fa-link"></i>
							<article>
								<div class="content-figure">
									<figure>
										<img :src="project.img ? project.img : placeHolder" />
									</figure>
								</div>
								<div class="content-title">
									<h4 class="title">{{ project.projTitle }}</h4>
									<p>{{ project.desc }}</p>
								</div>
							</article>
						</a>
					</li>
				</ul>
			</div>
		</section>
	</Layout>
</template>

<script>
import EventBus from '~/plugins/TheEventBus'

export default {
	metaInfo: {
		title: 'Portfolio'
	},
	data: () => {
		return {
			setRestriction: true,
			setPortfolioVisibility: false,
			placeHolder: 'https://placehold.it/250x250',
			projects: [
				{
					img: '/img/portfolio/PiNoise.png',
					projTitle: 'PiNoise: All pinoy news',
					url: 'https://isanbitoy.github.io/PiNoise/',
					desc: 'Philippines news portal powered by NewsAPI.org'
				},
				{
					img: '/img/portfolio/ChainBreak.png',
					projTitle: 'Chain Break',
					url: '',
					desc: 'a libgdx platformer game'
				},
				{
					img: '',
					projTitle: 'PanPan Holiday',
					url: '',
					desc: ''
				},
				{
					img: '',
					projTitle: 'vue-skill-bar',
					url: 'https://isanbitoy.github.io/vue-skill-bar/',
					desc: 'a vuejs component libray that display skill bar progress'
				},
				{
					img: '',
					projTitle: 'vus-vue-slide-onscroll',
					url: 'https://isanbitoy.github.io/vue-slide-onscroll/',
					desc: 'a simple slide transition on scroll fro vue'
				}
			]
		}
	},
	mounted() {
		EventBus.$emit('restrictHeaderAndFooter', this.setRestriction)
		EventBus.$emit('restrictPortfolioMenu', this.setPortfolioVisibility)
	}
};
</script>
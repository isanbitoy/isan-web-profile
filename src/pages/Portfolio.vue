<template>
	<Layout>
		<section id="portfolio">
			<transition name="slide_up" appear>
				<div class="grid__layout">
					<!--<div class="portfoliotitle">
						<h2>Portfolio</h2>
						<div>Check my <a href="https://github.com/isanbitoy" target="_blank">Github</a> page for other projects
						</div>
					</div>-->
					<div class="breadcrumb--tag">
						<a @click="filterTag('tag_a')">Projects</a>
						<a @click="filterTag('tag_b')">Designs</a>
					</div>
					<ul>
						<li v-for="(project, index) in filteredContents" :key="index">
							<a :href="project.url" target="_blank">
								<article>
									<div class="content--figure">
										<figure>
											<img :src="project.img" />
										</figure>
									</div>
									<div class="content--title">
										<h4 class="title">{{ project.projTitle }}</h4>
										<p>{{ project.desc }}</p>
									</div>
								</article>
							</a>
						</li>
					</ul>
				</div>
			</transition>
		</section>
	</Layout>
</template>

<script>
import projects from '~/assets/data/project.json'

export default {
	metaInfo: {
		title: 'Portfolio'
	},
	data: () => {
		return {
			currentTag: 'tag_a',
			projects
		}
	},
	computed: {
		filteredContents: function() {
			let tempTag = this.currentTag;
			return this.projects
				.filter(function(item) {
					return item.tags.indexOf(tempTag) !== -1;
				})
		}
	},
	methods: {
		filterTag: function(tag) {
			this.currentTag = tag;
		}
	}
};
</script>
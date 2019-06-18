<template>
	<section id="portfolio-section">
		<div class="grid__layout">
			<h2>Portfolio</h2>
			<ul>
				<li v-for="(project, index) in projectData" :key="index">
					<a :href="project.url" target="_blank">
						<article>
							<figure class="box__figure">
								<i class="fa fa-link"></i>
								<img :src="project.img ? project.img : placeHolder" />
							</figure>
							<div class="box__info">
								<h4 class="content--title">{{ project.projTitle }}</h4>
								<p class="content--desc">{{ project.desc }}</p>
							</div>
						</article>
					</a>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
import projectData from '~/assets/data/project.json'

export default {
	data: () => {
		return {
			placeHolder: '/portfolio/page_not_found.jpg',
			projectData
		}
	}
};
</script>
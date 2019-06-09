<template>
	<section id="portfolio-section">
		<div class="grid__layout">
			<h2>Portfolio</h2>
			<ul>
				<li v-for="(project, index) in projectData" :key="index">
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
</template>

<script>
import projectData from '~/assets/data/project.json'

export default {
	data: () => {
		return {
			placeHolder: 'https://placehold.it/250x250',
			projectData
		}
	}
};
</script>
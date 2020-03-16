<template>
	<Layout>
		<section id="portfolio">
			<transition name="slide_up" appear>
				<div class="content__layout">
					<div class="breadcrumb--tag">
						<a @click.prevent="selectedTag = 'Project'">Projects</a>
						<a @click.prevent="selectedTag = 'Design'">Designs</a>
					</div>
					<!--Project list table -->
					<transition name="slide_up" appear>
					<table v-if="selectedTag === 'Project'">
						<tbody>
							<tr v-for="(project, index) in projects" :key="index">
								<a :href="project.url" target="_blank">
									<td>
										<i class="fa fa-check"></i>
										<div class="table-info">
											<span>{{ project.projTitle }}</span>
											<span>{{ project.desc }}</span>
										</div>
									</td>
								</a>
							</tr>
						</tbody>
					</table>
					</transition>
					
					<!--Design grid table -->
					<transition name="slide_up" appear>
					<ul v-if="selectedTag === 'Design'">
						<li v-for="(design, index) in designs" :key="index">
							<!--<a :href="design.url" target="_blank">-->
								<article>
									<div class="content--figure">
										<figure>
											<img :src="design.img" />
										</figure>
									</div>
								</article>
							<!--</a>-->
						</li>
					</ul>
					</transition>
					
				</div>
			</transition>
		</section>
	</Layout>
</template>

<script>
import projects from '~/assets/data/project.json'
import designs from '~/assets/data/design.json'

export default {
	metaInfo: {
		title: 'Portfolio'
	},
	data: () => {
		return {
			selectedTag: 'Project',
			projects,
			designs
		}
	}
};
</script>
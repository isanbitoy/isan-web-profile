<template>
	<section id="portfolio">
		<div class="portfolio__layout">
			<div class="portfolio--title">
				<h2>Portfolio</h2>
				<div>Check my <a href="https://github.com/isanbitoy" target="_blank">Github</a> page for other projects</div>
			</div>
			<div class="div-line"></div>
			<table>
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
		</div>
	</section>
</template>

<script>
import projects from '~/assets/data/project.json'

export default {
	data: () => {
		return {
			projects
		}
	}
};
</script>
<template>
	<section id="portfolio-section">
		<div class="div-line"></div>
		<div class="portfolio-layout">
			<h3>List of all projects I developed</h3>
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
		<div class="div-line"></div>
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
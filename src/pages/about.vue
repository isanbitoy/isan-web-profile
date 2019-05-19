<template>
	<Layout>
		<section id="about-page">
			<div class="about__section">
				<transition name="slide_left" appear>
					<a :href="resumeLink" target="_blank">
						<figure>
							<img src="@/assets/svg/undraw_profile.svg" />
							<span>My Resume</span>
						</figure>
					</a>
				</transition>
				<transition name="slide_right" appear>
					<div>
						<h2>About Me</h2>
						<p>{{ about_me }}</p>
					</div>
				</transition>
			</div>
			<div class="skill__section">
				<transition name="slide_up" appear><h2>What I do</h2></transition>
				<transition name="slide_up" appear>
					<ul>
						<li v-for="icon in icons" class="content-box">
							<span><i :class="icon.socialIcon"></i></span>
							<span><h4>{{ icon.socialTitle }}</h4></span>
						</li>
					</ul>
				</transition>
			</div>
		</section>
	</Layout>
</template>

<script>
import EventBus from '~/plugins/TheEventBus'

export default {
	metaInfo: {
		title: 'About Me'
	},
	data: () => {
		return {
			setRestriction: true,
			setAboutVisibility: false,
			resumeLink: '/files/Lisandro_A_Bitoy_Resume.pdf',
			about_me: "Hi I'm Lisandro, a full-stack web and software developer. Though I consider front-end development as my core strength and a hobby. Which I developed some projects that already endorsed within the open source community. On my free time you'll find me playing basketball, cycling, and coding. A certified pet lover, tech enthusiast, and an avid fan of movies & TV series.",
			icons: [
				{ 
					socialIcon: 'fa fa-css3', 
					socialTitle: 'front-end development'
				},
				{ 
					socialIcon: 'fa fa-database', 
					socialTitle: 'back-end development'
				},
				{ 
					socialIcon: 'fa fa-code', 
					socialTitle: 'software development'
				}
			],
		}
	},
	mounted() {
		EventBus.$emit('restrictHeaderAndFooter', this.setRestriction)
		EventBus.$emit('restrictAboutMenu', this.setAboutVisibility)
	}
};
</script>
<template>
	<section id="about-section">

		<div class="header__layout">
			<div>
				<figure class="header__layout--image">
					<img :src="imgLink" />
				</figure>
			</div>
			<div class="header__layout--info">
				<div class="name-info">
					<h1>Lisandro Bitoy</h1>
				</div>
				<div class="sub-info">
					<span>full-stack web developer</span>
					<span>software developer</span>
				</div>
			</div>
		</div>

		<div class="about__layout">
			<div>
				<ul class="about__layout--menu">
					<li><a class="anchor-link" href="#portfolio-section">Portfolio</a></li>
					<li><a :href="resumeLink" target="_blank">Resume</a></li>
					<li><a href="" target="_blank">Blog</a></li>
					<li><a class="anchor-link" href="#contact-section">Contact</a></li>
				</ul>
			</div>
			<p class="about__layout--info">{{ aboutMe }}</p>
		</div>

		<div class="skill__layout">
			<ul>
				<li v-for="icon in icons" class="skill__layout--content">
					<figure><img :src="icon.svgLink" /></figure>
					<span><h4>{{ icon.svgTitle }}</h4></span>
				</li>
			</ul>
		</div>

	</section>
</template>

<script>
export default {
	data: () => {
		return {
			imgLink: 'img/author.jpg',
			resumeLink: '/files/Lisandro_A_Bitoy_Resume.pdf',
			aboutMe: "Hi I'm Lisandro, a full-stack web and software developer. I consider front-end development as my core strength and a hobby. Which I developed some projects that already endorsed within the open source community. On my free time you'll find me playing basketball, cycling, and coding. A certified pet lover, tech enthusiast, and an avid fan of movies & TV series.",
			icons: [
				{
					svgLink: '/svg/front_end_dev.svg',
					svgTitle: 'front-end development'
				},
				{
					svgLink: '/svg/back_end_dev.svg',
					svgTitle: 'back-end development'
				},
				{
					svgLink: '/svg/software_dev.svg',
					svgTitle: 'software development'
				}
			]
		}
	},
	methods: {
		getScrollTop: function(element) {
			const id = element.getAttribute('href')
			return document.querySelector(id).offsetTop
		},
		scrollToIdOnClick: function(e) {
			e.preventDefault()
			const to = this.getScrollTop(e.currentTarget)
			window.scrollBy({
				top: to,
				left: 0,
				behavior: 'smooth'
			});
		}
	},
	mounted: function() {
		const menuItems = document.querySelectorAll('.anchor-link[href^="#"')
		menuItems.forEach(item => {
			item.addEventListener('click', this.scrollToIdOnClick)
		});
	}
};
</script>
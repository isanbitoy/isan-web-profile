<template>
	<div class="header-background">
	<div class="skewed"></div>
	
	<section id="header-layout">
		<div class="navigation__bar">
			<div>
				<figure class="img__box">
					<g-image class="nav-img" src="~/assets/img/author.png" />
				</figure>
				<div class="info__box">
					<h1 class="author__name">LISANDRO BITOY</h1>
					<ul>
						<li>
							<span data-tooltip="My Resume">
								<a :href="resumeLink" target="_blank">Resume</a>
							</span>
						</li>
						<li>
							<span data-tooltip="My Blog">
								<a href="" target="_blank">Blog site</a>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			resumeLink: '../files/Lisandro_A_Bitoy_Resume.pdf'
		}
	}
	/*
	methods: {
		onScroll: function() {
			let headerNav = document.querySelector('.navigation__bar')
			if (window.scrollY >= 200) {
				headerNav.classList.add('scrolled')
			}
			else {
				headerNav.classList.remove('scrolled')
			}
		}
	},
	created: function() {
		if (process.browser) {
			window.addEventListener('scroll', this.onScroll)
		}
	},
	destroyed: function() {
		if (process.browser) {
			window.removeEventListener('scroll', this.onScroll)
		}
	}
	*/
};
</script>
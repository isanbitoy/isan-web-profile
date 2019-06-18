<template>
	<div class="header-background">
		<div class="blur-background"></div>
		<section id="header-layout">
			<div class="navigation__bar">
				<div>
					<figure class="img__box">
						<g-image class="nav-img" :src="imgLink" />
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
			imgLink: '/img/author.jpg',
			resumeLink: 'https://drive.google.com/uc?id=127ycVo1WmdqHIK-PWE_ZU4avDGnfHYlP'
		}
	}
};
</script>
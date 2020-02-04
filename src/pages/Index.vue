<template>
	<Layout>
		<transition name="slide_down" appear>
			<section id="index">
				<div class="index__layout">
					<div class="info__box">
						<div class="name--layout">
							<h1 class="layout--title">
								<strong>
									<span>Hello, I am</span>
									<span>Lisandro Bitoy</span>
								</strong>
							</h1>
						</div>
						<p class="sub--layout">
							A web and software developer based in Davao, Philippines
						</p>
						<div class="button--layout">
							<a href="https://isan-resume.netlify.com/" 
								target="_blank" 
								class="info--button">
								<span>Resume</span>
							</a>
							<a href="https://github.com/isanbitoy" 
								target="_blank" 
								class="info--button">
								<span>Github</span>
							</a>
						</div>
					</div>
					<div class="svg__box">
						<img src="@/assets/svg/undraw_chilling.svg" />
					</div>
				</div>
			</section>
		</transition>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: 'Welcome'
	}
};
</script>
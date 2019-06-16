<template>
	<Layout>
		<about-section />
		<portfolio-section />
		<contact-section />
	</Layout>
</template>

<script>
import AboutSection from '~/sections/About'
import PortfolioSection from '~/sections/Portfolio'
import ContactSection from '~/sections/Contact'

export default {
	metaInfo: {
		title: 'Welcome'
	},
	components: {
		'about-section': AboutSection,
		'portfolio-section': PortfolioSection,
		'contact-section': ContactSection
	}
};
</script>
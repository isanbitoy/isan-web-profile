<template>
	<header>
		<div class="progress__container">
			<div class="progress__container--bar" id="progressBar"></div>
		</div>
	</header>
</template>

<script>
export default {
	methods: {
		onScroll: function() {
			let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
			let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			let scrolled = (winScroll / height) * 100;
			document.querySelector('#progressBar').style.width = scrolled + "%";
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
};
</script>
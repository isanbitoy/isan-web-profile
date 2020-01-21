<template>
	<header>
		<nav id="nav-items" class="nav__parent">
			<a class="nav__child" href="/">Home</a>
			<a class="nav__child" href="#portfolio">Portfolio</a>
	        <a class="nav__child" href="#contact">Contact</a>
	        <a class="nav__child" href="" target="_blank">Resume</a>
	        <a href="javascript:void(0);" class="icon" v-on:click="openNav">
				<i class="fa fa-bars"></i>
			</a>
		</nav>
	</header>
</template>

<script>
export default {
	methods: {
		onScroll: function() {
			let header_obj = document.querySelector('header')
			if (window.scrollY >= 200) {
				header_obj.classList.add('materialize')
			}
			else {
				header_obj.classList.remove('materialize')
			}
		},
		openNav: function() {
			let x = document.querySelector('#nav-items')
			if (x.className === 'nav__parent') {
				x.className += ' responsive'
			} else {
				x.className = 'nav__parent'
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
};
</script>
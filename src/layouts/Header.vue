<template>
	<section id="header-layout">
		<div class="navigation__bar">
			<div>
				<figure class="img__box">
					<g-link to="/">
						<i class="fa fa-home"></i>
						<img class="nav-img" src="/img/me.png" />
					</g-link>
				</figure>
				<div class="info__box">
					<h4>Lisandro Bitoy</h4>
					<ul>
						<li>full-stack web developer</li>
						<li>software developer</li>
					</ul>
				</div>
			</div>
			<div>
				<div class="menu__button">
					<a @click="openOverlay"></a>
				</div>
			</div>
		</div>
		<div class="division__bar"></div>
	</section>
</template>

<script>
import EventBus from '~/plugins/TheEventBus'

export default {
	methods: {
		openOverlay: function() {
			EventBus.$emit('overlayMenu')
		}
	}
};
</script>
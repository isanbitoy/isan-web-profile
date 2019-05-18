<template>
	<div class="layout">
		<overlay-menu/>
		<div v-show="isAllow">
			<header-layout/>
		</div>
		<slot/>
		<div v-show="isAllow">
			<footer-layout/>
		</div>
	</div>
</template>

<static-query>
query {
	metaData {
		siteName
	}
}
</static-query>

<script>
import EventBus from '~/plugins/TheEventBus'

export default {
	data: () => {
		return {
			isAllow: null
		}
	},
	created() {
		EventBus.$on('restrictHeaderAndFooter', (value) => {
			this.isAllow = value
		})
	}
};
</script>
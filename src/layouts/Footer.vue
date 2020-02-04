<template>
	<transition name="fade" appear>
		<footer>
			<span><small>&copy;</small></span>
			<span><small>{{ year }}</small></span>
			<span><small>{{ author }}</small></span>
			<span><small>{{ rights }}</small></span>
		</footer>
	</transition>
</template>

<script>
export default {
	data: () => {
		return {
			year: new Date().getFullYear(),
			author: 'Lisandro A. Bitoy.',
			rights: 'All Rights Reserved.'
		}
	}
};
</script>
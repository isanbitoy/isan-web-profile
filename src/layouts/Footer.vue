<template>
	<footer>
		<span><small>&copy;</small></span>
		<span><small>{{ year }}</small></span>
		<span><small>{{ author }}</small></span>
		<span><small>{{ rights }}</small></span>
	</footer>
</template>

<script>
export default {
	data: function() {
		return {
			year: new Date().getFullYear(),
			author: 'Lisandro A. Bitoy.',
			rights: 'Some Rights Reserved.'
		}
	}
};
</script>
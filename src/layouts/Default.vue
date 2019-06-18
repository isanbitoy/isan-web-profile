<template>
	<div class="default__layout">
		<transition name="slide_up" appear>
			<header-layout />
		</transition>
		<slot />
		<footer-layout />
	</div>
</template>

<static-query>
query {
	metaData {
		siteName
	}
}
</static-query>
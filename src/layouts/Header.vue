<template>
	<transition name="slide_down" appear>
		<header id="header">
			<div class="header__layout">
				<figure class="img__box">
					<a href="/">
						<img class="home-icon" src="@/assets/svg/home.svg" />
						<img class="nav-img" src="/img/me.png" />
					</a>
				</figure>
				<nav class="nav__parent">
					<a href="/portfolio" class="nav__child">
						Portfolio
					</a>
					<a href="/contact" class="nav__child">
						Contact
					</a>
				</nav>
			</div>
		</header>
	</transition>
</template>

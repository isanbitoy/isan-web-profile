<template>
	<transition name="slide_down" appear>
		<header id="header">
			<div class="header__layout">
				<figure class="img__box">
					<g-link to="/">
						<img class="home-icon" src="@/assets/svg/home.svg" />
						<img class="nav-img" src="/img/me.png" />
					</g-link>
				</figure>
				<nav class="nav__parent">
					<g-link to="/portfolio">
						<a class="nav__child">
							Portfolio
						</a>
					</g-link>
					<g-link to="/contact">
						<a class="nav__child">
							Contact
						</a>
					</g-link>
				</nav>
			</div>
		</header>
	</transition>
</template>

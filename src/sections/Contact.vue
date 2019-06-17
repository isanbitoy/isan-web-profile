<template>
	<section id="contact-section">
		<div class="contact__section">
			<div class="form__wrapper">

				<div class="info-box">
					<h2>Keep in Touch</h2>
					<div class="info-box__detail">
						<i class="fa fa-map-marker"></i>
						<div>
							<span>ADDRESS</span>
							<span>Tagum City, Davao del Norte</span>
						</div>
					</div>

					<div class="info-box__detail">
						<i class="fa fa-pencil"></i>
						<div>
							<span>EMAIL</span>
							<span>isanbitoy@gmail.com</span>
						</div>
					</div>

					<div class="info-box__detail">
						<i class="fa fa-phone"></i>
						<div>
							<span>PHONE</span>
							<span>(+63)995-108-5425</span>
						</div>
					</div>

					<p>Check and follow me @</p>
					<ul>
						<li v-for="icon in icons" :data-tooltip="icon.mediaToolTip">
							<a :href="icon.mediaLink" target="_blank">
								<i :class="icon.socialIcon"></i>
							</a>
						</li>
					</ul>
				</div>

				<!--Contact Form-->
				<form class="form-box" action="https://formspree.io/isanbitoy@gmail.com" method="POST">
					<fieldset>
						<input class="input-field" type="text" name="name" 
							    placeholder="Full Name" tabindex="1" required>
					</fieldset>
					<div class="field-group">
						<fieldset>
							<input type="email" name="email" 
								placeholder="Email Address" tabindex="2" required>
						</fieldset>
						<fieldset>
							<input type="tel" 
								name="phone" placeholder="Phone Number (optional)" 
								tabindex="3" required>
						</fieldset>
					</div>
					<fieldset>
						<textarea class="input-field" name="message" 
							placeholder="Type your message here...." 
							tabindex="4" required>
						</textarea>
					</fieldset>
						<fieldset>
							<input type="text" name="_gotcha" style="display:none"/>
						</fieldset>
					<fieldset>
						<button name="form_submit" type="submit" id="contact-submit" 
							value="Message Sent" data-submit="...Sending">
							    Submit
						</button>
					</fieldset>
				</form>
				
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data: () => {
		return {
			year: new Date().getFullYear(),
			icons: [
				{ 
					socialIcon: 'fa fa-google', 
					mediaLink: 'https://aboutme.google.com/?hl=en-GB', 
					mediaToolTip: 'Google' 
				},
				{ 
					socialIcon: 'fa fa-youtube', 
					mediaLink: 'https://www.youtube.com/channel/UCv0Y8wFLkI8ETRPpCUy2Ojw?view_as=subscriber', 
					mediaToolTip: 'Youtube' },
				{ 
					socialIcon: 'fa fa-codepen', 
					mediaLink: 'https://codepen.io/isanbitoy/', 
					mediaToolTip: 'Codepen' },
				{ 
					socialIcon: 'fa fa-github', 
					mediaLink: 'https://github.com/isanbitoy', 
					mediaToolTip: 'Github' 
				}
			]
		}
	}
};
</script>
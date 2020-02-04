<template>
	<Layout>
		<section id="contact">
			<div class="contact__layout">
				<div class="form__wrapper">
					
					<transition name="slide_left" appear>
						<div class="info--box">
							<h2>Keep in Touch</h2>
							<div class="info-box__detail">
								<img src="@/assets/svg/email.svg" />
								<div>
									<span>EMAIL</span>
									<span>isanbitoy@gmail.com</span>
								</div>
							</div>
							<div class="info-box__detail">
								<img src="@/assets/svg/mobile.svg" />
								<div>
									<span>MOBILE</span>
									<span>(+63)995-108-5425</span>
								</div>
							</div>
							<div class="info-box__detail">
								<img src="@/assets/svg/pin.svg" />
								<div>
									<span>ADDRESS</span>
									<span>Tagum City, Davao del Norte</span>
								</div>
							</div>
						</div>
					</transition>

					<!--Contact Form-->
					<transition name="slide_right" appear>
						<form class="form--box" action="https://formspree.io/isanbitoy@gmail.com" method="POST">
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
					</transition>

				</div>
			</div>
		</section>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: 'Contact'
	}
};
</script>
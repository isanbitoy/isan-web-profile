<template>
	<div class="social-wrapper">
		<div class="social-icon-container">
      <a v-bind:href="fbLink" target="_blank" v-bind:title="fbTitle" class="fa fa-facebook"></a>
      <a v-bind:href="gitLink" target="_blank" v-bind:title="gitTitle" class="fa fa-github"></a>
      <a v-bind:href="googleLink" target="_blank" v-bind:title="googleTitle" class="fa fa-google"></a>
      <a v-bind:href="codepenLink" target="_blank" v-bind:title="codepenTitle" class="fa fa-codepen"></a>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			fbLink: 'https://www.facebook.com/lisandro.bitoya',
      fbTitle: 'add me on Facebook',
      gitLink: 'https://github.com/isanbitoy',
      gitTitle: 'check my projects on GitHub',
      googleLink: 'https://plus.google.com/u/0/116882088650278653825',
      googleTitle: 'circle me on Google+',
      codepenLink: 'https://codepen.io/isanbitoy/',
      codepenTitle: 'check my profile on Codepen'
		}
	}
}
</script>

<style scoped>
.social-wrapper {
	  position: absolute;
    left: 50%;
    transform: translate(-50%);
}
.social-icon-container {
	  display: block;
    margin-top: 30px;
    text-align: center;
}
.fa {
  	padding: 25px;
  	margin: 5px;
  	font-size: 24px;
  	width: 80px;
  	height: auto;
  	border-radius: 50%;
  	text-align: center;
  	justify-content: center;
  	text-decoration: none;
  	border: 4px solid #fff;
    transition: all 0.5s;
    background: #fff;
}
.fa:hover {
    -webkit-animation: expand 0.5s ease-in-out;
    -moz-animation: expand 0.5s ease-in-out;
    animation: expand 0.5s ease-in-out;
    color: #fff;
}
@keyframes expand {
    33% { transform: scale(1.1); }
    66% { transform: scale(0.9); }
    100% { transform: scale(1.0); }
}
@-webkit-keyframes expand {
    33% { transform: scale(1.1); }
    66% { transform: scale(0.9); }
    100% { transform: scale(1.0); }
}
@-moz-keyframes expand {
    33% { transform: scale(1.1); }
    66% { transform: scale(0.9); }
    100% { transform: scale(1.0); }
}
.fa-facebook {
    color: #3B5998;
}
.fa-facebook:hover {
  	background: #3B5998;
}

.fa-github {
    color: #333;
}
.fa-github:hover {
  	background: #333;
}

.fa-google {
    color: #dd4b39;
}
.fa-google:hover {
  	background: #dd4b39;
}

.fa-codepen {
    color: #111;
}
.fa-codepen:hover {
  	background: #111;
}
@media only screen and (max-width: 992px) {
	.social-icon-container {
		display: flex;
		margin-top: 0;
	}
	.fa {
  	margin: 0 5px;
	}
}
</style>
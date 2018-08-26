<template>
	<div class="home-wrapper">
	
  <div class="card isan">
    <div class="img-box photo">
      <div class="info-box" v-bind:class="{ view:isActive }">
        <div class="main-info" style="padding:10px">
          <h2 style="font-size: 32px">{{ name }}</h2>
          <span>{{ title }}</span>
        </div>
        <div class="detailed-info">
          <div v-for="(details, index) in detail" v-bind:key="index">
            <span class="icon" v-bind:class="details.marker"></span>
            <span>{{ details.info }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="overlay" v-bind:class="{ view:isActive }">
      <div class="about-me">
        <h1 style="padding-top:20px; padding-bottom:5px">About Me</h1>
        <p style="padding-bottom:5px" v-for="(desc, index) in description" v-bind:key="index">{{ desc }}</p>
      </div>
    </div>
    <div class="button-wrapper" v-bind:class="{ view:isActive }">
      <a href="https://isanbitoy.github.io/resume/" target="_blank">
        <button class="buttons button-a"><span>Portfolio&nbsp;</span></button>
      </a>
      <a href="https://isanbitoy.github.io/resume/" target="_blank">
        <button class="buttons button-b"><span>Resume&nbsp;</span></button>
      </a>
    </div>
    <span class="trigger-button" v-bind:class="{ view:isActive }" @click="toggleActive()"></span>
  </div>
      	
	</div>
</template>

<style scoped>
[v-cloak] {
    display: none;
}
/*content wrapper*/
.home-wrapper {
	  position: absolute;
	  top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* front content */
.card {
    position: relative;
    width: 26.25em;
    height: 35em;
    font-family: Arial, Sans-Serif;
    text-align: left;
    color: white;
    margin: 10px;
    border-radius: 6px;
    box-shadow: 0 0 12px rgba(0,0,0,.25); 
}
.img-box {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.card .img-box {
    position: absolute;
    border-radius: 6px;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
}
.card .photo {
    background-size: contain;
    overflow: hidden;
}
.isan .photo {
    background-image: url(/images/isan.jpg);
    background-size: 110%;
    background-position: 0% 20%;
}
.info-box {
    position: absolute;
    width: 100%;
    height: 32%;
    bottom: 0;
    box-sizing: border-box;
    opacity: 1;
    visibility: visible;
    transition: all 0.5s ease;
}
.info-box.view {
    height: 0%;
    opacity: 0;
    visibility: hidden;
}
.detailed-info {
    background: #f9f9f9;
    color: #a6a6a6;
    padding: 10px 0px;
    border-radius: 0px 0px 6px 6px;
}
.detailed-info > div {
    line-height: 1.8em;
    word-spacing: 3px;
}
.detailed-info > div .icon {
    padding: 0px 15px;
    font-size: 18px;
    color: #00ffff;
}

/*triggering button*/
.trigger-button {
    position: absolute;
    cursor: pointer;
    font-size: 2.5em;
    z-index: 3;
    top: 10px;
    right: 15px;
}
.trigger-button::after {
    content: '\229A';
    color: #fff;
    transition: all 0.5s ease;
}
.trigger-button:hover::after {
    content: '\2299';
    color: #8d8d8d;
}
.trigger-button.view::after {
    content: '\229D';
    color: #8d8d8d;
}

/*overlay content*/
.overlay {
    position: absolute;
    background: #f9f9f9;
    width: 100%;
    height: 0%;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease;
    z-index: 2;
    border-radius: 6px; /*6px 0 0;*/
}
.overlay.view {
    height: 100%;
    opacity: 1;
    visibility: visible;
}
.about-me {
    color: #a6a6a6;
    padding: 30px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.button-wrapper {
    position: absolute;
    display: flex;
    background: #f9f9f9;
    padding: 10px 70px;
    width: 100%;
    height: 32%;
    bottom: 0;
    opacity: 0;
    visibility: hidden;
    z-index: 2;
    transition: all  0.5s ease;
}
.button-wrapper.view {
    height: 18%;
    border-radius: 0 0 6px 6px;
    opacity: 1;
    visibility: visible;
}
.button-wrapper .buttons {
    padding: 12px 24px;
    margin: 15px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    background: #fff;
    color: #a6a6a6;
    border-radius: 4px;
    border: 2px solid #a6a6a6;
    transition: all 0.5s ease;
}
.button-wrapper .buttons:hover {
    color: #fff;
    background-color: #a6a6a6;
}
</style>

<script>
export default {
	data() {
		return {
			name: 'Lisandro A. Bitoy',
			title: 'full-stack web developer | mobile app developer',
			isActive: false,
			detail: [
						{marker: 'fa fa-map-marker', info: ' Tagum City, Davao del Norte'},
						{marker: 'fa fa-phone', info: ' (+63) 995-108-5425'},
						{marker: 'fa fa-envelope', info: 'isanbitoy@gmail.com'}
				  	],
			description: [
					'Lisandro is a full-stack web developer, mobile app and indie game developer. Proficient with various programming languages such as Java, Python, HTML5/CSS3, JavaScript and SQL.',
                    'He is fueled by his passion and interest for developing new exciting technologies that indulge his enthusiastic personality. Eager to strengthen and widen the scope on his academic foundation in information technology. Already developed some projects which he shares in the open source community.',
					'On his free time you find him playing basketball, cycling, and listening to music. He is an avid fan of tv series and old movies, a pet lover and an active student of a brazilian jiu-jitu.',
					'Lisandro is currently working as a freelancer and is always interested in challenges, he receieve various freelance project such as front-end development and game character design.'
					]
		}
	},
	methods: {
		toggleActive: function(){
			this.isActive = !this.isActive
		}
	}
}
</script>

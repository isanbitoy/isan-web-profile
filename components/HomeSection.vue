<template>
	<div class="home-wrapper">
	
      	<div class="card isan" v-bind:class="{ flip:isActive }"  @click="toggleActive()">

      		<div class="face front"> 
      			<div class="main-info">
      				<h2 style="font-size: 32px">{{ name }}</h2>
      				<span>{{ title }}</span>
      			</div>
     
      			<div class="details">
      				<div v-for="(details, index) in detail" v-bind:key="index">
      					<span class="icon" v-bind:class="details.marker"></span>
      					<span>{{ details.info }}</span>
      				</div>
      			</div>
      		</div>
      		
      		<div class="face back">
      			<div class="description">
      				<h1 style="padding-bottom:5px">About Me</h1>
      				<p v-for="(desc, index) in description" v-bind:key="index">
      					{{ desc }}
      				</p>
      			</div>
      			<div class="button-wrapper">
        			<a href="https://isanbitoy.github.io/resume/" target="_blank"><button class="buttons button-1"><span>Portfolio&nbsp;</span></button></a>
        			<a href="https://isanbitoy.github.io/resume/" target="_blank"><button class="buttons button-2"><span>Resume&nbsp;</span></button></a>
      			</div>
      		</div>

      	</div>
      	
	</div>
</template>

<style scoped>
[v-cloak] {
    display: none;
}
.home-wrapper {
	  position: absolute;
	  top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.card {
  	position: relative;
  	text-align: left;
  	transform-style: preserve-3d; 
  	-webkit-transform-style: preserve-3d;
  	transition: all 0.9s ease;
  	font-family: Arial, Sans-Serif;
  	width: 26.25em;
  	height: 35em; 
  	color: white;
  	display: inline-block;
  	margin: 10px;
  	border-radius: 6px;
    cursor: pointer;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.card.flip {
  	-webkit-transform: rotateY(-180deg);
          	transform: rotateY(-180deg);
}
.card .front {
	  background-size: contain;
  	overflow: hidden;
  	-webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.card .front::before {
	  content: '';
	  position: absolute;
  	display: block;
  	top: 0;
  	left: 0;
  	right: 0;
  	bottom: 0;
  	background: linear-gradient(135deg, #fff, #1a57e6);
  	opacity: .15;
  	z-index: -1;
}
.card .face {
  	position: absolute;
  	top: 0px;
  	left: 0px;
  	bottom: 0px;
  	right: 0px;
  	-webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  	-webkit-transform: translateZ(0.5px);
          transform: translateZ(0.5px);
    border-radius: 6px;
}
.isan .front {
  	background-image: url(/images/isan.jpg);
  	background-size: 110%;
  	background-position: 0% 20%;
  	transition: background 0.3s;
}
.main-info {
  	position: absolute;
  	display: block;
  	bottom: 25%;
  	margin: 0;
  	line-height: 1.5em;
  	padding: 10px;
}
.details {
	  border-top: 2px solid #fff;
	  position: absolute;
	  background: #7b68ee; /*4682b4 7b68ee*/
	  height: 25%;
	  width: 100%;
	  bottom: 0;
	  padding-top: 25px;
	  text-align: left;
	  box-sizing: border-box;
	  border-radius: 0 0 6px 6px;
}
.details > div {
	  line-height: 1.8em;
	  word-spacing: 3px;
}
.details > div .icon {
	  padding: 0 15px;
	  font-size: 18px;
	  color: #00ffff;
}

.card .back {
	  border: 0.5px dashed grey;
	  background-color: #fff;
	  -webkit-transform: rotateY(-180deg);
          	transform: rotateY(-180deg);
}
.card .back .description {
	  color: #a6a6a6;
	  padding: 30px;
	  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.card .back .description p {
	  padding-bottom: 5px;
}
.button-wrapper {
	  position: absolute;
	  display: flex;
	  left: 50%;
    transform: translateX(-50%);
}
.buttons {
    padding: 12px 25px;
    margin: 15px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    background-color: #fff;
    color: #a6a6a6;
    border-radius: 4px;
    border: 2px solid #a6a6a6;
    transition: all 0.5s;
}
.buttons:hover {
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
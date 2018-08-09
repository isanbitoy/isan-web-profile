<template>
	<section class="contact-wrapper">
    
	<div class="container">
      <div id="map" class="map"></div>
		<form id="contact" action="https://formspree.io/isanbitoy@gmail.com" method="POST">
    		<fieldset>
      			<div><input name="name" placeholder="Name" type="text" tabindex="1" required></div>
    		</fieldset>

    		<fieldset>
      			<input name="email" placeholder="Email Address" type="email" tabindex="2" required>
    		</fieldset>

    		<fieldset>
      			<input name="phone" placeholder="Phone Number (optional)" type="tel" tabindex="3" required>
    		</fieldset>
    			
    		<fieldset>
      			<textarea name="message" placeholder="Type your message here...." tabindex="4" required></textarea>
    		</fieldset>

        <fieldset>
            <input type="text" name="_gotcha" style="display:none"/>
        </fieldset>

    		<fieldset>
      			<button name="submit" type="submit" id="contact-submit" value="Message Sent" data-submit="...Sending">Submit</button>
    		</fieldset>
 		</form>
 	</div>

	</section>
</template>

<script>
const tileUrl = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png';
const tileAttribute = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>';
export default {
  data() {
    return { 
      map: null,
      tileLayer: null,
      marker: null
    }
  }, 
  mounted() {
    this.initMap();
    this.initLayers();
  },
  methods: {
    initMap: function() 
    {
      this.map = L.map('map').setView([7.465805, 125.825385], 16);

      this.tileLayer = L.tileLayer(tileUrl,
      {
          maxZoom: 18,
          attribution: tileAttribute
      }).addTo(this.map);
    },
    initLayers: function() 
    {
      this.marker = L.marker([7.465805, 125.825385]).addTo(this.map)
        .bindPopup('Contact Me!')
        .openPopup();
    }
  }
}

</script>

<style scoped>
* {
    font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}
[v-cloak] {
    display: none;
}
.contact-wrapper {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.container {
    position: relative;
    display: block;
  	width: 520px;
    height: auto;
  	margin: 0;
    padding: 0;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.map {
    height: 200px;
}
#contact {
  	background: #F9F9F9;
  	padding: 15px 25px;
  	margin: 0;
}
fieldset {
  	border: medium none !important;
  	margin: 0 0 10px 0;
  	min-width: 100%;
  	width: 100%;
}
#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact textarea {
  	width: 100%;
  	border: 1px solid #ccc;
  	background: #FFF;
  	margin: 0 0 5px 0;
  	padding: 10px;
}
#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact textarea:hover {
  	-webkit-transition: border-color 0.3s ease-in-out;
  	-moz-transition: border-color 0.3s ease-in-out;
  	transition: border-color 0.3s ease-in-out;
 	  border: 1px solid #999;
}
#contact textarea {
  	height: 100px;
  	max-width: 100%;
  	resize: none;
}
#contact button[type="submit"] {
    float: right;
    padding: 10px 25px;
    margin: 0;
  	cursor: pointer;
    text-align: center;
  	background-color: #fff;
  	color: #a6a6a6;
    border: 2px solid #a6a6a6;
  	border-radius: 4px;
    transition: all 0.5s;
}
#contact button[type="submit"]:hover {
    background-color: #a6a6a6;
    color: #fff;
}
#contact input:focus,
#contact textarea:focus {
    outline: 0;
    border: 1px solid #999;
}
::-webkit-input-placeholder {
    color: #888;
}
:-moz-placeholder {
    color: #888;
}
::-moz-placeholder {
    color: #888;
}
:-ms-input-placeholder {
    color: #888;
}
</style>

<template>
  <div>
<!--
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>-->
    <br>
    <div>
      <gmap-map
        :center="center"
        :zoom="12"
        style="width:100%;  height:600px;position:relative;bottom:20px"
      >
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="clickMarker(m)"
          :clickable="true"
        ></gmap-marker>
      </gmap-map>
    <v-card class="pop-up">
      <v-carousel touch cycle hide-controls hide-delimiters next-icon prev-icon height='8em' style="background-color:transparent;border:none;box-shaddow:none;">
        <v-carousel-item height='10em'
              v-for="i in markers"
              :key="i" class="item"
              @click="clickMarker(i)"
              >

            <v-flex style="margin:10px">
              <h5>{{i.nome}}</h5>
              <p style="margin-bottom:0;">Bairro: {{i.bairro}}</p>
              <p style="margin-bottom:0;">{{i.logradouro}}</p>
              <p style="margin-bottom:0;">{{i.telefone}}}</p>
            </v-flex>
          </v-carousel-item>
      </v-carousel>
    </v-card>
    </div>
  </div>
  
</template>
<style>
  .pop-up{
    position:absolute;
    bottom:5em;
    left:1em;
    height:8em;
    width:20em;
    z-index:15;
    background-color:transparent !important;
    border:none !important;
    border-radius:0.8rem;
  }
  .item{
    border-radius:0.8rem;
    background-color:white !important;
    opacity:0.7;
    color:#024FA1;;
    padding:0px;
  }
</style>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: -8.049895, lng:-34.8851158 },
      markers: [{position:{lat:-8.06093, lng: -34.87242}}], //{position:{lat:-8.06293	,lng:-34.88407}}
      places: [],
      currentPlace: null,
    };
  },

  mounted() {
    this.geolocate();
    this.getMarkers();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    getMarkers(){
      var data = {
        resource_id: '833b337c-08a3-42f4-a622-639c8c4f9e2a', // the resource id
      };

      this.$jsonp('http://dados.recife.pe.gov.br/api/action/datastore_search', data)
      .then(json => {
        this.markers = json.result.records.map((item) =>{
          let atualizar = item;
          atualizar.position = {lat: parseFloat(atualizar.latitude), 
                                lng: parseFloat(atualizar.longitude)};
          return atualizar;
        })
        console.log(this.markers)
        // Success.
      }).catch(err => {
        console.log(err)
        // Failed.
      })
    },
    clickMarker(m) {
      this.center=m.position
      console.log(m)
    }
  }
};
</script>
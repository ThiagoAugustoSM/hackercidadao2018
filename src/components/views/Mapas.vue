<template>
  <div>

    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>
    <br>
    <div>
      <gmap-map
        :center="center"
        :zoom="12"
        style="width:100%;  height: 200px;"
      >
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="clickMarker(m)"
          :clickable="true"
        ></gmap-marker>
      </gmap-map>
    <v-card>
      <h2>Teste123123</h2>
      <h2>Teste123123</h2>
    </v-card>
    </div>
  </div>
  
</template>

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
      currentPlace: null
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
    clickMarker (m) {
      this.center=m.position
      console.log(m)
    }
  }
};
</script>
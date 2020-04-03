<template>
  <v-container fluid>
    <v-layout row wrap>
      <div id="map" class="map"></div>
      <div>{{ states }}</div>
    </v-layout>
  </v-container>
</template>

<script>
import Map from 'ol/Map'
import View from 'ol/View'
import OSM from 'ol/source/OSM'
import TileLayer from 'ol/layer/Tile'

export default {
  name: 'Map',
  props: {
    states: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      map: null
    }
  },
  methods: {
    drawMap() {
      this.map = new Map({
        layers: [new TileLayer({ source: new OSM() })],
        view: new View({
          projection: 'EPSG:4326',
          center: [-95.0, 41.5], // US center
          zoom: 4
        }),
        target: 'map'
      })
    }
  },
  mounted() {
    this.drawMap()
  }
}
</script>

<style scoped>
.map {
  height: 400px;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}
</style>

<template>
  <v-container fluid>
    <v-layout row wrap>
      <div v-if="!loading">
        <Map :states="statesList" />
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Map from '@/components/maps/Map'

export default {
  name: 'UnitedStates',
  components: {
    Map
  },
  data() {
    return {
      error: undefined,
      loading: true
    }
  },
  computed: {
    // can use mapGetters here
    ...mapState(['stateData']),
    loadingMsg() {
      return this.error ? this.error : 'Fetching data...'
    },
    statesList() {
      return this.stateData.states
    }
  },
  methods: {
    ...mapActions(['getStatesHistorical']),
    async doSearch() {
      try {
        this.loading = true
        await this.getStatesHistorical()
        this.loading = false
        this.error = undefined
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        this.loading = false
        this.error = error
      }
    }
  },
  created() {
    this.doSearch()
  }
}
</script>

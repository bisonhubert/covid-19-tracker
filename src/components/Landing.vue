<template>
  <v-container fluid>
    <v-layout row wrap>
      <Heading title="COVID-19 Tracker" />
      <California />
    </v-layout>
  </v-container>
</template>

<script>
import California from '@/components/states/California'

export default {
  name: 'Landing',
  components: {
    California
  }
}
</script>

<template>
  <v-container fluid>
    <v-layout row wrap>
      <Heading title="COVID-19 Tracker" />
      <UnitedStates />
    </v-layout>
  </v-container>
</template>

<script>
import UnitedStates from '@/components/UnitedStates'

export default {
  name: 'Landing',
  components: {
    UnitedStates
  }
}
</script>

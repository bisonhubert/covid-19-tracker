<template>
  <v-flex xs12 text-xs-center mt-5 mb-3>
    <h1 class="display-2 font-weight-bold">{{ title }}</h1>
    <p>
      A visualization of COVID-19 by state. Data pulled from
      <a href="https://covidtracking.com/api/">The COVID Tracking Project</a>.
      Updated daily.
    </p>
  </v-flex>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>

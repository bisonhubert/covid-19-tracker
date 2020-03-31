<template>
  <v-footer height="60" class="mt-5 justify-center text-xs-center d-block">
    <div class="mt-2">
      {{ $t('footer.MADE_WITH') }}
      <v-icon small class="red--text mx-0 px-0">mdi-cards-heart</v-icon>
      &nbsp;{{ $t('footer.BY') }}:
    </div>
    <div>
      <a href="https://bisonhubert.com" target="_blank"
        >https://bisonhubert.com</a
      >
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    appVersion() {
      return this.$store.getters.appVersion
    }
  }
}
</script>

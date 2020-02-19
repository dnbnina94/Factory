<template>
  <div class="container">
    <div class="row">
      <field-component v-for="(field, index) in fields"
                       :key="index"
                       :field="field"
                       class="col-md-2">
      </field-component>
    </div>

    <nuxt-link to="/statistics">
      Go to statistics
    </nuxt-link>
  </div>
</template>

<script>

import FieldComponent from "@/components/FieldComponent"

export default {

  data: () => ({
    generateIntervalId: null
  }),

  created() {
    this.generateIntervalId = setInterval(() => {
      this.$bus.$emit('generateRandomValue')
    }, 2000)
  },

  watch: {
  },  

  mounted() {
  },

  destroyed() {
    clearInterval(this.generateIntervalId)
  },  

  computed: {
    fields() {
      return this.$store.getters["app/getState"]("fields")
    }
  },

  components: {
    FieldComponent
  }

}
</script>

<style>
</style>

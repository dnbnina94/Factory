<template>
  <div class="page--home container">
    <div class="row">
      <div class="col-md-7 mx-auto">
        <div class="row">
          <field-component v-for="(field, index) in fields"
                       :key="index"
                       :field="field"
                       class="col-md-4"
                       :class="{'mt-md-2' : index > 2}">
          </field-component>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>

import FieldComponent from "@/components/FieldComponent"

export default {

  name: "page--home",

  data: () => ({
    generateIntervalId: null,
  }),

  created() {
    this.generateIntervalId = setInterval(() => {
      this.$store.dispatch("app/ITERATIONS_INC")
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
    },
  },

  components: {
    FieldComponent
  }

}
</script>

<style lang="scss" scoped>
.page--home {
  
}
</style>

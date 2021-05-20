<template>
  <svg class="svg-icon" :class="iconClass">
    <use :xlink:href="'#' + name"></use>
  </svg>
</template>

<script>
export default {
  computed: {
    computedClass() {
      if (this.iconClass.isArray()) {
        return this.iconClass.map((item) => `${item} `)
      }
      return this.iconClass
    },
  },
  props: {
    iconClass: {
      type: [String, Array],
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

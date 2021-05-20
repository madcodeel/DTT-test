<template>
  <svg class="svg-icon" :class="svgClass">
      <use :xlink:href="'#' + name"></use>
  </svg>
</template>

<script>
export default {
    computed: {
        computedClass() {
            if (this.svgClass.isArray()) {
                return this.svgClass.map((item) => `${item} `)
            }
            return this.svgClass
        },
    },
    props: {
        svgClass: {
            type: [String, Array],
        },
        name: {
            type: String,
            required: true,
        },
    },
}
</script>
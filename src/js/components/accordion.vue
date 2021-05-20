<template>
  <div class="accordion" :class="{
    '-open': isToggle
  }">
    <div class="accordion__display" @click.stop="!disableToggle ? toggleContent() : null">{{ label }}</div>
    <div class="accordion__content" :style="contentStyle" >
      <div class="accordion__main" ref="main">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    disableToggle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isToggle: false,
      contentHeight: 0,
    }
  },
  watch: {
    isToggle(val) {
      this.contentHeight = val
        ? this.$refs.main.offsetHeight
        : 0
    },
  },
  computed: {
    contentStyle() {
      if (this.disableToggle) {
        return {
          height: `${this.contentHeight}px`,
        }
      }
      return null
    },
  },
  methods: {
    toggleContent() {
      this.isToggle = !this.isToggle
    },
  },
}
</script>

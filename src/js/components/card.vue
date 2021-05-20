<template>
  <a :href="link" class="card" :class="{
    '-complete': !status
  }">
    <div class="card__logo">
      <img :src="logo" alt="">
    </div>
    <div class="card__content">
      <div class="card__content-info">
        <p class="card__content-status">{{ statusText }}</p>
        <p class="card__content-date" v-if="date && status">預計出貨：{{ date }}</p>
      </div>
      <p class="card__title">{{ title }}</p>
    </div>
    <svg-icon name="right" icon-class="card__arrow"></svg-icon>
  </a>
</template>

<script>
import SvgIcon from './icon.vue'

export default {
  components: { SvgIcon },
  props: {
    link: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: '',
    },
    status: {
      type: Boolean,
      default: true,
    },
    statusText: {
      type: String,
      default: '',
    },
    logo: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

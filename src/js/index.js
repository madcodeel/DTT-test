import '../styles/styles.scss'
import './icons'
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import store from './store/index'
import SvgIcon from './components/icon.vue'
import Card from './components/card.vue'
import Accordion from './components/accordion.vue'

const app = new Vue({
  el: '#app',
  components: { SvgIcon, Card, Accordion },
  store,
  methods: {
    ...mapActions(['UPDATE_DATA']),
    sortData(arr) {
      return arr.sort((a, b) => new Date(b.date) - new Date(a.date))
    },
  },
  computed: {
    ...mapState(['cardData']),
    progressingData() {
      if (this.cardData) {
        return this.sortData(this.cardData.filter((item) => [1, 2].includes(item.status.code)))
      }
      return null
    },
    endData() {
      if (this.cardData) {
        return this.sortData(this.cardData.filter((item) => [3, 4].includes(item.status.code)))
      }
      return null
    },
  },
  created() {
    this.UPDATE_DATA()
  },
})

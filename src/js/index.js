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
  },
  computed: {
    ...mapState(['cardData']),
  },
  created() {
    this.UPDATE_DATA()
  },
})

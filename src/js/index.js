import '../styles/styles.scss'
import './icons'
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import SvgIcon from './components/icon.vue'
import Card from './components/card.vue'
import store from './store/index'

const app = new Vue({
  el: '#app',
  components: { SvgIcon, Card },
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

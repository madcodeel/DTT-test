import '../styles/styles.scss'
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import SvgIcon from './components/icon.vue'
import store from './store/index'

const app = new Vue({
  el: "#app",
  components: { SvgIcon }
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

<template>
  <div id="app" class="">
    <!-- <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->

    <!-- bootstrap vue tabs code -->
    <!-- 
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Tab 1" active>
          Tab Contents 1
        </b-tab>
        <b-tab title="Tab 2">
          Tab Contents 2
        </b-tab>
      </b-tabs>
    </b-card> 
    -->

    <app-bvheader></app-bvheader>
    <b-card no-body>
      <b-tabs pills card vertical>

        <b-tab title="BS-Vue" active>          
          <app-bsvue></app-bsvue>
        </b-tab>

        <b-tab title="Tab 2">
          Tab Contents 2
        </b-tab>

        <b-tab title="Tab 3">
          Tab Contents 3
        </b-tab>

      </b-tabs>
    </b-card>    
    <app-bvfooter></app-bvfooter>

  </div>
</template>

<script>
import BVHeader from './components/bootstrapvue/BVHeader.vue';
import BVFooter from './components/bootstrapvue/BVFooter.vue';
import bsvue from './components/bootstrapvue/BootstrapVueLearn.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : {
    'app-bvheader' : BVHeader,
    'app-bsvue' : bsvue,
    'app-bvfooter' : BVFooter
  }
}
</script>

<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: left;
//   color: #2c3e50;
//   margin-top: 60px;
// }

// h1, h2 {
//   font-weight: normal;
// }

// ul {
//   list-style-type: none;
//   padding: 0;
// }

// li {
//   display: inline-block;
//   margin: 0 10px;
// }

// a {
//   color: #42b983;
// }
</style>

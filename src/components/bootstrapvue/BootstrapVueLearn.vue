<template>
    <div class="container">
      <app-bvheader></app-bvheader>

      <b-card no-body>
        <b-tabs card>
          
          <b-tab title="Modal" active>            
            <app-bvmodal></app-bvmodal>
          </b-tab>
      
          <b-tab title="Collapse">            
            <app-bvcollapse></app-bvcollapse>
          </b-tab>

        </b-tabs>
      </b-card>

      <app-bvfooter></app-bvfooter>
    </div>
</template>

<script>
import BVHeader from './BVHeader.vue';
import BVCollapse from './BVCollapaseAccordian.vue';
import BVModal from './BVModal.vue';
import BVFooter from './BVFooter.vue';

export default {
  components : {
    'app-bvheader' : BVHeader,
    'app-bvcollapse': BVCollapse,
    'app-bvmodal' : BVModal,
    'app-bvfooter' : BVFooter
  },
  data (){
    return {
        
    }
  }
}
</script>

<style scoped>

</style>
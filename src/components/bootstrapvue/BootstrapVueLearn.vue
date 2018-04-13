<template>
    <div class="container">
        <app-bvheader></app-bvheader>
         <app-bvcollapse></app-bvcollapse>
        <app-bvfooter></app-bvfooter>
    </div>
</template>

<script>
import BVHeader from './BVHeader.vue';
import BVCollapse from './BVCollapaseAccordian.vue';
import BVFooter from './BVFooter.vue';

export default {
  components : {
    'app-bvheader' : BVHeader,
    'app-bvcollapse': BVCollapse,
    'app-bvfooter' : BVFooter
  }
}
</script>

<style scoped>

</style>
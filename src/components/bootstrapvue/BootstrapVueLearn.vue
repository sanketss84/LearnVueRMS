<template>
    <div class="container">
        <app-bvheader></app-bvheader>
        <app-bvmodal></app-bvmodal>
        <app-bvcollapse></app-bvcollapse>
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
  }
}
</script>

<style scoped>

</style>
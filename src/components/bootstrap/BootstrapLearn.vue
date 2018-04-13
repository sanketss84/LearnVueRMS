<template>
    <!-- we already have bootstrap 4 in our project becuase of bootstrap-vue if we need to add it manually we do as below -->
    <!-- https://medium.com/@BjornKrols/integrating-and-customising-bootstrap-4-in-vue-js-cbc29ba7688e -->
    <div>
        <h3>using plain bootstrap 4 code</h3>

            <b-card no-body>
            <b-tabs card>
                
                <b-tab title="Form" active>            
                    <app-bform></app-bform>
                </b-tab>

                <b-tab title="popover">
                    <!-- https://getbootstrap.com/docs/4.0/components/popovers/ -->
                    <p>Bootstrap with javascript is not working</p>
                    <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
                </b-tab>

            </b-tabs>
            </b-card>
    </div>
</template>

<script>
import BForm from './BForm.vue';

export default {
  components : {
    'app-bform' : BForm,
  },
  data (){
    return {
        
    }
  }
}
</script>

<style scoped>

</style>
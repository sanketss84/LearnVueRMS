<template>
    <div>
        <!-- Quick guide https://alligator.io/vuejs/template-form-validation-vee-validate/ -->
        <!-- fiddle : https://jsfiddle.net/gongzza/m67d8f4x/2/ -->

        <h3>VeeValidate</h3>
        <b-card no-body>
        <b-tabs card>
            <b-tab title="Basic Validations" active>
                <app-veeform></app-veeform>
            </b-tab>

            <b-tab title="Tab 2">
            Tab Contents 2
            </b-tab>

        </b-tabs>
        </b-card> 

    </div>
</template>

<script>
import veeform from './VeeForm'
export default {
    name: 'basic-example',
    components : {
        'app-veeform' : veeform
  }
}
</script>

<style scoped>

</style>
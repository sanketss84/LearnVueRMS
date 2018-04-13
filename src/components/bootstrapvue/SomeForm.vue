<template>
    <div>
        <br>
        <p>Value from Parent : {{uniqueid}}</p>
        <b-form-input v-model="text1"
                  type="text"
                  placeholder="Enter your name"></b-form-input>
        <p>Value: {{ text1 }}</p>        
    </div>
</template>

<script>
export default {
    props : {
        uniqueid : {
            type : String
        }
    },
    data () {
        return {
            text1: ''
        }
    }
}
</script>

<style scoped>

</style>
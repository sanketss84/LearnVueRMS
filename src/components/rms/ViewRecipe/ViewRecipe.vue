<template>
    <div>
        <p>ViewRecipe Page</p>
        <viewrecipe-method></viewrecipe-method>

        

    </div>
</template>

<script>
import RecipeMethod from './Method.vue'

export default {
     data () {
      return {
        model: '',
        states: [
            {"name": "Minnesota", "abbreviation": "MN" },
            {"name": "New York", "abbreviation": "NY"},
            {"name": "South Carolina", "abbreviation": "SC"}
        ],
      }
    },
    components : {
         'viewrecipe-method' : RecipeMethod
    }
}
</script>

<style scoped>

</style>
<template>
    <div>
        <p>Recipe Page</p>
        <rms-recipe-createmodal></rms-recipe-createmodal>
        <rms-recipe-copymodal></rms-recipe-copymodal>
        <rms-recipe-detail></rms-recipe-detail>
        <rms-recipe-method></rms-recipe-method>
    </div>
</template>

<script>
import RecipeCreateModal from './RecipeCreateModal.vue'
import RecipeCopyModal from './RecipeCopyModal.vue'
import RecipeDetail from './RecipeDetail.vue'
import RecipeMethod from './RecipeMethod.vue'

export default {
    components : {
         'rms-recipe-createmodal' : RecipeCreateModal,
         'rms-recipe-copymodal' : RecipeCopyModal,
         'rms-recipe-detail' : RecipeDetail,
         'rms-recipe-method' : RecipeMethod,
    }
}
</script>

<style scoped>

</style>
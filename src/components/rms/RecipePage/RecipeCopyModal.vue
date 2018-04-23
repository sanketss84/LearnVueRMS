<template>
    <div>
        <!--<h3>Recipe Copy Modal</h3>
        <a href="">New Recipe</a>-->
        <!--<b-btn v-b-modal.recipecopymodal variant="primary">New Recipe</b-btn>-->
        <a href="#" v-b-modal.recipecopymodal>Copy Recipe</a>

        <b-modal id="recipecopymodal" size="lg" title="Create New Recipe">
            Hello Modal!
        </b-modal>
    </div>
</template>

<!--<script  src="./RecipeCopyModal.js">-->
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>
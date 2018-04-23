<template>
    <div>
        <a href="#" v-b-modal.recipecreatemodal>Create New Recipe</a>

        <b-modal id="recipecreatemodal"  ref="recipecreatemodal" size="lg" title="Create New Recipe" hide-footer>
            <div class="container">
                <div class="form-group row">
                    <label for="modalproject" style="padding-right:2px;padding-left:5px;">Assign to Project</label>
                    <select id="modalproject" class="form-control" v-model="recipeCopy.selectedProject">
                        <option value="" selected disabled>Select Project (Project must already exist)</option>
                        <option v-for="project in recipeCopy.projects" >{{project}}</option>
                    </select>

                    <label for="modalchapter" style="padding-right:2px;padding-left:5px;">Assign to Chapter</label>                    
                    <select id="modalchapter" class="form-control" v-model="recipeCopy.selectedChapter" >
                        <option v-for="chapter in recipeCopy.chapters">{{chapter}}</option>
                    </select>
                </div>
            </div>
            <b-btn class="mt-3" @click="okButtonHandler">OKK</b-btn>
            <b-btn class="mt-3" @click="cancelButtonHandler">Cancell</b-btn>
        </b-modal>
    </div>
</template>

<!--<script  src="./RecipeCreateModal.js">-->
<script>
    export default {
        data() {
            return {
                recipeCopy : {
                    selectedProject : '',
                    selectedChapter : 'Default Chapter',
                    projects : ['project1','project2','project3','project4'],
                    chapters : ['Default Chapter','chapter1','chapter2']
                }
            }
        },
        methods : {
            okButtonHandler () {
                console.log(this.recipeCopy.selectedProject);
                console.log(this.recipeCopy.selectedChapter);
            },
            cancelButtonHandler() {
                console.log('cancelled');
                this.resetRecipeCopy();
                this.$refs.recipecreatemodal.hide();
            },
            resetRecipeCopy () {
                this.recipeCopy.selectedProject = '';
                this.recipeCopy.selectedChapter = 'Default Chapter';
                console.log('recipeCopy is reset');
            }
        }
    }
</script>
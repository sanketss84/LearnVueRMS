<template>
    <div>
        <a href="#" v-b-modal.recipecreatemodal>Create New Recipe</a>

        <b-modal id="recipecreatemodal"  ref="recipecreatemodal" size="lg" title="Create New Recipe" hide-footer>
            <div class="container">
                <div class="form-group row">

                    <label class="col-3" for="modalproject" >Assign to Project</label>
                    <select id="modalproject" class="form-control col-8" v-model="recipeCreateModel.selectedProjectId">
                        <option value="" selected disabled>Select Project (Project must already exist)</option>
                        <option v-for="project in recipeCreateModel.projects" :value="project.projectId" >{{project.projectName}}</option>
                    </select>
                </div>
                <div class="form-group row">
                    <label class="col-3" for="modalchapter" >Assign to Chapter</label>                    
                    <select id="modalchapter" class="form-control col-8" v-model="recipeCreateModel.selectedChapterId" >     
                        <option value="" selected disabled>Select Chapter</option>                   
                        <option v-for="chapter in recipeCreateModel.filteredChapters" :value="chapter.chapterId" >{{chapter.chapterName}}</option>
                    </select>

                </div>
            </div>
            <b-btn class="mt-3" @click="okButtonHandler">OK</b-btn>
            <b-btn class="mt-3" @click="cancelButtonHandler">Cancel</b-btn>
        </b-modal>
    </div>
</template>

<!--<script  src="./RecipeCreateModal.js">-->
<script>
    // import { mapMutations } from 'vuex';

    export default {
        data() {
            return {
                recipeCreateModel : {
                    // selectedProject : '',
                    selectedProjectId : '',
                    selectedChapter : '',
                    selectedChapterId : '',
                    projects : [
                                {projectId : 'p1', projectName : 'project A' },
                                {projectId : 'p2', projectName : 'project B' },
                                {projectId : 'p3', projectName : 'project C' },
                    ],
                    filteredChapters : [],
                    chapters : [
                                {chapterId : 'c11', chapterName: 'Default Chapter',projectId : 'p1'},
                                {chapterId : 'c1', chapterName: 'A chapter 1',projectId : 'p1'},
                                {chapterId : 'c2', chapterName: 'A chapter 2',projectId : 'p1'},
                                
                                {chapterId : 'c12', chapterName: 'Default Chapter',projectId : 'p2'},
                                {chapterId : 'c3', chapterName: 'B chapter 3',projectId : 'p2'},
                                {chapterId : 'c4', chapterName: 'B chapter 4',projectId : 'p2'},
                                
                                {chapterId : 'c13', chapterName: 'Default Chapter',projectId : 'p3'},
                                {chapterId : 'c5', chapterName: 'C chapter 5',projectId : 'p3'},
                                {chapterId : 'c6', chapterName: 'C chapter 6',projectId : 'p3'},
                                {chapterId : 'c7', chapterName: 'C chapter 7',projectId : 'p3'},
                                {chapterId : 'c8', chapterName: 'C chapter 8',projectId : 'p3'}
                    ]
                }
            }
        },
        methods : {
            okButtonHandler () {
                // console.log(this.recipeCreateModel.selectedProjectId);   
                // console.log(this.recipeCreateModel.selectedChapterId);
                // console.log(this.$store.state.recipeStore.recipeCreateModalTriggered);
                
                // console.log(this.$store.state.recipeStore.recipeCreateModel.triggered);
                // this.$store.state.recipeStore.recipeCreateModel.triggered = true;
                // console.log(this.$store.state.recipeStore.recipeCreateModel.triggered);

                //set recipeStore values
                //this.$store.state.recipeStore.recipeCreateModalTriggered = true;
                //this.$store.state.recipeStore.recipeCreateModalProjectId = this.recipeCreateModel.selectedProjectId;
                //this.$store.state.recipeStore.recipeCreateModalChapterId = this.recipeCreateModel.selectedChapterId;

                var payload = {
                    createModalTriggered : true, 
                    projectId : this.recipeCreateModel.selectedProjectId,
                    chapterId : this.recipeCreateModel.selectedChapterId
                };
                
                this.$store.commit('recipeStore/setRecipeCreateModal',payload);
                console.log(this.$store.state.recipeStore.recipeCreateModalTriggered);

                //hide the modal
                this.$refs.recipecreatemodal.hide();
            },
            cancelButtonHandler() {
                // console.log('cancelled');
                //clear local and global values
                this.resetRecipeCreateModel();
                this.$store.commit('recipeStore/resetRecipeCreateModal');
                this.$refs.recipecreatemodal.hide();
            },
            resetRecipeCreateModel () {
                this.recipeCreateModel.selectedProjectId = '';
                this.recipeCreateModel.selectedChapterId = '';
                console.log('recipeCreateModel is reset');
            }
        },
        computed : {

        },
        watch : {                        
            'recipeCreateModel.selectedProjectId' (value) {                                
                console.log(value);               
                this.recipeCreateModel.filteredChapters = this.recipeCreateModel.chapters.filter (s => s.projectId == value);                
                // this.recipeCreateModel.selectedChapter = 'Default Chapter';
            }
        }
    }
</script>
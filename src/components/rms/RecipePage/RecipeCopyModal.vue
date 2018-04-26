<template>
    <div>
        <!--<h3>Recipe Copy Modal</h3>
        <a href="">New Recipe</a>-->
        <!--<b-btn v-b-modal.recipecopymodal variant="primary">New Recipe</b-btn>-->
        <a href="#" v-b-modal.recipecopymodal>Copy Recipe</a>

        <b-modal id="recipecopymodal" ref="recipecopymodal" size="lg" title="Copy Recipe"  hide-footer>

            <div class="container">
                <div class="form-group row">

                    <div class="col-5">
                    <!-- row 1 col 1 Copy Action -->
                    <label for="modalcopyaction" style="padding-right:2px;padding-left:5px;">Select Copy Action</label>                    
                    <b-form-radio-group v-model="recipeCopyModel.selectedCopyAction"
                          :options="recipeCopyModel.copyActionOptions"
                          stacked
                          name="radioStacked">
                    </b-form-radio-group>
                    </div>

                    <div class="col-7">
                        <!-- row 1 col 2  Project -->
                        <label for="modalproject" style="padding-right:2px;padding-left:5px;">Assign to Project</label>
                        <select id="modalproject" class="form-control" v-model="recipeCopyModel.selectedProjectId">
                            <option value="" selected disabled>Select Project (Project must already exist)</option>
                            <option v-for="project in recipeCopyModel.projects" v-bind:value="project.projectId" >{{project.projectName}}</option>
                        </select>
                    </div>

                </div>

                <div class="row">

                    <div class="col-5">
                    
                    </div>

                    <div class="col-7">
                        <!-- row 2 col 2 Chapter -->
                        <label for="modalchapter" style="padding-right:2px;padding-left:5px;">Assign to Chapter</label>                    
                        <select id="modalchapter" class="form-control" v-model="recipeCopyModel.selectedChapterId" >     
                            <option value="" selected disabled>Select Chapter</option>                   
                            <option v-for="chapter in recipeCopyModel.filteredChapters" v-bind:value="chapter.chapterId" >{{chapter.chapterName}}</option>
                        </select>
                    </div>
                </div>
                <div class="row">

                    <div class="col-5">
                    
                    </div>

                    <div class="col-7">
                        <br>
                        <!-- row 3 col 2 Copy Nutrition -->
                        <b-form-checkbox-group stacked v-model="recipeCopyModel.selectedCopyNutritionCheck" :options="recipeCopyModel.copyNutritionCheck">
                        </b-form-checkbox-group>
                    </div>

                </div>
            </div>

            <!-- <div class="container">
                <div class="form-group row">
                    
                    <label for="modalcopyaction" style="padding-right:2px;padding-left:5px;">Select Copy Action</label>                    
                    <b-form-radio-group v-model="recipeCopyModel.selectedCopyAction"
                          :options="recipeCopyModel.copyActionOptions"
                          stacked
                          name="radioStacked">
                    </b-form-radio-group>

                
                    <label for="modalproject" style="padding-right:2px;padding-left:5px;">Assign to Project</label>
                    <select id="modalproject" class="form-control" v-model="recipeCopyModel.selectedProjectId">
                        <option value="" selected disabled>Select Project (Project must already exist)</option>
                        <option v-for="project in recipeCopyModel.projects" :value="project.projectId" >{{project.projectName}}</option>
                    </select>

                    <label for="modalchapter" style="padding-right:2px;padding-left:5px;">Assign to Chapter</label>                    
                    <select id="modalchapter" class="form-control" v-model="recipeCopyModel.selectedChapterId" >     
                        <option value="" selected disabled>Select Chapter</option>                   
                        <option v-for="chapter in recipeCopyModel.filteredChapters" :value="chapter.chapterId" >{{chapter.chapterName}}</option>
                    </select> -->
                    
                    <!-- <label for="copynutritioncheck">
                        <input type="checkbox" value="CopyNutritionCheck" v-model="recipeCopyModel.selectedCopyNutritionCheck"> Copy Nutrition
                    </label> -->
                    
                    <!-- <b-form-checkbox-group stacked v-model="recipeCopyModel.selectedCopyNutritionCheck" :options="recipeCopyModel.copyNutritionCheck">
                    </b-form-checkbox-group>
                </div>
            </div> -->

            <div class="small" hidden>
                <p>Debug Info</p>
                <p>Copy Action : {{ recipeCopyModel.selectedCopyAction }}</p>
                <p>Project Id : {{recipeCopyModel.selectedProjectId}} </p>
                <p>Chapter Id : {{recipeCopyModel.selectedChapterId}} </p>
                <p>Copy Nutrition : {{recipeCopyModel.selectedCopyNutritionCheck}} </p>
            </div>

            <b-btn class="mt-3" @click="okButtonHandler">GO</b-btn>
            <b-btn class="mt-3" @click="cancelButtonHandler">Cancel</b-btn>
        </b-modal>
    </div>
</template>

<!--<script  src="./RecipeCopyModelModal.js">-->
<script>
    // import { mapMutations } from 'vuex';
    
    export default {
        data() {
            return {
                recipeCopyModel : {
                    selectedCopyAction : 'newrecipeversion',
                    copyActionOptions : [
                        { text: 'Copy into new recipe version', value: 'newrecipeversion' },
                        { text: 'Copy into new recipe', value: 'newrecipe' },
                    ],
                    selectedCopyNutritionCheck : [],
                    copyNutritionCheck : [{text: 'Copy Nutrition', value: 'copynutrition'}],

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
                var payload = {
                    copyModalTriggered : true, 
                    copyAction : this.recipeCopyModel.selectedCopyAction,
                    projectId : this.recipeCopyModel.selectedProjectId,
                    chapterId : this.recipeCopyModel.selectedChapterId,
                    recipeVersionNumber : '', //get from parent
                    recipeLanguage : 'en'
                };
                this.$store.commit('recipeStore/setRecipeCopyModal',payload);

                console.log(this.$store.state.recipeStore.recipeCopyModalTriggered);
                this.$refs.recipecopymodal.hide();
            },
            cancelButtonHandler() {
                console.log('cancelled');
                this.resetRecipeCopyModel();
                this.$store.commit('recipeStore/resetRecipeCopyModal');
                this.$refs.recipecopymodal.hide();
            },
            resetRecipeCopyModel () {
                this.recipeCopyModel.selectedCopyAction = 'newrecipeversion';
                this.recipeCopyModel.selectedProjectId = '';
                this.recipeCopyModel.selectedChapterId = '';
                this.recipeCopyModel.selectedCopyNutritionCheck = [];

                console.log('recipeCopyModel is reset');
            }
        },
        
        watch : {                        
            'recipeCopyModel.selectedProjectId' (value) {                                
                console.log(value);               
                this.recipeCopyModel.filteredChapters = this.recipeCopyModel.chapters.filter (s => s.projectId == value);                
            },
            'recipeCopyModel.selectedCopyAction' (value) {
                console.log(value);               
            },
            'recipeCopyModel.selectedCopyNutritionCheck' (value) {
                console.log(value);
            }
        }
    }
</script>
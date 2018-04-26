export const recipeStore = {
    // This makes your getters, mutations, and actions accessed by, eg: 'myModule/myModularizedNumber' 
    // instead of mounting getters, mutations, and actions to the root namespace.
    namespaced: true,
    state: {
        
        // recipeCreateModal :{
        //     triggered : false
        // },
        // recipeCopyModal : {
        //     triggered : false
        // },
        //Recipe Create Modal
        recipeCreateModalTriggered : false,
        recipeCreateModalProjectId : '',
        recipeCreateModalChapterId : '',
        
        //Recipe Copy Modal
        recipeCopyModalTriggered : false,
        recipeCopyModalCopyAction : [], //NewRecipeVersion or NewRecipe
        recipeCopyModalProjectId : '',
        recipeCopyModalChapterID : '',
        recipeCopyModalCopyNutrition : false,
        recipeCopyModalRecipeVersionNumber : '',
        recipeCopyModalRecipeLanguage : [] //check if we need to copy all languages , whats the existing behaviour
    },
    mutations : {
        setRecipeCreateModal(state, payload) {
            console.log('setRecipeCreateModal mutation called');
            // console.log(payload);
            state.recipeCreateModalTriggered = payload.createModalTriggered;
            state.recipeCreateModalProjectId = payload.projectId;
            state.recipeCreateModalChapterId = payload.chapterId;
        },
        resetRecipeCreateModal(state) {
            console.log('resetRecipeCreateModal mutation called');
            state.recipeCreateModalTriggered = false;
            state.recipeCreateModalProjectId = '';
            state.recipeCreateModalChapterId = '';
        },
        setRecipeCopyModal(state, payload) {
            console.log('setRecipeCopyModal mutation called');
            console.log(payload);
            state.recipeCopyModalTriggered = payload.copyModalTriggered
            state.recipeCopyModalCopyAction = payload.copyAction;
            state.recipeCopyModalProjectId = payload.projectId;
            state.recipeCopyModalChapterID = payload.chapterId;
            state.recipeCopyModalCopyNutrition = payload.copyNutritionFlag;
            state.recipeCopyModalRecipeVersionNumber = payload.recipeVersionNumber;
            state.recipeCopyModalRecipeLanguage = payload.recipeLanguage;
        },
        resetRecipeCopyModal(state) {
            console.log('resetRecipeCopyModal mutation called');
            state.recipeCopyModalTriggered = false;
            state.recipeCopyModalCopyAction = [];
            state.recipeCopyModalProjectId = '';
            state.recipeCopyModalChapterID = '';
            state.recipeCopyModalCopyNutrition = false;
            state.recipeCopyModalRecipeVersionNumber = '';
            state.recipeCopyModalRecipeLanguage = [];
        },
    }
    
}
<template>
  <div id="RecipeDetail" class="container">
    <div class="mb-2">

      <div class="form-group row">
        <label class="col-sm-1 col-form-label" style="padding-right:2px;padding-left:5px;">
          <small>Recipe #:</small>
        </label>
        <label class="col-sm-2 col-form-label" style="padding-right:2px;padding-left:5px;">
          <small>{{items.recipeNumber}}</small>
        </label>
        <div class="col-sm-1"></div>
        <label class="col-sm-1 col-form-label" style="padding-right:2px;padding-left:5px;">
          <small>Recipe Title:</small>
        </label>
        <label class="col-sm-2 col-form-label" style="padding-right:2px;padding-left:5px;">
          <small>{{items.recipeTitle}}</small>
        </label>
        <div class="col-sm-1"></div>
        <label class="col-sm-1 col-form-label" style="padding-right:2px;padding-left:5px;">
          <small>Recipe Version Guid:</small>
        </label>
        <label class="col-sm-3 col-form-label" style="padding-right:2px;padding-left:5px;">
          <small>{{items.recipeVersionGuid}}</small>
        </label>
      </div>
            
      <div class="form-group row">
              <label for="languageMode" class="col-sm-2 col-form-label" style="padding-right:2px;padding-left:5px;"><small>Language Mode</small></label>
              <div class="col-sm-4">
                <select class="form-control" v-model="items.selectedLanguageNumber">
                  <option v-for="(l,index) in items.languageModel" v-bind:value="l.languageNumber">{{l.languageName}}</option>
                </select>
              </div>
              <label class="col-sm-4 col-form-label" style="padding-right:2px;padding-left:5px;">
                  CAUTION: <a href="#">Alert</a> issued for this recipe.
              </label>
              <div class="col-sm-2">            </div>
            </div>

      <div class="form-group row">
              <label for="recipeTitle" class="col-sm-2 col-form-label" style="padding-right:2px;padding-left:5px;"><small>Recipe Title</small></label>
              <div class="col-sm-6">
                <input type="text" class="form-control" id="recipeNm" v-model="items.recipeTitle" ></input>
              </div>
            </div>

      <div class="form-group row">
              <label for="project" class="col-sm-1 col-form-label" style="padding-right:2px;padding-left:5px;"><small>Project</small></label>
              <div class="col-sm-3">
                <input type="text" class="form-control" v-model="items.projectText" id="projectNm"></input>
              </div>
              <label for="placement" class="col-sm-1 col-form-label" style="padding-right:2px;padding-left:5px;"><small>Placement</small></label>
              <div class="col-sm-3">
                <input type="text" class="form-control" v-model="items.placementText"></input>
              </div>
              <div class="col-sm-1"></div>
              <label for="project" class="col-sm-3 col-form-label">
                Created On: {{items.createdDate}}<br/>
                Created by: {{items.createdUser}} <br/>                
              </label>
            </div>

      <div class="form-group row">
              <label for="recipeType" class="col-sm-1 col-form-label" style="padding-right:2px;padding-left:5px;"><small>Recipe Type</small></label>
              <div class="col-sm-3">
                <select class="form-control" v-model="items.selectedRecipeTypeNumber">
                  <option disabled="" value="">Select a Recipe Type</option>
                  <option v-for="(r,index) in items.recipeTypeModel" v-bind:value="r.recipeTypeNumber">{{r.recipeTypeName}}</option>
                </select>
              </div>
              <label for="subPlacement" class="col-sm-1 col-form-label" style="padding-right:2px;padding-left:5px;"><small>Sub Placement</small></label>
              <div class="col-sm-3">
                <input type="text" class="form-control" v-model="items.subPlacementText"></input>
              </div>
            <div class="col-sm-1"></div>
              <label for="project" class="col-sm-3 col-form-label">
                Last modified on: {{items.lastModifiedDate}}<br/>
                Last modified by: {{items.lastModifiedUser}} <br/>
            </label>
            </div>

      <div class="form-group row">
              <label for="status" class="col-sm-1 col-form-label" style="padding-right:2px;padding-left:5px;"><small>Status</small></label>
              <div class="col-sm-3">
                <select class="form-control" v-model="items.selectedRecipeStatusNumber">
                  <option disabled="" value="">Select a Status</option>
                  <option v-for="(s,index) in items.recipeStatusModel" v-bind:value="s.recipeStatusNumber">{{s.recipeStatusName}}</option>
                </select>
              </div>
              <label for="sourceSubPlacement" class="col-sm-1 col-form-label" style="padding-right:2px;padding-left:5px;"><small>Source Sub Placement</small></label>
              <div class="col-sm-3">
                <select class="form-control" v-model="items.selectedSubPlacementNumber">
                  <option disabled="" value="0">Select Source Sub Placement</option>
                  <option v-for="(s,index) in items.sourceSubPlacementModel" v-bind:value="s.subPlacementNumber">{{s.subPlacementName}}</option>
                </select>
              </div>
              <label for="cononicalUrl" class="col-sm-1 col-form-label" style="padding-right:2px;padding-left:5px;"><small>Cononical URL</small></label>
              <div class="col-sm-3">
                <input type="text" class="form-control" v-model="cononicalUrl"></input>
              </div>
            </div>

      <div class="form-group row">
              <label for="category" class="col-sm-1 col-form-label" style="padding-right:2px;padding-left:5px;"><small>Category</small></label>
              <div class="col-sm-3"><small>
                <select class="form-control" v-model="items.selectedCategoryNumber" v-on:change="categoryChange();">
                  <option disabled="" value="0">Select a Category</option>
                  <option v-for="(c,index) in items.categoryModel" v-bind:value="c.categoryNumber">{{c.categoryName}}</option>
                </select></small>
              </div>
              <label for="subCategory" class="col-sm-1 col-form-label" style="padding-right:2px;padding-left:5px;"><small>Sub Category</small></label>
              <div class="col-sm-3"><small>
                <select class="form-control" v-model="items.selectedSubCategoryNumber">
                  <option disabled="" value="0">Select Sub Category</option>
                  <option v-for="(s,index) in items.subCategoryFilter" v-bind:value="s.subCategoryNumber">{{s.subCategoryName}}</option>
                </select></small>
              </div>
              <label for="attributes" class="col-sm-1 col-form-label" style="padding-right:2px;padding-left:5px;"><small>Attributes</small></label>
              <div class="col-sm-3">
                <select class="form-control" v-model="items.selectedAttributeNumber">
                  <option disabled="" value="0">Select Attribute</option>
                  <option v-for="(a,index) in items.attributeFilter" v-bind:value="a.attributeNumber">{{a.attributeName}}</option>
                </select>
              </div>
            </div>
      
      <div class="form-group row">
              <label for="owner" class="col-sm-1 col-form-label" style="padding-right:2px;padding-left:5px;"><small>Owner</small></label>
              <div class="col-sm-3">
                <select class="form-control" v-model="items.selectedOwner">
                  <option disabled="" value="">Select an Owner</option>
                  <option v-for="(o,index) in items.owner" v-bind:value="o.userLogonCd">{{o.userName}}</option>
                </select>
              </div>
              <label for="developer" class="col-sm-1 col-form-label" style="padding-right:2px;padding-left:5px;"><small>Developer</small></label>
              <div class="col-sm-3">
                 <select class="form-control" v-model="items.selectedDeveloperNumber">
                   <option disabled="" value="0">Select Developer</option>
                  <option v-for="(d,index) in items.developer" v-bind:value="d.userNumber">{{d.userName}}</option>
                </select>
              </div>
              <label for="contributor" class="col-sm-1 col-form-label" style="padding-right:2px;padding-left:5px;"><small>Contributor</small></label>
              <div class="col-sm-3">
                <select class="form-control" v-model="items.selectedContributorId">
                  <option disabled="" value="00000000-0000-0000-0000-000000000000">Select a Contributor</option>
                  <option v-for="(c,index) in items.contributorModel" v-bind:value="c.contributorId">{{c.contributorName}}</option>
                </select>
              </div>
            </div>

      <div class="form-group row">        
        <small><a href="#">Cancel</a></small>
        <small>
          |
        </small>
        <small>
          <a href="#">Save</a>
        </small>
        <small>
          |
        </small>
        <small>
          <a href="#">View</a>
        </small>
        <small>
          |
        </small>
        <small>
          <a href="#">Back</a>
        </small>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import RecipeDetail from './RecipeDetail.vue'

export default {
    components: {
        RecipeDetail
    },
    data() {
        return {
            items: {
            }
        }
    },
    methods: {
        SubCategoryFilter() {
            this.items.subCategoryFilter = this.items.subCategoryModel.filter(s => s.categoryNumber == this.items.selectedCategoryNumber);
        },
        AttributeFilter() {
            this.items.attributeFilter = this.items.attributeModel.filter(s => s.categoryNumber == this.items.selectedCategoryNumber);
        },
        getRecipeDetail() {
            var self = this;

            axios.get('http://localhost:57363/api/RecipeDetails/GetRecipeDetails/55060')
                .then((response) => {
                    self.items = response.data;
                    self.SubCategoryFilter();
                    self.AttributeFilter();
                })
                .catch(e => {
                    console.log(error);
                })
        },
        categoryChange() {
            this.items.subCategoryFilter = this.items.subCategoryModel.filter(s => s.categoryNumber == this.items.selectedCategoryNumber);
            this.items.selectedSubCategoryNumber = 0;
            this.items.attributeFilter = this.items.attributeModel.filter(s => s.categoryNumber == this.items.selectedCategoryNumber);
            this.items.selectedAttributeNumber = 0;
        }
    },
    mounted() {
        this.getRecipeDetail()
    }
}

</script>

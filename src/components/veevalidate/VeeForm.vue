<template>
    <div>

        <div class="column is-12">
            <label class="label" for="email">Email</label>
            <p :class="{ 'control': true }">
                <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
                <br>
                <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
            </p>

            <p>
                <label for="modalproject" style="padding-right:2px;padding-left:5px;">Assign to Project</label>

                <select  v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('project') }" name="project" id="modalproject" class="form-control" v-model="recipeCopyModel.selectedProjectNumber">
                    <option value="" selected disabled>Select Project (Project must already exist)</option>
                    <option v-for="project in recipeCopyModel.projects" v-bind:value="project.projectId" >{{project.projectName}}</option>
                </select>
                <!-- <br> -->
                <span v-show="errors.has('project')" class="help is-danger">{{ errors.first('project') }}</span>
            </p>

        </div>

    </div>
</template>

<script>
export default {    
 data() {
        return {
            recipeCopyModel: {
                selectedProject : '',                
                projects: [
                    { projectId: 'p1', projectName: 'project A' },
                    { projectId: 'p2', projectName: 'project B' },
                    { projectId: 'p3', projectName: 'project C' },
                ],

            }
        }
    },
}
</script>

<style scoped>

.input {
    padding-left: 5px;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    color: #363636;
    font-size: 14px;
    height: 32px;
    line-height: 24px;
    padding-left: 8px;
    padding-right: 8px;
    vertical-align: top;
    box-shadow: inset 0 1px 2px hsla(0,0%,4%,.1);
    width: 20%;
}

.input.is-danger {        
    color: #ff3860;
}

span.is-danger {  
    color: #ff3860;        
    font-size: 12px;
}

</style>
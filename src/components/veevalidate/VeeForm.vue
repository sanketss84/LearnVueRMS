<template>
    <div>

        <div class="column is-12">
            <label class="label" for="email">Email</label>
            <p :class="{ 'control': true }">
                <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
                <br>
                <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
            </p>
        </div>

    </div>
</template>

<script>
export default {    

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
<template>
<div>
    <h3>UIV Type Ahead</h3>
     <label for="input-2">States of America:</label>
    <input id="input-2" class="form-control" type="text" placeholder="Type to search...">
    <typeahead v-model="model" target="#input-2" match-start :data="states" item-key="name"/>
    <br/>
    <alert v-show="model">You selected {{model}}</alert>
</div>
</template>

<script>
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
    }
  }
</script>

<style scoped>
.dropdown-menu {
    display: block;
}

li {
    display: block;
    margin: 0 10px;

    a:hover {
        color: #fff;
        text-decoration: none;
        outline: 0;
        background-color: #337ab7;
    }
}
</style>
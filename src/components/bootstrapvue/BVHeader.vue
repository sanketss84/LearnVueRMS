<template>
    <div>
        <!-- navbar -->
        <!-- https://bootstrap-vue.js.org/docs/components/navbar -->
        <!-- set type as dark or light for either a dark or light background -->
        <!-- variant : colors can be primary, success, info, warning, danger, dark, or light. -->
         <b-navbar type="dark" variant="dark" toggleable>
            <b-navbar-brand href="#"><img src="https://placekitten.com/g/30/30" alt="BV"> Vue RMS Learn</b-navbar-brand>
            <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_dropdown_collapse">

            <!-- class ml-auto is used to right align stuff ;) -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">Home</b-nav-item>

                <b-nav-item href="#">Link</b-nav-item>

                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="User" right>
                <b-dropdown-item href="#">Account</b-dropdown-item>
                <b-dropdown-item href="#">Settings</b-dropdown-item>
                </b-nav-item-dropdown>

            </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
<template>
    <!-- https://bootstrap-vue.js.org/docs/components/collapse -->

    <div role="tablist">
        <br><br>

        <!-- Accordian 1 -->
        <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.accordion1 variant="dark">Accordion 1</b-btn>
            <!-- <label block v-b-toggle.accordion1 variant="dark">Accordion 1</label> -->
        </b-card-header>
        <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <p class="card-text">
                I start opened because <code>visible</code> is <code>true</code>
            </p>
            <p class="card-text">
                {{ text }}
            </p>
            </b-card-body>
        </b-collapse>
        </b-card>

        <!-- Accordian 2 -->
        <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.accordion2 variant="dark">Accordion 2</b-btn>
        </b-card-header>
        <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <p class="card-text">
                {{ text }}
            </p>
            </b-card-body>
        </b-collapse>
        </b-card>

        <!-- Accordian 3 -->
        <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.accordion3 variant="dark">Accordion 3</b-btn>
        </b-card-header>
        <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <p class="card-text">
                {{ text }}
            </p>
            </b-card-body>
        </b-collapse>
        </b-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      text: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `
    }
  }
}
</script>

<style scoped>

</style>
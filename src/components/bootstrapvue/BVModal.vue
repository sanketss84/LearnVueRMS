<template>
    <div>

        <b-card no-body>
        <b-tabs card>

            <b-tab title="basic" active>
                 <div>
                    <br>
                    <code>Modal triggered using v-b-modal.idOfTheb-modal using button and a href</code> <br> <br>
                    <!-- Using modifiers -->
                    <b-btn v-b-modal.myModal>Show Modal</b-btn>
                    <a href="#"  v-b-modal.myModal>Show Modal</a>

                    <!-- Using value -->
                    <b-btn v-b-modal="'myModal'">Show Modal</b-btn>
                    <a href="#"  v-b-modal="'myModal'">Show Modal</a>
                    <br>
                    <p>id is {{id}}</p>
                    <input type="text" v-model="id">

                    <!-- the modal -->
                    <b-modal id="myModal"  title="Bootstrap-Vue">
                        Hello From My Modal!
                        <app-someform :uniqueid="id"></app-someform>
                    </b-modal>
                </div>
            </b-tab>

            <b-tab title="show() hide()">
                 <div>
                    <br>
                    <p>Modal using show() and hide()</p>
                        <b-button @click="showModal">
                        Open Modal
                        </b-button>
                        <b-modal ref="myModalRef" hide-footer title="Using Component Methods">
                        <div class="d-block text-center">
                            <h3>Hello From My Modal!</h3>
                        </div>
                        <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
                        </b-modal>
                </div>
            </b-tab>

            <b-tab title="modalShow">
                <div>
                    <br>
                    <p>Modal using modalShow property</p>

                    <b-button @click="modalShow = !modalShow">
                        Open Modal
                    </b-button>

                    <b-modal v-model="modalShow">
                        Hello From Modal!
                    </b-modal>
                </div>
            </b-tab>

            <b-tab title="Prevent Close">
                <div>
                    <br>
                    <p>Modal prevent close if not complete</p>
                    <b-btn v-b-modal.modalPrevent>Launch demo modal</b-btn>
                        <!-- Main UI -->
                        <div class="mt-3 mb-3">
                        Submitted Names:
                        <ul>
                            <li v-for="n in names">{{n}}</li>
                        </ul>
                        </div>
                        <!-- Modal Component -->
                        <b-modal id="modalPrevent"
                                ref="modal"
                                title="Submit your name"
                                @ok="handleOk"
                                @shown="clearName">
                        <form @submit.stop.prevent="handleSubmit">
                            <b-form-input type="text"
                                        placeholder="Enter your name"
                                        v-model="name"></b-form-input>
                        </form>
                        </b-modal>
                </div>
            </b-tab>

            <b-tab title="Sizing">
                <div>
                    <br>
                    <p>Modal Sizing</p>
                    <div>
                        <b-btn v-b-modal.modallg variant="primary">Large modal</b-btn>
                        <b-btn v-b-modal.modalsm variant="primary">Small Centered modal</b-btn>

                        <b-modal id="modallg" size="lg" title="Large Modal">
                            Hello Modal!
                        </b-modal>

                        <!-- Vertically center your modal in the viewport by setting the centered prop. -->
                        <b-modal id="modalsm" size="sm" title="Small Modal" centered >
                            Hello Modal!
                        </b-modal>
                    </div>
                </div>
            </b-tab>
            
        </b-tabs>
        </b-card>

    </div>
</template>

<script>
import SomeForm from './SomeForm'

export default {
    props : {
        
    },    
    data() {
        return {    
            id : '12345-1',        
            modalShow: false,

            name: '',
            names: []
        }
    },
    components : {
        'app-someform' : SomeForm
    },
    methods: {
        showModal () {
            this.$refs.myModalRef.show()
        },
        hideModal () {
            this.$refs.myModalRef.hide()
        },

        clearName () {
            this.name = ''
        },
        handleOk (evt) {
        // Prevent modal from closing
        evt.preventDefault()
        if (!this.name) {
                alert('Please enter your name')
            } else {
                this.handleSubmit()
            }
        },
        handleSubmit () {
            this.names.push(this.name)
            this.clearName()
            this.$refs.modal.hide()
        }
    }
  
}
</script>

<style scoped>

</style>
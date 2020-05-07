var vue =new Vue({

    el: "#app",

    data: {

            form:{

                name:null,
                email:null,
                phone:null,
                message:null


            },

        stepList: 3,
        step: 1,
        errors:[],
    },

    methods: {

        nextStep:function(){

            if(this.step== 1){

                if(!this.form.name){
                    return false,
                    this.errors ="please fill out your name"
                }
                this.errors = null
                
            }
            if(this.step== 2){

                if(!this.form.email){
                    return false,
                    this.errors ="please fill out your email"
                }
                if(!this.form.phone){
                    return false,
                    this.errors ="please fill out your phone number"
                }
                this.errors = null
            }
            
            this.step++
        },
        
        prevStep:function(){
            this.step--
        },
        
        sendForm:function(){

            if(this.step== 3){
                if(!this.form.message){
                    return false,
                    this.errors ="please fill out your message"
                }
                this.errors = null
            }
            alert("form sended")
        }
    },
})


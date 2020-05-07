var vue =new Vue({

    el: "#app",

    data: {

            form:{

                firstName:null,
                lastName:null,
                email:null,
                phone:null,
                message:null,
                genderPicked: null,
                country :null,
                like:[]


            },

        stepList: 4,
        step: 1,
        errors:[],
    },

    methods: {

        nextStep:function(){

            if(this.step== 1){

                if(!this.form.firstName){
                    return false,
                    this.errors ="Please fill out your firstname"
                } 
                if(!this.form.lastName){
                    return false,
                    this.errors ="Please fill out your lastname"
                }
                if(!this.form.email){
                    return false,
                    this.errors ="Please fill out your email"
                }
                if(!this.form.phone){
                    return false,
                    this.errors ="Please fill out your phone number"
                }
                this.errors = null
                
            }

            if(this.step== 2){
                if(!this.form.genderPicked){
                    return false,
                    this.errors ="Please choose gender"
                }
                if(!this.form.country){
                    return false,
                    this.errors ="Please choose country"
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
                    this.errors ="Please fill out your message"
                }
                this.errors = null
            }
            this.step++
        }
    },
})


//vm stands for viewmodel
// the world model describes the word and the relationship that vue establishes between 2 parts of on application
const vm = Vue.createApp({
    data(){
        return {
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            url: 'https://google.com',
            raw_url: '<a href = "https://google.com" target="_blank">Google</a>',
            age: 20
        }
    },
    methods:{
       increment(){
        this.age++
       },
       updateLastName(msg, event){
        // event.preventDefault()

        // console.log(msg)

        this.lastName = event.target.value
       },
       updateMiddleName(event){
        this.middleName = event.target.value
       }
    },
    // using the computed property so now that this function doesn't get called if the age is updated
    //computed properties are there to calculate a property
    computed:{
        fullName() {
            console.log('Full name computed property was called!')
            
            return `${this.firstName} ${this.middleName} ${this.lastName}`
           }
    },
    watch:{
        age(newVal, oldVal){
            setTimeout(()=>{
                this.age = 20
            },3000)
        }
        //watchers aren't used as much as data, methods, or computed properties
    }
}).mount('#app')

//^ using methods and can use the this keyword! Do not use arrow functions as it will not give us access to the this keyword

// setTimeout(() =>{
//     vm.firstName = 'Bob';
// }, 2000);



// proxying helps us tap into vm.firstName as oppose to doing vm.data.firstName

//What is a proxy?
// A figure that can be used to represent the value of something in a calculation./
//Accessing the data
// vm.$data.firstName this line will return the firstName from the data object. Makes the length of code a bit better.
// We use proxy getters and setters that keeps our code readable and straightforward, vue is capable of calling the correct function. Makes it convenient. Proxy is already built in for us

// Vue.createApp({
//     data(){
//         return {
//             firstName: 'Jane',
//             lastName: 'Doe'
//         }
//     }
// }).mount('#app2')
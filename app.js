//vm stands for viewmodel
// the world model describes the word and the relationship that vue establishes between 2 parts of on application
const vm = Vue.createApp({
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            url: 'https://google.com',
            raw_url: '<a href = "https://google.com" target="_blank">Google</a>',
            age: 20
        }
    },
    methods:{
       fullName() {
        return `${this.firstName} ${this.lastName}`
       },
       increment(){
        this.age++
       }
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
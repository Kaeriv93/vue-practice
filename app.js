//vm stands for viewmodel
// the world model describes the word and the relationship that vue establishes between 2 parts of on application
const vm = Vue.createApp({
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe'
        }
    }
}).mount('#app')

// Vue.createApp({
//     data(){
//         return {
//             firstName: 'Jane',
//             lastName: 'Doe'
//         }
//     }
// }).mount('#app2')
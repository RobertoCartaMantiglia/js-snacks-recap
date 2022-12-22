/** Chiedere all'utente quanti elementi vuole includere nell'array.
 Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100.
 Stampare a schermo la somma dei numeri generati. */
 const { createApp } = Vue

createApp({
  data() {
    return {
      
    }
  },
  methods: {
   
  }
}).mount('#app')


axios.get('https://flynn.boolean.careers/exercises/api/random/int ')
    .then( (response) =>{
        console.log(response.data.response);
        
    });
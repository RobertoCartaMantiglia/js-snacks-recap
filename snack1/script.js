/**
Creare due div; uno conterrà numeri dispari di colore rosso e l'altro conterrà numeri pari in verde.
 Ad ogni click di un bottone chiedere all'API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari.
*/
const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      randomNumber: 'null',
      oddNumbers: [],
      evenNumbers: [],
    }
  },
  methods: {
     getNewRandomNumber(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/int ')
            .then( (response) =>{
                console.log(response.data.response);
                if(this.randomNumber % 2 === 0){
                    
                }
            });
     }
  }
}).mount('#app')
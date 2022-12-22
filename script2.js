/***
Chiedere all'API 10 nomi da inserire in un array di invitati.
 Una volta generata la lista chiedere all'utente di dire il proprio nome.
 Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      names: [],
    }
  },
  methods: {
     getNewRandomName(){
        for(let i=0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/name')
            .then( (response) =>{
                console.log(response.data);
                let name = response.data.response;
                this.names.push(this.name);
            });
        }
     }
  },
  created (){
    this.getNewRandomName;
  }
}).mount('#app')
/***
Chiedere all'API 10 nomi da inserire in un array di invitati.
 Una volta generata la lista chiedere all'utente di dire il proprio nome.
 Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/

const { createApp } = Vue

createApp({
  data() {
    return {

      names: [],
      userName: '',
      isNameInList: false,
    }
  },
  methods: {
    getNewRandomName() {
      for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/name')
          .then((response) => {
            console.log(response.data.response);
            this.names.push(response.data.response);
          });
      }
    },
    checkList(userName) {
      //  this.isNameInList = this.names.includes(userName);
      if (this.names.includes(this.userName)) {
        this.isNameInList = true;

      }
    }
  },
  created() {
    this.getNewRandomName();
  }
}).mount('#app')
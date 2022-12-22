/** Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
 Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) aggiungendo anch'essa al thread,
 differenziando i messaggi utente da quelli del computer. */


 const { createApp } = Vue

createApp({
  data() {
    return {
      userTextMessage: '',
      activeIndex: 0,
      messages: [
       
    ],
    }
  },
  methods: {
    createNewMessage(){
        let newMessage = {
            text: this.userTextMessage,
            status: 'sent',
        }
        if(newMessage.text != ''){
            this.messages.push(newMessage); 
            this.userTextMessage = '';          
        }else{
            alert("scrivi qualcosa");
        }

        setTimeout(this.autoMessage, 1000);
    },
    autoMessage(){
        let newAutoMessage = {
            text: axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
                    .then( (response) =>{
                        console.log(response.data.response); 
                        
                    }),       
            status: 'received',            
        }        
        this.messages.push(newAutoMessage);
        
    },
  }
}).mount('#app')


 

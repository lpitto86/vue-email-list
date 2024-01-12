/* Attraverso lapposita API di Boolean
   https://flynn.boolean.careers/exercises/api/random/mail
   generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

// Funzione createApp dall'oggetto Vue
const { createApp } = Vue;

createApp({
      data() {
            return {
                  url: 'https://flynn.boolean.careers/exercises/api/random/mail',
                  emails: [],
            };
      },
      mounted() {
            axios.get(this.url)
                  .then(response => {
                        this.emails = response.data.response;
                  })
                  .catch(error => {
                        console.error('Errore nella richiesta API', error);
                  })
                  .finally(() => {
                        console.log('Mounted hook completed');
                  });
      }
}).mount('#app');
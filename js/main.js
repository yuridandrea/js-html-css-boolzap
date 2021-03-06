var app = new Vue ({
  el:"#app",
  data: {
    sentMessage : "",
    selectedIndex: 0,
    search: "",
    user: {
      name: "Yuri D'Andrea",
      avatar: "_io"
    },
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ]
  },
  methods: {
    sending: function () {
     let contactActive = this.contacts[this.selectedIndex]
      if(this.sentMessage.trim()!= " ") {
        contactActive.messages.push(
          {
            date: dayjs().format('DD MM YYYY hh.mm'),
            text: this.sentMessage,
            status: 'sent'
        }
        )
      }
      this.sentMessage = ""

      setTimeout(() => {
        contactActive.messages.push(
          {
            date: dayjs().format('DD MM YYYY hh.mm'),
            text: "ok",
            status: "recived"
          }
        )
      }, 1000);
    },
    answerMessage: function () {
      setInterval(() => {
      return "ok"
      }, 1000);
    },
    searchQuery() {
      let self = this;
      this.contacts.forEach((element) => {
        if (element.name.toLowerCase().includes(self.search.toLowerCase())) {
          element.visible = true;
        }
        else {
          element.visible = false;
        }
      });
    }

  },

    
  //   }
  //   serchContact () {
  //     if (this.searchQuery) {
  //       return this.contacts.filter((utente) => {
  //         return utente.name.match(this.searchQuery)
  //       })
  //     }
  //   }
  
});
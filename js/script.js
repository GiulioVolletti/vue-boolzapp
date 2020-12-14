console.log("hello world");

var boolzApp = new Vue (
  {
    el:'#app_container',
    data: {
      messageArray: [],
      lastLogin : "",
      texAdded: "",
      searchText: "",
      activeImage: "",
      names: "",
      visibles: false,
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
      ],
      },

      methods: {
        chatOpen: function(index){
          // console.log(index);
          this.activeImage = "";
          this.names = "";
          this.messageArray = [];
          var lastMessage = this.contacts[index].messages.length;
          this.lastLogin = this.contacts[index].messages[lastMessage - 1].date;
          // console.log(this.lastLogin);
          this.visibles = this.contacts[index].visible;

          this.messageArray = this.contacts[index].messages;
          // console.log(this.messageArray);
          this.names = this.contacts[index].name;
          this.activeImage = this.contacts[index].avatar;

        },

        lastDateInContact: function (index2) {
          var lastMessage = this.contacts[index2].messages.length;
          var lastLoginContact = this.contacts[index2].messages[lastMessage - 1].date;
          return lastLoginContact
        },

        lastMessageInContact: function (index2) {
          var lastMessage = this.contacts[index2].messages.length;
          var lastMessageContact = this.contacts[index2].messages[lastMessage - 1].text;
          return lastMessageContact
        },

        // user add text
        addText: function () {
          // console.log(this.texAdded);
          var currentMessage = {
            date: '',
            text: "",
            status: 'sent'
          };
          var currentHours = (new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() );
          var currentDay = (new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear() )
          currentMessage.date = currentDay + " " + currentHours ;
          // console.log(currentMessage.date);
          currentMessage.text = this.texAdded;


          this.received();
          this.messageArray.push(currentMessage);
          this.texAdded = "";
        },

        // contact add text
        received: function () {
          setTimeout( () => {
          var newMessage = {
              date: "",
              text: "ok",
              status: 'received'
            };
          var currentHours = (new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() );
          var currentDay = (new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear() )

          newMessage.date = currentDay + " " + currentHours ;


          boolzApp.messageArray.push(newMessage);
          // console.log("interval", newMessage.date )
        }, 1000);
        },


        filter: function (){
          const arrayFiltered = this.contacts.filter(
          (element) => {
            if (element.name == this.searchText) {
              return element;
              
            } else if (this.searchText == "") {
              return this.contacts
            }
          })
          this.contacts = arrayFiltered;

          console.log(arrayFiltered);

        },
    }
  }
);

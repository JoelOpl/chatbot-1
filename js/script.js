
let bots = [
  {
    "botId": 1,
    "botName": "John LaMeteo",
    "botAvatar": "./images/avatar.png",
    "botFeatures": ["weather", "time"],
    "messages": [
      {
        "time": new Date().setHours(12, 15),
        "content": "heure",
        "messageClass": "message__container--right"
      },
      {
        "time": new Date().setHours(12, 15),
        "content": "Il est 12 h 15 :)",
        "messageClass": "message__container--left"
      },
      {
        "time": new Date().setHours(12, 17),
        "content": "meteo",
        "messageClass": "message__container--right"
      },
      {
        "time": new Date().setHours(12, 17),
        "content": "Il fait soleil et 24 degrés",
        "messageClass": "message__container--left"
      }
    ]
  },
  {
    "botId": 2,
    "botName": "Sarah Croche",
    "botAvatar": "./images/avatar.png",
    "botFeatures": ["roll", "time"],
    "messages": [
      {
        "time": new Date().setHours(12, 19),
        "content": "heure",
        "messageClass": "message__container--right"
      },
      {
        "time": new Date().setHours(12, 19),
        "content": "Il est 12 h 19 :)",
        "messageClass": "message__container--left"
      },
      {
        "time": new Date().setHours(12, 40),
        "content": "roll",
        "messageClass": "message__container--right"
      },
      {
        "time": new Date().setHours(12, 40),
        "content": "Le dé est tombé sur la case 6 !",
        "messageClass": "message__container--left"
      }
    ]
  },
  {
    "botId": 3,
    "botName": "Sarah Croche",
    "botAvatar": "./images/avatar.png",
    "botFeatures": ["roll", "time"],
    "messages": [
      {
        "time": new Date().setHours(12, 19),
        "content": "heure",
        "messageClass": "message__container--right"
      },
      {
        "time": new Date().setHours(12, 19),
        "content": "Il est 12 h 19 :)",
        "messageClass": "message__container--left"
      },
      {
        "time": new Date().setHours(12, 40),
        "content": "roll",
        "messageClass": "message__container--right"
      },
      {
        "time": new Date().setHours(12, 40),
        "content": "Le dé est tombé sur la case 6 !",
        "messageClass": "message__container--left"
      }
    ]
  },


];

// Builds contact and inserts them in the list,
// and add click listener to contacts  
window.onload = function () {
  main();
}

function main() {

  let contactsList = document.getElementsByClassName("contacts__discussion__list")[0];

  bots.forEach(function (bot) {
    let newChild = document.createElement("div");
    newChild.className = "contact__discussion";
    newChild.id = "bot" + bot.botId;

    let contactAvatar = document.createElement("img");
    contactAvatar.src = bot.botAvatar;

    let contactName = document.createElement("span");
    contactName.innerText = bot.botName;

    let messagesCounter = document.createElement("span");
    messagesCounter.className = "discussion__message-counter";
    messagesCounter.innerText = bot.messages.length;

    newChild.append(contactAvatar, contactName, messagesCounter);
    newChild.addEventListener('click', function () {
      contactClickHandler(newChild.id);
    });

    contactsList.appendChild(newChild);
  });

  inputListener();
}

function contactClickHandler(contactId) { }

function generateMessage(message) { }

function inputListener() {

  let input = document.querySelector(".discussion-feed__input");

  input.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      botHandler({ "time": new Date, "content": input.value, "messageClass": "message__container message__container--right" });
      if (input.value != "")
        generateMessage({ "time": new Date, "content": input.value, "messageClass": "message__container message__container--right" }, 1);
      input.value = "";
    }
    return;
  });

  let sendButton = document.querySelector(".send-button");

  sendButton.addEventListener("click", function (event) {
    if (input.value != "")
      generateMessage({ "time": new Date, "content": input.value, "messageClass": "message__container message__container--right" }, 1)
  });
}




function botHandler(message) { }




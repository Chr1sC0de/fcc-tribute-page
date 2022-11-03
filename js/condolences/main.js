import { condolence_messages } from './data.js';
import { fade_condolence } from './utils.js';

var   message_counter    = 0;
const condolence_message = document.getElementById("condolence-message");
const condolence_from    = document.getElementById("condolence-from");
const prevButton         = document.getElementById("slide-arrow-prev");
const nextButton         = document.getElementById("slide-arrow-next");
const transition_time    = 20;

// initialize the message

condolence_message.innerHTML = condolence_messages[message_counter][0];
condolence_from.innerHTML    = condolence_messages[message_counter][1];

nextButton.addEventListener("click", () => {
    if ((message_counter+1) < condolence_messages.length) {
        message_counter += 1;
    } else {
        message_counter = 0;
    }
    fade_condolence(transition_time, condolence_message, condolence_from, message_counter, condolence_messages)
});

prevButton.addEventListener("click", () => {
    if ((message_counter-1) >= 0) {
        message_counter -= 1;
    } else {
        message_counter = condolence_messages.length-1;
    }
    fade_condolence(transition_time, condolence_message, condolence_from, message_counter, condolence_messages)

});

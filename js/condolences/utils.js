function fade_condolence(time, message, from, counter, message_list) {

    var fadeEffect = setInterval(function () {
            if (!message.style.opacity) {
                message.style.opacity = 1;
                from.style.opacity    = 1;
            }
            if (message.style.opacity > 0) {
                message.style.opacity -= 0.1;
                from.style.opacity    -= 0.1;
            } else {
                clearInterval(fadeEffect);
                message.innerHTML = message_list[counter][0];
                from.innerHTML    = message_list[counter][1];
                var fadeIn = setInterval(
                    function test() {
                        if (message.style.opacity < 1.0) {
                            message.style.opacity = parseFloat(message.style.opacity) + 0.1;
                            from.style.opacity = parseFloat(from.style.opacity) + 0.1;
                        } else {
                            clearInterval(fadeIn);
                        }
                    }, time
                );
            }
        }, time);

};

export { fade_condolence };

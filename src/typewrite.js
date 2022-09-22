function initTyping() {
    let letter = 0;
    const text = 'Victor Zambelli';

    function typeWriter() {
        if(letter < text.length) {
            document.querySelector(".home-type_name").innerHTML += text.charAt(letter);
            letter++;
            setTimeout(typeWriter, 180)
        }
    }

    typeWriter();
}

initTyping()
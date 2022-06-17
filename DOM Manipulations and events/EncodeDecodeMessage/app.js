function encodeAndDecodeMessages() {
    let inputArea = document.querySelector('textarea')
    let outputArea = document.querySelectorAll('textarea')[1]

    let encodeBtn = document.querySelectorAll('button')[0] 
    let decodeBtn = document.querySelectorAll('button')[1]


    encodeBtn.addEventListener('click', encode)
    decodeBtn.addEventListener('click', decode)


    function encode(event){
        
        let encodedMessage = ''

        for (let i = 0; i < inputArea.value.length; i++) {
            const element = inputArea.value[i];
            let ascii_code = element.charCodeAt(0) + 1 
            encodedMessage += String.fromCharCode(ascii_code)
        }
        outputArea.value = encodedMessage
        inputArea.value = ''
    }

    function decode(event){

        let decodedMessage = ''

        for (let i = 0; i < outputArea.value.length; i++) {
            const element = outputArea.value[i];
            let ascii_code  = element.charCodeAt(0) - 1 
            decodedMessage += String.fromCharCode(ascii_code)
        }
        outputArea.value = decodedMessage
    }

}

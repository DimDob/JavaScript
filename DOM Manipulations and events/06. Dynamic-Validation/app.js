function validate() {
    let pattern = new RegExp(/^\w*\@(\w*\.\w+)$/gm)

    let inputText = document.getElementById('email')
    inputText.addEventListener('change', trigger)
    
    let btn = document.createElement('button')
    btn.textContent = 'click'
    document.appendChild(btn)

    
    function trigger(event){
        regex.test(inputText.value) ? inputText.classList.remove('error') : inputText.classList.add('error')
        regex.test(inputText.value) ? inputText.value = regex.test : inputText.value = 'error'
    }

}

// function validate() {
//     let regex = /^\w*\@(\w*\.\w+)$/gm;
//     const inputElement = document.querySelector("#email");
//     inputElement.addEventListener("change", ifChange);
  
//     function ifChange() {
//       regex.test(inputElement.value)
//         ? inputElement.classList.remove("error")
//         : inputElement.classList.add("error");
//     }
//   }
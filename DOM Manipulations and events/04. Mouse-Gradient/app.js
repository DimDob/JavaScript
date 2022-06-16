function attachGradientEvents() {
    let gradient = document.getElementById('gradient') 

    let result = document.getElementById('result')

    gradient.addEventListener('mousemove', trigger)
    function trigger(event){ 

        result.textContent = Math.floor(event.offsetX / gradient.clientWidth * 100) + '%'
        
        document.getElementById('result').appendChild(p)
    }
}
function attachEventsListeners() {

    let buttons = document.querySelectorAll('input[type="button"]') 

    const data = {'days':1, 'hours':24, 'minutes':1440, 'seconds':86400}

    for (let btn of buttons) {
        btn.addEventListener('click', trigger)
}
    function convert(value, unit){
        let days = value / data[unit]
        return {
            days: days,
            hours:days *data.hours,
            minutes: days * data.minutes,
            seconds: days * data.seconds
        }
    }

    function trigger(event){
        let input = event.target.parentElement.querySelector('input[type="text"]')
        let time = convert(Number(input.value), input.id)

        document.getElementById('days').value = time.days //setting up days
        document.getElementById('hours').value = time.hours // setting up hours
        document.getElementById('minutes').value = time.minutes //setting up minutes
        document.getElementById('seconds').value = time.seconds //setting up seconds

    }
}

function addItem() {
    let li = document.createElement('li')

    let txt = document.getElementById('newItemText').value
    li.textContent = txt
    const ul = document.querySelector('ul')
    ul.appendChild(li)
    document.getElementById('newItemText').value = ''
}
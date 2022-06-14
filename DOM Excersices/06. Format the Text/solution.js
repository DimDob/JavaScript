function solve() {
  let inputArea = document.getElementById('input')

  let sentences = inputArea.value.split('.').filter(s => s.length > 0)

  while (sentences.length > 0) { 
    let paragText = sentences.splice(0,3).join('. ') + '.'
    p = document.createElement('p')
    p.textContent = paragText
    document.getElementById('output').appendChild(p)
  }
 
}
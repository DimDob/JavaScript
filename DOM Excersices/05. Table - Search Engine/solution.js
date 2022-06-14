function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

      let inputTxt = document.getElementById('searchField')
      const rows = Array.from(document.querySelectorAll('tr') ).slice(2)


   function onClick() {

      for (let row of rows) {
         row.classList.remove('select')
         if (row.innerHTML.includes(inputTxt.value)) {
            row.className = 'select'
         }
      }
      inputTxt.value=''

   }
}

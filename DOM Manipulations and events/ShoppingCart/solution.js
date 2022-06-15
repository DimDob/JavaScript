function solve() {
   let textArea = document.querySelector('textarea')
   let classElements = document.getElementsByClassName('product-title') 

   let breadBtn = document.querySelectorAll('button[class="add-product"]')[0] 
   breadBtn.addEventListener('click', triggerBread)

   let milkBtn = document.querySelectorAll('button[class="add-product"]')[1]
   milkBtn.addEventListener('click',triggerMilk) 

   let tomatoesBtn = document.querySelectorAll('button[class="add-product"]')[2]
   tomatoesBtn.addEventListener('click', triggerTomatoes)


   let products_bought = new Set()
   let total_money_spent = 0


   function triggerBread(event){
      product_name = document.getElementsByClassName('product-title')[0].textContent
      product_price = Number(document.getElementsByClassName('product-line-price')[0].textContent)

      let result = `Added ${product_name} for ${product_price.toFixed(2)} to the cart.\n` 
      products_bought.add(product_name)
      total_money_spent += product_price
      textArea.textContent += result
   }

   function triggerMilk(event){
      product_name = document.getElementsByClassName('product-title')[1].textContent
      product_price = Number(document.getElementsByClassName('product-line-price')[1].textContent)
      let result = `Added ${product_name} for ${product_price.toFixed(2)} to the cart.\n` 
      products_bought.add(product_name)
      total_money_spent += product_price
      textArea.textContent += result
   }

   function triggerTomatoes(event){
      product_name = document.getElementsByClassName('product-title')[2].textContent

      product_price = Number(document.getElementsByClassName('product-line-price')[2].textContent)
      let result = `Added ${product_name} for ${product_price.toFixed(2)} to the cart.\n` 

      products_bought.add(product_name)
      total_money_spent += product_price
      textArea.textContent += result
   }

   let checkoutBtn = document.querySelector('button[class="checkout"]') 
   checkoutBtn.addEventListener('click', checkout)
   function checkout(event) { 
      textArea.textContent += `You bought ${Array.from(products_bought).join(', ')} for ${total_money_spent.toFixed(2)}.`
      breadBtn.removeEventListener('click', triggerBread)
      milkBtn.removeEventListener('click', triggerMilk)
      tomatoesBtn.removeEventListener('click', triggerTomatoes)
      checkoutBtn.removeEventListener('click', checkout)
   }
}
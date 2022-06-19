function solution(){

    const ingredients = {protein:0, carbohydrate:0, fat:0, flavour:0}

    const foods = {apple: {carbohydrate:1, flavour:2},
    lemonade:{carbohydrate:10, flavour:20},
   burger:{carbohydrate:5, flavour:3, fat:7},
    eggs: {protein:5, fat:1, flavour:1},
     turkey:{protein:10, carbohydrate:10, fat:10, flavour:10}}


    const commands = {
        restock,
        prepare,
        report
    }

    return manager
    function manager(input){
        const [command, microelement, quantity] = input.split(' ')
        return commands[command](microelement, quantity)
    }


    function restock(microelement, quantity){
        quantity = Number(quantity)
        ingredients[microelement] += quantity
        return 'Success'
    }

    function prepare(recipe, quantity){
        quantity = Number(quantity)
        for (const needed_ingredient in foods[recipe]) {
            if (Object.hasOwnProperty.call(foods[recipe], needed_ingredient)) {
                if (ingredients[needed_ingredient] < foods[recipe][needed_ingredient] * quantity){
                    return `Error: not enough ${needed_ingredient} in stock`
                } 
            }
        }
    
    for (const needed_ingredient in foods[recipe]) {
        if (Object.hasOwnProperty.call(foods[recipe], needed_ingredient)) {
            ingredients[needed_ingredient] -=  foods[recipe][needed_ingredient] * quantity
        }
    }
    return 'Success'

    }



    function report(){
        return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}` 
    }
}
let manager = solution (); 
// var expectationPairs = [
//     ['restock carbohydrate 10', 'Success'],
//     ['restock flavour 10', 'Success'],
//     ['prepare apple 1', 'Success'],
//     ['restock fat 10', 'Success'],
//     ['prepare burger 1', 'Success'],
//     ['report', 'protein=0 carbohydrate=4 fat=3 flavour=5']

console.log(manager('restock carbohydrate 10'))
console.log(manager('restock flavour 10'))
console.log(manager('prepare apple 1'))
console.log(manager('restock fat 10'))
console.log(manager('prepare burger 1'))
console.log(manager('report'))
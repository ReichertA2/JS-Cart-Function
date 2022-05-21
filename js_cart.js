let actionString = "add_to_cart"
let actionString1 = "remove_from_cart"
let actionString2 = "remove_all_from_cart"
let actionString3 = "empty_cart"


let item={
        id: 0
    }

let cartArray = []

function shoppingCart(actionString, item, cartArray=[]){
    let new_cartArray=cartArray.slice()

    switch(actionString){
        case "add_to_cart":
            new_cartArray.push(item)
            return new_cartArray ;
    
        case "remove_from_cart":
            for(const item_in_cart of new_cartArray){
                if (item_in_cart===item){
                    new_cartArray.pop(item)
                    return new_cartArray ;
                }
            }
            return new_cartArray ;
        
        case "remove_all_from_cart":
            for(const item_in_cart of new_cartArray){
                if (item_in_cart===item){
                    new_cartArray.pop(item)
                }
            }
            return new_cartArray;

        case "empty_cart":
            for(const item_in_cart of new_cartArray){
                    new_cartArray.pop(item)
                }
            return new_cartArray;
        
        default:
            console.log("Invalid action")
            break;
    }

}

console.log(shoppingCart(actionString,item, cartArray))
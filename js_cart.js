let actionString = "add_to_cart"
let actionString1 = "remove_from_cart"
let actionString2 = "remove_all_from_cart"
let actionString3 = "empty_cart"


let item={
        id: 0
    }

let cartArray = ['carrot','pear','apple','pear']

function shoppingCart(actionString, item, cartArray=[]){
    let new_cartArray=cartArray.slice()

    switch(actionString){
        case "add_to_cart":
            new_cartArray.push(item)
            return new_cartArray ;
    
        case "remove_from_cart":
            
            if (new_cartArray.includes(item)){
                let itemIndex = new_cartArray.indexOf(item)
                new_cartArray.splice(itemIndex,1)
                
                return new_cartArray ;
            
            }
            return new_cartArray ;
        
        case "remove_all_from_cart":
            let newCartWithout = []
            for(let item_in_cart of new_cartArray){
                if (item_in_cart!==item){
                    newCartWithout.push(item_in_cart)
                }
            }
            return newCartWithout;

        case "empty_cart":
            new_cartArray = [];
            
            return new_cartArray;
        
        default:
            console.log("Invalid action") 
            break;
    }

}

console.log(shoppingCart(actionString3,'pear',cartArray))
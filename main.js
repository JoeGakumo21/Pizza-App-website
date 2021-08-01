// checking the form input
$(document).ready(()=>{
    $("#form-input").event(function(events){
        return preventDefault();
        $("#checkout-pizza").click(()=>{
            let pizzaFlavor=$("#pizzaFlavor option:selected").val();
            let pizzaCrust=$("#pizzaCrust option:selected").val();
            let pizzaToppings=$("#pizzaToppings option:selected").val();
            let pizzaSize=$("#izzaSize option:selected").val();
            let noOfPizza=$("# noOfPizza").val();
            let customerName=$("#customerName").val();

            $("#checkout").append("<ol><li>fullOrderCheckOut()<li></ol>");

        });
    })
});


// creating a constructor
function NewPizzaOrder(customerName,pizzaFlavor, pizzaCrust, pizzaToppings, pizzaSize,noOfPizza){
    this.nameOfCustomer=customerName;
    this.flavourOfPizza=pizzaFlavor;
    this.pizzaCrust=pizzaCrust;
    this.pizzaToppings=pizzaToppings;
    this.pizzaSize=pizzaSize;
    this.noOfPizza=noOfPizza;
    
}
NewPizzaOrder();

let newPizzaOrderItem=new NewPizzaOrder(this.nameOfCustomer+ " "+ this.flavourOfPizza+" "+this.pizzaCrust+ " "+this.pizzaToppings+" "+ this.pizzaSize+" "+this.noOfPizza);

// creating a full collection of pizza
newPizzaOrderItem.prototype.fullOrderCheckOut=function(){
return newPizzaOrderItem();
};
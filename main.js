


$(document).ready(function(){
    $("#btn-menu").hover(()=>{
        $(".menu-recipe").show();
    })
    $("#btn-menu").mouseout(()=>{
        $(".menu-recipe").hide(10000);
    })

    // // getting values from user
    // $("#proceed-pizza").click(()=>{
    //     // let customer=$("customerName").val();
    //     let pizzaFlavour=$("#pizzaFlavor option:selected").val();
    //     let crust=$("#pizzaCrust option:selected").val();
    //     let pizzaToppings=$("#pizzaToppings option:selected").val();
    //     let size=$("#izzaSize option:selected").val();
    //     let number=$("#noOfPizza").val();

        // creating a constructor
        // function NewPizzaOrder(pizzaFlavor, pizzaCrust, pizzaToppings, pizzaSize,noOfPizza,total){
        //     this.flavourOfPizza=pizzaFlavor;
        //     this.pizzaCrust=pizzaCrust;
        //     this.pizzaToppings=pizzaToppings;
        //     this.pizzaSize=pizzaSize;
        //     this.noOfPizza=noOfPizza;
        //     this.total=total;
            
        // }
        // NewPizzaOrder();

        // NewPizzaOrder.prototype.detailes=function(){

        // }


        // 
        $(".display").append("<li>" +"You have Ordered : " + getQuantity("")  +  " pizza."  +  ""  +  " The Total Amount is kshs "  +  (totalAmount)  +  ""  +  " Thank you for your order welcome again."+"<li>");

});



function getpizzaFlavor(){
    var pizzaFlavor=document.getElementById("pizzaFlavor").value;
    return parseInt(pizzaFlavor);
}
function getpizzaSize() {
    var selectedValue = document.getElementById("pizzaSize").value;
    return parseInt(selectedValue);
}
function pizzaCrust() {
    var selectedCrust = document.getElementById("pizzaCrust").value;
    return parseInt(selectedCrust);
}
function pizzaToppings() {
    var selectedPizzaToppings = document.getElementById("pizzaToppings").value;
    return parseInt(selectedPizzaToppings);
}
function getQuantity() {
    var selectedQuantity = document.getElementById("quan").value;
    return parseInt(selectedQuantity);
}
function getTotalAmount() {
    var totalAmount = (getpizzaSize()+ getpizzaFlavor() + pizzaCrust() + pizzaToppings()) * getQuantity();
    alert("You have Ordered : " + getQuantity("")  +  " pizza."  +  ""  +  " The Total Amount is kshs "  +  (totalAmount)  +  ""  +  " Thank you for your order welcome again.");
    prompt("KIndly indicate Your location");
    alert("You delivery fee is Ksh. 250 and the total charges will be "+ (totalAmount+250));
    alert("You order will be delivered shortly");
    alert("Continue shoppping with JoeKumsyPizzaIn each and every time .");
}


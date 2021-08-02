


// $(document).ready(function(){
//     $("#btn-menu").hover(()=>{
//         $(".menu-recipe").show();
//     })
//     $("#btn-menu").mouseout(()=>{
//         $(".menu-recipe").hide(10000);
//     })

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
        // $(".display").append("<li>" +"You have Ordered : " + getQuantity("")  +  " pizza."  +  ""  +  " The Total Amount is kshs "  +  (totalAmount)  +  ""  +  " Thank you for your order welcome again."+"<li>");





// function getpizzaFlavor(){
//     var pizzaFlavor=document.getElementById("pizzaFlavor").value;
//     return parseInt(pizzaFlavor);
// }
// function getpizzaSize() {
//     var selectedValue = document.getElementById("pizzaSize").value;
//     return parseInt(selectedValue);
// }
// function pizzaCrust() {
//     var selectedCrust = document.getElementById("pizzaCrust").value;
//     return parseInt(selectedCrust);
// }
// function pizzaToppings() {
//     var selectedPizzaToppings = document.getElementById("pizzaToppings").value;
//     return parseInt(selectedPizzaToppings);
// }
// function getQuantity() {
//     var selectedQuantity = document.getElementById("quan").value;
//     return parseInt(selectedQuantity);
// }
// function getTotalAmount() {
//     var totalAmount = (getpizzaSize()+ getpizzaFlavor() + pizzaCrust() + pizzaToppings()) * getQuantity();
//     alert("You have Ordered : " + getQuantity("")  +  " pizza."  +  ""  +  " The Total Amount is kshs "  +  (totalAmount)  +  ""  +  " Thank you for your order welcome again.");
//     prompt("KIndly indicate Your location");
//     alert("You delivery fee is Ksh. 250 and the total charges will be "+ (totalAmount+250));
//     alert("You order will be delivered shortly");
//     alert("Continue shoppping with JoeKumsyPizzaIn each and every time .");
// }

$(function () {
    $("#btn-menu").hover(()=>{
        $(".menu-recipe").show();
    })
    $("#btn-menu").mouseout(()=>{
        $(".menu-recipe").hide(10000);
    })

    // prompt user location
    $(".pickupLocation").click(()=>{
        prompt("Kindly indicate the location");
        alert("Your delivery fee charges is Ksh:200, the total Money are: ");
        alert("We appreciate your partnership with us, Happy moments and continue shopping with JoeKumsy PizzaIn");
    })

    $('.summary').hide();
    $('.cdata-overlay').hide();
//Get inputs from user and use them to create new objects
    $("#proceed").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        

        //switch case to determine the pizza
        let price, totalPrice;
        switch (flavour) {
            case flavour = "vegtikka":
                switch (size) {
                    case size = "small":
                        price = 800;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 350;
                        }
                        break;
                    case size = "medium":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 300;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 350;
                        } else {
                            totalPrice = (price * number) + 400;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 400;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 500;
                        } else {
                            totalPrice = (price * number) + 550;
                        }
                        break;
                }
                break;
            case flavour = "chickentikka":
                switch (size) {
                    case size = "small":
                        price = 800;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 350;
                        }
                        break;
                    case size = "medium":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 300;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 350;
                        } else {
                            totalPrice = (price * number) + 400;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 400;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 500;
                        } else {
                            totalPrice = (price * number) + 550;
                        }
                        break;
                }
                break;
            case flavour = "periperi":
                switch (size) {
                    case size = "small":
                        price = 800;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 350;
                        }
                        break;
                    case size = "medium":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 300;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 350;
                        } else {
                            totalPrice = (price * number) + 400;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 400;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 500;
                        } else {
                            totalPrice = (price * number) + 550;
                        }
                        break;
                }
                break;
            case flavour = "bbq":
                switch (size) {
                    case size = "small":
                        price = 800;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 350;
                        }
                        break;
                    case size = "medium":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 300;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 350;
                        } else {
                            totalPrice = (price * number) + 400;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 400;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 500;
                        } else {
                            totalPrice = (price * number) + 550;
                        }
                        break;
                }
                break;
            case flavour = "boerewors":
                switch (size) {
                    case size = "small":
                        price = 800;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 350;
                        }
                        break;
                    case size = "medium":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 300;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 350;
                        } else {
                            totalPrice = (price * number) + 400;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 400;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 500;
                        } else {
                            totalPrice = (price * number) + 550;
                        }
                        break;
                }
                break;
            case flavour = "hawaiian":
                switch (size) {
                    case size = "small":
                        price = 800;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 350;
                        }
                        break;
                    case size = "medium":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 300;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 350;
                        } else {
                            totalPrice = (price * number) + 400;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 400;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 500;
                        } else {
                            totalPrice = (price * number) + 550;
                        }
                        break;
                }
                break;
            case flavour = "mushroom":
                switch (size) {
                    case size = "small":
                        price = 800;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 350;
                        }
                        break;
                    case size = "medium":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 300;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 350;
                        } else {
                            totalPrice = (price * number) + 400;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 400;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 500;
                        } else {
                            totalPrice = (price * number) + 550;
                        }
                        break;
                }
                break;
            case flavour = "regina":
                switch (size) {
                    case size = "small":
                        price = 800;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 350;
                        }
                        break;
                    case size = "medium":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 300;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 350;
                        } else {
                            totalPrice = (price * number) + 400;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 400;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 500;
                        } else {
                            totalPrice = (price * number) + 550;
                        }
                        break;
                }
                break;
        }
        switch (topping) {
            case topping = "tomato":
                totalPrice = totalPrice + 200;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 250;
                break;
            case topping = "mushroom":
                totalPrice = totalPrice + 300;
                break;
            case topping = "greenpepper":
                totalPrice = totalPrice + 350;
                break;
            case topping = "olives":
                totalPrice = totalPrice + 400;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 450;
                break;
            case topping = "sweetcorn":
                totalPrice = totalPrice + 500;
                break;
            case topping = "macon":
                totalPrice = totalPrice + 550;
                break;
            case topping = "mince":
                totalPrice = totalPrice + 600;
                break;
            case topping = "beef":
                totalPrice = totalPrice + 650;
                break;
            case topping = "chicken":
                totalPrice = totalPrice + 700;
                break;

        }

        // constructor
       
        let pizza = (myPizzaFlavour, mySize, myPizzaCrust, mTopping, numberOfPizza, totalCash) => {
            return {myPizzaFlavour, mySize, myPizzaCrust, mTopping, numberOfPizza, totalCash};
        };
        // new object creation
        let newOrder = pizza(flavour, size, crust, topping, number, totalPrice);
        
        $('.pizzasummary').fadeIn();
        $('.pizzadetails').fadeOut();
        $('#list').show();
        $('.deliver').show();
        $('.pickupLocation').show();

        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " + newOrder.myPizzaFlavour + "<br>" + "Size :\n"+ newOrder.mySize + "<br>" + "Crust :\n "+ newOrder.myPizzaCrust + "<br>" + "Toppings :\n"+ newOrder.mTopping + "<br>" + " Number of pizzas :\n" + newOrder.numberOfPizza + "<br>" + "Total Price :  \n" + newOrder.totalCash + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
    });

    
    $(".deliver").click(function () {
    
        $('.pizzasummary').text("Indicate Location for easy delivery").fadeIn();
        $('.deliver').hide(1000);
        $('.pickupLocation').hide(1000);
        $('.pizzadetails').fadeOut();
    });

    $(".pickupLocation").click(function () {

    });
});
// });
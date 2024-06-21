if(document.readyState == "loading" ){
    document.addEventListener("DOMContentLoaded", ready)
}else{
    ready()
}


function ready(){
    const removeProductsButttons =  document.getElementsByClassName("remove-product-button")
    for (var i = 0; i < removeProductsButttons.length; i++) {
        removeProductsButttons[i].addEventListener("click",removeProduct )
     
    }

    const quantityInputs = document.getElementsByClassName("product-qtd-input")
    for (var i =0; i < quantityInputs.length; i++){
        quantityInputs[i].addEventListener("change", updateTotal)
    }

    /*const addToCartButtons = document.getElementsByClassName("button-hover-background")
    for(var i =0;i < addToCartButtons.length; i++){
        addToCartButtons[i].addEventListener("click", addProducToCart)
    }
}


function addProducToCart(event){
    const button = event.target
    console.log(button)
}*/

function removeProduct(event){
        event.target.parentElement.parentElement.parentElement.parentElement.remove()
       updateTotal();
}



function updateTotal(){
    let totalAmount = 0

    const cartProducts = document.getElementsByClassName("cart-product")
    for(var i = 0; i <cartProducts.length; i ++){
    //console.log(cartProducts[i])
    const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$","").replace(",", ".")
    const productQuantity= cartProducts[i].getElementsByClassName("product-qtd-input")[0].value
    
    totalAmount += productPrice * productQuantity
    console.log(totalAmount)
}


    
    totalAmount = totalAmount.toFixed(2)
    totalAmount = totalAmount.replace(".", ",")

   document.querySelector(".cart-total-container .span").innerText = "Valor R$" + totalAmount;
    
}

updateTotal();
}
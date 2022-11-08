import React from 'react'
import './Styles.css'
import {Link} from 'react-router-dom'
import Burger1 from './Images/Burger1.jfif';
import Burger2 from './Images/Burger2.jfif';
import Burger3 from './Images/Burger3.jfif';
import Burger4 from './Images/Burger4.jfif';

export default function Menu() {
    
    function removeCartItem(event) {
        var buttonClicked = event.target //The clicked button item
        buttonClicked.parentElement.parentElement.remove() //to remove entire cart row
        updateCartTotal()
    }

    function quantityChanged(event) {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {   //If input quantity is not a number or less than 0
            input.value = 1
        }
        updateCartTotal()
    }

    // ---------------------------------------------------------------------------------
    function addToCartClicked(event) {
        var button = event.target
        var shopItem = button.parentElement.parentElement
        var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
        var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
        var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
        addItemToCart(title, price, imageSrc)
        updateCartTotal()
    }
    
    function addItemToCart(title, price, imageSrc) {//creating and adding new cart row for the burger item which is added to cart
        var cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
        var cartItems = document.getElementsByClassName('cart-items')[0]
        var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
        for (let i=0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].innerText === title) {  //To prevent duplicate adding of same item to cart
                alert('This item is already added to the cart')
                return
            }
        }
        //Creating new cart-row
        var cartRowContents = `
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column">${price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button" onClick={removeCartItem}>REMOVE</button>
            </div>`
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow)        
}
    
    function updateCartTotal() {
        var cartItemContainer = document.getElementsByClassName('cart-items')[0] //First element is cart items container with cart item rows 
        var cartRows = cartItemContainer.getElementsByClassName('cart-row') //List of cart item rows
        var total = 0
        for (let i=0; i < cartRows.length; i++) {//Looping through each cart-item-row
            var cartRow = cartRows[i]   //Storing ith cart-item-row
            var priceElement = cartRow.getElementsByClassName('cart-price')[0] //Only one (first) item in list of elements with class name:cart-price inside cart-row
            var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
            var price = parseFloat(priceElement.innerText.replace('$', ''))//Replacing $ inside the text of priceElement and taking floating number(price) only 
            var quantity = quantityElement.value //Taking input value but not innerText
            total = total + (price * quantity) //Total amount for each cart-item-row and adding it to total variable
        }
        total = Math.round(total * 100) / 100   //Round off to two decimal places
        document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total  //Updating total cart amount
        
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
   
    }

//------------------------------------------------------------------------------------------------------------------
function purchaseClicked() {
    alert('Thank you for your purchase!')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}
//---------------------------------------------------------------------------------------------------------
 
return (
        <div className="app">
            <header className="main-header">
                <nav className="main-nav nav">
                    <ul>
                      <li><Link to="/">HOME</Link></li>
                      <li><Link to="/menu">MENU</Link></li>
                      <li><Link to="/#">REVIEW</Link></li>
                      <li><Link href="#">ABOUTUS</Link></li>
                    </ul>
                </nav>
                <h1 className="band-name band-name-large">Jenny's Burgers</h1>
            </header>
        <section className="container content-section">
            <h2 className="section-header">Burgers</h2>
            <div className="shop-items">
                <div className="shop-item">
                    <span className="shop-item-title">Burger 1</span>
                    <img className="shop-item-image" src={Burger1} alt="Burger"/>
                    <div className="shop-item-details">
                        <span className="shop-item-price">$15</span>
                        <button className="btn btn-primary" type="button" onClick={addToCartClicked}>ADD TO CART</button>
                    </div>
                </div>
                <div className="shop-item">
                    <span className="shop-item-title">Burger 2</span>
                    <img className="shop-item-image" src={Burger2} alt="burger"/>
                    <div className="shop-item-details">
                        <span className="shop-item-price">$20</span>
                        <button className="btn btn-primary" type="button" onClick={addToCartClicked}>ADD TO CART</button>
                    </div>
                </div>
                <div className="shop-item">
                    <span className="shop-item-title">Burger 3</span>
                    <img className="shop-item-image" src={Burger3} alt="Burger"/>
                    <div className="shop-item-details">
                        <span className="shop-item-price">$9.99</span>
                        <button className="btn btn-primary" type="button" onClick={addToCartClicked}>ADD TO CART</button>
                    </div>
                </div>
                <div className="shop-item">
                    <span className="shop-item-title">Burger 4</span>
                    <img className="shop-item-image" src={Burger4} alt="Burger"/>
                    <div className="shop-item-details">
                        <span className="shop-item-price">$19.99</span>
                        <button className="btn btn-primary" type="button" onClick={addToCartClicked}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </section>
{/* -------------------------------------------------------------------------------------------------- */}
        <section className="container content-section">
            <h2 className="section-header">CART</h2>
            <div className="cart-row">
                <span className="cart-item cart-header cart-column">ITEM</span>
                <span className="cart-price cart-header cart-column">PRICE</span>
                <span className="cart-quantity cart-header cart-column">QUANTITY</span>
            </div>
            {/* -------------------------------------------------------------------------- */}
            <div className="cart-items">
            </div>
            {/* --------------------------------------------------------------------------- */}
            <div className="cart-total">
                <strong className="cart-total-title">Total</strong>
                <span className="cart-total-price"><b>$0</b></span>
            </div>
            <button className="btn btn-primary btn-purchase" type="button" onClick={purchaseClicked}>PURCHASE</button>
        </section>
    
    </div>
    )
}

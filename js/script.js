// shopping cart
let shoppingCart = document.querySelector('#cart');
let items = document.querySelector('.cart-item-container')
// Mobile menu bar script
let menu = document.querySelector('#menu-icon');
let navlinks = document.querySelector('.navlinks');

items.onclick = (e) => {
    e.stopPropagation(); // Prevent event propagation to document.onclick
  };

document.onclick = function(e){
    if(e.target.id !== 'menu-icon' && e.target.class !== 'navlinks' &&
       e.target.id !== 'cart'){
        
        shoppingCart.classList.remove('bx-x');
        items.classList.remove('show');

        menu.classList.remove('bx-x');
        navlinks.classList.remove('open'); 
    }
}

shoppingCart.onclick = () =>{
    // shopping cart
    shoppingCart.classList.toggle('bx-x');
    items.classList.toggle('show');
}

menu.onclick = () =>{
    // Mobile menu bar
    menu.classList.toggle('bx-x');
    navlinks.classList.toggle('open');
}


//    THIS JS CODE IS FOR THE SEE MORE BUTTON.

// Get the button element using its id
const seemore_btn = document.getElementById('seeMore-btn');
const bottomlist_div = document.getElementById('bottom-list');

// Add a click event listener to the button
seemore_btn.addEventListener('click', function(){
    if (bottomlist_div.style.display === 'none') {
        bottomlist_div.style.display = 'inline-block'; //show product-list-bottom div
        seemore_btn.value = 'CLOSE'; //Change the value of the seeMore-btn
    }else{
        bottomlist_div.style.display = 'none'; // Hide the product-list-bottom div
        seemore_btn.value ='See More';
    }
})


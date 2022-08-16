// All variables
const h3 = document.getElementsByTagName('h3');
const carouselBtn = document.getElementsByClassName('caro-btn');
const switcher = document.querySelector('.switcher')
const cards = document.getElementsByClassName('card')
const buyNow = document.getElementsByClassName('bg-black')
const emailField = document.getElementById('email-field')
const subscribeBtn = document.querySelector('.submit-btn')
const cardImages = document.getElementsByClassName('card-img-top')


// Changing color of h2

for(const h of h3) {
    h.classList.add('tomato');
}
// Carousel button event
for(const btn of carouselBtn) {
    const btnParentHeading = btn.parentNode.childNodes[1].innerText
    btn.addEventListener('click', function() {
        
        alert(`${btnParentHeading} Added To Cart`)

    })
}
// Changing Card Color
switcher.addEventListener('click', function() {;
    switcher.classList.toggle('fa-toggle-on')
    switcher.classList.toggle('switcher-color')
    for(const card of cards){
        card.classList.toggle('bg-tomato')
        const cardText = card.childNodes[3].childNodes[3];
        const cardPrice = card.childNodes[3].childNodes[5];
        const buyText = card.childNodes[3].childNodes[9]
        cardText.classList.toggle('text-muted')
        cardPrice.classList.toggle('tomato')   
        buyText.classList.toggle('text-white')   
    }

})

// buy now button events
for( const buy of buyNow ) {
    buy.addEventListener('click', function(e) {
        const buyMessageSelector = e.target.parentNode.parentNode.childNodes[1];
        const  buyMessageText = buyMessageSelector.innerText
        const selectBuyText =e.target.parentNode.parentNode.childNodes[9];
        if(e.target.className.includes('fa-arrow-right')){
            e.target.parentNode.parentNode.removeChild(e.target.parentNode)
        }else{
            e.target.parentNode.removeChild(e.target)
        }
       selectBuyText.innerText = `Thanks for Buying ${buyMessageText}`
        
    })
}

// subscribeBtn event handler
emailField.addEventListener('keyup', function(){
    const collectEmailFieldValue = emailField.value
    if(collectEmailFieldValue ==='email'){
        subscribeBtn.removeAttribute('disabled')
    }else{
        subscribeBtn.setAttribute('disabled', true)
    }
})
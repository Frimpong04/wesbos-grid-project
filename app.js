// selectors
const menuButton = document.querySelector('.menu-btn');

// eventListeners
menuButton.addEventListener('click', (event) => {
    let menuState = event.target.getAttribute('aria-expanded');
    // console.log(menuState);
    if(menuState === 'false'){
        event.target.setAttribute('aria-expanded', 'true');
    } else {
        event.target.setAttribute('aria-expanded', 'false');
    }
    
})

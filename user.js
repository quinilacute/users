const toggleHeart = document.getElementById('heart')
toggleHeart.addEventListener('click', () => {
    toggleHeart.classList.toggle('fa-solid')
    if (toggleHeart.classList == 'fa-regular fa-solid') {
        toggleHeart.style.color ='green'
    }
    else {
        toggleHeart.style.color = 'pink'
    }
})
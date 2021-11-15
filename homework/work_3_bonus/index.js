let sliderImages = ['/img/image1.png', '/img/image2.png', '/img/image3.png', '/img/image4.jpg'];
let sliderHeads = ['FOOD AND LIFE', 'COOKING', 'FRUITS', 'BEST PLACES'];
let sliderMiniHeads = ['Succed in hotel business', 'Cooking delicious food', 'Getting fresh fruits', 'Diving exercises']
let sliderAbout = ['Try it With Us', 'Try It', 'Try Muffins', 'Try Diving'];

function sliding() {
    document.querySelectorAll('.slide').forEach((slideElements, index) => {
        if (index < 3){
            slideElements.classList.add('showSlide')
        }
        slideElements.innerHTML = `<img src="${sliderImages[index]}" alt="">
                            <h2>${sliderHeads[index]}</h2>
                            <h3>${sliderMiniHeads[index]}</h3>
                            <p>${sliderAbout[index]}</p>`
    })
}

let prevSlide = document.getElementById('left')

prevSlide.addEventListener('click', function () {
    sliderImages.unshift(sliderImages.pop())
    sliderHeads.unshift(sliderHeads.pop())
    sliderMiniHeads.unshift(sliderMiniHeads.pop())
    sliderAbout.unshift(sliderAbout.pop())
    sliding()
})

let nextSlide = document.getElementById('right')

nextSlide.addEventListener('click', function () {
    sliderImages.push(sliderImages.shift())
    sliderHeads.push(sliderHeads.shift())
    sliderMiniHeads.push(sliderMiniHeads.shift())
    sliderAbout.push(sliderAbout.shift())
    sliding()
})

sliding()
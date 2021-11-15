let sliderImages = ['/img/image1.png', '/img/image2.png', '/img/image3.png'];
let sliderHeads = ['FOOD AND LIFE', 'COOKING', 'FRUITS'];
let sliderMiniHeads = ['Succed in hotel business', 'Cooking delicious food', 'Getting fresh fruits']
let sliderAbout = ['1 info', '2 info', '3 info '];


document.querySelectorAll('.sliderContent').forEach(slide => {
    let slides = slide.querySelectorAll('.slide')
    slides.forEach(slideElements => {
        for (let i = 0; i < sliderImages.length; i++) {
            slideElements.innerHTML = `<img src="${sliderImages[i]}" class="slideImage" alt="">
                                    <h2 class="slideHead">${sliderHeads[i]}</h2>
                                    <h3 class="slideMiniHead">${sliderMiniHeads[i]}</h3>
                                    <p class="slideAbout">${sliderAbout[i]}</p>`
        }
    })
})

// console.log(slideImages)
// console.log(slideHeads)
// console.log(slideMiniHeads)
// console.log(slideAbout)
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let sliderItem = document.getElementsByClassName("slider-item ");

nextBtn.addEventListener("click", function() {
    if (sliderItem[0].classList.contains('active')) {
        sliderItem[0].classList.remove('active');
        sliderItem[1].classList.add('active');
    } else if (sliderItem[1].classList.contains('active')) {
        sliderItem[1].classList.remove('active');
        sliderItem[2].classList.add('active');
    } else if (sliderItem[2].classList.contains('active')) {
        sliderItem[2].classList.remove('active');
        sliderItem[0].classList.add('active');
    }

});
prevBtn.addEventListener("click", function() {
    if (sliderItem[2].classList.contains('active')) {
        sliderItem[2].classList.remove('active');
        sliderItem[1].classList.add('active');
    } else if (sliderItem[1].classList.contains('active')) {
        sliderItem[1].classList.remove('active');
        sliderItem[0].classList.add('active');
    } else if (sliderItem[0].classList.contains('active')) {
        sliderItem[0].classList.remove('active');
        sliderItem[2].classList.add('active');
    }

});
//slider js code end

let flightBtn = document.getElementById('flight-btn');
let flightItem = document.getElementsByClassName('flight-item');

flightBtn.addEventListener('click', function() {
    if (flightItem[0].classList.contains('active')) {
        flightItem[0].classList.remove('active');
        flightItem[1].classList.add('active')
    } else if (flightItem[1].classList.contains('active')) {
        flightItem[1].classList.remove('active');
        flightItem[2].classList.add('active')
    } else if (flightItem[2].classList.contains('active')) {
        flightItem[2].classList.remove('active');
        flightItem[0].classList.add('active')
    }

});
//flight section js code end

let testiNextBtn = document.getElementById('testi-next');
let testiPrevBtn = document.getElementById('testi-prev');
let testiWraper = document.getElementById('testimonial-wraper');
let testiItem = document.getElementsByClassName('testimonial-item');

testiNextBtn.addEventListener("click", function() {
    testiWraper.append(testiItem[0]);
});

testiPrevBtn.addEventListener("click", function() {
    testiWraper.prepend(testiItem[testiItem.length - 1]);
});
//testimonial section js code end


let accorBtn = document.getElementById('accordian-title');
let accorBtn1 = document.getElementById('accordian-title1');
let accorBtn2 = document.getElementById('accordian-title2');
let accorBtn3 = document.getElementById('accordian-title3');
let accorContent = document.getElementById('test-item');
let accorContent1 = document.getElementById('test-item1');
let accorContent2 = document.getElementById('test-item2');
let accorContent3 = document.getElementById('test-item3');
accorBtn.addEventListener("click", function() {
    accorContent.classList.toggle('testi');
});
accorBtn1.addEventListener("click", function() {
    accorContent1.classList.toggle('testi');
});
accorBtn2.addEventListener("click", function() {
    accorContent2.classList.toggle('testi');
});
accorBtn3.addEventListener("click", function() {
    accorContent3.classList.toggle('testi');
});




//accordian section js code end
let conBtn = document.getElementById('contact-btn');
let popContact = document.getElementById('pop-contact');

conBtn.addEventListener('click', function() {
    popContact.style.opacity = '1';
    popContact.style.display = 'block';
});


document.getElementById('close-contact').addEventListener('click', function() {
    popContact.style.opacity = '0';
    popContact.style.display = 'none';
})
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('navbar-show');

})
$(function(){
    //Pagepiling-js
    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
    });
    
    //Banner-video-js
    jQuery(".player").YTPlayer();

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    //Count-Down-js
    let birthday = "nov 26, 2021 00:00:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

          headline.innerText = "It's my birthday!";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
      
      //mixitup-js
      var containerEl = document.querySelector('.main-filter-gal');

      var mixer = mixitup(containerEl);

      //venobox-js
      $('.venobox').venobox(); 

      //Testimonial-slider-js
      
      $('.main-client-feedback').slick({
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        speed:1500,
        asNavFor: '.main-client-slider',
      });
      $('.main-client-slider').slick({
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.main-client-feedback',
        dots: false,
        fade:true,
        speed:1500,
        arrows:false,
      });

});
//form-validation
var username = document.getElementById('fname');
var err_username = document.getElementById('err_name');

var mail = document.getElementById('gmail');
var err_mail = document.getElementById('err_mail');
var mail_regax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


var subject = document.getElementById('sub');
var err_subject = document.getElementById('err_sub');

var comment = document.getElementById('cmmnt');
var err_comment = document.getElementById('err_cmmnt');


function send(){
    if(username.value==''){
        err_username.innerHTML = 'Enter Your Name !';
        username.style.borderBottom = '1px solid red';
        username.focus();
        return false;
    }
    else if( mail.value=='' || !mail_regax.test(mail.value)){
        err_mail.innerHTML = 'Enter Your Valid Email !';
        mail.style.borderBottom = '1px solid red';
        mail.focus();
        return false;
    }
    else if( subject.value==''){
        err_subject.innerHTML = 'Enter Your Subject Here !';
        subject.style.borderBottom = '1px solid red';
        subject.focus();
        return false;
    }
    else if( comment.value==''){
        err_comment.innerHTML = 'Enter Your Message Here !';
        comment.style.border = '1px solid red';
        comment.focus();
        return false;
    }
}

function valid(){
    if(username.value!='' || name_regax.test(username.value)){
        err_username.innerHTML = '';
        username.style.borderBottom = '1px solid green';
    }
    if( mail.value!='' || mail_regax.test(mail.value)){
        err_mail.innerHTML = '';
        mail.style.borderBottom = '1px solid green';
    }
    if( subject.value!=''){
        err_subject.innerHTML = '';
        subject.style.borderBottom = '1px solid green';
    }
    if( comment.value!=''){
        err_comment.innerHTML = '';
        comment.style.border = '1px solid green';
    }
}

username.addEventListener('blur',valid);
mail.addEventListener('blur',valid);
subject.addEventListener('blur',valid);
comment.addEventListener('blur',valid);


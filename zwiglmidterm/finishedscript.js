  
var pictvar = [
    { src: 'photo1.jpg', srct: 'photo1t.jpg', title: 'January' },
    { src: 'photo2.jpg', srct: 'photo2t.jpg', title: 'February' },
    { src: 'photo3.jpg', srct: 'photo3t.jpg', title: 'March' },
    { src: 'photo4.jpg', srct: 'photo4t.jpg', title: 'April' },
    { src: 'photo5.jpg', srct: 'photo5t.jpg', title: 'May' },
    { src: 'photo6.jpg', srct: 'photo6t.jpg', title: 'June' },
    { src: 'photo7.jpg', srct: 'photo7t.jpg', title: 'July' },
    { src: 'photo8.jpg', srct: 'photo8t.jpg', title: 'August' },
    { src: 'photo9.jpg', srct: 'photo9t.jpg', title: 'September' },
    { src: 'photo10.jpg', srct: 'photo10t.jpg', title: 'October' }
  ]

   $( window ).on( "load", function(){
    $("#nanogallery2").nanogallery2( {
        // ### gallery settings ### 
        thumbnailHeight:  300,
        thumbnailWidth:   300,
        itemsBaseURL:     'C:/Users/Angelina/Downloads/cisw400/zwiglmidterm/catphotos/',
        // ### gallery content ### 
        items: pictvar
      }, {passive: false} );
    });

      var btn1 = document.querySelector('#cream');
      var btn2 = document.querySelector('#darkblue');
      var btn3 = document.querySelector('#purple');
      var btn4 = document.querySelector('#black');
    btn1.addEventListener('click', function(){
        document.querySelector('div').style.backgroundColor = "#F5F5DC";
    });
    btn2.addEventListener('click', function(){
        document.querySelector('div').style.backgroundColor = "#32527B";
    });
    btn3.addEventListener('click', function(){
      document.querySelector('div').style.backgroundColor = "purple";
    });
    btn4.addEventListener('click', function(){
      document.querySelector('div').style.backgroundColor = "black";
    });
    

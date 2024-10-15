let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle('active');
}
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top => offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelectorAll('header .navbar a[href*='+id+']').classList.add('active');
      });
    };
  });

}


document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-from').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-from').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
   loop:true,
  });

var swiper = new Swiper(".review-slide", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0:{
      slidesPerView: 1,
      },
      640: {
      slidesPerView: 2,
                
      },
      768: {
      slidesPerView: 2,
                
      },
      1024: {
       slidesPerView: 3,
                
      },
    },
});



function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader,2000);
}

window.onload = fadeOut;



// Lấy ngữ cảnh của canvas để vẽ biểu đồ
const ctx = document.getElementById('myChart').getContext('2d');
// Tạo biểu đồ với dữ liệu mẫu
const myChart = new Chart(ctx, {
  type: 'bar', 
  data: {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
    datasets: [{
      label: 'Số lượng bán ra',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});




// shopping cart //
document.querySelector('#cart').onclick = () =>{
  document.querySelector('#shopping-cart').classList.toggle('active');
}


function getProductId() {
	const params = new URLSearchParams(window.location.search);
	return params.get('id');
	console.log(params.get('id'));
}
getProductId();

function getDetailData() {
	const queryId = getProductId();
	const rslt = listProducts.find(product => product.id === +queryId);
	if (!rslt) {
		document.body.innerHTML = `<h1>not found</h1>`;
		return;
	}
	document.querySelector('#pdescription').textContent = rslt.detail;
	document.querySelector('#pname').textContent = rslt.name;
	const prod = document.querySelector('#pprice');
	prod.innerHTML +=`<p>£${rslt.price}</p>`
	
	const img = document.querySelector('.img-container');
	img.innerHTML +=`<img src = "${rslt.img}" style="width:70% ;" 
	alt = "watch" id="pimg">`;

}

getDetailData();


const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () =>{
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg(){
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}


function hiensp1() {
    var list2 = document.getElementById("list2");
    list2.innerHTML = '';

    for (i = 0; i < listProducts.length; i++) {
        materials = listProducts[i].materials;
        price = listProducts[i].price;
        list2.innerHTML +=
            `                                         
    <div class="col-12 col-md-6 col-lg-4 " style="padding: 0px 13px 0px 13px ;">
    <div class="card  text-center bg-white pb-2">
        <div class="card-body">
            <img src="${listProducts[i].img}" alt="" width="100%" height="250px">
            <p class="lead">${listProducts[i].name}</p>
            <p class="lead">£${listProducts[i].price}</p>
            <button class="btn " style="background:  rgb(79 127 131);"><a href="detail.html?id=${listProducts[i].id}" style="color:white;text-decoration: none;">See details
                  </a></button>
        </div>
    </div>
</div>
                     `
            ;
    }
}
hiensp1();

$('.swiper-wrapper').slick({
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1700,
    centerPadding: '60px',
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'> <i class='fa-solid fa-angle-right'></i></button>",
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

$(document).on('click', 'ul li', function() {
    $(this).addClass('active').siblings().removeClass('active')
})
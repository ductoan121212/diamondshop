// thêm data, nếu thay "thuonghieu" cần cập nhật code js
var datasp=[
    {
        id:1,
        tensp:'abcdefgh', 
        gia:2290000 , 
        gioithieusp:'Lorem, ip totammnis...',
        img:'./img/imgproduct/1.png', 
        thuonghieu:'Diamond',
    },
    {
        id:2,
        tensp:'nhẫn kim cương 2', 
        gia:12321321 , 
        gioithieusp:'Lorem, ip totammnis...',
        img:'./img/imgproduct/2.png', 
        thuonghieu:'Diamond',
    },
    {
        id:3,
        tensp:'nhẫn kim cương 3', 
        gia:6612132 , 
        gioithieusp:'Lorem, ip totammnis...',
        img:'./img/imgproduct/3.png', 
        thuonghieu:'Amber',
    },
    {
        id:4,
        tensp:'nhẫn kim cương 4', 
        gia:1233331 , 
        gioithieusp:'Lorem, ip totammnis...',
        img:'./img/imgproduct/4.png',  
        thuonghieu:'Amethyst',
    },
    {
        id:5,
        tensp:'nhẫn kim cương 5', 
        gia:3000000 , 
        gioithieusp:'Lorem, ip totammnis...',
        img:'./img/imgproduct/5.png', 
        thuonghieu:'Amethyst',
    },
    {
        id:6,
        tensp:'nhẫn kim cương 6', 
        gia:13000000, 
        gioithieusp:'Lorem, ip totammnis...',
        img:'./img/imgproduct/6.png',  
        thuonghieu:'Amethyst',
    },
    {
        id:7,
        tensp:'nhẫn kim cương 7', 
        gia:13000000, 
        gioithieusp:'Lorem, ip totammnis...',
        img:'./img/imgproduct/7.png', 
        thuonghieu:'Amethyst',
    },
    {
        id:8,
        tensp:'nhẫn kim cương 8', 
        gia:13000000, 
        gioithieusp:'Lorem, ip totammnis...',
        img:'./img/imgproduct/8.png',  
        thuonghieu:'Amethyst',
    },
    {
        id:9,
        tensp:'nhẫn kim cương 8', 
        gia:13000000, 
        gioithieusp:'Lorem, ip totammnis...',
        img:'./img/imgproduct/thachanh1.png',  
        thuonghieu:'Amethyst',
    },
    {
        id:10,
        tensp:'nhẫn kim cương 8', 
        gia:13000000, 
        gioithieusp:'Lorem, ip totammnis...',
        img:'./img/imgproduct/thachanh2.png',  
        thuonghieu:'Amethyst',
    },
   
]
// script hiensp
function hiensp(products=[]) {
    var list1 = document.getElementById("list1");
    list1.innerHTML = '';
    
    for (i = 0; i < products.length; i++) {
        thuonghieusp = products[i].thuonghieu;
        giasp = products[i].gia;
        mausp = products[i].mau;
        // if(products.length>0){    
        //     if(products.includes(thuonghieu)==false) continue;
        // }
         list1.innerHTML +=      
        `                                         
                                 <div class="col-lg-4 pt-3">
                                        <div class="card">
                                <img src="${products[i].img}" class="card-img-top" style="    border-bottom: 1px solid rgba(0,0,0,.125) ;" alt="Product 2">
                                <div class="card-body">
                                    <h5 class="card-title">${products[i].tensp}</h5>
                                    <p class="card-text">${products[i].gioithieusp}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm button-rigth">
                                                <a href="detail.html"  class="a_1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                    fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                    <path
                                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                </svg>
                                                </a>
                                            </button>
                                           
                                        </div>
                                        <span class="price">${datasp[i].gia}đ</span>
                                    </div>
                                </div>
                            </div>
                        </div>                                   
                     `
           ;
    }    
}
hiensp(datasp);

// phân trang
let thisPage = 1;
let limit = 6;
let list = document.querySelectorAll('.card');

function loadItem(){
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
    listPage();
}
loadItem();

loadItem();
function listPage(){
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';

    if(thisPage != 1){
        let prev = document.createElement('li');
        prev.innerText = 'PREV';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        document.querySelector('.listPage').appendChild(prev);
    }

    for(i = 1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    if(thisPage != count){
        let next = document.createElement('li');
        next.innerText = 'NEXT';
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        document.querySelector('.listPage').appendChild(next);
    }
}
function changePage(i){
    thisPage = i;
    loadItem();
}

// Search bar
function searchFunction() {
    // Declare variables
    var input, products=[], txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < datasp.length; i++) {
      txtValue = datasp[i].tensp.toUpperCase();      
      if (txtValue.indexOf(filter) > -1) {
        products.push(datasp[i]);
      }
    }

    if (products.length > 0) {
        hiensp(products);
    }
    else {
        hiensp(datasp);
    }
    
}

// choose type of crystal to display
function crystalFunction() {
    var type = 'All';
    var ul, products=[];

    // display the title of the crystal
    var typeText = document.getElementById("crystalType");
    typeText.innerHTML = '';
    typeText.innerHTML += type;

    // display list
    ul = document.getElementById("crystals");
    ul.addEventListener('click', function (e) {
        var target = e.target; // Clicked element
        while (target && target.parentNode !== ul) {
            target = target.parentNode; // If the clicked element isn't a direct child
            if (!target) { return; } // If element doesn't exist
        }
        if (target.tagName === 'LI') {
            type = target.id;
            products=[];// clear the array
            if(type === 'AllCrystals') { // if user choose all, show all products
                typeText.innerHTML = 'All';
                hiensp(datasp);
            }
            else { // choose only choosen products
                for (i = 0; i < datasp.length; i++) {
                    txtValue = datasp[i].thuonghieu.toUpperCase();      
                    if (txtValue.indexOf(type.toUpperCase()) > -1) {
                      products.push(datasp[i]);
                    }
                }
                typeText.innerHTML = '';
                typeText.innerHTML += type;
                hiensp(products);
            }            
        }            
    });
}
crystalFunction();



// choose type of product to display
// function productTypeFunction() {
//     var type = 'All';
//     var div, products=[];

//     // display list
//     div = document.getElementById("products");
//     div.addEventListener('click', function (e) {
//         var target = e.target; // Clicked element
//         while (target && target.parentNode !== ul) {
//             target = target.parentNode; // If the clicked element isn't a direct child
//             if (!target) { return; } // If element doesn't exist
//         }
//         if (target.tagName === 'LI') {
//             type = target.id;
//             products=[];// clear the array
//             if(type === 'AllCrystals') { // if user choose all, show all products
//                 hiensp(datasp);
//             }
//             else { // choose only choosen products
//                 for (i = 0; i < datasp.length; i++) {
//                     txtValue = datasp[i].thuonghieu.toUpperCase();      
//                     if (txtValue.indexOf(type.toUpperCase()) > -1) {
//                       products.push(datasp[i]);
//                     }
//                 }
//                 hiensp(products);
//             }            
//         }            
//     });
// }
// productTypeFunction();

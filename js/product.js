
// phân trang
let currentPage = 1;
let perPage = 6;
let totalPage;
let productPerPage = [];
let p = [];
let list = document.querySelectorAll('.card');
let count = 0;
//make page number
function renderPageNumber(data) {
    totalPage = listProducts.length/perPage+1
    for(let i = 1; i <= totalPage; i++) {
        document.getElementById("pagination").innerHTML += `<li id="num" onclick="handlePageNumber(${i})">${i}</li>`
        count++;
    }
}
function removePageNumber() {
    for(let i=1; i<=count;i++){
        let numm = document.getElementById("num");
        numm.remove();
    }
    count=0;
}
//get product by page number
function handlePageNumber(num) {
    currentPage = num;
    productPerPage = listProducts.slice(
        (currentPage-1)*perPage,
        (currentPage-1)*perPage+perPage,
        )
    renderListproduct(productPerPage);
}
function handlePageNumber1(num) {
    currentPage = num;
    productPerPage = p.slice(
        (currentPage-1)*perPage,
        (currentPage-1)*perPage+perPage,
        )
    renderListproduct(productPerPage);
}
//get Product
function getProduct() {
    productPerPage = listProducts.slice(
        (currentPage-1)*perPage,
        (currentPage-1)*perPage+perPage,
        )
    renderPageNumber();
    renderListproduct(productPerPage);
}
getProduct(listProducts);

// show product
function createProductBlock(product) {
    const productData = `<div class="col-lg-4 pt-3">
    <div class="card" >
    <a href="./detail.html?id=${product.id}">
    <img src="${product.img}" class="card-img-top" alt="Product 2">
    </a>
    <div class="card-body" style="border-top:1px solid rgba(0,0,0,.125);">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.detailShort}</p>
    <span class="price">£${product.price}</span>
    </div>
    </div>`;
    const target = document.querySelector('#list1');
    target.innerHTML += productData;
}
function renderListproduct(productList) {
    const target = document.querySelector('#list1');
    target.innerHTML = '';
    if(Array.isArray(productList) && productList.length){
        productList.forEach(product => {
            createProductBlock(product);
        });
    }else{
        target.innerHTML = `<h2 class="text-center py-3 mt-4"><em>No product found</em></h2>`;
    }
}


function handlerFillter(text) {
    var typeText = document.getElementById("crystalType");
    typeText.innerHTML = '';
    typeText.innerHTML += text;

    products = listProducts.filter(product => product.materials.includes(text));
                const t = document.querySelector('#list1');
                t.innerHTML = '';
                typeText.innerHTML = text;
                p = products;

                removePageNumber();
                productPerPage = p.slice(
                    (currentPage-1)*perPage,
                    (currentPage-1)*perPage+perPage,
                    )
                totalPage = p.length/perPage+1
                for(let i = 1; i <= totalPage; i++) {
                    document.getElementById("pagination").innerHTML += `<li id="num" onclick="handlePageNumber1(${i})">${i}</li>`
                    count++;
                }
                renderListproduct(productPerPage);
                handlePageNumber1(1);

}

// Search bar
function searchFunction() {
    // Declare variables
    var input, products = [], txtValue;
    input = document.getElementById('search');
    notfound = '<h1>Not found product</h1>'; 
    filter = input.value.toUpperCase();
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < listProducts.length; i++) {
        txtValue = listProducts[i].name.toUpperCase();
        if (txtValue.indexOf(filter) > -1) {
            products.push(listProducts[i]);
        }
    }

    if (products.length > 0) {
        p = products;
        removePageNumber();
                productPerPage = p.slice(
                    (currentPage-1)*perPage,
                    (currentPage-1)*perPage+perPage,
                    )
                totalPage = p.length/perPage+1
                for(let i = 1; i <= totalPage; i++) {
                    document.getElementById("pagination").innerHTML += `<li id="num" onclick="handlePageNumber1(${i})">${i}</li>`
                    count++;
                }
                renderListproduct(productPerPage);
                handlePageNumber1(1);
        input.value='';
    }
    else {
        getProduct(listProducts);
        document.getElementById('list1').innerHTML+=notfound;
    }
}
// choose type of crystal to display
//mat
function crystalFunction() {
    var type = 'All';
    var ul,products = [];

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
            products = [];// clear the array
            if (type === 'AllCrystals') { // if user choose all, show all products
                typeText.innerHTML = 'All';
                removePageNumber();
                getProduct(listProducts);
            }
            else { // choose only choosen products
                products = listProducts.filter(product => product.materials.includes(type));
                const t = document.querySelector('#list1');
                t.innerHTML = '';
                typeText.innerHTML = type;
                p = products;

                removePageNumber();
                productPerPage = p.slice(
                    (currentPage-1)*perPage,
                    (currentPage-1)*perPage+perPage,
                    )
                totalPage = p.length/perPage+1
                for(let i = 1; i <= totalPage; i++) {
                    document.getElementById("pagination").innerHTML += `<li id="num" onclick="handlePageNumber1(${i})">${i}</li>`
                    count++;
                }
                renderListproduct(productPerPage);
                handlePageNumber1(1);
            }
        }
    });
}
crystalFunction();


function filterByTypes() {
    const listData = listProducts.filter(product => product.types.includes('ring'));
    const target = document.querySelector('#list1');
    target.innerHTML = '';
    renderListproduct(listData);
}

// function getAllCheckedFilter() {
//     // lay toan bo danh sach cac filter da duoc tich
//     const categoryFilterWrapper = document.querySelector('#products');
//     const listCateChecked = [...categoryFilterWrapper.querySelectorAll('input[type=checkbox]:checked')] || [];
//     const listFilterCate = listCateChecked.map(input => input.value);

//     const listData = listProducts.filter(product => {
//         let validCategory = false;
//         validCategory = listFilterCate.length 
//         ? product.category.some(cate => listFilterCate.includes(cate)) : true;

//         return validCategory;
//     });

//     renderListproduct(listData);
// }
function getAllCheckedFilter() {
    // lay toan bo danh sach cac filter da duoc tich
    const categoryFilterWrapper = document.querySelector('#productCat');
    const listCateChecked = [...categoryFilterWrapper.querySelectorAll('input[type=checkbox]:checked')] || [];
    const listFilterCate = listCateChecked.map(input => input.value);

    const materialFilterWrapper = document.querySelector('#productType');
    const listMaterialChecked = [...materialFilterWrapper.querySelectorAll('input[type=checkbox]:checked')] || [];
    const listFilterMaterial = listMaterialChecked.map(input => input.value);

    const listData = listProducts.filter(product => {
        let validCategory = false;
        validCategory = listFilterCate.length ? product.category.some(cate => listFilterCate.includes(cate)) : true;

        let validMaterial = false;
        validMaterial = listFilterMaterial.length
            ? product.types.some(material => listFilterMaterial.includes(material))
            : true;

        return validCategory && validMaterial;
    });
    removePageNumber();
    renderListproduct(listData);
    
}
//mat
function getProductMat() {
    const params = new URLSearchParams(window.location.search);
    return params.get('material');
    console.log(params.get('materital'));

}

function load() {
    const mat = getProductMat();
    if(mat!=null) {
        handlerFillter(mat);
        console.log(mat);
        let active = document.getElementById(mat);
        active.classList.add('active');
    }
    // else{
    //     if(mat==='All') {
    //         getProduct(listProducts);
    //     }
    // }
}
load();

function createProductBlock1(p) {
	const prodData = `
	<li><button class="dropdown-item d-flex align-items-center" 
		style="gap:12px" type="button" onclick="getProduct1(${p.id})">
        <img src="${p.img}" alt="sp1"
        style="object-fit: cover; width: 40px; height:40px"> 
            ${p.name}
        </button>
    </li>`
    const target = document.querySelector('#list1');
    target.innerHTML += prodData;
}
function renderListProduct1(productList) {
	const target = document.querySelector('#list1');
	target.innerHTML = '';
	productList.forEach(p => {
		createProductBlock1(p);
	})
}
function createProductBlock2(p) {
	const prodData = `
	<li><button class="dropdown-item d-flex align-items-center" 
		style="gap:12px" type="button" onclick="getProduct2(${p.id})">
        <img src="${p.img}" alt="sp1"
        style="object-fit: cover; width: 40px; height:40px"> 
            ${p.name}
        </button>
    </li>`
    const target = document.querySelector('#list2');
    target.innerHTML += prodData;
}
function renderListProduct2(productList) {
	const target = document.querySelector('#list2');
	target.innerHTML = '';
	productList.forEach(p => {
		createProductBlock2(p);
	})
}
renderListProduct1(listProducts);
renderListProduct2(listProducts);

function getProduct1(id) {
	product = listProducts.find(p => p.id == id);
	const img = document.querySelector('#img1');
	img.innerHTML ='';
	img.innerHTML +=`<img src="${product.img}" alt="${product.img}">`
	document.querySelector('#name1').textContent = product.name;
	document.querySelector('#crystal1').textContent = product.materials;
	const price = document.querySelector('#price1');
	price.innerHTML = '';
	price.innerHTML += `£${product.price}`;
	document.querySelector('#cat1').textContent = product.category;
	document.querySelector('#type1').textContent = product.types;
	document.querySelector('#detailS1').textContent = product.detailShort;
	document.querySelector('#detail1').textContent = product.detail;
}

function getProduct2(id) {
	product = listProducts.find(p => p.id == id);
	const img = document.querySelector('#img2');
	img.innerHTML ='';
	img.innerHTML +=`<img src="${product.img}" alt="${product.img}">`
	document.querySelector('#name2').textContent = product.name;
	document.querySelector('#crystal2').textContent = product.materials;
	const price = document.querySelector('#price2');
	price.innerHTML = '';
	price.innerHTML += `£${product.price}`;
	document.querySelector('#cat2').textContent = product.category;
	document.querySelector('#type2').textContent = product.types;
	document.querySelector('#detailS2').textContent = product.detailShort;
	document.querySelector('#detail2').textContent = product.detail;
}
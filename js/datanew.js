var datanew = [

    {
        id: 1,
        name: ' Diamond Ring NNA2102',
        img:'./img/imgproduct/1.png',
        category: ['Trendy', 'Best_Seller'],
        types: ['Ring'],
        price: 3.5,
        
        materials: ['Diamond'],
        detail: 'If in the past this ring was used a lot by the nobility not only as a piece of jewelry but also used to sign and stamp documents, today this ring is used as a symbol of symbolism. representing many organizations around the world. Whether in the past or present, mens signet rings are always personal imprints, affirming the value of the wearer. With a distinctive design of a large rectangular face and raised above the belt, carved with unique characters expressing the wearers personality, the NNA2102 ring has been meticulously carved by Tierra jewelers. Carving rays of light with an embedded diamond has both the effect of creating a sun-like effect - a symbol of strength, wisdom, and protecting the owner from external influences. The unique ring with strong cuts makes the overall ring look like a watch. This is really the type of ring suitable for guys who love simplicity and sophistication but still show their personal identity',

        detailShort: " Diamond Ring NNA2102"
    },
    {
        id: 2,
        name: ' Diamond Ring NNA2103',
        img:'./img/imgproduct/2.png',
        category: ['Trendy', 'Best_Seller'],
        types: ['Ring'],
        price: 3.5,
        materials: ['Diamond'],
        detail: 'Men is Diamond Ring NNA2103 is a prominent mens signet ring with a diamond-shaped ring, the center of which is attached with a sparkling round diamond. In particular, to increase the shine of the ring, around the diamond is carved light rays, the diamond-encrusted surface is smoothed and smoothed at 4 edges to create a powerful look for the owner',

        detailShort: "Diamond Ring NNA2103"
    },
    {
        id: 4,
        name: ' Diamond Ring NNA2105',
        img:'./img/imgproduct/4.png',
        category: ['Trendy', 'Best_Seller'],
        types: ['Ring'],
        price: 3.5,
        materials: ['Diamond'],
        detail: 'NNA2105 has the perfect combination of trendy and classic style. This mens ring has a meticulously designed rough body with a bezel encrusted with sheet diamonds around the face of the ring, creating a sophisticated yet modern look. The face of the mens ring NNA2105 is set with a small diamond in the center with a line of light rays like emanating from a diamond. In another perspective, the ring face has a unique design like the face of a luxury mens watch. The NNA2105 is the perfect diamond ring for a man who likes to keep his style simple but still show his elegance, personality and personal taste.',

        detailShort: "Diamond Ring NNA2105"
    },


]
function hiensp3() {
    var list3 = document.getElementById("list3");
    list3.innerHTML = '';

    for (i = 0; i < datanew.length; i++) {
        materials = datanew[i].materials;
        price = datanew[i].price;
        list3.innerHTML +=
            `                                         
            <div class="col-12 col-md-12 col-lg-4">
            <div class="card text-light text-center bg-white pb-2">
                <div class="card-body text-dark">
                    <div class="img-area mb-4"><img alt="" class="img-fluid" src="${datanew[i].img}">
                    </div>
                    <h3 class="card-title">${datanew[i].name}</h3>
                    <p class="lead">${datanew[i].detailShort}</p>

                    <button
                        class="btn "style="background:  rgb(79 127 131);color:white;">
                        <a href="detail.html?id=${datanew[i].id}" 
                        style=" color: White;
                                text-decoration: none;">
                        See details
                        </a>
                    </button>
                </div>
            </div>
        </div>
                     `
            ;
    }
}
hiensp3();

$(document).on('click', 'ul li', function() {
    $(this).addClass('active').siblings().removeClass('active')
})
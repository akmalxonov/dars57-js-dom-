const wrapperElemnt = document.querySelector(".famous__wrapper")
async function fetchProducts() {
    try {
        const result = await fetch("http://localhost:5000/products");
        const res = await result.json();
        console.log(res);
        console.log(result);
        
        const products = res.data
        products.forEach(product => {
            let become1 = product.price/12
            let become = become1.toFixed(3)
            let oldPrice = product.price*2
            wrapperElemnt.appendChild(createCard(product.image, product.name, product.rating,become,oldPrice, product.price))
        });
    } catch (err) {
        console.log(err);
    }
}
fetchProducts()
function createCard(img, name, comment,become,oldPrice, price) {
    let newElement = document.createElement("div")
    newElement.classList.add("card2")
    newElement.innerHTML = `
                <div class="img">
                <img src="${img}" alt="">
            </div>
            <div class="all">
                <h4 class="name">${name}</h4>
                <p class="comment"><i class="fa-solid fa-star"></i> ${comment} (...sharhlar)</p>
                <h6 class="become">${become}so'm/oyiga</h6>
                <div class="shop">
                    <div class="prices">
                        <h5 class="old-price">${oldPrice}</h5>
                        <h5 class="price">${price}so'm</h5>
                    </div>
                    <button class="btn"><i class="fa-solid fa-bag-shopping"></i></button>
                </div>
            </div>`
    return newElement
}


// kanspekt 

// async - bu JavaScript'da asinxron kodni yozish uchun ishlatiladigan kalit so‘z.
// Bu funksiyani va’dalar (Promise) bilan ishlashni osonlashtiradi.

// const result = await fetch("http://localhost:5000/products")    serverga sorov yuboradi
// const res = await result.json();    serverdan kelganni JSONga tarjima qiladi 

// try bloki: Xatolik yuzaga kelishi mumkin bo‘lgan kod yoziladi.
// catch bloki: Agar xatolik yuz bersa, bu blok ishga tushadi va xatoni qayta ishlaydi.
// Xatolik bo‘lmasa, catch bloki bajarilmaydi.
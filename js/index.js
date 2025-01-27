const wrapperElemnt = document.querySelector(".famous__wrapper")
const wrapper2Elemnt = document.querySelector(".famous2__wrapper")
console.log(wrapper2Elemnt);

async function fetchProducts() {
    try {
        const result = await fetch("https://dummyjson.com/products");
        const res = await result.json();
        const products = res.products
        products.forEach(product => {
            let become1 = product.price/12
            let become = become1.toFixed(3)
            let oldPrice = product.price*2;
            wrapperElemnt.appendChild(createCard(product.thumbnail, product.title, product.rating,become,oldPrice, product.price))
            wrapper2Elemnt.appendChild(createCard(product.thumbnail, product.title, product.rating,become,oldPrice, product.price))
        });
    } catch (err) {
        console.log(err);
    }
}
fetchProducts()
let newElement
function createCard(img, name, comment,become,oldPrice, price) {
    newElement = document.createElement("div")
    newElement.classList.add("card2")
    newElement.innerHTML = `
            <div class="img">
                <i class="fa-regular fa-heart"></i>
                <img src="${img}" alt="">
            </div>
            <div class="all">
                <h4 class="name">${name}</h4>
                <p class="comment"><i class="fa-solid fa-star"></i> ${comment} (500 sharhlar)</p>
                <h6 class="become">${become}$/oyiga</h6>
                <div class="shop">
                    <div class="prices">
                        <h5 class="old-price">${oldPrice}</h5>
                        <h5 class="price">${price}$</h5>
                    </div>
                    <button class="btn"><img src="/assents/images/shopping.svg" alt=""></button>
                </div>
            </div>`
            const heartIcon = newElement.querySelector('.fa-heart');
            heartIcon.addEventListener('click', function () {
                if (heartIcon.classList.contains('fa-regular')) {
                    heartIcon.classList.remove('fa-regular');
                    heartIcon.classList.add('fa-solid');
                    heartIcon.style.transform = "scale(1.3)";
                    heartIcon.style.transition = "transform 0.2s ease";
                    setTimeout(()=>{
                        heartIcon.style.transform = "scale(1)";
                    },100)
                } else {
                    heartIcon.classList.remove('fa-solid');
                    heartIcon.classList.add('fa-regular');
                }
            });
    return newElement;
}







// kanspekt 

// async - bu JavaScript'da asinxron kodni yozish uchun ishlatiladigan kalit so‘z.
// Bu funksiyani va’dalar (Promise) bilan ishlashni osonlashtiradi.

// const result = await fetch("http://localhost:5000/products")    serverga sorov yuboradi
// const res = await result.json();    serverdan kelganni JSONga tarjima qiladi 

// try bloki: Xatolik yuzaga kelishi mumkin bo‘lgan kod yoziladi.
// catch bloki: Agar xatolik yuz bersa, bu blok ishga tushadi va xatoni qayta ishlaydi.
// Xatolik bo‘lmasa, catch bloki bajarilmaydi.
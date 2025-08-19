let container = document.querySelector('.container')
async function productCardBuilder(){
  await data()
  products.forEach((element)=>{
    let div = document.createElement('div')
    div.innerHTML = `<div class="product-card">
  <img src="${element.images[0]}" alt="Product Image" class="product-image">
  <div class="product-info">
    <h2 class="product-title">${element.title}</h2>
    <p class="product-description">
      ${element.description}
    </p>
    <div class="product-price">${element.price}</div>
  </div>
</div>`
console.log(div.id);
div.addEventListener('click', ()=>{
 window.location.href=`pages.html?id=${element.id}`
})
container.appendChild(div)
;
  })
}
productCardBuilder()
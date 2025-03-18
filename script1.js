const product_list = [
    {'name':'product 1','price':'$300','img1':'flower.jpg',},
    {'name':'product 2','price':'$200','img1':'flower.jpg',},
    {'name':'product 3','price':'$400','img1':'flower.jpg',},
    {'name':'product 4','price':'$600','img1':'flower.jpg',},
    {'name':'product 5','price':'$100','img1':'flower.jpg',},
    
]

const productcontainer=document.getElementById("product-cart");
product_list.forEach((product)=>{


    const card =document.createElement('div')
    card.classList.add('product_card')
    productcontainer.appendChild (card)

    const image =document.createElement('img')
    image.classList.add('product_img1')
    image.src=product.img1;
    card.appendChild(image)

    const name1 =document.createElement('h1')
   name1.classList.add('product_name')
   name1.textContent=product.name;
   card.appendChild(name1)

    const price1 =document.createElement('h2')
    price1.classList.add('product_price')
    price1.textContent=product.price;
     card.appendChild(price1)
})

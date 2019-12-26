

const productList = {
   products: [
        {
            title: 'A pillow', 
            imgurl:'https://www.potterybarn.com/pbimgs/ab/images/dp/wcm/201936/4102/img80c.jpg', 
            price: 19.99,
             description: 'A soft pillow'
        },
        {
            title: 'A carpet', 
            imgurl:'https://mobileimages.lowes.com/product/converted/840712/840712131483.jpg?size=xl',
            price: 89.99,
             description: 'A carpet which you might like - or not'
        }
        ],
        render() {
            const renderHook = document.getElementById('app');
            const prodList = document.createElement('ul');
            prodList.className = "product-list"
            for(const prod of this.products){
                const prodEl = document.createElement('li');
                prodEl.className ="product-item";
                prodEl.innerHTML= `
                <div>
                    <img src="${prod.imgUrl}" alt="${prod.title}">
                    <div class="product-item__content>
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button> Add to Cart</button>
                    </div>
                </div>
                `;
                prodEl.append(prodEl)
            }
            renderHook.append(prodList)
        }

}
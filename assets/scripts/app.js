class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;

    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

const productList = {
    products: [
        new Product(
            'A pillow',
            'https://www.potterybarn.com/pbimgs/ab/images/dp/wcm/201936/4102/img80c.jpg',
            'A soft pillow',
            19.99
            ),

        new Product(
            'A carpet',
            'https://mobileimages.lowes.com/product/converted/840712/840712131483.jpg?size=xl',
            'A carpet which you might like - or not',
            89.99
        )
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = "product-list"
        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = "product-item";
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt="${prod.title}">
                    <div class="product-item__content>
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button> Add to Cart</button>
                    </div>
                </div>
                `;
            prodList.append(prodEl)
        }
        renderHook.append(prodList)
    }

};
productList.render();
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

class ProductItem{
    constructor(product){
        this.product = product;
    }

    render(){
        const prodEl = document.createElement('li');
        prodEl.className = "product-item";
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}">
                <div>
                 <h2>${this.product.title}</h2>
                 <h3>\$${this.product.price}</h3>
                 <p>${this.product.description}</p>
                 <button> Add to Cart</button>
                </div>
            </div>
            `;
            return prodEl
    }
}


class ProductList{
    products = [new Product(
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
    )];

    constructor(){}

    render(){
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = "product-list"
    for (const prod of this.products) {
       const productItem = new ProductItem(prod)
       const prodEl = productItem.render();
        prodList.append(prodEl)
    }
    renderHook.append(prodList)
}
};
const productList = new ProductList();
productList.render();
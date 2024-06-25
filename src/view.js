class FurnitureView {
    constructor() {
        this.introDescription = document.getElementById('intro-description');
        this.contentSection = document.getElementById('intro-products');
        this.indicatorsSection = document.getElementById('indicators');
    }

    renderIntro(intro) {
        this.introDescription.textContent = intro.title;
        this.introDescription.textContent = intro.description;
        this.introDescription.textContent = intro.button;
    }

    renderProduct(prevProduct, currentProduct, nextProduct) {
        this.contentSection.innerHTML = `
            <div class="products-container">
                <div class="product prev-product">
                    <img src="${prevProduct.image}" alt="${prevProduct.title}">
                </div>
                <div class="product current-product">
                    <img src="${currentProduct.image}" alt="${currentProduct.title}">
                    <div class="product-description">
                        <h3>${currentProduct.title}</h3>
                        <p>${currentProduct.description}</p>
                        <p>${currentProduct.price}</p>
                        <a href="#"><img src="./img/arrow-link.svg"></a>
                    </div>
                </div>
                <div class="product next-product">
                    <img src="${nextProduct.image}" alt="${nextProduct.title}">
                </div>
            </div>
        `;
    }

    renderIndicators(products, currentProductIndex) {
        this.indicatorsSection.innerHTML = products.map((_, index) => `
            <span class="indicator ${index === currentProductIndex ? 'active' : ''}" data-index="${index}"></span>
        `).join('');
    }
}
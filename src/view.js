class FurnitureView {
    constructor() {
        this.introDescription = document.getElementById('intro-description');
        this.carousel = document.getElementById('carousel');
        this.indicatorsSection = document.getElementById('indicators');
    }

    renderIntro(intro) {
        this.introDescription.innerHTML = `
            <h1>${intro.title}</h1>
            <p>${intro.description}</p>
            <button>${intro.button}</button>
        `
    }

    renderProducts(products, currentProductIndex) {
        const productHTML = products.map((product, index) => `
            <div class="product ${index === currentProductIndex ? 'current-product' : ''}" data-index="${index}">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
            </div>
        `).join('');

        this.carousel.innerHTML = productHTML;
    }

    renderIndicators(products, currentProductIndex) {
        this.indicatorsSection.innerHTML = products.map((_, index) => `
            <span class="indicator ${index === currentProductIndex ? 'active' : ''}" data-index="${index}"></span>
        `).join('');
    }
}
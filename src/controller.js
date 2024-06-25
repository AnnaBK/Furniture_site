class FurnitureController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    initialize() {
        this.view.renderIntro(this.model.content.intro);
        this.updateView();

        document.getElementById('next-button').addEventListener('click', () => {
            this.model.nextProduct();
            this.updateView();
        });

        document.getElementById('prev-button').addEventListener('click', () => {
            this.model.prevProduct();
            this.updateView();
        });

        document.getElementById('indicators').addEventListener('click', (event) => {
            if (event.target.classList.contains('indicator')) {
                const index = parseInt(event.target.dataset.index);
                this.model.currentProductIndex = index;
                this.updateView();
            }
        });
    }

    updateView() {
        const prevProduct = this.model.getPrevProduct();
        const currentProduct = this.model.getCurrentProduct();
        const nextProduct = this.model.getNextProduct();
        this.view.renderProduct(prevProduct, currentProduct, nextProduct);
        this.view.renderIndicators(this.model.content.products, this.model.currentProductIndex);
    }
}
class FurnitureController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  initialize() {
    this.view.renderIntro(this.model.content.intro);
    this.updateView();
    console.log(this.model.currentProductIndex);

    document.getElementById("next-button").addEventListener("click", () => {
      this.updateView(true);
      console.log(this.model.currentProductIndex);
    });

    document.getElementById("prev-button").addEventListener("click", () => {
      this.updateView(false);
    });

    document.getElementById("indicators").addEventListener("click", (event) => {
      if (event.target.classList.contains("indicator")) {
        const index = parseInt(event.target.dataset.index);
        this.model.currentProductIndex = index;
        this.updateView();
      }
    });
  }

  updateView(isNext) {
    const products = this.model.content.products;

    const carousel = this.view.carousel;
    let prevIndex = this.model.currentProductIndex;

    if(isNext === undefined) {}
    else if (isNext) {
      this.model.nextProduct();
      carousel.style.transform = `translateX(-934px)`;
      carousel.append(this.model.content.products[prevIndex]);
      this.model.content.products.push(this.model.content.products.shift());
    } else if (!isNext) {
      this.model.prevProduct();
      carousel.style.transform = `translateX(-934px)`;
      carousel.prepend(
        this.model.content.products[this.model.currentProductIndex],
      );
      this.model.content.products.unshift(this.model.content.products.pop());
    }

    this.view.renderProducts(products, this.model.currentProductIndex);
    this.view.renderIndicators(products, this.model.currentProductIndex);
  }
}

class FurnitureModel {
    constructor() {
        this.currentProductIndex = 0;
        this.imageWidth = 934;
        this.content = {
            intro: {
                title: "High-Quality Furniture Just For You",
                description: "Our furniture is made from selected and best quality materials that are suitable for your dream home",
                button: "Shop Now"
            },
            products: [
                {
                    title: "Bohauss",
                    description: "Luxury big sofa 2-seat",
                    price: "Rp 17.000.000",
                    image: "./img/Bohauss-sofa.png"
                },
                {
                    title: "Hemnes",
                    description: "A stylish classic chair.",
                    price: "Rp 17.000.000",
                    image: "./img/Hemnes-bed.png"
                },
                {
                    title: "Minotti",
                    description: "A sturdy wooden table.",
                    price: "Rp 17.000.000",
                    image: "./img/Minotti-armchair.jpeg"
                },
                {
                    title: "LaForma",
                    description: "A sturdy wooden table.",
                    price: "Rp 17.000.000",
                    image: "./img/LaForma-sofa.jpeg"
                }
            ]
        };
    }

    getCurrentProduct() {
        return this.content.products[this.currentProductIndex];
    }

    nextProduct() {
        this.currentProductIndex = (this.currentProductIndex + 1) % this.content.products.length;
    }

    prevProduct() {
        this.currentProductIndex = (this.currentProductIndex - 1 + this.content.products.length) % this.content.products.length;
    }
}
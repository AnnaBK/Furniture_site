document.addEventListener("DOMContentLoaded", () => {
    const model = new FurnitureModel();
    const view = new FurnitureView();
    const controller = new FurnitureController(model, view);

    controller.initialize();
  });
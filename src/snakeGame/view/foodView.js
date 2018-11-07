export default class FoodView {
  constructor(foodModel, levelModel, canvas) {
    this.foodModel = foodModel;
    this.levelModel = levelModel;
    this.context = canvas.context;
  }

  render() {
    const x = (this.foodModel.getX() * this.levelModel.getCellSize()) + 0.5;
    const y = (this.foodModel.getY() * this.levelModel.getCellSize()) + 0.5;

    switch (this.foodModel.getType()) {
      case 0:
        this.context.fillStyle = '#00ff00';
        break;

      case 1:
        this.context.fillStyle = '#ffff00';
        break;

      case 2:
        this.context.fillStyle = '#00ffff';
        break;

      default:
        this.context.fillStyle = '#00ff00';
        break;
    }
    this.context.fillRect(x, y, this.levelModel.getCellSize(), this.levelModel.getCellSize());
  }
}

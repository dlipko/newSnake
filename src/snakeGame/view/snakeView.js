export default class SnakeView {
  constructor(snakeModel, levelModel, canvas) {
    this.context = canvas.getContext();
    this.snakeModel = snakeModel;
    this.levelModel = levelModel;
  }

  render() {
    // snacke color
    // this.context.fillStyle = '#003300';
    this.context.fillStyle = '#99ff00';
    this.context.strokeStyle = '#009900';

    this.snakeModel.segments.forEach((segment) => {
      const x = 0.5 + segment.x * this.levelModel.getCellSize();
      const y = 0.5 + segment.y * this.levelModel.getCellSize();

      this.context.beginPath();
      // this.context.rect(x, y, this.levelModel.getCellSize(), this.levelModel.getCellSize());
      this.context.arc(x + this.levelModel.getCellSize() / 2,
        y + this.levelModel.getCellSize() / 2,
        this.levelModel.getCellSize() / 2,
        0,
        2 * Math.PI);

      this.context.fill();
      this.context.stroke();
      this.context.closePath();
    });
  }
}

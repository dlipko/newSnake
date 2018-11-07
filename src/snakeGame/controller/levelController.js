import busController from '../utils/busController';

export default class LevelController {
  constructor(levelModel) {
    this.busController = busController;
    this.levelModel = levelModel;

    this.eventsMethosds = {
      setFood: this.setFoodOnMap.bind(this),
      pickFood: this.removeFoodFromMap.bind(this),
    };

    this.busController.setBusListeners(this.eventsMethosds);

    this.generateLevel();
  }

  removeFoodFromMap(position, orderedSegments) {
    console.log('remove food event', position);
    this.levelModel.removeFood(position);
    this.busController.emit('resetFood', [this.levelModel.getEmptyCell(orderedSegments)]);
  }

  setFoodOnMap(position) {
    console.log('catch set food event', position);
    this.levelModel.setFood(position);
  }

  generateLevel() {
    this.busController.emit('resetFood', [this.levelModel.getEmptyCell()]);
    return this.levelModel.getMap();
  }

  update() {

  }
}

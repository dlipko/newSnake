import SnakeGame from './snakeGame/index';

import css from './index.css';

const root = document.getElementsByClassName('root')[0];

window.addEventListener('load', (_) => {
  const snakeGame = new SnakeGame(root);
});

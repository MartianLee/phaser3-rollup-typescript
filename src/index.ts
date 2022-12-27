import Phaser from 'phaser';
import config from './config';
import { BootScene } from './scenes/boot-scene';
import GameScene from './scenes/Game';

new Phaser.Game(
  Object.assign(config, {
    scene: [BootScene, GameScene]
  })
);

import { IGameEngine } from '../interfaces/IGameEngine';
import { ISceneDataManager } from '../interfaces/ISceneDataManager';
import { ISceneTransitionManager } from '../interfaces/ISceneTransitionManager';
import { ThreeObjects } from '../types/ThreeObjects';

class GameEngine implements IGameEngine {
  sceneDataManager: ISceneDataManager;
  sceneTransitionManager: ISceneTransitionManager;
  threeObjects: ThreeObjects;
  sceneObjects: { [key: string]: THREE.Object3D };

  constructor(sceneDataManager: ISceneDataManager, sceneTransitionManager: ISceneTransitionManager, threeObjects: ThreeObjects) {
    this.sceneDataManager = sceneDataManager;
    this.sceneTransitionManager = sceneTransitionManager;
    this.threeObjects = threeObjects;
    this.sceneObjects = {};
  }
}

export default GameEngine;
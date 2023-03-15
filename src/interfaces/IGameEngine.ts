import { ISceneDataManager } from './ISceneDataManager';
import { ISceneTransitionManager } from './ISceneTransitionManager';
import { ThreeObjects } from '../types/ThreeObjects';

interface IGameEngine {
  sceneDataManager: ISceneDataManager;
  sceneTransitionManager: ISceneTransitionManager;
  threeObjects: ThreeObjects;
  sceneObjects: { [key: string]: THREE.Object3D };
}

export { IGameEngine };
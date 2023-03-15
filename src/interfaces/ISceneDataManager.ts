import { ExtendedSceneData } from '../types/ExtendedSceneData';
import { GameLogicType } from '../types/GameLogic';
import { ISceneTransitionManager } from './ISceneTransitionManager';

/**
 * SceneDataManager class の interface.
 *
 * @remarks
 * この interface は、ゲームデータを非同期的に取得し、Scene のレンダリングを行うメソッドを提供する。
 */

interface ISceneDataManager {
  cache: { [key: string]: ExtendedSceneData };
  sceneTransitionManager: ISceneTransitionManager;

  getScene(gameLogicType: GameLogicType, sceneId: string): Promise<ExtendedSceneData>;
  renderScene(scene: ExtendedSceneData): React.ReactNode;
  runTransition(currentScene: ExtendedSceneData, nextScene: ExtendedSceneData): void;
}

export { ISceneDataManager };

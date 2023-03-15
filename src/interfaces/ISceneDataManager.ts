import { GameLogicType } from '../types/GameLogic';
import { SceneData } from '../types/SceneData';
import { ISceneTransitionManager } from './ISceneTransitionManager';

/**
 * SceneDataManager class の interface.
 *
 * @remarks
 * この interface は、ゲームデータを非同期的に取得し、Scene のレンダリングを行うメソッドを提供する。
 */
interface ISceneDataManager {
  cache: { [key: string]: SceneData };
  transitionManager: ISceneTransitionManager;

  getScene(gameLogicType: GameLogicType, sceneId: string): Promise<SceneData>;
  renderScene(scene: SceneData): React.ReactNode;
}

export { ISceneDataManager };

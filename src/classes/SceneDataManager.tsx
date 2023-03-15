import { GameLogicType } from '../types/GameLogic';
import { SceneData } from '../types/SceneData';
import { ISceneDataManager } from '../interfaces/ISceneDataManager';
import { ISceneTransitionManager } from '../interfaces/ISceneTransitionManager';

import TitleScene from '../scenes/title/TitleScene';
import NovelScene from '../scenes/novel/NovelScene';
import ExplorerScene from '../scenes/explorer/ExplorerScene';

import path from 'path';

import { TitleSceneData } from '../types/TitleSceneData';
import { NovelSceneData } from '../types/NovelSceneData';

import { titleScenes, novelScenes, explorerScenes } from '../gameData/gameData';

/**
 * SceneDataManager の実装クラス。
 *
 * @remarks
 * このクラスは、指定されたゲームロジックタイプとシーンIDに対応するシーンデータを非同期的に取得してシーンのレンダリングを行う。
 */
class SceneDataManager implements ISceneDataManager {
  public cache: { [key: string]: SceneData };
  public transitionManager: ISceneTransitionManager;

  /**
   * SceneDataManager クラスのインスタンスを作成。
   * @param transitionManager - シーン遷移を管理する ISceneTransitionManager インスタンス
   */
  constructor(transitionManager: ISceneTransitionManager) {
    this.cache = {};
    this.transitionManager = transitionManager;
  }

  /**
   * 指定されたゲームロジックタイプとシーンIDに対応するシーンデータを非同期的に取得。
   * @param gameLogicType - ゲームロジックタイプ （ /gameData/ 以下のディレクトリ名に対応）
   * @param sceneId - シーンID （ /gameData/ 以下のディレクトリ内のファイル名に対応）
   * @returns 対応するシーンデータを返す Promise
   */
  async getScene(gameLogicType: GameLogicType, sceneId: string): Promise<SceneData> {
    const cacheKey = `${gameLogicType}_${sceneId}`;
    if (this.cache[cacheKey]) {
      return this.cache[cacheKey];
    }
  
    const sceneDataMap: Record<GameLogicType, Record<string, SceneData>> = {
      title: titleScenes,
      novel: novelScenes,
      explorer: explorerScenes,
    };
  
    const sceneData = sceneDataMap[gameLogicType]?.[sceneId];
  
    if (!sceneData) {
      throw new Error(`Unknown scene ID: ${sceneId} for game logic type: ${gameLogicType}`);
    }
  
    this.cache[cacheKey] = sceneData;
    return sceneData;
  }

  /**
   * SceneData に基づいてシーンをレンダリング。
   * @param scene - SceneData
   * @returns レンダリングされた React.ReactNode
   */
  renderScene(scene: SceneData): React.ReactNode {
    switch (scene.gameLogicType) {
      case 'title':
        return <TitleScene sceneData={scene as TitleSceneData} />;
      case 'novel':
        return <NovelScene sceneData={scene as NovelSceneData} />;
      case 'explorer':
        return <ExplorerScene sceneData={scene} />;
      default:
        return <div>Unknown scene type</div>;
    }
  }
}

export { SceneDataManager };
export default SceneDataManager;

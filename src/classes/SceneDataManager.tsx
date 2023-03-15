import React from 'react';
import { GameLogicType } from '../types/GameLogic';
import { ISceneDataManager } from '../interfaces/ISceneDataManager';
import { ISceneTransitionManager, SceneTransitionFunction } from '../interfaces/ISceneTransitionManager';
import { ReactNode } from 'react';

import TitleScene from '../scenes/title/TitleScene';
import NovelScene from '../scenes/novel/NovelScene';
import ExplorerScene from '../scenes/explorer/ExplorerScene';

import { titleScenes, novelScenes, explorerScenes } from '../gameData/gameData';

import { ExtendedSceneData } from '../types/ExtendedSceneData';
import { NovelSceneData } from '../types/NovelSceneData';

import { SceneData } from '../types/SceneData';
import renderFunctions from '../utils/RenderFunctions';

class SceneDataManager implements ISceneDataManager {
  public cache: { [key: string]: ExtendedSceneData };
  public sceneTransitionManager: ISceneTransitionManager;

  constructor(sceneTransitionManager: ISceneTransitionManager) {
    this.cache = {};
    this.sceneTransitionManager = sceneTransitionManager;
  }

  async getScene(gameLogicType: GameLogicType, sceneId: string): Promise<ExtendedSceneData> {
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
  
    const extendedSceneData: ExtendedSceneData = { ...sceneData, reactNode: null };
    extendedSceneData.reactNode = this.renderScene(extendedSceneData);
  
    this.cache[cacheKey] = extendedSceneData;
    return extendedSceneData;
  }

  renderScene(scene: SceneData): React.ReactNode {
    const renderFunction = renderFunctions[scene.gameLogicType];
    return renderFunction(scene);
  }

  async runTransition(
    currentScene: ExtendedSceneData,
    nextScene: ExtendedSceneData,
  ): Promise<void> {
    await this.sceneTransitionManager.runTransitionById(
      currentScene.id,
      nextScene.id,
      currentScene,
      nextScene,
    );
  }
}

export { SceneDataManager };
export default SceneDataManager;

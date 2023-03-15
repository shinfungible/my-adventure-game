import React from 'react';
import { GameLogicType } from '../types/GameLogic';
import { SceneData } from '../types/SceneData';
import TitleScene from '../scenes/title/TitleScene';
import NovelScene from '../scenes/novel/NovelScene';
import ExplorerScene from '../scenes/explorer/ExplorerScene';
import { NovelSceneData } from '../types/NovelSceneData';
import { TitleSceneData } from '../types/TitleSceneData';
import { ExplorerSceneData } from '../types/ExplorerSceneData';

const renderFunctions: Record<GameLogicType, (sceneData: SceneData) => React.ReactNode> = {
  title: (sceneData) => <TitleScene sceneData={sceneData as TitleSceneData} />,
  novel: (sceneData) => <NovelScene sceneData={sceneData as NovelSceneData} />,
  explorer: (sceneData) => <ExplorerScene sceneData={sceneData as ExplorerSceneData} />,
};

export default renderFunctions;

import React, { useEffect } from 'react';
import GameEngine from '../classes/GameEngine';
import SceneDataManager from '../classes/SceneDataManager';
import SceneTransitionManager from '../classes/SceneTransitionManager';
import ThreeManager from '../classes/ThreeManager';
import { SceneTransitionMap } from '../types/SceneTransition';
import { styled } from './styles/GlobalStyles';

const Empty = styled.div`
  background-color: transparent;
`;

const App: React.FC = () => {
  useEffect(() => {
    const transitions: SceneTransitionMap = {};

    const sceneTransitionManager = new SceneTransitionManager({ transitions: transitions });
    const sceneDataManager = new SceneDataManager(sceneTransitionManager);
    const threeManager = new ThreeManager();
    threeManager.init(document.getElementById('root') as HTMLElement);
    const threeObjects = threeManager.getThreeObjects();
    const gameEngine = new GameEngine(sceneDataManager, sceneTransitionManager, threeObjects);
    
    return () => {
      // cleanup
    };
  }, []);

  return (
    <Empty />
  );
};

export default App;
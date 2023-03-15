import React, { useEffect } from 'react';
import GameEngine from '../classes/GameEngine';
import SceneDataManager from '../classes/SceneDataManager';
import SceneTransitionManager from '../classes/SceneTransitionManager';
import ThreeManager from '../classes/ThreeManager';
import { SceneTransitionMap } from '../types/SceneTransition';
import { styled } from './styles/GlobalStyles';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
`;

const App: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const transitions: SceneTransitionMap = {};

    const sceneTransitionManager = new SceneTransitionManager({ transitions: transitions });
    const sceneDataManager = new SceneDataManager(sceneTransitionManager);
    const threeManager = new ThreeManager();
    threeManager.init(containerRef.current);
    const threeObjects = threeManager.getThreeObjects();
    const gameEngine = new GameEngine(sceneDataManager, sceneTransitionManager, threeObjects);
    
    return () => {
      // cleanup
    };
  }, [containerRef]);

  return (
    <Container ref={containerRef} />
  );
};

export default App;
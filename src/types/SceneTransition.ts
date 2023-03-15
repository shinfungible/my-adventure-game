import React from 'react';

interface SceneTransition {
  (from: React.ReactNode, to: React.ReactNode, props: any): void;
}

interface SceneTransitionMap {
  [key: string]: SceneTransition;
}

interface SceneTransitionManagerProps {
  transitions: SceneTransitionMap;
}

interface SceneTransitionManager {
  new (props: SceneTransitionManagerProps): SceneTransitionManager;
  transitions: SceneTransitionMap;
  runTransition(transitionName: string, from: React.ReactNode, to: React.ReactNode, props: any): void;
}

export { SceneTransition, SceneTransitionMap, SceneTransitionManagerProps, SceneTransitionManager };
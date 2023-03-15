import { GameLogicType } from "./types/GameLogic";

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  loadClass: async (gameLogicType: GameLogicType, sceneId: string) => {
    return await ipcRenderer.invoke('load-class', gameLogicType, sceneId);
  },
});
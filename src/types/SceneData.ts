import { GameLogicTypeMap } from './GameLogicTypeMap';

/**
 * シーンデータ型の合成型。
 *
 * @remarks
 * これは、各シーンデータ型に `gameLogicType` プロパティを追加することで構成される。
 * 新しいシーンデータ型を追加する場合は、`GameLogicTypeMap` に追加すると、この型に自動的に反映される。。
 * 例えば、新しい GameLogicType "quiz" とそれに対応する SceneData 型 "QuizSceneData" がある場合、
 * `GameLogicTypeMap` に追加することで、自動的に `SceneData` 型に反映される。
 */
type SceneData = GameLogicTypeMap[keyof GameLogicTypeMap];

export { SceneData };

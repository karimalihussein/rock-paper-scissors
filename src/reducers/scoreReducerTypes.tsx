export enum OptionActionKind {
    UPDATE_PLAYER_CHOICE = 'UPDATE_PLAYER_CHOICE',
}

interface IUpdatePlayerChoice {
    type: OptionActionKind.UPDATE_PLAYER_CHOICE;
    payload: number;
}

export type ActionTypes = IUpdatePlayerChoice;
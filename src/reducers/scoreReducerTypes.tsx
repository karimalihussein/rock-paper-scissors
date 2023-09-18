export enum OptionActionKind {
    UPDATE_PLAYER_CHOICE = 'UPDATE_PLAYER_CHOICE',
    UPDATE_COMPUTER_CHOICE = 'UPDATE_COMPUTER_CHOICE',
}

interface IUpdatePlayerChoice {
    type: OptionActionKind.UPDATE_PLAYER_CHOICE;
    payload: number;
}

interface IUpdateComputerChoice {
    type: OptionActionKind.UPDATE_COMPUTER_CHOICE;
    payload: number;
}

export type ActionTypes = IUpdatePlayerChoice | IUpdateComputerChoice;
export enum OptionActionKind {
    UPDATE_PLAYER_CHOICE = 'UPDATE_PLAYER_CHOICE',
    UPDATE_COMPUTER_CHOICE = 'UPDATE_COMPUTER_CHOICE',
    RUN_TIMER = 'RUN_TIMER',
}

interface IUpdatePlayerChoice {
    type: OptionActionKind.UPDATE_PLAYER_CHOICE;
    payload: number;
}

interface IUpdateComputerChoice {
    type: OptionActionKind.UPDATE_COMPUTER_CHOICE;
    payload: number;
}

interface IRunTimer {
    type: OptionActionKind.RUN_TIMER;
    payload: boolean;
}

export type ActionTypes = IUpdatePlayerChoice | IUpdateComputerChoice | IRunTimer;
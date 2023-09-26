export enum OptionActionKind {
    UPDATE_PLAYER_CHOICE = 'UPDATE_PLAYER_CHOICE',
    UPDATE_COMPUTER_CHOICE = 'UPDATE_COMPUTER_CHOICE',
    RUN_TIMER = 'RUN_TIMER',
    DRAW = 'DRAW',
    PLAYER_WIN = 'PLAYER_WIN',
    COMPUTER_WIN = 'COMPUTER_WIN',
}

interface UpdateChoiceAction {
    type: OptionActionKind.UPDATE_PLAYER_CHOICE | OptionActionKind.UPDATE_COMPUTER_CHOICE;
    payload: number;
}

interface RunTimerAction {
    type: OptionActionKind.RUN_TIMER;
    payload: boolean;
}

interface ResultAction {
    type: OptionActionKind.DRAW | OptionActionKind.PLAYER_WIN | OptionActionKind.COMPUTER_WIN;
    payload: string;
}

export type ActionTypes = UpdateChoiceAction | RunTimerAction | ResultAction;

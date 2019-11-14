import * as vscode from 'vscode';
export interface AdaMakeAllTask extends vscode.TaskDefinition {
    flags?: string;
}

export interface AdaMakeCleanTask extends vscode.TaskDefinition {
    flags?: string;
}

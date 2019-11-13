import * as vscode from 'vscode';
    export interface AdaMakeAllTask extends vscode.TaskDefinition {
        flags?: string;
    }

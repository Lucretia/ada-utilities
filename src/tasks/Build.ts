import * as vscode from 'vscode';
export interface AdaMakeAllTask extends vscode.TaskDefinition {
    flags?: string;
}

export interface AdaMakeCleanTask extends vscode.TaskDefinition {
    flags?: string;
}

export interface AdaGPRBuildTask extends vscode.TaskDefinition {
    flags?: string;
    post_flags?: string;
}

export interface AdaGPRCleanTask extends vscode.TaskDefinition {
    flags?: string;
}

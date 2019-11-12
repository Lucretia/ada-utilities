// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "ada-utilities" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand("extension.gotoSpecification", gotoSpecification, context));
	context.subscriptions.push(vscode.commands.registerCommand("extension.gotoBody", gotoBody, context));
	context.subscriptions.push(vscode.commands.registerCommand("extension.switchToPackageBodySpec", switchToPackageBodySpec, context));
}

// this method is called when your extension is deactivated
export function deactivate() {}

async function openAdaDocument(extension:string, type:string) {
	var activeEditor = vscode.window.activeTextEditor;
	var docName = activeEditor?.document.fileName;
	var docPath:path.ParsedPath = path.parse(docName!);
	var adaDocName:string = docPath.dir + "/" + docPath.name + extension;

	vscode.window.showInformationMessage(`Loading Ada package ${type} (${adaDocName})...`);

	let adaDoc = await vscode.workspace.openTextDocument(adaDocName);
	await vscode.window.showTextDocument(adaDoc);
}

export function gotoSpecification(context: vscode.ExtensionContext) {
	openAdaDocument(".ads", "specification")
}

export function gotoBody(context: vscode.ExtensionContext) {
	// vscode.window.showInformationMessage('Loading Ada package Body...');
	openAdaDocument(".adb", "body")
}

export function switchToPackageBodySpec(context: vscode.ExtensionContext) {
	var activeEditor = vscode.window.activeTextEditor;
	var docName = activeEditor?.document.fileName;
	var docPath:path.ParsedPath = path.parse(docName!);

	vscode.window.showInformationMessage(`Loading Ada package ${docPath.ext}...`);

	if (docPath.ext == ".ads") {
		openAdaDocument(".adb", "body")
	} else if (docPath.ext == ".adb") {
		openAdaDocument(".ads", "specification")
	}
}
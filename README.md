# Ada Utilities

This is a VSCode extension Ada programmers which provides a few utility functions.

## Features

### Commands

* Go to Ada specification / body.
* Switch between the specification and body.

### Menus

The above commands are available from the editor context menus.

### Problem matchers

* GPRBuild

## Requirements

* [Ada Language Server](https://github.com/AdaCore/ada_language_server)
* [Ada VSCode](https://github.com/Lucretia/ada-vscode)

## Extension Settings

Modify the ```flags``` option and add the following to your ```tasks.json``` file if your source isn't in ```${workspaceFolder}/src```:

```
    "tasks": [
        {
            "type": "adamakeall",
            "flags": "-C /tmp/example -f makefile",
            "problemMatcher": [
                {
                    "fileLocation": [ "autoDetect", "${workspaceFolder}"],
                    "base": "$gprbuild_warnings_info"
                },
                {
                    "fileLocation": [ "autoDetect", "${workspaceFolder}"],
                    "base": "$gprbuild_warnings_info"
                },
                {
                    "fileLocation": [ "autoDetect", "${workspaceFolder}"],
                    "base": "$gprbuild_warnings"
                },
                {
                    "fileLocation": [ "autoDetect", "${workspaceFolder}"],
                    "base": "$gprbuild_errors"
                }
            ],
            "group": {
                "kind": "build",
                "isDefault": true
            }
        }
    ]
```

Alter the make ```args``` to match your source.


## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

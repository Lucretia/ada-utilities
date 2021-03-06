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

### Tasks

* Make all (uses the above problem matchers).
* Make clean (no problem matchers at this time).
* GPRBuild
* GPRClean

The GPR tools get the gpr filename from the workspace settings, ```ada.projectFile``` which is the same value used in the [Ada language server](https://github.com/AdaCore/ada_language_server).

## Requirements

Not strictly requirements, but these are the two other extensions I use at this time. They make Ada programming a bit easier at least.

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

Or, if using gprbuild/gprclean:

```
    "tasks": [
        {
            "type": "adagprbuild",
            "flags": "",
            "post_flags": "-cargs -v",
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
        },
        {
            "type": "adagprclean",
            "flags": "",
            "problemMatcher": []
        }
    ]
```

Alter the make ```args``` to match your source.


## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

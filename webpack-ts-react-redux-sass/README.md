# NxtLoad Web UI #

## Table of Contents ##
1. [Set up and run project](#Set-up-and-run-project)
2. [Set up editor](#set-up-editor)
3. [Technology Stack](#technology-stack)
4. [Resources and Readings](#resources-and-readings)
5. [Troubleshooting](#troubleshooting)

## Set up and run project ##

For development you need [nodejs](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/en/) installed.
When installed, you can run "yarn install" in the project's root folder.
Now, the following commands are available:

- **yarn run dev** - Compiles the code in dev mode and starts a inmemory dev server on port 8082 with hot swap enabled.
- **yarn run devbuild** - Compiles the code in dev mode
- **yarn run build** - Compiles the code in production mode
- **yarn test** - Runs all JEST unittest
- **yarn test *<TestName.test>*** - runs a specific test
- **yarn lint** - runs the ts linter tool for code quality checks.

## Releases ##

There are two release scripts provided, one for INT and another for PROD releases.
Both scripts will bump the version of the [package.json](./package.json) file.
Then a release commit and tag will be pushed to the current branch.
The difference is, the INT release bumps the patch version (x.x.(++)), the PROD release bumps the minor version (x.(++).0).
Best practice is, to run these script on the release branch and merge it into development after release.

Availabvle release scripts are:
- **yarn run release:int**
- **yarn run release:prod**

## Set up editor ##

As the code base is written in [TypeScript](https://www.typescriptlang.org/), we strongly recommend to use [Visual Code](https://code.visualstudio.com/).

To ensure code quality, the follwing extensions should be installed:
- EditorConfig for VS Code
- TSLint
- Beautify

Furthermore the following settings should be made (open settings.json Fle by pressing F1 and type 
>Open Workspace Settings

Then copy&past the following snipped in the right pane)

    {
        "typescript.tsdk": "./node_modules/typescript/lib"
        "editor.formatOnSave": true,
    }
This will make sure, that the project's current typescript version is used by the editor rather than the one shipped with VisualCode.  Furthermore, autoformat on save is enabled.

Other useful Visula Code extentions are:
- yarn script runner
- Git Lense
- Project Manager
- Visual Studio Team Services
- Color Info
- Auto-Open Markdown Preview

## Technology Stack ##

The Nxtload UI project uses the following technologies:

- **TypeScript 2** : Implementation Language 
- **SASS** : Style Cheet Extention Language 
- **Webpack 3** : Build- and packaging tool
- **Babel** : ES6 Transpiler
- **JEST** : Unittest Framework
- **React JS** : Component Framework
- **Redux JS** : State management
- **I18next** : internationalization Framework

## Debugging ##

The dev build delivers source maps. Therefore, the chrome debugger can be used.
To debug react components and the redux flow, you should install the following chrome extensions:
- [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [REDUX Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

**Especially the REDUX dev tooles are very useful and are a must have!**
Those tools can be used in development mode only.

If you want to use the REDUX dev tool dipatcher, [this list of actions](./doc/TestActions.md) can become handy.

## Resources and Readings ##

### React ###
- [React on GitHub](https://facebook.github.io/react/)
- [Awsome React](https://github.com/enaqx/awesome-react)
- [Cheat Sheet](http://ricostacruz.com/cheatsheets/react.html)
### REDUX ###
- [Redux Homepage. All you need to Know](http://redux.js.org/)
### Typescript ###
- [TS Docs](https://www.typescriptlang.org/docs/home.html)
### SASS ###
- [SASS Docs](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
### Webpack ###
- [Config Docs](https://webpack.js.org/configuration/)

## Troubleshooting ##

### Module not found ####
Sometimes it happens, that the build fails localy due some old/missing dependencies in the node_modules folder. If your build fails with a message like this
>Module not found: Error: Can't resolve [modulename]

with [modulename] referencing a node module try to run
>yarn install

If this does not help, follow these steps:
1. delete the node_modules folder
2. delete the .awcache folder
3. run yarn install again

This should fix the problem.

### Change default environment ###

Per default, the dev command uses nxtloadapi-dev as backend endpoint.
To change this, you have to set your environment variables accoringly.
In Powershell, you cann do it with the following command:
>$env:NXTLOAD_API_URL="[APIURL]"

This will set the environment for the current window.
This method can be used to set all available environment variables used by the webpack.config scripts.
E.g. to link the local server to the nxtloadapi-load backend, the following variables must be set:

>$env:NXTLOAD_API_URL="https://nxtloadapi-load.azurewebsites.net/api/v1/"

>$env:NXTLOAD_API_KEY="LOAD_API_KEY"

>$env:NXTLOAD_AD_APPID="1dbd221f-8497-4a24-bb12-6dc83d8dbc4a"


If you want to use the ui with a locally running nxtloadapi, add the following lines to Global.asax.cs in the ntload-api project before starting it:
	protected void Application_BeginRequest(object sender, EventArgs e)
	{
		HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");

		if (HttpContext.Current.Request.HttpMethod == "OPTIONS")
		{
			//These headers are handling the "pre-flight" OPTIONS call sent by the browser
			HttpContext.Current.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
			HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept, authorization");
			HttpContext.Current.Response.AddHeader("Access-Control-Max-Age", "1728000");
			HttpContext.Current.Response.End();
		}

	}

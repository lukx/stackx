# Prerequisities

You will need 
* node > 10 and npm.
* yarn is recommended

Run `yarn` in the root of this directory to set up the dependencies.

**Make sure your global gitignore file does not ignore the directory `build`, where our build configurations live.

## Developing

The built-in development server is `webpack-dev-server`. Run `yarn dev` to build the application and run a browser,
including hot module replacement etc.

## Building

Run `yarn build:dev` for a build without optimizations, allowing you to inspect and debug the built code.

Run `yarn build:prod` for a heavily optimized build intended for production deployment.


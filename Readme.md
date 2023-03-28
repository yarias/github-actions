![](https://github.com/yarias/github-actions/workflows/CI/badge.svg?branch=develop&event=push)

# Surge

it is used for static web publishing for Front-end developers 

# Prettier

need to create a `.prettier` file in root with the configuration, it can be copied from prettier website once you adjust it acording to youe requirements, and in `.prettierignore` you can specify the files you want prettier to omit the check.

* npx prettier --check "**/*.js"
* npx prettier --write "**/*.js"   ==> format the files 

that command can be also added into the package.json file in order to be executed with `npm run `<script-=-key>`

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "format:check": "prettier --check \"**/*.{js,jsx,yml,json,css,scss,md}\""
}
```

# Create an Action

Private actions are the ones that do not have their own repositories.


## CODEOWNERRS

Add a file to specify the names of the developer required to review pull request code 

```txt
* @yarias
*.js @yarias
*.yml @yarias
/public/ @yarias
```

## Codecov

Used o upload coverage reports.

You need to go to codecov.io and login using your guthub account, the in the url andd the path to your repo and generate an CODECOV_TOKEN for that repo and add it to the secrets in github.

When the workflow is concluded, in codecov you can si the dashboard with the results.

## husky

it is another package that can allow us to use git Hooks to run something before we commit or before we push or before we do anything that is related to GIT.

This will help to validate commit message is following the standard.


Need to add follwong in package.json file. 

```json
"husky":{
    "hooks": {
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
}
```

and create a new commit.config.js file where exports:

```js
module.exports = {
    extends: ['@commintlint/config-conventional']
}
```

## commitizen

We can use commitezen to have an interactiove window to help create the commit message.

## GitHub Actions

Github provides an NPM package that helps do some stuff in our JS worflows.

`github/toolki`
there are other packages to use, but will use only these 2:

install: `npm install @actions/github --save` and  `npm install @actions/core --save`

## ncc package

When we use @actions/core and @actions/github in `index.js`, those packages are not found because we do not upload node-module folder to github. To fix it we use `ncc` package to compile a Node.js project into a single file.

install: `npm i -D @zeit/ncc`
compile: `npx ncc build .github/actions/hello/index.js -o .github/actions/hello/dist`
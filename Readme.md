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

## CODEOWNERRS

Add a file to specify the names of the developer required to review pull request code 

```txt
* @yarias
*.js @yarias
*.yml @yarias
/public/ @yarias
```


## Semactic Versioning

It consits in 3 parts: <major version>.<minor version>.<path version>

major version: breaking changes
minor version: new features, non-breaking functionality
path version: bug fixes


`npm install --save-dev semantic-release`

create a `release.config.js` file:

```json
module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/yarias/github-actions",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/git"
      ]
}
```

Run `npx semantic-release` for testing purposes.
## Conventional Commits

<type>[optional scope]:<descri[ton]>
[optiona body]
[optional footer]

bellow commit wil change the major version b/c of the BREAKING CHANGE key word

```txt
fix(cart): change cart endpoint

BREAKING CHANGE: changed cart endponnt

closes issue #12
```

bellow code will change the minor version b/c of the feat key word and ignore the patch version change b/c the minor version takes priority over the patch one.

```txt
feat(cart): added new auth method
fix(auth): fixed auth
```

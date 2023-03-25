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


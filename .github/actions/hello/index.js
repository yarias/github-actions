const core = require('@actions/core')
const github = require('@actions/github')


try {
    // throw( new Error("some error message"))

    core.debug('Debug message')
    core.warning('warning message')
    core.error('error message')

    const name = core.getInput('who-tp-greet')
    core.setSecret(name) // create a github secret
    console.log(`Hello ${name}`)

    
    const time = new Date()
    core.setOutput('time', time.toTimeString())
    
    // group logs 
    core.startGroup('Loggin github object')
    console.log(JSON.stringify(github, null, '\t'))
    core.endGroup()

    // create environments
    core.exportVariable('HELLO', "hello")
    
} catch(error)
{
    core.setFailed(error.message)
}

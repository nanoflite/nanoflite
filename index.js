const Mustache = require('mustache')
const fs = require('fs')
const README = './README.mustache'

const info = {
    date: new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
        timeZone: 'Europe/Brussels',
    })
}

function generateReadMe()
{
    const template = fs.readFileSync(README).toString()
    const output = Mustache.render(template, info)
    fs.writeFileSync('README.md', output)
}

generateReadMe()
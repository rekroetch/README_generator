

// function to generate markdown for README
function generateMarkdown(data) {

    if (data.license === 'MIT') {
        var badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        var lic = "[MIT](https://opensource.org/licenses/MIT)"
    } else if (data.license === 'GNU') {
        var badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        var lic = "[GPL v3](https://www.gnu.org/licenses/gpl-3.0)"
    } else {
        return badge + lic
    }
    

    return `# ${data.title}

${badge}    
    
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contributing)
* [License](#license)

## Installation
Use [${data.installation}] to install dependencies.

## Usage
${data.usage}

## Tests
Use [${data.tests}] to run tests.

## Contributing
${data.contributing}

## Questions
Questions about the project can be sent to ${data.email}. Find some of my other projects on GitHub at [${data.github}](https://github.com/${data.github}/).

## License
This project is covered under the ${lic} license.
  `;
  }
  
  module.exports = generateMarkdown;

// [${data.license}](https://opensource.org/licenses/${data.license})
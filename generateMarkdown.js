// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    
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
[${data.license}](https://opensource.org/licenses/${data.license})
  `;
  }
  
  module.exports = generateMarkdown;
//   add %20 to spaces in license
// add license badge
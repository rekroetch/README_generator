// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    
    ## Description
    ${data.description}

    ## Table of Contents
    [Installation](#installation)
    [Usage](#usage)
    [Tests](#tests)
    [Contributing](#contributing)
    [License](#license)

    ## Installation
    Use ${data.installation} to install dependencies.

    ## Usage
    ${data.usage}

    ## Tests
    Use ${data.tests} to run tests.

    ## Contributing
    ${data.contributing}

    ## License
    [${data.license}](https://opensource.org/licenses/${data.license})
  `;
  }
  
  module.exports = generateMarkdown;
  
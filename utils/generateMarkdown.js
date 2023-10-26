function renderLicenseBadge(license) {
  if (license === "None") {
    return ""
  } else if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
}

function renderLicenseLink(license) {
  if (license === "None") {
    return ""
  } else if (license === "Apache License 2.0") {
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (license === "MIT License") {
    return "https://opensource.org/licenses/MIT"
  } else if (license === "Mozilla Public License 2.0") {
    return "https://opensource.org/licenses/MPL-2.0"
  }
}

function renderLicenseSection(license) {
  if (license === "None") {
    return "N/A"
  } else {
    return license
  }
}

function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license)
  const link = renderLicenseLink(data.license)
  const licenseSection = renderLicenseSection(data.license)

  return `
  ${badge}
  # ${data.title}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation
  
  ${data.install}

  ## Usage

  ${data.usage}

  ## License

  ${licenseSection}
  ${link}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions

  My GitHub is [${data.username}](https://github.com/${data.username}).
  If you have any further questions, you can email me at ${data.email}.

`;
}

module.exports = generateMarkdown;

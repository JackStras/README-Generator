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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ""
  } else {
    return license
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

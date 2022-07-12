const badgeList = ['Apache 2.0 License', 'BSD 3-Clause License', 'BSD 2-Clause License','CC0', 'Attribution 4.0 International', 'Attribution-ShareAlike 4.0 International', 'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivates 4.0 International', 'Attribution-NonCommmercial-ShareAlike 4.0 International','Attribution-NonCommercial-NoDerivatives 4.0 International','Eclipse Public License 1.0','GNU GPL v3','GNU GPL v2', 'GNU AGPL v3','GNU LGPL v3', 'GNU FDL v1.3','IBM Public License Version 1.0','ISC License (ISC)']
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === badgeList[0]){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === badgeList[1]){
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (license === badgeList[2]){
    return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  } else if (license === badgeList[3]){
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
  } else if (license === badgeList[4]){
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
  } else if (license === badgeList[5]){
    return "[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)"
  } else if (license === badgeList[6]){
    return "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)"
  } else if (license === badgeList[7]){
    return "[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)"
  } else if (license === badgeList[8]){
    return "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)"
  } else if (license === badgeList[9]){
    return "[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/)"
  } else if (license === badgeList[10]){
    return "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)"
  } else if (license === badgeList[11]){
    return "[![License: CC BY-ND 4.0](https://licensebuttons.net/l/by-nd/4.0/80x15.png)](https://creativecommons.org/licenses/by-nd/4.0/)"
  } else if (license === badgeList[12]){
    return "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)"
  } else if (license === badgeList[13]){
    return "[![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)"
  } else if (license === badgeList[14]){
    return "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)"
  } else if (license === badgeList[15]){
    return "[![License: CC BY-NC-ND 4.0](https://licensebuttons.net/l/by-nc-nd/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-nd/4.0/)"
  } else if (license === badgeList[16]){
    return "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)"
  } else if (license === badgeList[17]){
    return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  } else if (license === badgeList[18]) {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license === badgeList[19]) {
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  } else if (license === badgeList[20]) {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  } else if (license === badgeList[21]) {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  } else if (license === badgeList[22]) {
    return "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)"
  } else if (license === badgeList[23]) {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  } else if (license === badgeList[24]) {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  } else {
    return ""
  }
}  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license)   {
  if (license === badgeList[0]){
    return "(https://opensource.org/licenses/Apache-2.0)"
  } else if (license === badgeList[1]){
    return "(https://opensource.org/licenses/BSD-3-Clause)"
  } else if (license === badgeList[2]){
    return "(https://opensource.org/licenses/BSD-2-Clause)"
  } else if (license === badgeList[3]){
    return "(http://creativecommons.org/publicdomain/zero/1.0/)"
  } else if (license === badgeList[4]){
    return "(http://creativecommons.org/publicdomain/zero/1.0/)"
  } else if (license === badgeList[5]){
    return "(https://creativecommons.org/licenses/by/4.0/)"
  } else if (license === badgeList[6]){
    return "(https://creativecommons.org/licenses/by/4.0/)"
  } else if (license === badgeList[7]){
    return "(https://creativecommons.org/licenses/by-sa/4.0/)"
  } else if (license === badgeList[8]){
    return "(https://creativecommons.org/licenses/by-sa/4.0/)"
  } else if (license === badgeList[9]){
    return "(https://creativecommons.org/licenses/by-nc/4.0/)"
  } else if (license === badgeList[10]){
    return "(https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)"
  } else if (license === badgeList[11]){
    return "(https://creativecommons.org/licenses/by-nd/4.0/)"
  } else if (license === badgeList[12]){
    return "(https://creativecommons.org/licenses/by-nd/4.0/)"
  } else if (license === badgeList[13]){
    return "(https://creativecommons.org/licenses/by-nc-sa/4.0/)"
  } else if (license === badgeList[14]){
    return "(https://creativecommons.org/licenses/by-nc-sa/4.0/)"
  } else if (license === badgeList[15]){
    return "(https://creativecommons.org/licenses/by-nc-nd/4.0/)"
  } else if (license === badgeList[16]){
    return "(https://creativecommons.org/licenses/by-nc-nd/4.0/)"
  } else if (license === badgeList[17]){
    return "(https://opensource.org/licenses/EPL-1.0)"
  } else if (license === badgeList[18]) {
    return "(https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license === badgeList[19]) {
    return "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  } else if (license === badgeList[20]) {
    return "(https://www.gnu.org/licenses/agpl-3.0)"
  } else if (license === badgeList[21]) {
    return "(https://www.gnu.org/licenses/lgpl-3.0)"
  } else if (license === badgeList[22]) {
    return "(https://www.gnu.org/licenses/fdl-1.3)"
  } else if (license === badgeList[23]) {
    return "(https://opensource.org/licenses/IPL-1.0)"
  } else if (license === badgeList[24]) {
    return "(https://opensource.org/licenses/ISC)"
  } else {
    return ""
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===badgeList[0]){
    return `Read more about ${badgeList[0]} here:`
  } else if (license===badgeList[1]){
    return `Read more about ${badgeList[1]} here:`
  } else if (license===badgeList[2]){
    return `Read more about ${badgeList[2]} here:`
  } else if (license===badgeList[3]){
    return `Read more about ${badgeList[3]} here:`
  } else if (license===badgeList[4]){
    return `Read more about ${badgeList[4]} here:`
  } else if (license===badgeList[5]){
    return `Read more about ${badgeList[5]} here:`
  } else if (license===badgeList[6]){
    return `Read more about ${badgeList[6]} here:`
  } else if (license===badgeList[7]){
    return `Read more about ${badgeList[7]} here:`
  } else if (license===badgeList[8]){
    return `Read more about ${badgeList[8]} here:`
  } else if (license===badgeList[9]){
    return `Read more about ${badgeList[9]} here:`
  } else if (license===badgeList[10]){
    return `Read more about ${badgeList[10]} here:`
  } else if (license===badgeList[11]){
    return `Read more about ${badgeList[11]} here:`
  } else if (license===badgeList[12]){
    return `Read more about ${badgeList[12]} here:`
  } else if (license===badgeList[13]){
    return `Read more about ${badgeList[13]} here:`
  } else if (license===badgeList[14]){
    return `Read more about ${badgeList[14]} here:`
  } else if (license===badgeList[15]){
    return `Read more about ${badgeList[15]} here:`
  } else if (license===badgeList[16]){
    return `Read more about ${badgeList[16]} here:`
  } else if (license===badgeList[17]){
    return `Read more about ${badgeList[17]} here:`
  } else if (license===badgeList[18]){
    return `Read more about ${badgeList[18]} here:`
  } else if (license===badgeList[19]){
    return `Read more about ${badgeList[19]} here:`
  } else if (license===badgeList[20]){
    return `Read more about ${badgeList[20]} here:`
  } else if (license===badgeList[21]){
    return `Read more about ${badgeList[21]} here:`
  } else if (license===badgeList[22]){
    return `Read more about ${badgeList[22]} here:`
  } else if (license===badgeList[23]){
    return `Read more about ${badgeList[23]} here:`
  } else if (license===badgeList[24]){
    return `Read more about ${badgeList[24]} here:`
  } else {
    return ""
  }}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## How to Contribute
  [Contributor Covenant](https://www.contributor-covenant.org/)  
  ${data.contributing}

  ## Tests
  ${data.testing}

  ## Questions?
  ### Reach me here: 
  [${data.username}](https://github.com/${data.username})  
  ${data.email}`;
}

module.exports = generateMarkdown;

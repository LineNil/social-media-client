# Workflow CA
This project aims to enhance the software package's quality by implementing productive development workflows. It utilizes a range of web technologies and testing tools to promote a more streamlined and resilient development process, leveraging the skills and knowledge acquired during our course.

## Description 
Throughout our course, we've acquired the skills to optimize the development process and prioritize quality through testing and automation. This project acts as a practical demonstration of those concepts, where we employ HTML, Bootstrap, SASS, JavaScript, Jest, and Cypress to create and test a web package.

## Technologies Used

- HTML
- Bootstrap
- SASS
- JavaScript
- Jest
- Cypress
- Prettier
- EsLint
- Babel
- Husky

## Installation
To set up and prepare this project for development and testing on your local machine, you can easily follow these steps:
Run the following command:
```npm install```
This will install all the essential dependencies needed for the project.

## Usage - bash
Here are some common commands and tasks you can execute to interact with the project:

To run the application locally: ```npm start```

To compile SASS files into CSS: ```npm run build```

To run Jest tests: ```npm run test```

To run Cypress tests interactively: ```npm run test-e2e```

## Automated Testing on PR
Automated tests are set up to run as part of the Pull Request process. This guarantees that each proposed change undergoes thorough testing, identifying and addressing issues in the early stages, and upholding code quality throughout the development lifecycle.

The unit tests focus on the login function. They confirm that the function successfully stores the user's JWT token in storage and that it's removed appropriately when the user logs out.

On the other hand, the end-to-end (E2E) tests validate the functionality of the login process, ensuring that users can't log in with incorrect or unrecognized credentials and verifying that the logout process functions correctly and securely.
## Status Badges
[![Code Review](https://github.com/LineNil/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/LineNil/social-media-client/actions/workflows/gpt.yml)


[![Automated E2E Testing](https://github.com/LineNil/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/LineNil/social-media-client/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/LineNil/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/LineNil/social-media-client/actions/workflows/unit-test.yml)

[![Deploy static content to Pages](https://github.com/LineNil/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/LineNil/social-media-client/actions/workflows/pages.yml)



# Apsara2.0

Second version of iit-techambit frontend.

# Set up:

#### Installation

`npm install`

#### Running on localhost

`npm start`

**NOTE: Please use only npm as package manager not any other to avoid dependency clashes**

# To Contribute

- We do not commit to `master` branch directly. We open pull requests and merge them in master after review.
- Create the issue as necessary.
- If you lack the technical knowhow, feel free ask in the slack workspace.
- Create a Branch and Commit your changes.
  - Name the branch carefully. For example `feature-card-component`, `bugfix-overlay`. Do not use generic names such as `develop`, `work`, your username etc.
  - Name the commits meaningfully. For help read [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/).
- Check if the solution works by testing it locally.
- Submit a PR with an appropriate name including the term `Fixes #{issue number}` if it fixes that particular issue.
- Be attentive and respond to comments and suggestions in the opened PR.
- We will merge your PR after reviewing and testing it.

# While contributing

- Use **prettier** extension for code linting

## Deployment

Note that the `master` branch is deployed to server through [Midgard](https://midgard.iit-techambit.in). Any commits pushed to `master` will be deployed to server instantly

A manual deployment can be triggered by going to the midgard dashboard.

## Documentation

The documentation for the Material Kit React is hosted at our [website](https://demos.creative-tim.com/material-kit-react/#/documentation/tutorial).

## Configuration - Settings.json in VS Code

```json
{
  "files.trimTrailingWhitespace": true,
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true
}
```

- Use Pascal case naming convention for naming files, variables meaningfully.
- Usage of ES6 Features when compared to vanilla JS is highly recommended.


## Docs - Easy reference to make changes for devs 
#### Routes 
All the routes are present in `src/index.js`

#### Navbar
- Navbar is present in `src/views/Components/Navbar.js`
- And navbar items are present in `src/components/Header/HeaderLinks.js`

#### Landing Page
- The frontpage is present in `src/views/Components/Components.js`

#### Stories
- `/stories` route
- The component that is rendered in the page is `src/views/Archive/Archive.js` which renders Article cards.Here only data is being fetched from the Drupal CMS API
- Each Article card is present is present in `src/views/Archive/ArticleCard.js`
- On clicking on each card, leads to ReadingPage of each article which is the component `src/views/ReadingPage/ReadingPage.js`,Here also the data is fetched from Drupal CMS API


#### Archive
- `/archive` route
- The component that is rendered is in the page `src/views/Stories/Stories.js` which displays Stories Card(Bad naming) ,this renders from the Flask API. **Fetching from Flask API is done using function `getData` present in `src/integrate.js`  and the endpoints are present in `src/config.js` **
- Each Story card is present in  `src/views/Stories/StoriesCard.js`

#### Newsletter
- `/newsletter` route
- The component being rendered is in `src/views/Newsletter/Newsletter.js`
- It fetches the HTML from Flask API using similar manner as described in the `/archive` route in bold. The HTML is rendered using a parser,which is a npm package. Other component is `SubscriptInput` which is the subscribe box present at the right bottom of the page

#### Team Page
- `/team` route
- The component that is being rendered is in `src/views/Team/Team.js` which displays TeamMemberCard. Each team members details are present in the array named  `TeamList` in `src/views/Team/TeamList.js`
- The team member card is present in `src/views/TeamMemberCard.js`

#### Stylings
- For stylings we are using `SASS`, Don't worry, just write plain CSS in the `scss` file too. It works perfectly fine
- Mostly, we have tried naming to be in such a way that the name of the `.js` file and `.scss` file match. Keep up the practice please !


## Licensing

- Copyright 2019 Creative Tim (https://www.creative-tim.com/)

- Licensed under MIT (https://github.com/creativetimofficial/material-kit/blob/master/LICENSE.md)

## Useful Links

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)
- [Affiliate Program](https://www.creative-tim.com/affiliates/new) (earn money)
- [Blog Creative Tim](http://blog.creative-tim.com/)
- [Free Products](https://www.creative-tim.com/bootstrap-themes/free) from Creative Tim
- [Premium Products](https://www.creative-tim.com/bootstrap-themes/premium) from Creative Tim
- [React Products](https://www.creative-tim.com/bootstrap-themes/react-themes) from Creative Tim
- [Angular Products](https://www.creative-tim.com/bootstrap-themes/angular-themes) from Creative Tim
- [VueJS Products](https://www.creative-tim.com/bootstrap-themes/vuejs-themes) from Creative Tim
- [More products](https://www.creative-tim.com/bootstrap-themes) from Creative Tim
- Check our Bundles [here](https://www.creative-tim.com/bundles?ref="mk-github-readme")

# GymTrack - A new way to check your gym progress

Static Site built with React + Typescript

Site link: https://gym-track-sports.netlify.app/

Author: Rafael Abusleme

## Backlog - GymTrack Board

To see the project progress and visualize the past/current/future features click the following link [GymTrack - Board](https://trello.com/b/f7aWpTY8/gymtrack).

## Requirenments

- Node v16.X [https://nodejs.org/](https://nodejs.org/)

## Available Scripts

In the project directory, you can run:

### `npm install`

Install project dependencies. This step is required for running the following scripts.

### `npm start`

Runs the app. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Example: `npm start:dev`

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run lint`

Run linters on project code and throw warnings/errors based on defined rules.

### `npm run format`

Format code based on defined prettier rules.

## Folder structure

```
envs/
public/
src/
  App.tsx
  index.tsx
  index.scss
  assets/
  pages/
  shared/
    components/
    constants/
    context/
    hooks/
    interfaces/
    mocks/
    services/
    utils/
  theme/
.eslintrc.json
.prettierrc
CHANGELOG.md
package.json
README.md
tsconfig.json
```

- `envs/` contains env variables for each environment
- `App.tsx` main component of the project
- `index.tsx` renders the app
- `index.scss` global styles
- `assets/` contains icons, images, fonts, etc
- `pages/` contains React Components used as a view
- `shared/` contains reusable logic
- `components/` contains reusable React Components
- `constants/` contains constants values
- `context/` contains components for share global states using Context API
- `hooks/` contains reusable component state logic
- `interfaces/` contains interfaces for typescript
- `services/` contains logic to interact with external services
- `utils/` contains generic logic to use across de app

## Versioning

All changes must to be included in the `CHANGELOG.md` file, using _Semantic Versioning_ (https://semver.org/spec/v2.0.0.html)

## Code conventions

- Use PascalCase for React Components
- Use camelCase for variables, methods, filenames, etc
- Commits standard based on [this document](https://dev.to/i5han3/git-commit-message-convention-that-you-can-follow-1709)
- Use BEM for css class naming [BEM](http://getbem.com/).

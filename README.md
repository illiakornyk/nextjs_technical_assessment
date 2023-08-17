# My Next.js and TypeScript Project

This project is set up with a default Next.js project structure, enhanced with ESLint and Prettier for code quality, and organized into a clear and logical directory structure.

## Project Structure

The project is divided into two main directories: `public` and `src`.

### Public Directory

The `public` directory contains all the static files for the project, such as images.

### Src Directory

The `src` directory contains the application code and is divided into two subdirectories: `app` and `pages`.

#### App Directory

The `app` directory contains the building blocks of the application. It includes the following subdirectories:

- `components`: This directory contains all the React components used in the application.
- `hooks`: This directory contains custom React hooks.
- `lib`: This directory is reserved for any libraries or utilities you might need in the future. Even though it's currently unused, it's often a good idea to keep it for architectural completeness.
- `styles`: This directory contains all the styles for the application. The project uses CSS modules for styling, and this directory also includes some variables and mixins.
- `types`: This directory contains TypeScript type definitions.

#### Pages Directory

The `pages` directory contains all the pages of the application. It includes a `/contact-us` folder for the Contact Us page, a `/thumbnail` page, and other pages as needed.

## Libraries

This project uses several libraries to enhance its functionality:

- **React Hook Form**: This library is used for handling form state and interactions.
- **Yup**: This library is used for form validation.
- **Classnames**: This library is used for conveniently managing CSS classes based on conditions.

## Navigation

The application includes redirection to guide users through its flow. Users can visit the Thumbnail page by navigating to `/thumbnail` or by clicking on the "About" option in the header menu. Similarly, users can visit the Contact Us page by navigating to `/contact-us` or by clicking on the "Contact" option in the header menu.

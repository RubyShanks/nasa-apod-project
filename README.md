# NASA React App

This project is a React application that fetches and displays data from NASA's Astronomy Picture of the Day (APOD) API. The application is built using Vite for fast development and includes various components to display the fetched data.

## Project Structure

### Key Files and Directories

- **src/App.jsx**: The main application component that fetches data from the NASA API and manages the state.
- **src/components/Main.jsx**: Displays the main image fetched from the API.
- **src/components/SideBar.jsx**: A sidebar component that shows additional information and can be toggled.
- **src/components/Footer.jsx**: The footer component that displays project information and a toggle button.
- **src/index.css**: Contains the global styles for the application.
- **vite.config.js**: Configuration file for Vite.
- **eslint.config.js**: Configuration file for ESLint.

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd nasa-react-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your NASA API key:
    ```env
    VITE_NASA_API_KEY=your_nasa_api_key
    ```

## Scripts

- **Development**: Start the development server:
    ```sh
    npm run dev
    ```

- **Build**: Build the project for production:
    ```sh
    npm run build
    ```

- **Preview**: Preview the production build:
    ```sh
    npm run preview
    ```

- **Lint**: Run ESLint to check for code quality issues:
    ```sh
    npm run lint
    ```

## Usage

1. Start the development server:
    ```sh
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.

3. The application will fetch and display the Astronomy Picture of the Day from NASA's API.

## Components

### App

Located in [`src/App.jsx`](src/App.jsx), this component is responsible for fetching data from the NASA API and managing the state of the application.

### Main

Located in [`src/components/Main.jsx`](src/components/Main.jsx), this component displays the main image fetched from the API.

### SideBar

Located in [`src/components/SideBar.jsx`](src/components/SideBar.jsx), this component displays additional information and can be toggled on and off.

### Footer

Located in [`src/components/Footer.jsx`](src/components/Footer.jsx), this component displays project information and a toggle button.

## Styling

Global styles are defined in [`src/index.css`](src/index.css). The application uses CSS for styling components.

## License

This project is licensed under the MIT License.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Planets API - Next.js Project

This project is a web application built with [Next.js](https://nextjs.org), designed to provide information and management features for planets. It was developed as part of a frontend module, focusing on modern web development best practices.

## Technologies Used

-   **Next.js**: React framework for server-side rendering and static site generation.
-   **React**: UI library for building interactive interfaces.
-   **TypeScript**: Strongly typed JavaScript for safer and more robust code.
-   **CSS Modules**: Scoped CSS for component-level styling.
-   **Node.js**: JavaScript runtime for server-side logic.
-   **PostgreSQL** (via Pool): Database for persistent storage (see `src/database/Pool.ts`).

## Features

-   List, create, and manage planets.
-   Modular component structure (see `src/components/`).
-   API routes for backend logic (`src/app/api/planets/route.ts`).
-   Loading and error handling pages for a better user experience.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or higher recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/) or [bun](https://bun.sh/)
-   (Optional) PostgreSQL database running locally or remotely

### Installation

1. **Clone the repository:**
    ```bash
    git clone <repo-url>
    cd planets-api
    ```
2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn
    # or
    pnpm install
    # or
    bun install
    ```
3. **Configure the database:**

    - Update the database connection settings in `src/database/Pool.ts` to match your PostgreSQL setup.

4. **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

5. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

-   `src/app/` - Main application pages and API routes
-   `src/components/` - Reusable UI components
-   `src/database/` - Database connection setup
-   `src/models/` - Data models

## Useful Commands

-   `npm run dev` - Start the development server
-   `npm run build` - Build the application for production
-   `npm start` - Start the production server

## Learn More

-   [Next.js Documentation](https://nextjs.org/docs)
-   [React Documentation](https://react.dev/)
-   [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

This project is for educational purposes. Feel free to use and modify it as needed.

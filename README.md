# News Aggregator React Application

## Table of Contents
- [Introduction](#introduction)
- [Folder Structure](#folder-structure)
- [Libraries Used](#libraries-used)
- [Environment Variables](#environment-variables)
- [Docker Setup](#docker-setup)
- [Running the Application](#running-the-application)

## Introduction
This is a simple news aggregator application built with React that fetches news articles from various sources. The app includes filtering capabilities, infinite scrolling, and a responsive design using Material UI and Tailwind CSS. It is Dockerized for easy deployment.

## Folder Structure
The project structure is organized as follows:

```plaintext
news-aggregator/
├── node_modules/          
├── public/                
├── src/                   
│   ├── components/
│   ├── Article/
│   │   ├── ArticleCard.js
│   │   └── ArticleList.js
│   ├── Navbar/
│   │   ├── Filter/
│   │   │   ├── FilterContainer.js
│   │   │   └── index.js
│   ├── UserPreferences/
│   │   ├── UserPreferencesContainer.js
│   │   └── index.js
│   ├── SearchBar.js
│   └── Shared/
│       ├── CustomButton.js
│       ├── InputSelect.js
│       └── Modal.js
├── config/
│   └── config.js
├── contexts/
│   └── NewsContext.js
├── pages/
│   ├── NewsContentPage.js
│   └── StarterPage.js
│── utils/
│──  └── utils.js   
├── .env                 
├── .gitignore           
├── Dockerfile            
├── docker-compose.yml     
├── package.json          
├── README.md             
├── tailwind.config.js    
└── postcss.config.js    
```
## Key Folders
- **`components/`**: Contains reusable React components such as buttons, modals, and form elements.
- **`config/`**: Holds configuration files, including API endpoints and keys.
- **`contexts/`**: Contains React Context files used for managing global application state.
- **`pages/`**: Contains different page components, like the main news feed page.
- **`utils/`**: Contains utility functions, like date formatting and debouncing.

## Libraries Used
The application leverages several libraries for its functionality and styling:

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[Material-UI](https://mui.com/)**: A popular React UI framework for implementing Google's Material Design.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for styling the application.
- **[React Infinite Scroll Component](https://www.npmjs.com/package/react-infinite-scroll-component)**: A component to implement infinite scrolling for loading more content as the user scrolls down.
- **[Lodash Debounce](https://lodash.com/docs/4.17.15#debounce)**: A Lodash function that delays the processing of an input function until after a specified time period.

## Docker Setup
The application is Dockerized, allowing you to run it in a containerized environment.

### Dockerfile
The `Dockerfile` is located in the root of the project and is configured to:

1. Use the Node.js 16 Alpine image as the base.
2. Set the working directory to `/app`.
3. Copy `package.json` and `package-lock.json` to the working directory.
4. Install dependencies using `npm install`.
5. Copy the rest of the application files to the working directory.
6. Expose port 3000.
7. Start the app in development mode using `npm start`.

## Running the Application


### Environment Variables
Environment variables are managed in the `.env` file. Make sure to set the following variables in `.env` or you can simply rename the `.env.example` to `.env`:

```bash
REACT_APP_API_BASE_URL=https://newsapi.org/v2/everything
REACT_APP_API_KEY=your_api_key_here
```

Once you set the env variables, you just need to use the following command to run the application.

```bash
docker-compose up
```
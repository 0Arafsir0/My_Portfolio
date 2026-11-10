

# MERN Portfolio Website

A personal portfolio website built using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)**. The project showcases my profile, skills, experiences, and projects through a dynamic frontend connected to a backend API and MongoDB database.

The website also includes an admin dashboard that allows me to manage and update portfolio content without manually modifying the source code.

## Live Demo

**Frontend:** https://myportfolio-gamma-bice-79.vercel.app/

**Backend:** https://my-portfolio-26gw.onrender.com/

## Features

- **Dynamic Portfolio:** Displays personal information, introduction, skills, projects, experiences, and other portfolio content.
- **Admin Dashboard:** Manage portfolio content through an administrative interface.
- **Project Management:** Add, edit, and delete portfolio projects.
- **Experience Management:** Manage professional and academic experiences.
- **About Section Management:** Update personal descriptions and skills.
- **Database Integration:** Store and retrieve portfolio information using MongoDB.
- **REST API:** Backend API built with Express.js and Node.js.
- **Responsive Interface:** React-based frontend designed for different screen sizes.

## Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| JavaScript | Application logic |
| Tailwind CSS | Styling |
| Ant Design | UI components and forms |
| Redux Toolkit | State management |
| Axios | HTTP requests |
| Node.js | Backend runtime |
| Express.js | REST API development |
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB object modeling |
| Vercel | Frontend deployment |
| Render | Backend deployment |

## Project Structure

```text
MERN_Portfolio/
│
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── redux/
│       ├── Resources/
│       └── App.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
```

## Installation and Setup

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB Atlas account

### 1. Clone the Repository

```bash
git clone https://github.com/0Arafsir0/My_Portfolio.git
```

```bash
cd MERN_Portfolio
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

Create a `.env` file inside the server directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 3. Install Frontend Dependencies

Open another terminal:

```bash
cd client
npm install
```

Configure the frontend API base URL to point to your backend server.

For local development, use:

```text
http://localhost:5000
```

### 4. Run the Application

Start the backend:

```bash
cd server
npm start
```

Start the frontend:

```bash
cd client
npm start
```

The application should now be available at:

```text
http://localhost:3000
```

## API Overview

The backend provides REST API endpoints for managing portfolio information.

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/portfolio/get-portfolio-data` | GET | Retrieve portfolio data |
| `/api/portfolio/add-project` | POST | Add a project |
| `/api/portfolio/update-project` | POST | Update a project |
| `/api/portfolio/delete-project` | POST | Delete a project |
| `/api/portfolio/add-experience` | POST | Add experience |
| `/api/portfolio/update-experience` | POST | Update experience |
| `/api/portfolio/delete-experience` | POST | Delete experience |
| `/api/portfolio/update-about` | POST | Update about information |

## Deployment

The application is deployed using:

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

Environment variables must be configured in the deployment platform before running the application.

## Future Improvements

- Improve authentication and admin security.
- Add image upload functionality.
- Improve SEO and performance.
- Add more portfolio customization options.
- Enhance mobile responsiveness and accessibility.

## Author

**MD Arafat Siraj**

Computer Science and Engineering Student

- GitHub: https://github.com/0Arafsir0
- LinkedIn: https://www.linkedin.com/in/arafsir/

---

If you find this project useful or interesting, feel free to explore the repository.


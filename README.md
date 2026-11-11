# MD Arafat Siraj — Developer Portfolio

A dynamic personal portfolio built with the MERN stack. The React application reads portfolio content from an Express API backed by MongoDB. A protected admin dashboard manages the introduction, about section, education/experience entries, projects, courses, and contact details.

## Live application

- Frontend: https://myportfolio-gamma-bice-79.vercel.app/
- Backend: https://my-portfolio-26gw.onrender.com/

## Stack

- React 18, React Router, Redux Toolkit
- Tailwind CSS, Ant Design, Framer Motion, Lucide React
- Node.js, Express 5, Mongoose, MongoDB Atlas
- JWT authentication, bcryptjs password hashing, express-rate-limit
- Vercel (frontend) and Render (backend)

## Repository structure

```text
My_Portfolio/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       │   ├── Admin/
│       │   └── Home/
│       ├── redux/
│       ├── utils/
│       └── Resources/
├── config/                 # MongoDB connection
├── middleware/             # API authentication
├── models/                 # Mongoose schemas
├── routes/                 # Express routes
├── server.js
├── package.json
└── .env.example
```

## Local setup

### 1. Requirements

- Node.js 20 or newer
- npm
- MongoDB Atlas database or local MongoDB

### 2. Backend

From the repository root:

```bash
npm install
```

Copy `.env.example` to `.env` and configure:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=generate_a_random_secret_at_least_32_characters_long
PORT=5000
CLIENT_ORIGINS=http://localhost:3000
```

Generate a strong JWT secret rather than using the example value. Start the API:

```bash
npm run dev
```

The API starts only after MongoDB connects successfully.

### 3. Frontend

In a second terminal:

```bash
cd client
npm install
```

Copy `client/.env.example` to `client/.env`:

```env
REACT_APP_BACKEND_URL=http://localhost:5000
```

Start the React development server:

```bash
npm start
```

Open http://localhost:3000.

## Admin authentication

- Admin login: `/admin-login`
- Admin dashboard: `/admin`
- Login returns an eight-hour JWT.
- All portfolio create, update, and delete endpoints require `Authorization: Bearer <token>`.
- Admin login is rate limited.
- Existing plaintext admin passwords are upgraded to bcrypt hashes on the first successful login after this security update.

Set `JWT_SECRET` in the backend deployment environment. Set `CLIENT_ORIGINS` to the exact deployed frontend origin(s), comma-separated if needed. Do not commit `.env` files or secrets.

## Portfolio API

Public:
- `GET /api/portfolio/get-portfolio-data`

Authentication:
- `POST /api/portfolio/admin-login`
- `GET /api/portfolio/admin/me`

Protected management routes include:
- Intro and About updates
- Project create, update, and delete
- Experience create, update, and delete
- Course create, update, and delete
- Contact update

## Deployment notes

Backend environment variables on Render:
- `MONGO_URL`
- `JWT_SECRET` (minimum 32 characters; use a cryptographically random value)
- `CLIENT_ORIGINS` (the exact Vercel frontend origin)
- `PORT` (provided by Render)

Frontend environment variable on Vercel:
- `REACT_APP_BACKEND_URL` (the deployed Render API base URL)

After changing environment variables, redeploy the corresponding service. Verify login and each admin mutation before considering the release complete.

## Security notes

JWTs are currently stored in browser local storage and sent as Bearer tokens. This is a practical migration from the original client implementation, but local-storage tokens remain exposed to successful cross-site scripting. Keep dependencies updated, avoid unsafe HTML injection, and consider migrating to Secure, HttpOnly cookies with CSRF protection in a later hardening phase.

## Author

**MD Arafat Siraj**  
Computer Science and Engineering  
GitHub: https://github.com/0Arafsir0  
LinkedIn: https://www.linkedin.com/in/arafsir/

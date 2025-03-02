# Headout0

A fun quiz application where users can answer random questions, check their answers, and learn interesting fun facts!

## Tech Stack

- **Frontend**: React (Vite)
- **Backend**: Node.js (Express)
- **Database**: MongoDB

## Installation & Setup

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (latest LTS version recommended)
- **MongoDB** (for local setup)
- **npm** (comes with Node.js)

### Clone the Repository

```bash
git clone https://github.com/your-repo/headout0.git
cd headout0
```

### Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

### Setup Backend

```bash
cd backend
npm install
npm start
```

### Environment Variables

#### Backend (.env file in backend directory)

```bash
PORT=5000
DB_URI=your_mongodb_connection_string
```

#### Frontend (.env file in frontend directory)

```bash
VITE_REACT_APP_BACKEND_URL=http://localhost:5000
VITE_REACT_APP_FRONTEND_URL=http://localhost:5173
```

## API Endpoints

**Base URL**: `/`

| Method | Endpoint                                   | Description                                 |
|--------|--------------------------------------------|---------------------------------------------|
| GET    | `/api/product/random-question-and-clues`   | Get a random question with clues            |
| GET    | `/api/product/check-answer-and-share-fun-facts` | Check the answer and get fun facts          |
| POST   | `/api/user/create-user-session`            | Create a new user session                   |
| GET    | `/api/user/score`                          | Get user score                              |

## Deployment

If deploying on **Vercel/Netlify** (Frontend) and **Render/Heroku** (Backend), update the `VITE_REACT_APP_BACKEND_URL` to the deployed API URL.

Ensure MongoDB is connected (via MongoDB Atlas or another cloud provider).

## Notes

- If running locally, make sure MongoDB is up and running.
- Use `npm run build` in the frontend for production.

Enjoy the quiz! 🎉

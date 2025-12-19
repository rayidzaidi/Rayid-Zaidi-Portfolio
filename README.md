# Premium Full-Stack Portfolio

A futuristic, minimal portfolio website built with Next.js, Three.js, and MongoDB.

## Features

- **Global 3D Background**: Interactive particle trail using Three.js and React Three Fiber.
- **Minimal Aesthetic**: Dark mode, premium typography, and subtle animations.
- **Admin Dashboard**: Protected route to view contact form submissions.
- **Feedback System**: Public contact form storing messages in MongoDB.
- **Authentication**: JWT-based secure admin login.

## Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion.
- **3D**: Three.js, @react-three/fiber, @react-three/drei.
- **Backend**: Next.js API Routes.
- **Database**: MongoDB Atlas.
- **Auth**: JWT (JSON Web Tokens).

## Setup Instructions

### 1. Clone & Install

```bash
git clone <repository-url>
cd portfolio-backend
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/portfolio?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_here
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=secure_password_123
NEXT_PUBLIC_URL=http://localhost:3000
```

### 3. MongoDB Atlas Setup (Free Tier)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up.
2. Create a new Project and build a **Shared Cluster** (FREE).
3. Create a database user (Username/Password) in **Database Access**.
4. Allow access from anywhere (0.0.0.0/0) in **Network Access**.
5. Click **Connect** > **Drivers** and copy the connection string.
6. Replace `<password>` in the string with your user password and paste it into `MONGODB_URI`.

### 4. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment on Vercel

1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com) and import the project.
3. In the **Environment Variables** section, add all variables from `.env.local`.
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`
   - `NEXT_PUBLIC_URL` (Set to your Vercel domain, e.g., `https://your-project.vercel.app`)
4. Click **Deploy**.

## Admin Access

1. Navigate to `/login`.
2. Enter the credentials defined in your environment variables (`ADMIN_EMAIL`, `ADMIN_PASSWORD`).
3. You will be redirected to `/admin` to view feedback.

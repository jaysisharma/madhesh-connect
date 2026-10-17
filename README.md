# Madhesh Connect

A modern web application built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Firebase (Web SDK v12)**.

---

## 🚀 Getting Started

### 1. Environment Configuration

Copy the example environment variables file and fill in your Firebase credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your Firebase project credentials from the [Firebase Console](https://console.firebase.google.com/):

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Project Structure

```
├── firebase.json              # Firebase services configuration
├── firestore.rules            # Cloud Firestore security rules
├── firestore.indexes.json     # Firestore index definitions
├── storage.rules              # Firebase Storage security rules
├── .env.example               # Template for environment variables
├── .env.local                 # Local environment variables (git-ignored)
└── src/
    ├── app/
    │   ├── layout.tsx         # Root layout
    │   ├── page.tsx           # Landing page with setup status
    │   └── globals.css        # Global Tailwind CSS styles
    ├── context/
    │   └── AuthContext.tsx    # Firebase Auth provider & useAuth hook
    └── lib/
        └── firebase.ts        # Firebase Client SDK initialization
```

---

## 📦 Using Firebase

### Client-side Firebase Services

Import initialized Firebase instances from `@/lib/firebase`:

```tsx
import { auth, db, storage } from "@/lib/firebase";
```

### Authentication Context

Wrap client components or layouts with `AuthProvider` and use the `useAuth` hook:

```tsx
"use client";

import { useAuth } from "@/context/AuthContext";

export function UserProfile() {
  const { user, loading, signOut } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Please log in</div>;

  return (
    <div>
      <p>Signed in as: {user.email}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
```

---

## 📜 Available Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the Next.js production server.
- `npm run lint`: Runs ESLint checks.

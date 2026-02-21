# Bookmark Vault — Supabase + Next.js Bookmarking App

## Overview

Bookmark Vault is a secure, realtime bookmarking application built using Next.js and Supabase. It allows authenticated users to create, view, and delete bookmarks with instant UI updates powered by Supabase Realtime.

This project demonstrates modern full-stack architecture using Supabase as a Backend-as-a-Service (BaaS), including authentication, database security with Row Level Security (RLS), and realtime subscriptions.

---

## Tech Stack

* Next.js 15 (App Router)
* Supabase (Authentication, PostgreSQL, Realtime)
* Tailwind CSS
* TypeScript
* Server Actions (Next.js)
* Row Level Security (RLS)

---

## Features

* Google OAuth authentication using Supabase Auth
* Secure bookmark creation, viewing, and deletion
* Realtime UI updates without page refresh
* Fully protected database using Row Level Security
* Server-side authentication and protected routes
* Clean, responsive SaaS-style UI

---

## Database Security (Row Level Security)

To ensure users can only access their own bookmarks, RLS policies were implemented for:

* SELECT — users can only view their own bookmarks
* INSERT — users can only insert bookmarks tied to their account
* UPDATE — users can only update their own bookmarks
* DELETE — users can only delete their own bookmarks

This ensures full database-level security.

---

## Realtime Functionality

The application uses Supabase Realtime to listen for database changes and update the UI instantly when bookmarks are created or deleted.

This was implemented using Supabase's `postgres_changes` realtime subscriptions in a client component.

---

## Challenges Faced and Solutions

### 1. Understanding and implementing Row Level Security (RLS)

**Problem:**
Initially, inserting bookmarks resulted in errors due to RLS blocking database operations.

**Solution:**
I learned how Supabase RLS policies work and implemented proper policies using `auth.uid()` to ensure users could only access their own records.

---

### 2. Supabase Realtime integration

**Problem:**
Realtime functionality was completely new to me, and initially INSERT events were not triggering even though DELETE events worked.

**Solution:**
I learned about Supabase realtime publications, REPLICA IDENTITY settings, and how realtime subscriptions interact with RLS. After properly configuring realtime and ensuring correct policies and subscriptions, realtime updates worked correctly.

This helped me understand how realtime databases work in production environments.

---

### 3. Client and Server Component architecture in Next.js

**Problem:**
Realtime subscriptions do not work inside Server Components.

**Solution:**
I refactored the architecture by separating the Server Component (for authentication and initial data fetch) and Client Component (for realtime subscriptions and state updates).

This follows modern Next.js best practices.

---

### 4. Supabase authentication and session handling

**Problem:**
Handling authentication securely with server-side rendering and maintaining session persistence required understanding Supabase SSR helpers.

**Solution:**
I used Supabase's SSR client with Next.js cookies to ensure proper authentication handling.

---

## Learning Experience

Supabase Realtime was a new concept for me, and implementing it helped me understand how modern realtime systems work, including database publications, subscriptions, and secure data access.

During development, I used official documentation, experimentation, and ChatGPT as a learning aid to understand Supabase Realtime behavior, RLS policies, and Next.js architecture patterns. This helped accelerate debugging and ensured best practices were followed.

---

## Project Structure

```
app/
components/
hooks/
actions/
supabase/
```

---

## How to Run Locally

1. Clone the repository

```
git clone https://github.com/hey-virender/abstrabit-assignment
```

2. Install dependencies

```
npm install
```

3. Create `.env.local`

```
NEXT_PUBLIC_SUPABASE_URL="your_url"
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY="your_publishable_key"
NEXT_PUBLIC_SITE_URL=http://localhost:3000 or hosted url
```

4. Run the development server

```
npm run dev
```

---

## Conclusion

This project helped me gain practical experience with:

* Supabase authentication
* Row Level Security
* Realtime database subscriptions
* Modern Next.js full-stack architecture

It demonstrates my ability to build secure, scalable, and modern web applications using industry-standard tools.

---

## Author

Virender Chauhan

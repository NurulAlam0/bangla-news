# Bangla News 24

A responsive news web application for reading the latest Bangla news. The homepage features top stories, news sections, most-read articles, and a scrolling latest-headlines ticker. Readers can browse articles, create an account, and sign in with email and password or with Google and GitHub.

## Features

- Bangla news headlines and categorized articles
- Scrolling ticker for the latest headlines
- Most-read news list
- Category pages and individual article pages
- Sign-up and sign-in with email and password, Google, or GitHub
- User profiles with profile editing
- Authentication powered by Better Auth and MongoDB
- Responsive UI built with Tailwind CSS and DaisyUI

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/) and TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/) and [DaisyUI 5](https://daisyui.com/)
- [Better Auth](https://www.better-auth.com/) and MongoDB
- News data from [news-api-v2.vercel.app](https://news-api-v2.vercel.app/)

## Prerequisites

- Node.js 20.9 or later
- npm
- A MongoDB connection URI (local MongoDB or MongoDB Atlas)
- Google and GitHub OAuth credentials (to enable social sign-in)

## Getting Started

1. Clone the repository and move into the project directory.

   ```bash
   git clone <repository-url>
   cd "Bangla News 24"
   ```

2. Install dependencies.

   ```bash
   npm ci
   ```

3. Create a `.env` file in the project root and set the following environment variables.

   ```dotenv
   BETTER_AUTH_SECRET=replace-with-a-long-random-secret
   BETTER_AUTH_URL=http://localhost:3000
   MONGODB_URL=mongodb://127.0.0.1:27017
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   ```

   - `BETTER_AUTH_SECRET`: A secret used by Better Auth to secure sessions and tokens.
   - `BETTER_AUTH_URL`: The application's base URL. Use `http://localhost:3000` for local development.
   - `MONGODB_URL`: The MongoDB server connection URI. The application uses the `bangla-news-24` database.
   - `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`: Credentials for your Google OAuth application.
   - `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET`: Credentials for your GitHub OAuth application.

   Add these callback URLs to the corresponding Google and GitHub OAuth applications:

   - Google: `http://localhost:3000/api/auth/callback/google`
   - GitHub: `http://localhost:3000/api/auth/callback/github`

   For production, update `BETTER_AUTH_URL` and the OAuth callback URLs to use your production domain. Keep real credentials in `.env` and do not commit them to source control.

4. Start the development server.

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run start` | Runs the production build |
| `npm run lint` | Runs ESLint |

To verify and run a production build locally:

```bash
npm run build
npm run start
```

## Main Routes

| Path | Description |
| --- | --- |
| `/` | Top stories, news sections, and most-read articles |
| `/category/[categoryId]` | Articles in a specific category |
| `/news/[newsId]` | A news article |
| `/signin` | Sign-in page |
| `/signup` | Account registration page |
| `/profile` | Profile for the signed-in user |
| `/api/auth/[...all]` | Better Auth authentication endpoint |

News and category data are fetched from the external `news-api-v2.vercel.app` API. An active internet connection and an available API are required to load news.

## Project Structure

```text
src/
├── app/          # App Router pages, layouts, and authentication API route
├── components/   # Header, news cards, ticker, and account UI
├── lib/          # Better Auth server and client configuration
└── proxy.ts      # Session checks for profile and news routes
public/           # Logo and static assets
```

## Troubleshooting

- **Authentication or database connection fails:** Check `MONGODB_URL`, `BETTER_AUTH_SECRET`, and `BETTER_AUTH_URL` in `.env`, and confirm that the MongoDB server is reachable.
- **Google or GitHub sign-in fails:** Verify the OAuth credentials and callback URLs in the corresponding provider console.
- **News does not load:** Check your internet connection and confirm that the news API is available.

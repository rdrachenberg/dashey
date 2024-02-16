# 🐰 [Dashey Deployed Here](https://dashey.vercel.app/) 🐰

## Prerequisites 
1. Must have [Node.js](https://nodejs.org) installed on your computer (18)
2. A good code editor, preferably [VSCode](https://code.visualstudio.com)
3. Github account at [github.com](https://github.com) 


### 📚 Tech Used 📚

- [Nextjs 14](https://nextjs.org)
- [Railway (Postgres database)](https://railway.app/new)
- [Github (to create OAuth app)](https://github.com/settings/applications/new)
- [Prisma (ORM)](https://prisma.io)
- [Tremor (charts/graphs)](https://tremor.so)
- [TailwindCSS (styles)](https://tailwindcss.com)
- [Avvvatars (fallback avatar)](https://avvvatars.com/)
- [Next Auth (user auth)](https://authjs.dev)

## Getting Started

```bash
git clone https://github.com/rdrachenberg/dashey.git && cd dashey

npm install

```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Make a .env file in projects root directory

```bash
touch .env
``` 


### You will need a .env file that looks like this
```evn
# Create free Postgres db: https://railway.app/new
DATABASE_URL="RAILWAY APP POSTGRES DATABASE_URL"

NEXTAUTH_URL=http://localhost:3000
# Generate in terminal with command `openssl rand -hex 64`
NEXTAUTH_SECRET="YOUR RANDOM SECRET"

# Create Github app: https://github.com/settings/applications/new
# Set callback url to http://localhost:3000/api/auth/callback/github
GITHUB_CLIENT_ID="YOUR GITHUB CLIENT ID"
GITHUB_CLIENT_SECRET="YOUR GITHUB CLIENT SECRET"
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 🧠 Learn More 🧠
Vercel Deployment: https://dashey.vercel.app/ <br>  
Inspired by: https://github.com/vercel/nextjs-postgres-nextauth-tailwindcss-template

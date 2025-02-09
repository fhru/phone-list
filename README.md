This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Database Configuration

This project uses **Prisma** with **Neon Tech** as the database provider. Before running the application, you need to set up your database connection.

### 1️⃣ Create a `.env` File

Inside the root directory of your project, create a `.env` file and add the following:

```ini
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=require"
```

Replace the values accordingly:
- `USER` → Your database username
- `PASSWORD` → Your database password
- `HOST` → Your Neon database host
- `PORT` → Your database port (default: `5432`)
- `DATABASE` → Your database name

Example:
```ini
DATABASE_URL="postgresql://myuser:mypassword@ep-silent-water-123456.us-east-2.aws.neon.tech/neondb?sslmode=require"
```

### 2️⃣ Run Database Migrations

Once the `.env` file is set up, run the following command to apply database migrations:

```bash
npx prisma migrate dev --name init
```

This will create the necessary database schema.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Prisma Documentation](https://www.prisma.io/docs) - learn how to use Prisma ORM.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Schoenwetter & Sons Manufacturing Dashboard

This repository contains a basic Next.js dashboard that can be connected to your Supabase instance to visualize manufacturing metrics.

## Getting Started

1. Install Node.js 18 and npm.
2. From the `dashboard-app` folder run `npm install` to install dependencies.
3. Create a `.env.local` file in `dashboard-app` with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_KEY=your-supabase-key
```

4. Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Deployment

- The app is ready to be deployed to Vercel. Create the environment variables in Vercel and connect this repository.
- A sample GitHub Actions workflow can be created under `.github/workflows` to automate deployment.

## Additional Tasks

- Set up the database schema described in `MANUFACTURING_DASHBOARD_GUIDE.md` on your Supabase project.
- Implement the `parseProductionCSV` function in `dashboard-app/lib/odyssey-connector.js` to import your production data.
- Customize KPI calculations and charts according to your metrics.

For a detailed step-by-step guide, see [MANUFACTURING_DASHBOARD_GUIDE.md](./MANUFACTURING_DASHBOARD_GUIDE.md).

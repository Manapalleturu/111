# Startup Cart — GitHub Pages + Supabase

## GitHub upload structure

Upload the **contents of this folder** to the root of your GitHub repository.

- Customer site: `/`
- Admin site: `/admin/login.html`
- Supabase config: `config.js` and `supabase-client.js`
- Supabase SQL: `supabase/schema.sql`
- Edge Function: `supabase/functions/import-product/index.ts`

Do not open HTML with `file://`. The site is intended to run from GitHub Pages.

## Supabase
1. Run `supabase/schema.sql` in Supabase SQL Editor.
2. Create the admin user in Supabase Authentication.
3. Make sure that user's `public.profiles.role` is `admin`.
4. Deploy the `import-product` Edge Function using the Supabase CLI or dashboard.
5. Add the GitHub Pages URL under Authentication > URL Configuration.

## GitHub Pages
Set Pages to deploy from `main` and `/(root)`.

Admin login:
`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/admin/login.html`

Customer:
`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`

Never put a Supabase service-role/secret key in `config.js`.

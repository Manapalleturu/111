# STARTUP CART — GitHub Pages + Supabase

This version is designed specifically for:
- Customer website on GitHub Pages
- Admin website on GitHub Pages
- Supabase Database + Auth + Storage + Edge Function backend
- Approved startup source websites only
- Admin review before publishing
- Configurable ₹5 / ₹10 / custom markup
- Customer-visible Startup Cart price only
- Delivery buffer setting
- QR payment flow: QR preview is blurred; downloading reveals a clear QR image
- Customer enters transaction/reference ID; admin verifies it before approving the order
- Razorpay can be integrated later without rebuilding the storefront

## Folder structure

customer/        Customer storefront
admin/           Admin dashboard
shared/          Supabase client + shared configuration
supabase/        Database SQL + Edge Function
assets/          Optional local assets

## IMPORTANT: GitHub Pages cannot run backend code

Do NOT try to run PHP on GitHub Pages.

The backend in this project is a Supabase Edge Function:
supabase/functions/import-product/index.ts

The Edge Function handles the product import request and checks that the source domain is approved by the admin.

## Setup

1. Create a Supabase project.
2. In Supabase SQL Editor, run `supabase/schema.sql`.
3. Create an admin user in Supabase Authentication.
4. In SQL Editor, replace YOUR_ADMIN_USER_ID and run the admin role update shown at the bottom of schema.sql.
5. Deploy the Edge Function:
   supabase functions deploy import-product
6. Add your Supabase URL and anon/publishable key in `shared/config.js`.
7. Set your UPI ID in `shared/config.js`.
8. Put the repository on GitHub and enable GitHub Pages.
9. If using GitHub Pages from a project repository, set the Pages source to GitHub Actions or the branch/folder containing these static files. You may put customer files at the site root if desired; this package keeps them separated for clarity.

## Approved startup sources

Admin -> Source Websites -> Add domain.

Example:
startupbrand.com

Then the Import Product screen will only accept product URLs from approved domains.

## QR payment workflow in this MVP

1. Customer places an order.
2. Customer sees the final Startup Cart amount.
3. QR preview is intentionally blurred.
4. Customer clicks Download Payment QR.
5. The downloaded QR is clear.
6. Customer makes the payment according to your business process.
7. Customer enters the UPI transaction/reference ID.
8. Order is stored as payment_pending.
9. Admin verifies the transaction manually.
10. Admin clicks Approve Payment.
11. Order moves to confirmed.

IMPORTANT: A transaction/reference ID is not proof by itself. For production, manually verify the payment in your bank/UPI account until a payment gateway/webhook is integrated.

## Later Razorpay

Replace the manual payment verification layer with Razorpay Orders + Checkout + webhook verification. The customer and admin UI can remain largely the same.

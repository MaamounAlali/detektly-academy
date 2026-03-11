# Deploy Detektly Academy to GitHub Pages

## Current setup

- Git is initialized; default branch is `main`.
- Workflow: `.github/workflows/deploy.yml` builds the Eleventy site and deploys it when you push to `main`.

---

## 1. Push to GitHub

### First commit (run in a normal terminal, not inside Cursor)

```powershell
cd "f:\local-projects\detektly-academy"
git add -A
git commit -m "Initial commit Detektly Academy for GitHub Pages"
```

### Create the repository on GitHub

1. Go to [github.com/new](https://github.com/new).
2. Repository name: e.g. `detektly-academy`.
3. Choose **Public**.
4. Do **not** add README, .gitignore, or license.
5. Click **Create repository**.

### Link and push

Replace `YOUR_USERNAME` and `REPO_NAME` with your GitHub username and repo name:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

### Enable GitHub Pages

1. In the repo: **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. After the first successful push, the workflow will build and deploy the site.
4. Default URL: `https://YOUR_USERNAME.github.io/REPO_NAME/`

---

## 2. Custom domain (e.g. academy.detektly.com)

### On GitHub

1. **Settings** → **Pages** → **Custom domain**.
2. Enter `academy.detektly.com` (no `https://` or `www`).
3. Click **Save**.

### At your DNS provider

Add a **CNAME** record:

| Type  | Name / Host | Value / Target           |
| ----- | ----------- | ------------------------ |
| CNAME | `academy`   | `maamounalali.github.io` |

- **Name:** `academy` (or `academy.detektly.com` if your provider requires the full name).
- **Value:** exactly `maamounalali.github.io` (lowercase, no `https://`).

DNS changes can take from a few minutes up to 24 hours. If GitHub shows "DNS check unsuccessful", wait and use **Check again**, or use Cloudflare (see below).

### Verify DNS (PowerShell)

```powershell
Resolve-DnsName academy.detektly.com -Type CNAME
```

You should see the target `maamounalali.github.io`.

---

## 3. Using Cloudflare (recommended if DNS check keeps failing)

Using Cloudflare for DNS often fixes "DNS check unsuccessful" and gives faster, more reliable DNS.

### Add the domain in Cloudflare

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Add a site**.
2. Enter **detektly.com** (the root domain, not only the subdomain).
3. Select the **Free** plan and continue until you see the current DNS records (Cloudflare may import them).

### Add or edit the academy record in Cloudflare

1. In the dashboard: **DNS** → **Records**.
2. Remove any existing record for `academy` if it points elsewhere.
3. Add a new record:
   - **Type:** CNAME
   - **Name:** `academy`
   - **Target:** `maamounalali.github.io`
   - **Proxy status:** **Proxied** (orange cloud) for CDN and HTTPS, or **DNS only** (grey) if you only want DNS.

### Point the domain to Cloudflare

1. In your registrar (e.g. Namecheap): **Domain List** → **detektly.com** → **Manage** → **Nameservers**.
2. Choose **Custom DNS** and enter the nameservers provided by Cloudflare (e.g. `xxx.ns.cloudflare.com` and `yyy.ns.cloudflare.com`).
3. Save. Propagation can take from a few minutes to a few hours.

### SSL (if using Proxied)

1. In Cloudflare: **SSL/TLS**.
2. Set the mode to **Full** or **Full (strict)**. Avoid **Flexible** with GitHub Pages to prevent redirect loops.

### Re-check on GitHub

After DNS has propagated, in GitHub **Settings** → **Pages** → **Custom domain**: click **Remove**, wait a minute, then enter `academy.detektly.com` again and click **Save** or **Check again**.

---

## 4. Updating the site

After making changes:

```powershell
git add -A
git commit -m "Describe your changes"
git push origin main
```

GitHub Actions will build and deploy the site automatically.

---

## Quick reference

| Item             | Value                    |
| ---------------- | ------------------------ |
| Build command    | `npm run build`          |
| Output directory | `_site`                  |
| Custom subdomain | `academy.detektly.com`   |
| CNAME target     | `maamounalali.github.io` |

# 1444 NORTH CAROLINA Real Estate Landing Page

A modern, single-page real estate marketing site for 1444 NORTH CAROLINA AVE, LANCASTER, TX 75134. Built with React, styled for clarity and trust, and deployed via GitHub Pages.

---

## Features

- **Branding:** Prominent display of the 1444 N CAROLINA logo.
- **Lead Collection:** Simple, required form (Full Name, Email, Phone) powered by EmailJS. Submits leads to 1444northcarolina@houselotandland.org.
- **Redirection:** After form submission, users are redirected to a property tour or thank you page.
- **Design:** Professional, modern, and responsive. Clean typography, minimal color palette.
- **Hosting:** Free static hosting via GitHub Pages.

---

## Tech Stack

- React (Vite or Create React App)
- EmailJS (client-side email delivery)
- CSS (no frameworks required)

---

## File Structure

```
public/
  index.html         # Root HTML file
  logo.png           # Branding logo
src/
  App.js             # Main React component
  components/
    LeadForm.js      # EmailJS-powered form
  styles/
    main.css         # Styling
package.json         # With GitHub Pages deploy scripts
```

---

## Deployment

1. Set the `homepage` field in `package.json` to the GitHub Pages URL:  
   `https://smhabdulaziz.github.io/1444NORTHCAROLINA/`
2. Use the `gh-pages` npm package for deployment.
3. Deploy with:
   ```sh
   npm run deploy
   ```


---

## Notable URLs

- **Live Site:** https://smhabdulaziz.github.io/1444NORTHCAROLINA/
- **Property Tour:** https://www.propertypanorama.com/instaview/ntreis/20970679#tour
- **GitHub Repo:** https://github.com/SMHAbdulAziz/1444NORTHCAROLINA

---

## Credits

Project structure, content, and deployment by Harvey Searcy for House Lot & Land Sales Co. LLC.

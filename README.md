# Yirui Hu - Portfolio Website

A professional portfolio website showcasing transportation planning projects, research experience, and GIS expertise.

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Homepage
├── aboutme.html        # About Me page with education and skills
├── projects.html       # Projects and research showcase
├── contact.html        # Contact page with form
├── css/
│   └── styles.css      # Custom styling
├── js/
│   └── script.js       # Interactive features
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Open Locally
1. Navigate to the `portfolio-website` folder
2. Double-click `index.html` to open in your browser
3. All pages are fully functional offline!

### Option 2: Use a Local Server (Recommended)
Using a local server provides the best experience:

**Using Python:**
```bash
cd /Volumes/Tdrive/application/portfolio-website
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser

**Using Node.js (if you have it installed):**
```bash
npx http-server
```

## 🌐 Deploying Your Website

### GitHub Pages (Free & Easy)
1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify (Recommended - Free)
1. Go to [netlify.com](https://www.netlify.com)
2. Drag and drop the `portfolio-website` folder
3. Your site will be live instantly with a custom URL
4. Optional: Connect your custom domain

### Other Options
- **Vercel**: Similar to Netlify, free tier available
- **GitHub Pages**: Free hosting for static sites
- **AWS S3 + CloudFront**: Professional option with CDN

## ✨ Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern gradient color scheme
- ✅ Smooth animations and transitions
- ✅ Contact form with validation
- ✅ Professional project showcase
- ✅ Skills and education sections
- ✅ Social media integration
- ✅ Bootstrap 5 framework
- ✅ Font Awesome icons
- ✅ Cross-browser compatible

## 🎨 Customization

### Update Your Information

**Contact Information** (in all HTML files, footer section):
- Email: Change `yhu691@gatech.edu`
- Phone: Change `+1-404-452-6322`
- LinkedIn: Update the LinkedIn URL
- GitHub: Update the GitHub URL

### Change Colors
Edit `css/styles.css` and modify the CSS variables:
```css
:root {
    --primary-color: #2c5aa0;     /* Main blue color */
    --secondary-color: #1e3a5f;   /* Dark blue */
    --accent-color: #4a90e2;      /* Light blue accent */
}
```

### Add Your Photo
1. Add your photo to a new `images/` folder
2. Update the relevant HTML sections
3. Example:
   ```html
   <img src="images/profile.jpg" alt="Yirui Hu" class="profile-img">
   ```

### Update Content
- **About Me**: Edit `aboutme.html`
- **Projects**: Edit `projects.html`
- **Skills**: Edit the skills section in `aboutme.html`
- **Career Goals**: Edit the career goals section in `aboutme.html`

## 📧 Contact Form Setup

The contact form currently uses a `mailto:` link as a fallback. For a production website, consider integrating:

### Option 1: Formspree (Easy, Free Tier)
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form action in `contact.html`:
   ```html
   <form action="https://formspree.io/f/your-form-id" method="POST">
   ```

### Option 2: EmailJS (Free Tier Available)
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Follow their integration guide
3. Update `js/script.js` with EmailJS code

### Option 3: Netlify Forms
If using Netlify, simply add `netlify` attribute to your form:
```html
<form name="contact" netlify>
```

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📱 Mobile Responsive

The website is fully responsive and optimized for:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1440px+)

## 🚀 Performance Tips

1. **Optimize images**: Use compressed images (JPG for photos, PNG for graphics)
2. **Add favicon**: Create and add `favicon.ico` to root folder
3. **Enable caching**: Configure caching headers when deploying
4. **Use CDN**: Consider using CDN for Bootstrap and Font Awesome (already implemented)

## 📝 To-Do for Production

- [ ] Add your professional photo
- [ ] Replace placeholder GitHub URL with actual
- [ ] Set up contact form backend (Formspree/EmailJS)
- [ ] Add Google Analytics (optional)
- [ ] Create custom domain (optional)
- [ ] Add meta tags for SEO
- [ ] Create sitemap.xml
- [ ] Add Open Graph tags for social sharing
- [ ] Test on all major browsers
- [ ] Optimize images if added
- [ ] Add favicon

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with gradients, animations
- **Bootstrap 5**: Responsive framework
- **JavaScript (Vanilla)**: Interactive features
- **Font Awesome 6**: Icons
- **Google Fonts**: Typography (optional to add)

## 📄 License

This project is open source and available for personal use.

## 🤝 Support

If you have questions or need help:
- Email: yhu691@gatech.edu
- LinkedIn: [Yirui (Shirley) Hu](https://www.linkedin.com/in/yirui-shirley-hu/)

## 🎓 Credits

Created for Yirui (Shirley) Hu
Transportation Planner & GIS Specialist
Georgia Institute of Technology

---

**Last Updated**: December 2024
**Version**: 1.0.0

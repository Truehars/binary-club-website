# Binary Club Website

This is the official website for Binary Club, a community of coding enthusiasts, developers, and tech innovators at RKGIT Ghaziabad. The website showcases the activities, events, team members, and other information related to Binary Club.

## Features

- Responsive design that works on all devices (desktop, tablet, mobile)
- Modern and clean UI with smooth animations and transitions
- Dynamic hero section with slideshow and feature highlights
- Comprehensive sections for About, Events, Team, Gallery, and Contact
- Interactive contact form for inquiries
- Membership application form with different membership options
- Newsletter subscription in the footer
- Social media integration with:
  - Facebook feed from RKGIT's official page
  - Instagram link to @thebinary.club
  - LinkedIn profile at /binaryclub
  - Coordinator's message with faculty information

## Technologies Used

- HTML5
- CSS3 (with CSS variables, flexbox/grid layouts, and advanced animations)
- JavaScript (vanilla JS, no frameworks)
- Font Awesome for icons
- Google Fonts (Poppins)
- Facebook API for social feed integration
- Node.js for local development server

## File Structure

```
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   ├── script.js           # Main JavaScript functionality
│   └── auth.js             # Authentication functionality
├── images/                 # Directory for all images
│   ├── binary-logo.jpg     # Binary Club logo
│   ├── rkgitLogo.png       # RKGIT logo
│   ├── facultyImage.png    # Faculty coordinator image
│   ├── crasual1.jpeg       # Slideshow images
│   ├── crasual2.jpeg
│   ├── crasual3.jpeg
│   ├── crasual4.jpeg
│   └── ...                 # Other images
├── signin.html             # Sign in page
├── signup.html             # Sign up page
├── server.js               # Local development server
└── README.md               # This file
```

## Setup and Usage

1. Clone or download this repository
2. Install dependencies (if running the server):
   ```
   npm install
   ```
3. Run the local development server:
   ```
   node server.js
   ```
4. Open your browser and navigate to `http://localhost:3000/`

## Customization

- **Colors**: Edit the CSS variables in the `:root` selector in `style.css`
- **Content**: Update text and images in `index.html`
- **Images**: Replace the images in the `images` directory with your own
- **Social Media**: Update the social media links and Facebook page integration in the footer

## Social Media Integration

The website includes integration with various social media platforms:

1. **Facebook**: 
   - Embedded timeline feed from RKGIT's official Facebook page
   - Located in the footer section
   - Real-time updates directly from the Facebook page

2. **Instagram**:
   - Link to the club's Instagram profile (@thebinary.club)
   - Social icon with Instagram's brand color

3. **LinkedIn**:
   - Link to the club's LinkedIn profile (/binaryclub)
   - Social icon with LinkedIn's brand color

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Developed for Binary Club at RKGIT Ghaziabad
- Icons by [Font Awesome](https://fontawesome.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Facebook integration via Facebook Page Plugin

## Contact

For any inquiries or issues, please contact:
- Email: contact@binaryclub.org 
- Visit: [Binary Club](#) (link to be updated)
- Social Media: Links available in the website footer 
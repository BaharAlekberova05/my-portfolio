<h1 align="center">
   Bahar Alekberova
</h1>

![Banner](/public/portfolio.png)

---

# Documentation in English

This is a professional portfolio developed with modern technologies to showcase my skills, projects, and experience as a full stack developer. The website features an interactive interface with fluid animations, dynamic code display, and responsive design.

## Key Features

- **Responsive Design**: Adapted for all devices, from smartphones to desktops
- **Interactive Animations**: Using GSAP and Framer Motion for transitions and visual effects
- **Dynamic Code Display**: Code visualization with syntax highlighting and typing effect
- **Featured Technologies**: Display of mastered technologies with category filtering
- **Reviews**: Section showing feedback from clients and colleagues
- **Contact Form**: Integration for direct communication

## Technologies Used

- **Next.js**: React framework with server-side rendering
- **TypeScript**: Static typing for safer and more maintainable code
- **Tailwind CSS**: Rapid and responsive styling with utility classes
- **GSAP**: Advanced animation library for visual effects
- **Framer Motion**: React component animations
- **React Icons**: Icon set for modern interfaces
- **ClientOnly**: Component for exclusive client-side rendering (hydration issue resolution)

## Available Routes

- **/** : Home page with introduction and skills demonstration
- **/projects**: Portfolio of completed projects
- **/contact**: Contact form and connection information

## Setup and Configuration

### Configuring GitHub Integration

To display your GitHub projects and contribution charts, configure the following environment variables:

1. **Create a GitHub Token (required to avoid rate limiting)**:

   - Go to [GitHub Settings > Tokens](https://github.com/settings/tokens)
   - Click "Generate new token" → "Generate new token (classic)"
   - Give it a name like "Portfolio Projects API"
   - Select only these permissions: `public_repo` and `read:user`
   - Click "Generate token" and copy the generated value

2. **Configure environment variables**:

   ```bash
   # Copy the example file
   cp .env.example .env.local

   # Edit .env.local with your information:
   GITHUB_TOKEN=your_token_here
   NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
   NEXT_PUBLIC_PORTFOLIO_TAG=portfolio-project
   ```

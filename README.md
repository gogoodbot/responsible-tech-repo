# Responsible Tech Repo

This repo contains both the frontend and backend portions of Goodbot's **Responsible Tech Repo** application.

## Features

- Next.js Framework: Leveraging the capabilities of Next.js for server-side rendering and static site generation.
- Shadcn Component Library: Utilizes Radix UI for building accessible design systems.
- Supabase Integration: Implements Supabase for scalable back-end services.
- Responsive Design: Tailwind CSS is used for styling, ensuring a responsive and customizable UI.
- Data Handling and Validation: Implemented react-hook-form and zod for form handling and data validation.

## Getting Started

### Installation and Usage

### Clone the Repository  
`git clone https://github.com/gogoodbot/responsible-tech-repo.git`

### Install Dependencies    
Navigate to the project directory and run:  
`npm install`

### Set up local .env file
Create a local `.env` file based on the provided `.env.example` file

#### Initial hCaptcha Setup
- [Sign Up](https://dashboard.hcaptcha.com/signup) for new Basic (Free) User account
  - Make a note of the `Sitekey` provided
  - Generate a `Secret Key` and make a note of it
- Select `Add Site`, and enter details:  
  - Name: `Goodbot Responsible Tech Repo`
  - Domains:  
    - `goodbot-beta.vercel.app`
    - `http://responsibletechrepo.com`
    - `http://responsibletechrepo.org`
  - hCaptcha Behaviour:
    - Mode: `Always Challenge`
    - Passing Threshold: `Auto`

### Development
Start the development server:  
`npm run dev`

### hCaptcha Local Development
- To use hCaptcha in local development, amend the local file system `hosts` file as directed in the [Developer Guide](https://docs.hcaptcha.com/#local-development)  
- Start the hCaptcha development server:
`npm run captcha`  
- The site will be served at [http://test.mydomain.com:9000](http://test.mydomain.com:9000)

### Dependencies  
- Radix UI components for accessible design systems.
- Supabase for backend-as-a-service.
- Tailwind CSS for utility-first styling.
- React and Next.js for building user interfaces.
- Various other dependencies for date handling, animations, and data manipulation.
- [EmailJS](https://www.emailjs.com) for user feedback form.
- [hCaptcha](https://www.hcaptcha.com) for spam protection.

### Development Dependencies  
- Tailwind CSS and PostCSS for advanced styling.
- ESLint for code quality and standardization.

## Misc

### Branding > Colour Guide

Policy: Blue  
hex: #0aa0f5  
gradient: color(display-p3 0.0392 0.6275 0.9608)  

Organization: Purple  
hex: #7f0af5  
gradient: color(display-p3 0.498 0.0392 0.9608)  

Stakeholder: Pink  
hex: #f50ad6  
gradient: color(display-p3 0.9608 0.0392 0.8392)  

Litigation: Red  
hex: #f73b6a  
gradient: color(display-p3 0.9686 0.2314 0.4157)  

Resource: Yellow  
hex: #f5a40a  
gradient: color(display-p3 0.9608 0.6431 0.0392)  

Default (sky-400):  
hex: #60a5fa  
gradient: color(display-p3 0.0235 0.7294 0.8588)  

## Thanks & Acknowledgements
- Site icons by [Icons8](https://icons8.com/)
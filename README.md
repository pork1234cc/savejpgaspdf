# JPG to PDF Converter

A lightning-fast online tool to convert JPG images to PDF. This web application allows users to:

- Upload multiple image files (JPG, PNG, WEBP, TIFF, BMP)
- Rearrange images in the desired order
- Convert images to a single PDF document
- Download the generated PDF

## Features

- Drag and drop interface for easy file uploading
- Responsive design that works on desktop and mobile devices
- Client-side processing for fast conversion
- No file size limits or watermarks
- Privacy-focused: files are processed locally in the browser

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- PDF-lib for PDF generation
- React Beautiful DnD for drag-and-drop functionality

## Getting Started

### Prerequisites

- Node.js 14.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/jpg-to-pdf-converter.git
   ```

2. Install dependencies:
   ```
   cd jpg-to-pdf-converter
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this application is to use the Vercel Platform:

1. Fork this repository
2. Sign up for a free account at [Vercel](https://vercel.com/signup)
3. Import your forked repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/jpg-to-pdf-converter)

### Deploy to Cloudflare Pages

Alternatively, you can deploy to Cloudflare Pages:

1. Fork this repository
2. Log in to your Cloudflare account
3. Go to Pages > Create a project
4. Connect your GitHub account and select the forked repository
5. Configure the build settings:
   - Build command: `npm run build`
   - Build output directory: `out`
6. Click "Save and Deploy"

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deploy%20to-Cloudflare%20Pages-orange?logo=cloudflare)](https://dash.cloudflare.com/sign-up?to=/:account/pages/new)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - How to Save JPG as PDF',
  description: 'Our privacy policy explains how we handle your data when you use our JPG to PDF conversion tool. We prioritize your privacy and data security.',
  keywords: 'privacy policy, data protection, jpg to pdf converter privacy, image conversion privacy',
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <p className="text-gray-600 mb-4">Last Updated: {new Date().toISOString().split('T')[0]}</p>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Introduction</h2>
          <p>
            Welcome to How to Save JPG as PDF ("we," "our," or "us"). We respect your privacy and are committed 
            to protecting your personal data. This privacy policy will inform you about how we look after your 
            personal data when you visit our website and tell you about your privacy rights.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">The Data We Collect</h2>
          <p>
            <strong>Client-side Processing:</strong> Our JPG to PDF conversion service processes your images entirely 
            within your browser. Your images are never uploaded to our servers, ensuring maximum privacy and security.
          </p>
          <p>
            <strong>Analytics Data:</strong> We use Google Analytics to collect anonymous usage data such as:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Pages visited and time spent on our website</li>
            <li>Your approximate geographic location (country/city level only)</li>
            <li>Device and browser information</li>
            <li>Referral source</li>
          </ul>
          <p>
            This information helps us improve our service and user experience. Google Analytics data is processed 
            in accordance with Google's Privacy Policy.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">How We Use Your Data</h2>
          <p>We use the collected data for various purposes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>To improve our website functionality and user experience</li>
            <li>To analyze usage patterns and optimize our service</li>
            <li>To detect and prevent technical issues</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Cookies</h2>
          <p>
            We use cookies to enhance your experience on our website. These include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Essential cookies:</strong> Necessary for the website to function properly</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
          </ul>
          <p>
            You can set your browser to refuse all or some browser cookies, or to alert you when websites set 
            or access cookies. If you disable or refuse cookies, please note that some parts of this website 
            may become inaccessible or not function properly.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Data Security</h2>
          <p>
            We have implemented appropriate security measures to prevent your personal data from being accidentally 
            lost, used, or accessed in an unauthorized way. Our image conversion process happens entirely in your 
            browser, which means your files never leave your device.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Third-Party Services</h2>
          <p>
            Our website uses the following third-party services:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Google Analytics for website usage analysis</li>
            <li>Vercel for website hosting</li>
          </ul>
          <p>
            Each of these services has their own privacy policies that govern how they process data.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Children's Privacy</h2>
          <p>
            Our service is not intended for children under 13 years of age. We do not knowingly collect personal 
            information from children under 13. If you are a parent or guardian and believe your child has provided 
            us with personal information, please contact us.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Changes to This Privacy Policy</h2>
          <p>
            We may update our privacy policy from time to time. We will notify you of any changes by posting 
            the new privacy policy on this page and updating the "Last Updated" date.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our data practices, please contact us at:
          </p>
          <p className="font-medium">porkjiu@gmail.com</p>
        </div>
      </div>
      
      <div className="text-center mt-8 mb-4">
        <Link 
          href="/" 
          className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
        >
          Return to Home Page
        </Link>
      </div>
    </div>
  );
} 
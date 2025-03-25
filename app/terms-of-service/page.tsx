import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - How to Save JPG as PDF',
  description: 'Our terms of service outline the rules, guidelines, and legal terms for using our JPG to PDF conversion tool. Learn about your rights and responsibilities.',
  keywords: 'terms of service, terms and conditions, jpg to pdf converter terms, legal terms, user agreement',
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Terms of Service</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <p className="text-gray-600 mb-4">Last Updated: {new Date().toISOString().split('T')[0]}</p>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Introduction</h2>
          <p>
            Welcome to How to Save JPG as PDF. These Terms of Service ("Terms") govern your use of our website 
            located at <Link href="/" className="text-primary hover:underline">howtosavejpgaspdf.online</Link> ("Service") 
            and form a binding legal agreement between you and How to Save JPG as PDF ("we," "us," or "our").
          </p>
          <p>
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part 
            of the terms, you may not access the Service.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Use of Our Service</h2>
          <p>
            Our Service allows you to convert JPG, PNG, WEBP, and other image formats to PDF documents directly 
            in your browser. By using our Service, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use the Service only for lawful purposes and in accordance with these Terms</li>
            <li>Not use the Service in any way that violates any applicable local, state, national, or international law or regulation</li>
            <li>Not attempt to probe, scan, or test the vulnerability of the Service or any related system or network</li>
            <li>Not use any robot, spider, or other automatic device to access the Service for any purpose</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive 
            property of How to Save JPG as PDF. The Service is protected by copyright, trademark, and other laws 
            of both the United States and foreign countries.
          </p>
          <p>
            Our trademarks and trade dress may not be used in connection with any product or service without the 
            prior written consent of How to Save JPG as PDF.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">User Content</h2>
          <p>
            When you use our Service to convert images to PDF, all processing occurs locally in your browser. 
            We do not store, access, or upload your images to our servers. You retain all rights to your images.
          </p>
          <p>
            You are solely responsible for the images you convert using our Service and must ensure that you have 
            the legal right to use and convert these images.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Disclaimer of Warranties</h2>
          <p>
            The Service is provided on an "AS IS" and "AS AVAILABLE" basis. How to Save JPG as PDF makes no 
            warranties, expressed or implied, and hereby disclaims all warranties, including without limitation:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Any implied warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
            <li>That the Service will meet your specific requirements</li>
            <li>That the Service will be uninterrupted, timely, secure, or error-free</li>
            <li>That the results obtained from using the Service will be accurate or reliable</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Limitation of Liability</h2>
          <p>
            In no event shall How to Save JPG as PDF, its directors, employees, partners, agents, suppliers, or 
            affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including 
            without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your access to or use of or inability to access or use the Service</li>
            <li>Any conduct or content of any third party on the Service</li>
            <li>Any content obtained from the Service</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the United States, 
            without regard to its conflict of law provisions.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those 
            rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining 
            provisions of these Terms will remain in effect.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Changes to These Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will 
            provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change 
            will be determined at our sole discretion.
          </p>
          <p>
            By continuing to access or use our Service after any revisions become effective, you agree to be bound 
            by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
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
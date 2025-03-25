// 首页文件 - 服务器组件
import Link from 'next/link';
import GetStartedButton from '../components/home/GetStartedButton';
import { Metadata } from 'next';
import { Upload, ArrowDown, FileText, Download, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Save JPG as PDF - Free Online Converter Tool',
  description: 'Learn how to save a JPG as a PDF in seconds. Convert JPG, PNG, WEBP and other image formats to PDF. Free, secure, and no registration required.',
  keywords: 'jpg to pdf, image to pdf, convert images, pdf converter, free pdf tool, how to save jpg as pdf, how to save a jpg as a pdf',
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 py-12 bg-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        Lightning Fast Save JPG as PDF
      </h1>
      
      <p className="text-xl text-gray-600 mb-10 max-w-3xl">
        Learn how to save a JPG as a PDF in seconds. Our free tool makes it easy to convert your JPG, PNG, WEBP and other image formats to PDF. No registration required!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-4xl">
        <div className="shadow-md rounded-lg p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-primary mb-3">Lightning Fast</h3>
          <p className="text-gray-600">
            Convert multiple images to PDF in seconds with our optimized processing engine.
          </p>
        </div>
        
        <div className="shadow-md rounded-lg p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-primary mb-3">100% Secure</h3>
          <p className="text-gray-600">
            All processing happens in your browser. Your files never leave your device.
          </p>
        </div>
        
        <div className="shadow-md rounded-lg p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-primary mb-3">High Quality</h3>
          <p className="text-gray-600">
            Maintain the original quality of your images in the generated PDF document.
          </p>
        </div>
      </div>
      
      <GetStartedButton />
      
      {/* 如何使用部分 */}
      <section className="mt-20 w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          How to Save a JPG as a PDF <span className="text-primary">in 3 Simple Steps</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="shadow-md rounded-lg p-6 border border-gray-100 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Upload className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">1. Upload Images</h3>
            <p className="text-gray-600 text-center">
              Drag and drop your JPG, PNG or other image files into the upload area, or click to browse your files.
            </p>
          </div>
          
          <div className="shadow-md rounded-lg p-6 border border-gray-100 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <ArrowDown className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">2. Arrange & Convert</h3>
            <p className="text-gray-600 text-center">
              Rearrange your images in the desired order if needed, then click the "Convert to PDF" button.
            </p>
          </div>
          
          <div className="shadow-md rounded-lg p-6 border border-gray-100 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Download className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">3. Download PDF</h3>
            <p className="text-gray-600 text-center">
              Preview your PDF and click the download button to save it to your device. It's that simple!
            </p>
          </div>
        </div>
      </section>
      
      {/* 详细指南部分 */}
      <section className="mt-20 w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Complete Guide: <span className="text-primary">How to Save a JPG as PDF</span>
        </h2>
        
        <div className="shadow-md rounded-lg p-8 border border-gray-100 text-left">
          <p className="text-gray-600 mb-4">
            Saving a JPG as a PDF is a common need for many reasons - whether you're preparing documents for professional use, creating a portfolio, or just want to share multiple images in a single file. Here's a detailed guide on how to save JPG as PDF using our free online tool:
          </p>
          
          <div className="space-y-6 mt-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Why Convert JPG to PDF?</h3>
              <p className="text-gray-600">
                PDF files maintain consistent formatting across all devices and platforms, making them ideal for sharing and printing. Converting your JPG images to PDF also allows you to combine multiple images into a single document, add basic organization, and potentially reduce the overall file size.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Method 1: Using Our Online JPG to PDF Converter</h3>
              <p className="text-gray-600">
                Our free online tool is the quickest way to save a JPG as a PDF. Simply upload your images, arrange them in your preferred order, and click convert. The process happens entirely in your browser - no software installation required.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Method 2: Using Desktop Software</h3>
              <p className="text-gray-600">
                If you prefer using desktop software, programs like Adobe Acrobat, Preview (Mac), or even Microsoft Word can convert JPG to PDF. However, these often require paid subscriptions or have limited functionality in free versions.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Method 3: Using Mobile Apps</h3>
              <p className="text-gray-600">
                Many mobile apps can save JPG as PDF, but they often include watermarks or require in-app purchases. Our web-based tool works on mobile browsers too, giving you the same functionality without the limitations.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Tips for Best Results</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>For multi-page documents, arrange your JPG images in the correct order before converting</li>
                <li>Use high-quality JPG images for the best PDF output</li>
                <li>Consider the final use of your PDF - if it's for printing, ensure your JPG images have sufficient resolution</li>
                <li>For large batches of images, process them in smaller groups for faster conversion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* 常见问题部分 */}
      <section className="mt-20 w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        
        <div className="space-y-6">
          <div className="shadow-md rounded-lg p-6 border border-gray-100 text-left">
            <h3 className="text-xl font-semibold text-primary mb-2">How do I save a JPG as a PDF?</h3>
            <p className="text-gray-600">
              The easiest way to save a JPG as a PDF is to use our free online converter. Simply upload your JPG image, click the "Convert to PDF" button, and download your PDF file. No registration or software installation required.
            </p>
          </div>
          
          <div className="shadow-md rounded-lg p-6 border border-gray-100 text-left">
            <h3 className="text-xl font-semibold text-primary mb-2">Is this service completely free?</h3>
            <p className="text-gray-600">
              Yes, our JPG to PDF converter is 100% free to use with no hidden fees or watermarks. Convert as many files as you need.
            </p>
          </div>
          
          <div className="shadow-md rounded-lg p-6 border border-gray-100 text-left">
            <h3 className="text-xl font-semibold text-primary mb-2">Is my data secure?</h3>
            <p className="text-gray-600">
              Absolutely! All processing happens directly in your browser. Your images never leave your device or get uploaded to any server.
            </p>
          </div>
          
          <div className="shadow-md rounded-lg p-6 border border-gray-100 text-left">
            <h3 className="text-xl font-semibold text-primary mb-2">What image formats are supported?</h3>
            <p className="text-gray-600">
              Our converter supports JPG, JPEG, PNG, WEBP, AVIF, BMP, and TIFF formats. You can even mix different formats in a single PDF.
            </p>
          </div>
          
          <div className="shadow-md rounded-lg p-6 border border-gray-100 text-left">
            <h3 className="text-xl font-semibold text-primary mb-2">Is there a limit to how many images I can convert?</h3>
            <p className="text-gray-600">
              You can convert up to 50 images in a single PDF. For the best performance, we recommend keeping the total file size under 100MB.
            </p>
          </div>
          
          <div className="shadow-md rounded-lg p-6 border border-gray-100 text-left">
            <h3 className="text-xl font-semibold text-primary mb-2">Can I save multiple JPGs as one PDF?</h3>
            <p className="text-gray-600">
              Yes! Our tool is designed to help you combine multiple JPG images into a single PDF document. You can upload multiple images at once and arrange them in your preferred order before converting.
            </p>
          </div>
        </div>
      </section>
      
      {/* 最终号召性用语 */}
      <section className="mt-20 mb-10 w-full max-w-3xl">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 shadow-md rounded-lg p-8 border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Ready to save your JPG as PDF?
          </h2>
          <p className="text-gray-600 mb-6">
            Our free online tool makes it quick and easy to convert JPG to PDF. No registration required, no watermarks, and no limits!
          </p>
          <GetStartedButton />
        </div>
      </section>
    </div>
  );
} 
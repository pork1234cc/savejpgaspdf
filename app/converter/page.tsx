"use client";

import { useState } from 'react';
import UploadZone from '../../components/converter/UploadZone';
import ImageList from '../../components/converter/ImageList';
import ConversionControls from '../../components/converter/ConversionControls';
import PDFPreview from '../../components/converter/PDFPreview';
import FeedbackForm from '../../components/converter/FeedbackForm';
import { generatePDF } from '../../utils/pdfGenerator';

export default function ConverterPage() {
  const [images, setImages] = useState<File[]>([]);
  const [converting, setConverting] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFilesAdded = (files: File[]) => {
    setImages((prevImages) => [...prevImages, ...files]);
    // Reset PDF URL and error message because images have changed
    setPdfUrl(null);
    setError(null);
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    // Reset PDF URL and error message because images have changed
    setPdfUrl(null);
    setError(null);
  };

  const handleReorderImages = (sourceIndex: number, destinationIndex: number) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      const [removed] = newImages.splice(sourceIndex, 1);
      newImages.splice(destinationIndex, 0, removed);
      return newImages;
    });
    // Reset PDF URL and error message because image order has changed
    setPdfUrl(null);
    setError(null);
  };

  const handleClearImages = () => {
    setImages([]);
    setPdfUrl(null);
    setError(null);
  };

  const handleConvertToPdf = async () => {
    if (images.length === 0) return;
    
    setConverting(true);
    setError(null);
    
    try {
      // Use PDF generation service to create PDF
      const url = await generatePDF(images, {
        fitToPage: true,
        quality: 0.9
      });
      
      setPdfUrl(url);
    } catch (err) {
      console.error('Error converting to PDF:', err);
      setError('Failed to convert images to PDF. Please try again.');
    } finally {
      setConverting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8 bg-white text-gray-800">
      <div className="mb-6 sm:mb-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Save JPG to PDF
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Upload your images, arrange them in the desired order, and convert a jpg to PDF.
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 sm:px-4 sm:py-3 rounded-md mb-4 sm:mb-6 text-sm sm:text-base">
          {error}
        </div>
      )}

      {images.length === 0 ? (
        <UploadZone onFilesAdded={handleFilesAdded} />
      ) : (
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          <div className="w-full lg:w-[55%] space-y-4 sm:space-y-6">
            <ImageList 
              images={images} 
              onRemoveImage={handleRemoveImage} 
              onReorderImages={handleReorderImages}
            />
            
            <ConversionControls 
              imageCount={images.length}
              onAddMoreImages={() => document.getElementById('file-input')?.click()}
              onClearImages={handleClearImages}
              onConvertToPdf={handleConvertToPdf}
              converting={converting}
            />
            
            {/* Hidden file input for adding more images */}
            <input
              id="file-input"
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files) {
                  handleFilesAdded(Array.from(e.target.files));
                }
              }}
            />
          </div>
          
          <div className="w-full lg:w-[calc(45%-1.5rem)] mt-4 lg:mt-0">
            <PDFPreview 
              pdfUrl={pdfUrl} 
              imageCount={images.length} 
              converting={converting} 
            />
          </div>
        </div>
      )}
      
      {/* Feedback form section */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 text-center">
          Your Feedback Is Important To Us
        </h2>
        <div className="max-w-2xl mx-auto">
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
} 

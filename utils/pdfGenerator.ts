/**
 * PDF生成工具
 * 使用pdf-lib库将图片转换为PDF文档
 */
import { PDFDocument, PageSizes } from 'pdf-lib';

/**
 * 将图片文件转换为PDF文档
 * @param imageFiles - 要转换的图片文件数组
 * @param options - PDF生成选项
 * @returns 生成的PDF文档的Blob URL
 */
export async function generatePDF(
  imageFiles: File[],
  options: {
    pageSize?: [number, number]; // 页面尺寸 [宽度, 高度] (单位: 点)
    fitToPage?: boolean; // 是否自适应页面大小
    quality?: number; // 图片质量 (0-1)
  } = {}
): Promise<string> {
  // 默认选项
  const defaultOptions = {
    pageSize: PageSizes.A4,
    fitToPage: true,
    quality: 0.9,
  };

  const { pageSize, fitToPage, quality } = { ...defaultOptions, ...options };

  // 创建新的PDF文档
  const pdfDoc = await PDFDocument.create();
  
  // 处理每个图片文件
  for (const imageFile of imageFiles) {
    try {
      // 读取图片文件为ArrayBuffer
      const imageArrayBuffer = await readFileAsArrayBuffer(imageFile);
      
      // 根据图片类型选择不同的嵌入方法
      let imagePage;
      if (imageFile.type === 'image/jpeg' || imageFile.type === 'image/jpg') {
        const jpgImage = await pdfDoc.embedJpg(imageArrayBuffer);
        const jpgDims = jpgImage.scale(1);
        
        // 创建新页面
        imagePage = pdfDoc.addPage(pageSize);
        
        // 计算图片在页面中的位置和尺寸
        const { width, height } = calculateImageDimensions(
          jpgDims.width,
          jpgDims.height,
          pageSize[0],
          pageSize[1],
          fitToPage
        );
        
        const x = (pageSize[0] - width) / 2;
        const y = (pageSize[1] - height) / 2;
        
        // 绘制图片
        imagePage.drawImage(jpgImage, {
          x,
          y,
          width,
          height,
        });
      } else if (imageFile.type === 'image/png') {
        const pngImage = await pdfDoc.embedPng(imageArrayBuffer);
        const pngDims = pngImage.scale(1);
        
        // 创建新页面
        imagePage = pdfDoc.addPage(pageSize);
        
        // 计算图片在页面中的位置和尺寸
        const { width, height } = calculateImageDimensions(
          pngDims.width,
          pngDims.height,
          pageSize[0],
          pageSize[1],
          fitToPage
        );
        
        const x = (pageSize[0] - width) / 2;
        const y = (pageSize[1] - height) / 2;
        
        // 绘制图片
        imagePage.drawImage(pngImage, {
          x,
          y,
          width,
          height,
        });
      } else {
        // 对于其他格式，先转换为PNG，然后再嵌入
        const pngArrayBuffer = await convertImageToPng(imageArrayBuffer, imageFile.type, quality);
        const pngImage = await pdfDoc.embedPng(pngArrayBuffer);
        const pngDims = pngImage.scale(1);
        
        // 创建新页面
        imagePage = pdfDoc.addPage(pageSize);
        
        // 计算图片在页面中的位置和尺寸
        const { width, height } = calculateImageDimensions(
          pngDims.width,
          pngDims.height,
          pageSize[0],
          pageSize[1],
          fitToPage
        );
        
        const x = (pageSize[0] - width) / 2;
        const y = (pageSize[1] - height) / 2;
        
        // 绘制图片
        imagePage.drawImage(pngImage, {
          x,
          y,
          width,
          height,
        });
      }
    } catch (error) {
      console.error(`Error processing image ${imageFile.name}:`, error);
      // 继续处理下一个图片
    }
  }
  
  // 序列化PDF文档为Uint8Array
  const pdfBytes = await pdfDoc.save();
  
  // 创建Blob并生成URL
  const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
  const pdfUrl = URL.createObjectURL(pdfBlob);
  
  return pdfUrl;
}

/**
 * 将File对象读取为ArrayBuffer
 */
function readFileAsArrayBuffer(file: File): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

/**
 * 计算图片在PDF页面中的尺寸
 */
function calculateImageDimensions(
  imgWidth: number,
  imgHeight: number,
  pageWidth: number,
  pageHeight: number,
  fitToPage: boolean
): { width: number; height: number } {
  if (!fitToPage) {
    return { width: imgWidth, height: imgHeight };
  }
  
  // 页面边距
  const margin = 40;
  const maxWidth = pageWidth - margin * 2;
  const maxHeight = pageHeight - margin * 2;
  
  // 计算宽高比
  const imgRatio = imgWidth / imgHeight;
  
  // 根据宽高比调整尺寸
  let width = maxWidth;
  let height = width / imgRatio;
  
  if (height > maxHeight) {
    height = maxHeight;
    width = height * imgRatio;
  }
  
  return { width, height };
}

/**
 * 将其他格式的图片转换为PNG
 * 使用Canvas API进行转换
 */
async function convertImageToPng(
  imageArrayBuffer: ArrayBuffer,
  mimeType: string,
  quality: number
): Promise<ArrayBuffer> {
  // 创建Blob URL
  const blob = new Blob([imageArrayBuffer], { type: mimeType });
  const imageUrl = URL.createObjectURL(blob);
  
  try {
    // 加载图片
    const img = await loadImage(imageUrl);
    
    // 创建Canvas
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    
    // 绘制图片
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Failed to get canvas context');
    
    ctx.drawImage(img, 0, 0);
    
    // 转换为PNG
    const pngBlob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Failed to convert image to PNG'));
      }, 'image/png', quality);
    });
    
    // 转换为ArrayBuffer
    return await pngBlob.arrayBuffer();
  } finally {
    // 清理URL
    URL.revokeObjectURL(imageUrl);
  }
}

/**
 * 加载图片
 */
function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = url;
  });
} 
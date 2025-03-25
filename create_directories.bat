@echo off
echo 正在创建图片转PDF应用的目录结构...

:: 创建主要目录
mkdir app
mkdir app\converter
mkdir app\api
mkdir app\api\converter
mkdir components
mkdir components\ui
mkdir components\converter
mkdir components\animations
mkdir lib
mkdir lib\pdf
mkdir lib\utils
mkdir lib\hooks
mkdir public
mkdir public\images
mkdir public\fonts
mkdir styles

:: 创建基本文件
echo // 主布局文件 > app\layout.tsx
echo // 首页文件 > app\page.tsx
echo // 转换器主页面 > app\converter\page.tsx
echo // 转换器布局 > app\converter\layout.tsx
echo // SEO元数据 > app\converter\metadata.ts
echo // API处理逻辑 > app\api\converter\route.ts

echo // 上传区域组件 > components\converter\UploadZone.tsx
echo // 图片列表组件 > components\converter\ImageList.tsx
echo // 单个图片项组件 > components\converter\ImageItem.tsx
echo // 转换控制组件 > components\converter\ConversionControls.tsx
echo // PDF预览组件 > components\converter\PDFPreview.tsx

echo // 上传动画组件 > components\animations\UploadAnimation.tsx
echo // 粒子效果组件 > components\animations\ParticleEffect.tsx

echo // PDF生成器 > lib\pdf\generator.ts
echo // 图像处理 > lib\pdf\image-processor.ts
echo // 文件验证 > lib\utils\file-validation.ts
echo // 图像辅助函数 > lib\utils\image-helpers.ts
echo // 图片状态管理 > lib\hooks\use-images.ts

echo /* 全局样式 */ > styles\globals.css

:: 创建配置文件
echo // Tailwind配置 > tailwind.config.js
echo // PostCSS配置 > postcss.config.js
echo // Next.js配置 > next.config.js

echo 目录结构创建完成！ 
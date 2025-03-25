export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  
  // 处理 /converter 路径
  if (url.pathname === '/converter' || url.pathname.startsWith('/converter/')) {
    return next();
  }
  
  // 处理根路径
  if (url.pathname === '/' || url.pathname === '/index.html') {
    return next();
  }
  
  // 处理其他路径
  return next();
} 
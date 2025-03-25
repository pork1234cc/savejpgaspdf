import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 这个函数可以被标记为 `async`，如果使用 `await` 的话
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// 配置匹配的路径
export const config = {
  matcher: [
    // 只在需要的路径上应用中间件
    '/converter/:path*',
  ],
};

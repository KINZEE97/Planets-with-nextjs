import type { MiddlewareConfig, NextRequest } from "next/server";

export const config: MiddlewareConfig = {
    matcher: ['/', "/planets", '/admin']
}

export default function middleware(req: NextRequest) {
    console.log('middleware executado')

    if (req.nextUrl.pathname.startsWith("/planets")) {
        console.log("Usuario autenticado")
    }

    if (req.nextUrl.pathname.startsWith('/admin')) {
        console.log('area do admin')
    }
}
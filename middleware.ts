import { NextRequest, NextResponse } from "next/server";

function unauthorizedResponse() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Demo Site", charset="UTF-8"',
    },
  });
}

function parseBasicAuth(authHeader: string) {
  const [scheme, encoded] = authHeader.split(" ");
  if (scheme !== "Basic" || !encoded) return null;

  try {
    const decoded = atob(encoded);
    const separatorIndex = decoded.indexOf(":");
    if (separatorIndex < 0) return null;

    const user = decoded.slice(0, separatorIndex);
    const pass = decoded.slice(separatorIndex + 1);
    return { user, pass };
  } catch {
    return null;
  }
}

export function middleware(req: NextRequest) {
  const authEnabled = process.env.DEMO_AUTH_ENABLED === "true";
  if (!authEnabled) return NextResponse.next();

  const username = process.env.DEMO_USER;
  const password = process.env.DEMO_PASS;

  // If auth is enabled but credentials are missing, block access by default.
  if (!username || !password) return unauthorizedResponse();

  const authHeader = req.headers.get("authorization");
  if (!authHeader) return unauthorizedResponse();

  const parsed = parseBasicAuth(authHeader);
  if (!parsed) return unauthorizedResponse();

  if (parsed.user === username && parsed.pass === password) {
    return NextResponse.next();
  }

  return unauthorizedResponse();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};

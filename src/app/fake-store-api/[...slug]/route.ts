import { URL } from "node:url";

const BASE_URL = "https://fakestoreapi.com";

const handler = async (
  req: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) => {
  try {
    const { slug } = await params;
    const { search } = new URL(req.url);
    const hasBody = !["GET", "HEAD"].includes(req.method);

    const upstream = await fetch(`${BASE_URL}/${slug.join("/")}${search}`, {
      method: req.method,
      headers: req.headers,
      body: hasBody ? await req.arrayBuffer() : undefined,
      cache: "no-store",
    });

    const resHeaders = new Headers(upstream.headers);
    resHeaders.delete("content-encoding");

    return new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: resHeaders,
    });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Upstream request failed" }, { status: 502 });
  }
};

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as PATCH,
  handler as DELETE,
};

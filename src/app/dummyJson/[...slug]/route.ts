const BASE_URL = "https://dummyjson.com";

const handler = async (
  req: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) => {
  try {
    const { slug } = await params;
    const { search } = new URL(req.url);

    return fetch(`${BASE_URL}/${slug.join("/")}${search}`, {
      body: req.body,
      method: req.method,
      headers: req.headers,
      cache: "no-store",
    });
  } catch (e) {
    console.error(e);
  }
};

export async function GET(
  req: Request,
  params: { params: Promise<{ slug: string[] }> },
) {
  return handler(req, params);
}

export async function POST(
  req: Request,
  params: { params: Promise<{ slug: string[] }> },
) {
  return handler(req, params);
}

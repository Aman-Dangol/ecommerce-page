interface UrlBuilderProps {
  baseUrl: string;
  queryParams?: Record<string, string>;
  subroutes?: string[] | string;
}

export const urlBuilder = ({
  baseUrl,
  queryParams,
  subroutes,
}: UrlBuilderProps) => {
  let fullURl = baseUrl.endsWith("\/") ? baseUrl : baseUrl + "/";
  if (!queryParams && !subroutes) return baseUrl;

  if (subroutes) {
    if (typeof subroutes === "string") {
      const subPath = subroutes.startsWith("\/")
        ? subroutes.slice(1)
        : subroutes;
      fullURl += subPath;
    }
    if (typeof subroutes === "object" && subroutes.length) {
      const path = subroutes.join("/");
      fullURl += path;
    }
  }

  if (queryParams) {
    const params = new URLSearchParams(queryParams);
    fullURl += "?" + params;
  }

  return fullURl;
};

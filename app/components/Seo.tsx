import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteMeta, siteConfig } from "../config/site";

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

export default function Seo() {
  const location = useLocation();

  useEffect(() => {
    const route = getRouteMeta(location.pathname);
    const canonical = new URL(location.pathname, siteConfig.baseUrl).toString();

    document.documentElement.lang = "fr";
    document.title = route.title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: route.description,
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: route.title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: route.description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonical,
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: route.title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: route.description,
    });
    upsertCanonical(canonical);
  }, [location.pathname]);

  return null;
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '../../data/schemas';

export const OG_DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export const PageMeta = ({ title, description, ogImage = OG_DEFAULT_IMAGE, type = 'website' }) => {
  const { pathname } = useLocation();
  const canonicalUrl = `${SITE_URL}${pathname}`;

  useEffect(() => {
    document.title = title;

    setMetaName('description', description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    setMetaProp('og:title', title);
    setMetaProp('og:description', description);
    setMetaProp('og:url', canonicalUrl);
    setMetaProp('og:image', ogImage);
    setMetaProp('og:image:width', '1200');
    setMetaProp('og:image:height', '630');
    setMetaProp('og:type', type);
    setMetaProp('og:site_name', 'Home Run Electric');

    setMetaName('twitter:card', 'summary_large_image');
    setMetaName('twitter:title', title);
    setMetaName('twitter:description', description);
    setMetaName('twitter:image', ogImage);
  }, [title, description, ogImage, type, canonicalUrl]);

  return null;
};

function setMetaName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.name = name;
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaProp(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

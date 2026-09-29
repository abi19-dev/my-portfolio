import { useLayoutEffect, useRef, useSyncExternalStore } from 'react';

// Remembers which image URLs have finished loading (or failed), so a sticker that
// was already shown once never flashes its placeholder again.
const loaded = new Set();
const listeners = new Set();
const requested = new Set();

function markLoaded(src) {
  if (!src || loaded.has(src)) return;
  loaded.add(src);
  listeners.forEach(notify => notify());
}

function subscribe(notify) {
  listeners.add(notify);
  return () => listeners.delete(notify);
}

export function useLoaded(src) {
  return useSyncExternalStore(subscribe, () => loaded.has(src));
}

// Returns whether `src` is ready, plus the props to spread onto its <img>.
export function useImage(src) {
  const ready = useLoaded(src);
  const ref = useRef(null);
  // An image served from the browser cache can be complete before React sees its load event.
  useLayoutEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth) markLoaded(src);
  }, [src]);
  const done = () => markLoaded(src);
  return [ready, { ref, onLoad: done, onError: done }];
}

// Starts downloading images in the background.
export function preload(srcs) {
  srcs.forEach(src => {
    if (!src || requested.has(src) || loaded.has(src)) return;
    requested.add(src);
    const img = new Image();
    img.onload = img.onerror = () => markLoaded(src);
    img.src = src;
  });
}

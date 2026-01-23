declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const META_PIXEL_ID = "889024904059712";

export const trackPageView = () => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
};

export const trackEvent = (
  eventName: string,
  params: Record<string, any> = {},
) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", eventName, params);
  }
};

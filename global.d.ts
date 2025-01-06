// global.d.ts
export {};

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
      initBadgeWidget: (options: { url: string, text: string, color: string, textColor: string }) => void;
    };
  }
}

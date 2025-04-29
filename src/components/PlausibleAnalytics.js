"use client";

export default function PlausibleAnalytics() {
  // This component only runs on the client
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.plausible = window.plausible || function(){
            (window.plausible.q = window.plausible.q || []).push(arguments)
          }
        `,
      }}
    />
  );
}

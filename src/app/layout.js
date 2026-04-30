import './globals.css';

export const metadata = {
  title: 'Arafat Hossen Sabbir | Portfolio',
  description: 'Frontend Developer Portfolio - Building thoughtful products with clean UI, strong structure, and room to grow.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}

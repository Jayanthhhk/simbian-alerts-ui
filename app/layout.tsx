// app/layout.tsx
import './global.css';

export const metadata = {
  title: 'Simbian Security Dashboard',
  description: 'Simulated threat dashboard — not developed by ChatGPT',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark bg-gray-900 text-white">
        {children}
        <footer className="text-xs text-center text-gray-500 mt-20">
          ⚠️ This is a simulated demo. Not developed or affiliated with ChatGPT or OpenAI.
        </footer>
      </body>
    </html>
  );
}

import './globals.css';

export const metadata = {
  title: 'Michael Shakra – Handelsberatung',
  description: 'Strategische Beratung für Exporteure im arabischen Raum',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}

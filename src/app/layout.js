import './globals.css';
import Header from '@/components/Header';
import { Providers } from '@/components/Providers';

export const metadata = {
  title: {
    template: '%s | Municípios',
    default: 'Municípios',
  },
  description: 'Compare cidades brasileiras com base em dados socioeconômicos, infraestrutura e qualidade de vida.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`bg-gray-100 text-primary-600 min-h-screen flex flex-col antialiased`}>
        <Providers>
          <Header />
          <div className="flex-1 px-8 py-12 grid">
            <main className="max-w-7xl mx-auto w-full">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
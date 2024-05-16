import Script from 'next/script';

import './globals.css'
import '@/styles/index.css';
import '@/styles/custom.scss';

export const metadata = {
  title: {
    template: `%s`,
    default: 'three.js react sample',
  },
  description: 'three.js react sample',
  keywords: ['three.js', 'react'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"/>
    </html>
  )
}

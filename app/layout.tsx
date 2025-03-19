import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vote Shivam Pandey for VP Postgraduate | Westminster Student Union Elections 2025',
  description: 'Vote for Shivam Pandey for VP Postgraduate in the University of Westminster Student Union Elections 2025. A strong voice for postgraduates, leadership, and student rights. Get involved now!',
  generator: 'v0.dev',
  keywords: 'Westminster Student Union, University of Westminster, Student Elections 2025, VP Postgraduate, Vote for Shivam Pandey, Westminster postgraduate elections, student leadership, Westminster voting, student support, university politics, Shivam Pandey manifesto',
  authors: [{ name: 'Shivam Pandey', url: 'https://shivam4westminstervppg.co.uk' }],
  openGraph: {
    title: 'Vote Shivam Pandey for VP Postgraduate | Westminster Student Union Elections 2025',
    description: 'Support Shivam Pandey for VP Postgraduate at the University of Westminster. Vote for leadership, student rights, and postgraduate empowerment. Election dates inside!',
    url: 'https://shivam4westminstervppg.co.uk',
    siteName: 'Shivam Pandey for VP Postgraduate',
    images: [
      {
        url: 'https://shivam4westminstervppg.co.uk/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vote Shivam Pandey - Westminster Student Union Elections'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vote Shivam Pandey for VP Postgraduate | Westminster Student Union Elections 2025',
    description: 'Shivam Pandey is running for VP Postgraduate at the University of Westminster. Support student leadership, postgraduate representation, and change.',
    site: '@shivamvp',
    creator: '@shivamvp',
    images: ['https://shivam4westminstervppg.co.uk/og-image.jpg']
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://shivam4westminstervppg.co.uk',
  }
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Tags for SEO Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Shivam Pandey" />
        <meta name="keywords" content="Westminster Student Union, University of Westminster, Student Elections 2025, VP Postgraduate, Vote for Shivam Pandey, Westminster postgraduate elections, student leadership, Westminster voting, student support, university politics, Shivam Pandey manifesto" />
        
        {/* Open Graph (OG) for Facebook and LinkedIn */}
        <meta property="og:title" content="Vote Shivam Pandey for VP Postgraduate | Westminster Student Union Elections 2025" />
        <meta property="og:description" content="Support Shivam Pandey for VP Postgraduate at the University of Westminster. Vote for leadership, student rights, and postgraduate empowerment. Election dates inside!" />
        <meta property="og:image" content="https://shivam4westminstervppg.co.uk/og-image.jpg" />
        <meta property="og:url" content="https://shivam4westminstervppg.co.uk" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Cards for better visibility on Twitter (X) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vote Shivam Pandey for VP Postgraduate | Westminster Student Union Elections 2025" />
        <meta name="twitter:description" content="Shivam Pandey is running for VP Postgraduate at the University of Westminster. Support student leadership, postgraduate representation, and change." />
        <meta name="twitter:image" content="https://shivam4westminstervppg.co.uk/og-image.jpg" />
        <meta name="twitter:site" content="@shivamvp" />
        
        {/* Canonical Link for SEO Ranking */}
        <link rel="canonical" href="https://shivam4westminstervppg.co.uk" />
        
        {/* Favicon for Branding */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Structured Data (JSON-LD) for Better Search Engine Understanding */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Shivam Pandey",
          "url": "https://shivam4westminstervppg.co.uk",
          "sameAs": [
            "https://twitter.com/shivamvp",
            "https://www.linkedin.com/in/shivamvp",
            "https://www.instagram.com/shivamvp",
            "https://www.facebook.com/shivamvp"
          ],
          "jobTitle": "VP Postgraduate Candidate",
          "affiliation": "University of Westminster",
          "description": "Shivam Pandey is running for VP Postgraduate at the University of Westminster Student Union Elections 2025. Support student leadership and positive change."
        }) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}

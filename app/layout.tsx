import { Theme } from '@radix-ui/themes'
import type { Metadata } from 'next'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import siteConfig from '@/lib/siteConfig'
import './globals.css'

export const metadata: Metadata = {
    title: siteConfig.name,
    description:
        'Plombier 24/7 — Intervention rapide. Transparence dans notre diagnostic et qualité de travail garantie.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness', // or "Plumber" — LocalBusiness is safest & broadly supported
        name: siteConfig.name,
        telephone: siteConfig.telephone,
        image: siteConfig.image,
        priceRange: '€',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'BE',
        },
        areaServed: {
            '@type': 'Country',
            name: 'Belgium',
        },
        openingHours: siteConfig.openingHours,
        url: siteConfig.url,
        serviceType: 'Plumbing',
    }

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>
                <Theme>
                    <div className="min-h-screen flex flex-col">
                        <Header />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </div>
                </Theme>
            </body>
        </html>
    )
}

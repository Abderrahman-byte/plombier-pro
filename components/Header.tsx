'use client'

import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    const navigation = [
        { name: 'Accueil', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'À propos', href: '/about' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Contact', href: '/contact' },
    ]

    const isActive = (href: string) => pathname === href

    return (
        <header className="bg-background-section sticky top-0 z-50 border-b border-border shadow-soft">
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-gradient-cta rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                            <span className="text-white font-bold text-xl">P</span>
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-xl font-bold text-primary">PlombierPro</span>
                            <div className="text-sm text-muted-foreground">Belgique</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`font-medium transition-colors duration-300 hover:text-accent ${
                                    isActive(item.href)
                                        ? 'text-accent border-b-2 border-accent pb-1'
                                        : 'text-foreground'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Contact Info & CTA */}
                    <div className="flex items-center space-x-4">
                        {/* Phone Number */}
                        <div className="hidden md:flex items-center space-x-2">
                            <Phone className="w-5 h-5 text-accent" />
                            <a href="tel:+32467601247" className="phone-display">
                                +32 467 60 12 47
                            </a>
                        </div>

                        {/* Call Button */}
                        <a
                            href="tel:+32467601247"
                            className="btn-cta hidden sm:inline-flex items-center space-x-2"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Appeler maintenant</span>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-background-muted transition-colors duration-300"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-foreground" />
                            ) : (
                                <Menu className="w-6 h-6 text-foreground" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-border">
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`font-medium transition-colors duration-300 hover:text-accent ${
                                        isActive(item.href) ? 'text-accent' : 'text-foreground'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* Mobile Phone */}
                            <div className="pt-4 border-t border-border">
                                <a
                                    href="tel:+32467601247"
                                    className="flex items-center space-x-2 text-accent font-semibold"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>+32 467 60 12 47</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header

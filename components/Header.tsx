'use client'

import { Menu, Phone } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const navigation = [
        { name: 'Accueil', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'À propos', href: '/about' },
        { name: 'Tarifs', href: '/pricing' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-soft">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="font-bold text-xl text-primary">
                            PlombierBoost
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-primary ${item.href === pathname ? 'text-primary' : 'text-muted-foreground'}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side - Phone & CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Phone Number */}
                        <a
                            href="tel:+32123456789"
                            className="flex items-center space-x-2 text-sm font-medium text-primary hover:text-primary-light transition-colors"
                        >
                            <Phone className="h-4 w-4" />
                            <span>+32 (0)1 23 45 67 89</span>
                        </a>

                        {/* Emergency CTA */}
                        <Button variant="cta" size="sm" asChild>
                            <a href="tel:+32123456789">Urgence: Appelez</a>
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="sm">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col space-y-4 mt-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-sm font-medium transition-colors hover:text-primary ${item.href === pathname ? 'text-primary' : 'text-muted-foreground'}`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                                <div className="pt-4 border-t border-border">
                                    <Button variant="cta" className="w-full" asChild>
                                        <a href="tel:+32123456789">
                                            <Phone className="h-4 w-4 mr-2" />
                                            Appeler maintenant
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

export default Header

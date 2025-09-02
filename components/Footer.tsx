import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
    const services = [
        { name: "Débouchage d'urgence", href: '/services/debouchage' },
        { name: 'Réparation de fuites', href: '/services/fuites' },
        { name: 'Robinetterie & appareils', href: '/services/robinetterie' },
        { name: 'Réparation tuyauterie', href: '/services/tuyauterie' },
    ]

    const legal = [
        { name: 'Conditions générales', href: '/legal/terms' },
        { name: 'Politique de confidentialité', href: '/legal/privacy' },
        { name: 'Cookies', href: '/legal/cookies' },
        { name: 'Mentions légales', href: '/legal/imprint' },
    ]

    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">PlombierBoost</h3>
                        <p className="text-primary-foreground/80">
                            Votre plombier de confiance en Belgique. Intervention rapide 24h/24,
                            7j/7 avec garantie professionnelle.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span className="text-sm">+32 (0)1 23 45 67 89</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span className="text-sm">contact@plombierboost.be</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span className="text-sm">Belgique entière</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4" />
                                <span className="text-sm">24h/24, 7j/7</span>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Nos Services</h4>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="text-primary-foreground/80 hover:text-cta transition-colors text-sm"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Liens Rapides</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-primary-foreground/80 hover:text-cta transition-colors text-sm"
                                >
                                    À propos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pricing"
                                    className="text-primary-foreground/80 hover:text-cta transition-colors text-sm"
                                >
                                    Tarifs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/faq"
                                    className="text-primary-foreground/80 hover:text-cta transition-colors text-sm"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-primary-foreground/80 hover:text-cta transition-colors text-sm"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-primary-foreground/20 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-primary-foreground/60 text-sm">
                            © 2024 PlombierBoost. Tous droits réservés.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {legal.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-primary-foreground/60 hover:text-cta transition-colors text-sm"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

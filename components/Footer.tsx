import Link from 'next/link'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container-custom">
                <div className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">P</span>
                                </div>
                                <span className="text-xl font-bold">PlombierPro</span>
                            </div>
                            <p className="text-primary-foreground/80 leading-relaxed">
                                Service de plomberie professionnel disponible 24h/24 en Belgique.
                                Intervention rapide, diagnostic transparent, travail garanti.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Contact</h3>
                            <div className="space-y-3">
                                <a
                                    href="tel:+32467601247"
                                    className="flex items-center space-x-3 text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>+32 467 60 12 47</span>
                                </a>
                                <a
                                    href="mailto:contact@plombierpro.be"
                                    className="flex items-center space-x-3 text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>contact@plombierpro.be</span>
                                </a>
                                <div className="flex items-center space-x-3 text-primary-foreground/80">
                                    <MapPin className="w-4 h-4" />
                                    <span>Belgique</span>
                                </div>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Horaires</h3>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-3 text-primary-foreground/80">
                                    <Clock className="w-4 h-4" />
                                    <span>24h/24 - 7j/7</span>
                                </div>
                                <p className="text-sm text-primary-foreground/60">
                                    Service d'urgence disponible à tout moment
                                </p>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Liens rapides</h3>
                            <div className="space-y-2">
                                <Link
                                    href="/services"
                                    className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                                >
                                    Nos services
                                </Link>
                                <Link
                                    href="/about"
                                    className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                                >
                                    À propos
                                </Link>
                                <Link
                                    href="/faq"
                                    className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                                >
                                    FAQ
                                </Link>
                                <Link
                                    href="/contact"
                                    className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                                >
                                    Contactez-nous
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-primary-foreground/20 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-primary-foreground/60">
                            © 2025 PlombierPro Belgique. Tous droits réservés.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

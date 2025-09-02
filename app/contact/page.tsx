import { Clock, Mail, MapPin, MessageSquare, Phone, User } from 'lucide-react'

import LeadFrom from '@/components/LeadForm'

const Contact = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-hero text-foreground-light section-padding">
                <div className="container-custom text-center">
                    <h1 className="heading-xl text-brand-orange mb-6">Contactez-nous</h1>
                    <p className="text-lead max-w-3xl mx-auto text-foreground-light/90">
                        Besoin d'un plombier ? Contactez-nous dès maintenant pour une intervention
                        rapide ou demandez un devis gratuit pour vos travaux.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Information */}
                        <div className="lg:col-span-1 space-y-8">
                            <div>
                                <h2 className="heading-md mb-6">Informations de contact</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-primary mb-1">
                                                Téléphone
                                            </h3>
                                            <a
                                                href="tel:+32467601247"
                                                className="text-accent hover:text-accent/80 font-semibold text-lg transition-colors duration-300"
                                            >
                                                +32 467 60 12 47
                                            </a>
                                            <p className="text-muted-foreground text-sm mt-1">
                                                Disponible 24h/24, 7j/7
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-primary mb-1">
                                                Email
                                            </h3>
                                            <a
                                                href="mailto:contact@plombierpro.be"
                                                className="text-accent hover:text-accent/80 transition-colors duration-300"
                                            >
                                                contact@plombierpro.be
                                            </a>
                                            <p className="text-muted-foreground text-sm mt-1">
                                                Réponse sous 2h en journée
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-primary mb-1">
                                                Zone d'intervention
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Toute la Belgique
                                                <br />
                                                <span className="text-sm">
                                                    Intervention rapide à Bruxelles et environs
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-primary mb-1">
                                                Horaires
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Service d'urgence : 24h/24
                                                <br />
                                                <span className="text-sm">
                                                    Travaux planifiés : Lun-Sam 8h-18h
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Emergency Box */}
                            <div className="bg-accent text-accent-foreground rounded-lg p-6">
                                <h3 className="text-xl font-bold mb-3">Urgence plomberie ?</h3>
                                <p className="mb-4 opacity-90">
                                    Pour toute urgence, appelez-nous directement. Nous intervenons
                                    dans l'heure !
                                </p>
                                <a
                                    href="tel:+32467601247"
                                    className="bg-white text-accent hover:bg-gray-100 px-6 py-3 rounded-lg font-bold inline-flex items-center space-x-2 transition-colors duration-300"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>Appeler maintenant</span>
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-card border border-border rounded-lg p-8 shadow-medium">
                                <h2 className="heading-md mb-6">Demandez un appel</h2>
                                <LeadFrom />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="section-padding bg-background-section">
                <div className="container-custom">
                    <div className="text-center">
                        <h2 className="heading-md mb-12">Pourquoi nous choisir ?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="space-y-4">
                                <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <h3 className="font-semibold text-primary">Intervention rapide</h3>
                                <p className="text-muted-foreground text-sm">
                                    Arrivée sur place en moins de 30 minutes pour les urgences
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
                                    <MessageSquare className="w-8 h-8" />
                                </div>
                                <h3 className="font-semibold text-primary">Devis transparent</h3>
                                <p className="text-muted-foreground text-sm">
                                    Diagnostic gratuit et devis détaillé avant toute intervention
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
                                    <User className="w-8 h-8" />
                                </div>
                                <h3 className="font-semibold text-primary">Experts qualifiés</h3>
                                <p className="text-muted-foreground text-sm">
                                    Plombiers certifiés avec plus de 15 ans d'expérience
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact

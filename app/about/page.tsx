import { Users, Award, Shield, Clock, Star, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const About = () => {
    const stats = [
        { number: '15+', label: "Années d'expérience" },
        { number: '5000+', label: 'Clients satisfaits' },
        { number: '24/7', label: 'Disponibilité' },
        { number: '100%', label: 'Travail garanti' },
    ]

    const certifications = [
        {
            icon: <Award className="w-8 h-8" />,
            title: 'Certifié professionnel',
            description: 'Certification officielle pour tous travaux de plomberie',
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'Assuré responsabilité civile',
            description: "Couverture complète pour votre tranquillité d'esprit",
        },
        {
            icon: <CheckCircle className="w-8 h-8" />,
            title: 'Agréé pour assurances',
            description: "Interventions reconnues par les compagnies d'assurance",
        },
    ]

    const values = [
        {
            title: 'Transparence',
            description:
                'Devis détaillé et transparent avant toute intervention. Pas de surprise sur la facture.',
        },
        {
            title: 'Rapidité',
            description: "Intervention d'urgence sous 30 minutes dans la région de Bruxelles.",
        },
        {
            title: 'Qualité',
            description:
                'Travail soigné avec des matériaux de qualité et une garantie sur nos prestations.',
        },
        {
            title: 'Disponibilité',
            description: 'Service client disponible 24h/24 et 7j/7 pour toutes vos urgences.',
        },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-hero text-foreground-light section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="heading-xl text-brand-orange mb-6">À propos de PlombierPro</h1>
                        <p className="text-lead text-foreground-light/90">
                            Depuis plus de 15 ans, nous sommes votre partenaire de confiance pour
                            tous vos travaux de plomberie en Belgique. Notre expertise et notre
                            engagement pour la qualité nous ont permis de fidéliser plus de 5000
                            clients.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding bg-background-section">
                <div className="container-custom">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-muted-foreground font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="heading-lg">Notre histoire</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    PlombierPro a été fondé en 2009 avec une mission simple : offrir
                                    un service de plomberie professionnel, rapide et transparent à
                                    tous les habitants de Belgique.
                                </p>
                                <p>
                                    Ce qui a commencé comme une petite entreprise familiale s'est
                                    développé pour devenir l'une des références en matière de
                                    plomberie d'urgence et de services sanitaires dans tout le pays.
                                </p>
                                <p>
                                    Aujourd'hui, notre équipe de plombiers qualifiés intervient
                                    24h/24 et 7j/7 pour résoudre tous vos problèmes de plomberie,
                                    des plus simples aux plus complexes.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h3 className="heading-md">Nos engagements</h3>
                            <div className="space-y-4">
                                {values.map((value, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h4 className="font-semibold text-primary mb-1">
                                                {value.title}
                                            </h4>
                                            <p className="text-muted-foreground text-sm">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="section-padding bg-background-section">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="heading-lg mb-4">Certifications et garanties</h2>
                        <p className="text-lead max-w-2xl mx-auto">
                            Nous possédons toutes les certifications nécessaires pour exercer notre
                            métier en toute légalité et sécurité.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <div key={index} className="card-hover text-center">
                                <div className="text-accent mb-4 flex justify-center">
                                    {cert.icon}
                                </div>
                                <h3 className="heading-sm mb-3">{cert.title}</h3>
                                <p className="text-muted-foreground">{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="heading-lg mb-4">Notre équipe</h2>
                        <p className="text-lead max-w-2xl mx-auto">
                            Une équipe de plombiers expérimentés et passionnés, formés aux dernières
                            techniques et équipés des meilleurs outils.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div className="space-y-4">
                            <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
                                <Users className="w-10 h-10" />
                            </div>
                            <h3 className="font-semibold text-primary">Équipe expérimentée</h3>
                            <p className="text-sm text-muted-foreground">
                                Plombiers avec plus de 10 ans d'expérience moyenne
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
                                <Clock className="w-10 h-10" />
                            </div>
                            <h3 className="font-semibold text-primary">Formation continue</h3>
                            <p className="text-sm text-muted-foreground">
                                Mise à jour régulière des compétences et techniques
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
                                <Star className="w-10 h-10" />
                            </div>
                            <h3 className="font-semibold text-primary">Service client</h3>
                            <p className="text-sm text-muted-foreground">
                                Écoute, conseil et suivi personnalisé pour chaque client
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle className="w-10 h-10" />
                            </div>
                            <h3 className="font-semibold text-primary">Satisfaction garantie</h3>
                            <p className="text-sm text-muted-foreground">
                                Engagement de résultat et garantie sur tous nos travaux
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-primary text-primary-foreground">
                <div className="container-custom text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        Prêt à nous faire confiance ?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
                        Rejoignez les milliers de clients qui nous font confiance pour leurs travaux
                        de plomberie.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+3221234567" className="btn-cta">
                            Appeler maintenant
                        </a>
                        <Link
                            href="/contact"
                            className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                        >
                            Demandez un appel
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About

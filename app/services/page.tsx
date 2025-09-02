'use client'

import { useState } from 'react'
import {
    Phone,
    ChevronDown,
    ChevronUp,
    Wrench,
    Droplets,
    Hammer,
    Settings,
    Home,
    Zap,
} from 'lucide-react'

export default function Services() {
    const [expandedService, setExpandedService] = useState<number | null>(null)

    const services = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Dépannage d'urgence 24h/24",
            shortDescription: 'Intervention rapide pour tous problèmes de plomberie urgents.',
            fullDescription:
                "Notre équipe de plombiers professionnels intervient 24h/24 et 7j/7 pour tous vos problèmes urgents : canalisations bouchées, fuites importantes, absence d'eau chaude, etc. Nous nous engageons à arriver sur place dans les 30 minutes suivant votre appel dans la région de Bruxelles et environs.",
            includes: [
                'Intervention sous 30 minutes',
                'Diagnostic gratuit sur place',
                'Réparation immédiate si possible',
                'Devis transparent avant travaux',
                'Disponible 24h/24, 7j/7',
            ],
        },
        {
            icon: <Droplets className="w-6 h-6" />,
            title: 'Réparation de fuites',
            shortDescription: "Détection et réparation de toutes fuites d'eau dans votre logement.",
            fullDescription:
                "Spécialisés dans la détection et la réparation de fuites, nous utilisons des équipements de pointe pour localiser précisément l'origine du problème. Que ce soit une fuite visible ou cachée dans les murs, nous intervenons rapidement pour limiter les dégâts.",
            includes: [
                'Détection de fuites cachées',
                'Réparation de canalisations',
                'Changement de joints défaillants',
                'Réparation de robinetterie',
                'Garantie sur les réparations',
            ],
        },
        {
            icon: <Settings className="w-6 h-6" />,
            title: 'Installation de robinetterie',
            shortDescription: 'Installation et remplacement de robinets, mitigeurs et accessoires.',
            fullDescription:
                'Installation professionnelle de tous types de robinetterie : robinets de cuisine, mitigeurs de salle de bain, douches, éviers, etc. Nous travaillons avec les meilleures marques et vous conseillons sur le choix le plus adapté à vos besoins.',
            includes: [
                'Installation de robinets et mitigeurs',
                "Remplacement d'ancienne robinetterie",
                'Conseil sur le choix des équipements',
                'Mise aux normes',
                'Garantie fabricant et installation',
            ],
        },
        {
            icon: <Hammer className="w-6 h-6" />,
            title: 'Réparation de canalisations',
            shortDescription: 'Réparation et remplacement de canalisations endommagées.',
            fullDescription:
                "Nous prenons en charge la réparation et le remplacement de canalisations endommagées par le gel, l'usure ou des travaux. Utilisation de techniques modernes pour minimiser les nuisances et assurer une réparation durable.",
            includes: [
                'Réparation de canalisations éclatées',
                'Remplacement de tuyauterie ancienne',
                'Réparation sans casse (chemisage)',
                'Mise aux normes actuelles',
                'Nettoyage après intervention',
            ],
        },
        {
            icon: <Home className="w-6 h-6" />,
            title: 'Installation sanitaire complète',
            shortDescription: 'Installation complète de salles de bain et équipements sanitaires.',
            fullDescription:
                "Création ou rénovation complète de salles de bain : installation de WC, lavabos, douches, baignoires, etc. Nous gérons l'ensemble du projet de A à Z, incluant l'évacuation et l'alimentation en eau.",
            includes: [
                'Installation de WC et lavabos',
                'Pose de douches et baignoires',
                'Raccordement évacuation/alimentation',
                'Mise aux normes sanitaires',
                'Coordination avec autres corps de métier',
            ],
        },
        {
            icon: <Wrench className="w-6 h-6" />,
            title: 'Débouchage de canalisations',
            shortDescription: 'Débouchage professionnel de tous types de canalisations.',
            fullDescription:
                "Service de débouchage pour éviers, lavabos, douches, WC et canalisations principales. Utilisation d'équipements professionnels (spirales électriques, hydrocurage) pour un débouchage efficace et durable.",
            includes: [
                "Débouchage d'éviers et lavabos",
                'Débouchage de douches et baignoires',
                'Débouchage de WC',
                'Hydrocurage de canalisations',
                'Inspection vidéo si nécessaire',
            ],
        },
    ]

    const toggleService = (index: number) => {
        setExpandedService(expandedService === index ? null : index)
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-hero text-foreground-light section-padding">
                <div className="container-custom text-center">
                    <h1 className="text-brand-orange heading-xl mb-6">Nos services de plomberie</h1>
                    <p className="text-lead max-w-3xl mx-auto text-foreground-light/90">
                        Une gamme complète de services professionnels pour tous vos besoins en
                        plomberie. Intervention rapide, travail garanti et tarifs transparents.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto space-y-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="card-service group"
                                onClick={() => toggleService(index)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="heading-sm mb-2">{service.title}</h3>
                                            <p className="text-muted-foreground">
                                                {service.shortDescription}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-accent ml-4">
                                        {expandedService === index ? (
                                            <ChevronUp className="w-5 h-5" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5" />
                                        )}
                                    </div>
                                </div>

                                {expandedService === index && (
                                    <div className="mt-6 pt-6 border-t border-border animate-fade-in">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="font-semibold text-primary mb-3">
                                                    Description détaillée
                                                </h4>
                                                <p className="text-muted-foreground leading-relaxed mb-6">
                                                    {service.fullDescription}
                                                </p>
                                                <a
                                                    href="tel:+32467601247"
                                                    className="btn-cta inline-flex items-center space-x-2"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Phone className="w-4 h-4" />
                                                    <span>Appeler pour ce service</span>
                                                </a>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-primary mb-3">
                                                    Ce qui est inclus
                                                </h4>
                                                <ul className="space-y-2">
                                                    {service.includes.map((item, itemIndex) => (
                                                        <li
                                                            key={itemIndex}
                                                            className="flex items-start space-x-2"
                                                        >
                                                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                                            <span className="text-muted-foreground">
                                                                {item}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Emergency Section */}
            <section className="section-padding bg-background-section">
                <div className="container-custom">
                    <div className="bg-accent text-accent-foreground rounded-lg p-8 lg:p-12 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Urgence plomberie ?</h2>
                        <p className="text-xl mb-6 opacity-90">
                            Nos plombiers interviennent 24h/24 partout en Belgique
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+32467601247"
                                className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
                            >
                                <Phone className="w-5 h-5" />
                                <span>+32 467 60 12 47</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guarantee Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="heading-sm">Intervention rapide</h3>
                            <p className="text-muted-foreground">
                                Arrivée sur place en moins de 30 minutes dans la région de Bruxelles
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
                                <Settings className="w-8 h-8" />
                            </div>
                            <h3 className="heading-sm">Travail garanti</h3>
                            <p className="text-muted-foreground">
                                Garantie sur toutes nos interventions et pièces installées
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
                                <Hammer className="w-8 h-8" />
                            </div>
                            <h3 className="heading-sm">Devis transparent</h3>
                            <p className="text-muted-foreground">
                                Diagnostic gratuit et devis détaillé avant toute intervention
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Phone, HelpCircle } from 'lucide-react'
import Link from 'next/link'

const FAQ = () => {
    const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null)

    const faqs = [
        {
            question: "Combien coûte une intervention d'urgence ?",
            answer: "Le coût d'une intervention d'urgence dépend de la nature du problème et de l'heure d'intervention. Nous proposons systématiquement un devis gratuit avant toute intervention. Les tarifs d'urgence s'appliquent les soirs, week-ends et jours fériés. Pour une intervention standard en journée, le déplacement est généralement gratuit si vous acceptez le devis.",
        },
        {
            question: 'Intervenez-vous vraiment 24h/24 ?',
            answer: "Oui, notre service d'urgence fonctionne 24h/24 et 7j/7, même les jours fériés. Nous comprenons que les problèmes de plomberie ne choisissent pas leur moment ! Un plombier de garde est toujours disponible pour les urgences : fuites importantes, absence d'eau chaude, canalisations bouchées, etc.",
        },
        {
            question: 'Dans quelles régions intervenez-vous ?',
            answer: "Nous intervenons dans toute la Belgique. Pour les interventions d'urgence avec délai de 30 minutes, nous couvrons Bruxelles et ses environs. Pour les autres régions (Anvers, Gand, Liège, Charleroi, etc.), le délai d'intervention est généralement de 1 à 2 heures selon la distance.",
        },
        {
            question: 'Vos travaux sont-ils garantis ?',
            answer: "Absolument ! Nous garantissons tous nos travaux pendant 2 ans pour la main-d'œuvre et selon la garantie fabricant pour les pièces installées. En cas de problème lié à notre intervention, nous revenons gratuitement pour corriger le défaut. Cette garantie vous assure une tranquillité d'esprit totale.",
        },
        {
            question: 'Acceptez-vous les paiements par carte ou virements ?',
            answer: "Oui, nous acceptons tous les modes de paiement : espèces, carte bancaire, virement, chèque. Pour votre confort, nous disposons d'un terminal de paiement mobile. Le règlement se fait généralement à la fin de l'intervention, après votre entière satisfaction.",
        },
        {
            question: "Comment savoir si c'est vraiment une urgence ?",
            answer: "Une urgence plomberie nécessite une intervention immédiate : fuite d'eau importante, inondation, absence totale d'eau chaude, évacuation complètement bouchée, ou tout problème qui risque de causer des dégâts matériels. En cas de doute, n'hésitez pas à nous appeler pour un conseil gratuit.",
        },
        {
            question: 'Fournissez-vous un devis écrit ?',
            answer: "Oui, après diagnostic, nous établissons systématiquement un devis détaillé et écrit que vous devez accepter avant le début des travaux. Ce devis précise le détail des opérations, le coût de la main-d'œuvre, le prix des fournitures et les conditions de garantie. Aucune surprise sur la facture !",
        },
        {
            question: 'Que faire en attendant votre arrivée en cas de fuite ?',
            answer: "En cas de fuite importante : 1) Coupez l'arrivée d'eau principale (compteur ou vanne d'arrêt), 2) Coupez l'électricité si l'eau s'approche d'équipements électriques, 3) Évacuez l'eau avec des seaux ou serpillières, 4) Prenez des photos pour votre assurance. Nous vous guidons par téléphone si nécessaire.",
        },
        {
            question: 'Peut-on vous contacter pour des conseils ?',
            answer: 'Bien sûr ! Nous sommes là pour vous conseiller, même avant intervention. Un premier conseil téléphonique est toujours gratuit. Nous pouvons vous guider pour des petites réparations ou vous expliquer comment arrêter une fuite en attendant notre arrivée.',
        },
        {
            question: 'Travaillez-vous avec les assurances ?',
            answer: "Oui, nous travaillons régulièrement avec les compagnies d'assurance pour les dégâts des eaux. Nous établissons les devis et factures nécessaires à vos déclarations. Nous sommes agréés par la plupart des assureurs belges et connaissons leurs procédures.",
        },
    ]

    const toggleQuestion = (index: number) => {
        setExpandedQuestion(expandedQuestion === index ? null : index)
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-hero text-foreground-light section-padding">
                <div className="container-custom text-center">
                    <h1 className="heading-xl text-brand-orange mb-4">Questions fréquentes</h1>
                    <p className="text-lead max-w-3xl mx-auto text-foreground-light/90">
                        Retrouvez les réponses aux questions les plus courantes sur nos services de
                        plomberie. Une question spécifique ? N'hésitez pas à nous contacter !
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    <button
                                        onClick={() => toggleQuestion(index)}
                                        className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded-lg"
                                    >
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-primary pr-4">
                                                {faq.question}
                                            </h3>
                                            <div className="text-accent flex-shrink-0">
                                                {expandedQuestion === index ? (
                                                    <ChevronUp className="w-5 h-5" />
                                                ) : (
                                                    <ChevronDown className="w-5 h-5" />
                                                )}
                                            </div>
                                        </div>
                                    </button>

                                    {expandedQuestion === index && (
                                        <div className="px-6 pb-6 animate-fade-in">
                                            <div className="pt-4 border-t border-border">
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Still have questions */}
            <section className="section-padding bg-background-section">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="bg-card rounded-lg p-8 lg:p-12 shadow-medium">
                            <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                                <HelpCircle className="w-8 h-8" />
                            </div>
                            <h2 className="heading-md mb-4">Vous avez encore des questions ?</h2>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                Notre équipe est disponible 24h/24 pour répondre à toutes vos
                                questions et vous fournir des conseils personnalisés.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:+3221234567"
                                    className="btn-cta inline-flex items-center justify-center space-x-2"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>Appeler maintenant</span>
                                </a>
                                <Link
                                    href="/contact"
                                    className="btn-outline inline-flex items-center justify-center"
                                >
                                    Nous contacter
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick tips */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-md mb-4">Conseils rapides</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Quelques gestes simples qui peuvent vous éviter des désagréments
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="card-hover">
                            <h3 className="font-semibold text-primary mb-3">En cas de fuite</h3>
                            <p className="text-muted-foreground text-sm">
                                Coupez immédiatement l'arrivée d'eau principale et contactez-nous.
                                Évitez les réparations temporaires qui peuvent aggraver le problème.
                            </p>
                        </div>
                        <div className="card-hover">
                            <h3 className="font-semibold text-primary mb-3">
                                Canalisation bouchée
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Évitez les produits chimiques agressifs qui peuvent endommager vos
                                canalisations. Préférez l'eau chaude et contactez un professionnel.
                            </p>
                        </div>
                        <div className="card-hover">
                            <h3 className="font-semibold text-primary mb-3">Prévention gel</h3>
                            <p className="text-muted-foreground text-sm">
                                En hiver, laissez couler un filet d'eau des robinets exposés au
                                froid et isolez vos canalisations extérieures.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FAQ

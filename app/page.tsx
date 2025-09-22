import {
    Phone,
    PhoneCall,
    Clock,
    CheckCircle,
    Star,
    ArrowRight,
    Wrench,
    Shield,
    Users,
} from 'lucide-react'
import heroPlumber from '@/assets/hero-plumber-Bm3oa420.jpg'

import Link from 'next/link'

export default function Home() {
    const services = [
        {
            icon: <Wrench className="w-8 h-8" />,
            title: 'Dépannage urgent',
            description: 'Intervention 24h/24 pour tous vos problèmes de plomberie urgents.',
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'Réparation de fuites',
            description: "Localisation et réparation rapide de toutes fuites d'eau.",
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: 'Installation sanitaire',
            description: 'Installation complète de salles de bain et équipements sanitaires.',
        },
    ]

    const testimonials = [
        {
            name: 'Marie D.',
            city: 'Bruxelles',
            rating: 5,
            text: 'Service impeccable ! Intervention très rapide et tarif transparent. Je recommande vivement.',
        },
        {
            name: 'Pierre L.',
            city: 'Anvers',
            rating: 5,
            text: 'Plombier professionnel et très compétent. Problème résolu en 30 minutes.',
        },
        {
            name: 'Sophie M.',
            city: 'Gand',
            rating: 5,
            text: 'Excellent service, ponctuel et prix honnête. Travail de qualité garantie.',
        },
    ]

    const steps = [
        { step: '1', title: 'Appelez-nous', description: 'Contactez-nous 24h/24' },
        { step: '2', title: 'Arrivée rapide', description: 'Intervention sous 30 min' },
        { step: '3', title: 'Diagnostic clair', description: 'Devis transparent gratuit' },
        { step: '4', title: 'Travail garanti', description: 'Satisfaction garantie' },
    ]

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-gradient-hero text-foreground-light section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                                    Plombier 24/7 — Intervention rapide partout en{' '}
                                    <span className="text-accent">Belgique</span>
                                </h1>
                                <p className="text-xl lg:text-2xl text-foreground-light/90 leading-relaxed">
                                    Transparence dans notre diagnostic et qualité de travail
                                    garantie.
                                </p>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="trust-badge text-foreground-light/80">
                                    <CheckCircle className="w-4 h-4 text-accent" />
                                    <span>Assuré & Certifié</span>
                                </div>
                                <div className="trust-badge text-foreground-light/80">
                                    <Clock className="w-4 h-4 text-accent" />
                                    <span>Disponible 24h/24</span>
                                </div>
                                <div className="trust-badge text-foreground-light/80">
                                    <Shield className="w-4 h-4 text-accent" />
                                    <span>Travail Garanti</span>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:+32467601247"
                                    className="btn-cta flex items-center justify-center space-x-2 text-center"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span className="text-sm">Appeler maintenant</span>
                                </a>
                                <Link
                                    href="/contact"
                                    className="btn-outline text-foreground-light border-foreground-light hover:bg-foreground-light hover:text-primary flex items-center justify-center space-x-2 text-center"
                                >
                                    <PhoneCall className="w-4 h-4" />
                                    <span>Demandez un appel</span>
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative z-10 rounded-lg overflow-hidden shadow-large">
                                <img
                                    src={heroPlumber.src}
                                    alt="Plombier professionnel en Belgique avec outils de qualité"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="absolute -top-4 -right-4 w-full h-full bg-accent/20 rounded-lg -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            {/* <section className="section-padding bg-background-section"> */}
            {/*     <div className="container-custom"> */}
            {/*         <div className="text-center mb-16"> */}
            {/*             <h2 className="heading-lg mb-4">Comment ça marche ?</h2> */}
            {/*             <p className="text-lead max-w-2xl mx-auto"> */}
            {/*                 Un processus simple et transparent pour résoudre vos problèmes de */}
            {/*                 plomberie rapidement. */}
            {/*             </p> */}
            {/*         </div> */}
            {/**/}
            {/*         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
            {/*             {steps.map((step, index) => ( */}
            {/*                 <div key={index} className="text-center group"> */}
            {/*                     <div className="relative mb-6"> */}
            {/*                         <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300"> */}
            {/*                             {step.step} */}
            {/*                         </div> */}
            {/*                         {index < steps.length - 1 && ( */}
            {/*                             <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2"> */}
            {/*                                 <ArrowRight className="absolute -top-2 right-0 w-4 h-4 text-muted-foreground" /> */}
            {/*                             </div> */}
            {/*                         )} */}
            {/*                     </div> */}
            {/*                     <h3 className="heading-sm mb-2">{step.title}</h3> */}
            {/*                     <p className="text-muted-foreground">{step.description}</p> */}
            {/*                 </div> */}
            {/*             ))} */}
            {/*         </div> */}
            {/*     </div> */}
            {/* </section> */}

            {/* Services Preview */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="heading-lg mb-4">Nos services de plomberie</h2>
                        <p className="text-lead max-w-2xl mx-auto">
                            Une gamme complète de services de plomberie pour répondre à tous vos
                            besoins.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {services.map((service, index) => (
                            <div key={index} className="card-hover text-center">
                                <div className="text-accent mb-4 flex justify-center">
                                    {service.icon}
                                </div>
                                <h3 className="heading-sm mb-3">{service.title}</h3>
                                <p className="text-muted-foreground mb-4">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            href="/services"
                            className="btn-primary inline-flex items-center space-x-2"
                        >
                            <span>Voir tous nos services</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding bg-background-section">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="heading-lg mb-4">Ce que disent nos clients</h2>
                        <p className="text-lead max-w-2xl mx-auto">
                            La satisfaction de nos clients est notre priorité absolue.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="card-hover">
                                {/* <div className="flex items-center mb-4"> */}
                                {/*     <div className="flex space-x-1"> */}
                                {/*         {[...Array(testimonial.rating)].map((_, i) => ( */}
                                {/*             <Star */}
                                {/*                 key={i} */}
                                {/*                 className="w-4 h-4 fill-accent text-accent" */}
                                {/*             /> */}
                                {/*         ))} */}
                                {/*     </div> */}
                                {/* </div> */}
                                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                                <div className="text-sm text-muted-foreground">
                                    <strong>{testimonial.name}</strong> - {testimonial.city}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-primary text-primary-foreground">
                <div className="container-custom text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                        Besoin d'un plombier maintenant ?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
                        Nos experts sont disponibles 24h/24 pour résoudre tous vos problèmes de
                        plomberie.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+32467601247"
                            className="btn-cta flex items-center justify-center space-x-2 text-center"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Appeler maintenant</span>
                        </a>
                        <Link
                            href="/contact"
                            className="btn-outline text-foreground-light border-foreground-light hover:bg-foreground-light hover:text-primary flex items-center justify-center space-x-2 text-center"
                        >
                            <PhoneCall className="w-4 h-4" />
                            <span>Demandez un appel</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

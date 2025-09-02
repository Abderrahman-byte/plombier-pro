'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        issueType: '',
        message: '',
        preferredTime: '',
        requestCallback: false,
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Handle form submission here
        console.log('Form submitted:', formData)
        // You would typically send this to your backend
        alert('Merci pour votre demande ! Nous vous recontacterons dans les plus brefs délais.')
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
        const { name, value, type } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }))
    }

    const issueTypes = [
        'Urgence plomberie',
        "Fuite d'eau",
        'Canalisation bouchée',
        'Installation sanitaire',
        'Réparation robinetterie',
        'Autre problème',
    ]

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
                                                href="tel:+3221234567"
                                                className="text-accent hover:text-accent/80 font-semibold text-lg transition-colors duration-300"
                                            >
                                                +32 2 123 45 67
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
                                    href="tel:+3221234567"
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
                                <h2 className="heading-md mb-6">Demander un devis gratuit</h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-primary mb-2"
                                            >
                                                Nom complet *
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="form-input pl-10"
                                                    placeholder="Votre nom"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block text-sm font-medium text-primary mb-2"
                                            >
                                                Téléphone *
                                            </label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="form-input pl-10"
                                                    placeholder="+32 X XX XX XX XX"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-primary mb-2"
                                        >
                                            Email
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-input pl-10"
                                                placeholder="votre@email.be"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="address"
                                            className="block text-sm font-medium text-primary mb-2"
                                        >
                                            Adresse d'intervention *
                                        </label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                            <input
                                                type="text"
                                                id="address"
                                                name="address"
                                                required
                                                value={formData.address}
                                                onChange={handleChange}
                                                className="form-input pl-10"
                                                placeholder="Rue, ville, code postal"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="issueType"
                                                className="block text-sm font-medium text-primary mb-2"
                                            >
                                                Type de problème *
                                            </label>
                                            <select
                                                id="issueType"
                                                name="issueType"
                                                required
                                                value={formData.issueType}
                                                onChange={handleChange}
                                                className="form-input"
                                            >
                                                <option value="">Sélectionnez un type</option>
                                                {issueTypes.map((type, index) => (
                                                    <option key={index} value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="preferredTime"
                                                className="block text-sm font-medium text-primary mb-2"
                                            >
                                                Moment préféré
                                            </label>
                                            <select
                                                id="preferredTime"
                                                name="preferredTime"
                                                value={formData.preferredTime}
                                                onChange={handleChange}
                                                className="form-input"
                                            >
                                                <option value="">Pas de préférence</option>
                                                <option value="morning">Matin (8h-12h)</option>
                                                <option value="afternoon">
                                                    Après-midi (12h-17h)
                                                </option>
                                                <option value="evening">Soirée (17h-20h)</option>
                                                <option value="asap">Dès que possible</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-primary mb-2"
                                        >
                                            Description du problème *
                                        </label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="form-textarea pl-10"
                                                placeholder="Décrivez votre problème de plomberie en détail..."
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <input
                                            type="checkbox"
                                            id="requestCallback"
                                            name="requestCallback"
                                            checked={formData.requestCallback}
                                            onChange={handleChange}
                                            className="w-4 h-4 text-accent border-border rounded focus:ring-accent"
                                        />
                                        <label
                                            htmlFor="requestCallback"
                                            className="text-sm text-muted-foreground"
                                        >
                                            Je souhaite être rappelé(e) dans l'heure
                                        </label>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="btn-cta w-full inline-flex items-center justify-center space-x-2"
                                        >
                                            <Send className="w-4 h-4" />
                                            <span>Envoyer ma demande</span>
                                        </button>
                                        <p className="text-xs text-muted-foreground mt-3 text-center">
                                            En envoyant ce formulaire, vous acceptez notre politique
                                            de confidentialité. Vos données ne seront jamais
                                            partagées avec des tiers.
                                        </p>
                                    </div>
                                </form>
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

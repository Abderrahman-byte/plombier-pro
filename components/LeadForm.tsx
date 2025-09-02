'use client'

import { LeadBody } from '@/lib/airtable'
import { Mail, MapPin, MessageSquare, Phone, Send, User } from 'lucide-react'
import { useState } from 'react'

export default function LeadFrom() {
    const [formData, setFormData] = useState<LeadBody>({
        name: '',
        phone: '',
        email: '',
        address: '',
        issueType: '',
        description: '',
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        await fetch('/api/leads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

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
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
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
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
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
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
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
                <label htmlFor="address" className="block text-sm font-medium text-primary mb-2">
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

            <div>
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
            </div>

            <div>
                <label
                    htmlFor="description"
                    className="block text-sm font-medium text-primary mb-2"
                >
                    Description du problème *
                </label>
                <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <textarea
                        id="description"
                        name="description"
                        required
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        className="form-textarea pl-10"
                        placeholder="Décrivez votre problème de plomberie en détail..."
                    />
                </div>
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
                    En envoyant ce formulaire, vous acceptez notre politique de confidentialité. Vos
                    données ne seront jamais partagées avec des tiers.
                </p>
            </div>
        </form>
    )
}

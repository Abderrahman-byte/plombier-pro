import { Calendar, User, Clock, ArrowRight } from 'lucide-react'
import { articles } from '@/data/articles'
import Link from 'next/link'

const Blog = () => {
    const categories = ['Tous', ...Array.from(new Set(articles.map((a) => a.category)))]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-soft py-16 md:py-24">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="heading-1 mb-6">Blog Plomberie</h1>
                        <p className="text-lg text-muted-foreground">
                            Conseils, astuces et actualités pour l'entretien de votre plomberie
                        </p>
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16 md:py-24">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article) => (
                            <article
                                key={article.id}
                                className="card-elevated group hover:shadow-glow transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden rounded-t-lg">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="badge-category">{article.category}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Meta */}
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <time dateTime={article.date}>
                                                {new Date(article.date).toLocaleDateString(
                                                    'fr-BE',
                                                    {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    },
                                                )}
                                            </time>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{article.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                                        {article.title}
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="text-muted-foreground mb-4 line-clamp-3">
                                        {article.excerpt}
                                    </p>

                                    {/* Author & Read More */}
                                    <div className="flex items-center justify-between pt-4 border-t border-border">
                                        <div className="flex items-center gap-2 text-sm">
                                            <User className="w-4 h-4 text-muted-foreground" />
                                            <span className="text-muted-foreground">
                                                {article.author}
                                            </span>
                                        </div>
                                        <Link
                                            href={`/blog/${article.slug}`}
                                            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-300"
                                        >
                                            Lire plus
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-background-section">
                <div className="container-custom">
                    <div className="card-elevated text-center max-w-2xl mx-auto p-8 md:p-12">
                        <h2 className="heading-2 mb-4">Besoin d'un plombier professionnel ?</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Notre équipe intervient 24/7 partout en Belgique pour tous vos besoins
                            en plomberie
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:+3221234567" className="btn-cta">
                                Appeler maintenant
                            </a>
                            <Link href="/contact" className="btn-secondary">
                                Demander un devis
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog

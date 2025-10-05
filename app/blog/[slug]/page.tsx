import { Calendar, User, Clock, ArrowLeft } from 'lucide-react'
import { articles } from '@/data/articles'
import Link from 'next/link'
import { Metadata } from 'next'

import { redirect } from 'next/navigation'

export async function generateMetadata({
    params,
}: {
    params: { slug: string }
}): Promise<Metadata> {
    const article = articles.find((a) => a.slug === params.slug)

    if (!article) {
        return {
            title: 'Article introuvable | HydroPlombier',
            description: "Cet article n'existe pas.",
        } as Metadata
    }

    return {
        title: article.titleSEO,
        description: article.description,
        openGraph: {
            title: article.title,
            description: article.description,
            url: `https://example.com/blog/${article.slug}`,
            type: 'article',
            images: [
                {
                    url: article.image,
                    width: 1200,
                    height: 630,
                    alt: article.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.description,
            images: [article.image],
        },
    } as Metadata
}

const BlogArticle = ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    const article = articles.find((a) => a.slug === slug)

    if (!article) {
        return redirect('/blog')
    }

    const relatedArticles = articles
        .filter((a) => a.id !== article.id && a.category === article.category)
        .slice(0, 3)

    return (
        <div className="min-h-screen">
            {/* Hero Image */}
            <div className="relative h-64 md:h-96 overflow-hidden">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            </div>

            {/* Article Content */}
            <article className="py-12 md:py-16">
                <div className="container-custom max-w-4xl">
                    {/* Back Button */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all duration-300 mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Retour au blog
                    </Link>

                    {/* Header */}
                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="badge-category">{article.category}</span>
                        </div>

                        <h1 className="heading-1 mb-6">{article.title}</h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{article.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <time dateTime={article.date}>
                                    {new Date(article.date).toLocaleDateString('fr-BE', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </time>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{article.readTime} de lecture</span>
                            </div>
                        </div>
                    </header>

                    {/* Article Body */}
                    <div
                        className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-foreground
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:my-4 prose-li:text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </div>
            </article>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className="py-16 bg-background-section">
                    <div className="container-custom">
                        <h2 className="heading-2 text-center mb-12">Articles similaires</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedArticles.map((related) => (
                                <Link
                                    key={related.id}
                                    href={`/blog/${related.slug}`}
                                    className="card-elevated group hover:shadow-glow transition-all duration-300"
                                >
                                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                                        <img
                                            src={related.image}
                                            alt={related.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors duration-300">
                                            {related.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {related.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="card-elevated text-center max-w-2xl mx-auto p-8 md:p-12">
                        <h2 className="heading-2 mb-4">Besoin d'aide avec votre plomberie ?</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Notre équipe est disponible 24/7 pour répondre à toutes vos urgences
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:+3221234567" className="btn-cta">
                                Appeler maintenant
                            </a>
                            <Link href="/contact" className="btn-secondary">
                                Demander un rappel
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogArticle

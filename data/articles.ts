export interface Article {
    id: string
    slug: string
    title: string
    titleSEO: string
    description: string
    excerpt: string
    content: string
    image: string
    date: string
    category: string
    readTime: string
    author: string
}

export const articles: Article[] = [
    {
        id: '1',
        slug: 'prevenir-fuites-entretien-plomberie',
        title: 'Prévenir les fuites d’eau et entretenir sa plomberie',
        image: '/images/serious-technician-plumber-uniform-checking-600nw-2131415245.webp',
        titleSEO:
            'Prévenir les fuites d’eau : guide d’entretien maison | HydroPlombier',
        description:
            'Évitez les urgences et réduisez votre facture d’eau grâce à des vérifications simples, un entretien saisonnier et les bons réflexes de plomberie.',
        date: '2025-09-15',
        category: 'Entretien',
        readTime: '5 min',
        author: 'Martin',
        excerpt:
            'Évitez les urgences et réduisez votre facture d’eau avec des vérifications simples, un entretien saisonnier et les bons réflexes.',
        content: `
            <header class="mb-6">
                <p class="text-sm text-gray-600 mt-2">Évitez les urgences et réduisez votre facture d’eau avec des vérifications simples, un entretien saisonnier et les bons réflexes.</p>
            </header>

            <section id="tldr" class="mb-6">
                <h2 class="text-xl font-semibold">TL;DR</h2>
                <p class="text-base text-gray-700">Les fuites d’eau s’installent souvent progressivement et coûtent cher. Vérifiez le compteur, inspectez les zones humides, testez les toilettes, isolez les tuyaux exposés avant l’hiver et remplacez les joints qui fuient. Faites appel à un plombier si la fuite est persistante ou si des dégâts apparaissent.</p>
            </section>

            <figure class="mb-6">
                <img src="/images/featured-plombier-compteur.webp" alt="Plombier inspectant un compteur d'eau" class="w-full h-56 object-cover rounded-md shadow-sm" />
                <figcaption class="text-sm text-gray-500 mt-2">Inspection régulière du compteur : geste simple pour détecter une fuite cachée.</figcaption>
            </figure>

            <section id="pourquoi" class="mb-6">
                <h2 class="text-xl font-semibold">Pourquoi prévenir plutôt que réparer ?</h2>
                <p class="text-gray-700">Une petite fuite non traitée peut provoquer moisissures, dégâts structurels et augmentation de la facture d’eau. L’entretien régulier prolonge la durée de vie des installations, évite les interventions d’urgence et protège la valeur du logement.</p>
            </section>

            <section id="causes" class="mb-6">
                <h2 class="text-xl font-semibold">Causes courantes de fuites</h2>
                <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Joints usés :</strong> mitigeurs, siphons et raccords sont souvent responsables.</li>
                <li><strong>Tuyauterie corrodée :</strong> les réseaux anciens en cuivre ou acier peuvent se fragiliser.</li>
                <li><strong>Fuites invisibles :</strong> sous carrelage ou dans les murs, difficiles à repérer sans appareil.</li>
                <li><strong>Pression trop élevée :</strong> provoque microfuites et fatigue des installations.</li>
                <li><strong>Gel hivernal :</strong> tuyaux exposés qui éclatent si non isolés.</li>
                </ul>
            </section>

            <section id="verifications" class="mb-6">
                <h2 class="text-xl font-semibold">Vérifications rapides (à faire tous les mois)</h2>
                <ol class="list-decimal list-inside text-gray-700 space-y-3">
                <li><strong>Contrôler le compteur :</strong> notez la lecture, coupez toute eau 30 minutes ; si le compteur tourne → suspecter une fuite.</li>
                <li><strong>Inspecter les joints visibles :</strong> trace d’humidité sous évier ou autour des lavabos.</li>
                <li><strong>Tester les toilettes :</strong> quelques gouttes de colorant dans la cuve ; si la cuvette se colore sans chasse, il y a une fuite.</li>
                <li><strong>Regarder sols et plinthes :</strong> taches, cloques ou gonflements indiquent une infiltration.</li>
                <li><strong>Vérifier la pression :</strong> idéalement entre 2 et 3 bars pour un logement standard (ou demander à un pro de régler).</li>
                </ol>
            </section>

            <section id="entretien" class="mb-6">
                <h2 class="text-xl font-semibold">Entretien saisonnier</h2>

                <div class="mt-3">
                <h3 class="text-lg font-medium">Printemps</h3>
                <p class="text-gray-700">Nettoyez siphons, vérifiez les raccords après l’hiver, remettez en service et purgez les appareils peu utilisés.</p>
                </div>

                <div class="mt-3">
                <h3 class="text-lg font-medium">Avant l’hiver</h3>
                <p class="text-gray-700">Isolez les tuyaux exposés, vidangez les circuits extérieurs (arrosage, robinets de jardin) et faites contrôler la chaudière/chauffe-eau.</p>
                </div>

                <div class="mt-3">
                <h3 class="text-lg font-medium">Annuel</h3>
                <p class="text-gray-700">Prévoyez un contrôle professionnel du chauffe-eau (détartrage si nécessaire) et une vérification générale de la robinetterie et de la pression.</p>
                </div>
            </section>

            <section id="gestes" class="mb-6">
                <h2 class="text-xl font-semibold">Gestes simples et économiques</h2>
                <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>Ne versez jamais de graisse ni d’huile dans les évacuations.</li>
                <li>Installez des filtres sur les bondes pour retenir restes alimentaires et cheveux.</li>
                <li>Utilisez un furet ou un piston avant d’employer des produits chimiques agressifs.</li>
                <li>Fermez l’arrivée d’eau principale pendant de longues absences.</li>
                <li>Remplacez immédiatement un joint qui goutte — faible coût, grand impact.</li>
                </ul>
            </section>

            <section id="quand-appeler" class="mb-6">
                <h2 class="text-xl font-semibold">Quand faire appel à un plombier professionnel ?</h2>
                <p class="text-gray-700">Contactez un professionnel si vous observez :</p>
                <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>une fuite continue et difficile à localiser ;</li>
                <li>une baisse importante de pression sur plusieurs points d’eau ;</li>
                <li>des bruits de coups ou raclements dans les tuyaux ;</li>
                <li>des signes de moisissures, plafonds tachés ou cloques sur la peinture ;</li>
                <li>un problème de chauffe-eau (pas d’eau chaude ou fuite importante).</li>
                </ul>
                <p class="mt-3 text-gray-700">La détection non destructive (caméra ou capteurs) limite les travaux inutiles et permet un devis précis.</p>
            </section>

            <section id="hydroplombier" class="mb-6">
                <h2 class="text-xl font-semibold">Comment HydroPlombier peut vous aider</h2>
                <p class="text-gray-700">Nos services : diagnostics complets (détection non destructive), entretien et détartrage de chauffe-eau, remplacement de robinets et joints, isolation anti-gel, régulation de pression, et devis clairs.</p>
                <p class="mt-4">
                <a href="/contact" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-sm" aria-label="Contacter HydroPlombier pour un diagnostic">Demandez un diagnostic</a>
                </p>
            </section>

            <section id="faq" class="mb-6">
                <h2 class="text-xl font-semibold">FAQ</h2>
                <dl class="mt-3 space-y-4">
                <div>
                    <dt class="font-medium">Comment repérer une fuite invisible ?</dt>
                    <dd class="text-gray-700">Surveillez votre facture d’eau (augmentation inhabituelle), testez le compteur à vide et inspectez pour taches humides, odeur de moisi ou décoloration des murs/plafond.</dd>
                </div>

                <div>
                    <dt class="font-medium">Les produits déboucheurs sont-ils dangereux pour les canalisations ?</dt>
                    <dd class="text-gray-700">Oui — l’usage fréquent peut altérer les tuyaux et les joints. Préférez les méthodes mécaniques (furet, piston) et réservez les produits chimiques aux cas extrêmes.</dd>
                </div>

                <div>
                    <dt class="font-medium">Combien coûte une intervention pour une petite fuite ?</dt>
                    <dd class="text-gray-700">Le coût dépend de l’accès et de la nature de la fuite : remplacement de joint (peu cher) vs recherche de fuite sous carrelage (plus onéreuse). Demandez toujours un devis écrit.</dd>
                </div>
                </dl>
            </section>

            <section id="conclusion" class="mb-6">
                <h2 class="text-xl font-semibold">Conclusion</h2>
                <p class="text-gray-700">Un entretien simple et des vérifications régulières permettent d’éviter le stress, les factures élevées et les dégâts coûteux. Adoptez les gestes présentés et n’hésitez pas à faire intervenir un professionnel aux premiers signes inquiétants — prévenir coûte souvent bien moins cher que réparer.</p>
            </section>

            <footer class="text-sm text-gray-600">
                <p>Besoin d’aide ? <a href="/contact" class="text-blue-600 underline">Contactez HydroPlombier</a> pour un diagnostic ou une intervention rapide.</p>
            </footer>
        `,
    },
    {
        id: '2',
        slug: 'deboucher-canalisations-methodes-ecologiques',
        title: 'Comment déboucher et entretenir ses canalisations — méthodes efficaces et écologiques',
        titleSEO:
            'Déboucher les canalisations : méthodes et prévention | HydroPlombier',
        description:
            'Découvrez des astuces sûres et écologiques pour déboucher et entretenir vos canalisations, avec alternatives chimiques, entretien régulier et alertes.',
        excerpt:
            'Des astuces sûres et écologiques pour déboucher et entretenir vos canalisations — alternatives aux produits chimiques, entretien régulier et signes d’alerte.',
        content: `
    <header class="mb-6">
      <p class="text-sm text-gray-600 mt-2">Des solutions pratiques, économiques et respectueuses des tuyaux pour traiter et prévenir les obstructions domestiques.</p>
    </header>

    <section id="intro" class="mb-6">
      <h2 class="text-xl font-semibold">Introduction</h2>
      <p class="text-gray-700">Les canalisations bouchées sont une gêne fréquente : odeurs, refoulement d’eau, risque de dégâts. Avant d’utiliser des produits chimiques agressifs, essayez des méthodes mécaniques et des recettes écologiques — plus sûres pour vos tuyaux et pour l’environnement.</p>
    </section>

    <section id="causes" class="mb-6">
      <h2 class="text-xl font-semibold">Causes courantes d’obstruction</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Accumulation de graisse</strong> dans la cuisine qui se solidifie au fil du temps.</li>
        <li><strong>Cheveux et savons</strong> dans la salle de bain qui forment des amas.</li>
        <li><strong>Restes alimentaires</strong> et résidus qui passent le filtre ou s’accumulent dans la colonne.</li>
        <li><strong>Objets étrangers</strong> (jouets, lingettes) qui bloquent partiellement la canalisation.</li>
      </ul>
    </section>

    <section id="methode-rapide" class="mb-6">
      <h2 class="text-xl font-semibold">Méthodes rapides et sûres</h2>

      <h3 class="text-lg font-medium mt-3">1. Le piston (ventouse)</h3>
      <p class="text-gray-700">C’est la première arme : remplissez légèrement la bonde, positionnez la ventouse, pompez énergiquement puis retirez. Répétez plusieurs fois si nécessaire.</p>

      <h3 class="text-lg font-medium mt-3">2. Le furet manuel</h3>
      <p class="text-gray-700">Insérez le furet dans la canalisation, tournez la manivelle pour accrocher et extraire l’obstruction. Idéal pour cheveux et amas localisés.</p>

      <h3 class="text-lg font-medium mt-3">3. Dévisser et nettoyer le siphon</h3>
      <p class="text-gray-700">Placez un seau, dévissez le siphon sous l’évier ou lavabo, nettoyez le goulot et les joints. C’est souvent là que s’accumulent graisses et résidus.</p>
    </section>

    <section id="solutions-ecologiques" class="mb-6">
      <h2 class="text-xl font-semibold">Solutions écologiques (évitez les déboucheurs chimiques)</h2>
      <p class="text-gray-700">Les déboucheurs vendus en grande surface contiennent des produits corrosifs qui fragilisent les tuyaux et polluent. Voici des alternatives efficaces :</p>
      <ul class="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Vinaigre blanc + bicarbonate :</strong> versez 120 g de bicarbonate, puis 200 ml de vinaigre chaud ; couvrez la bonde 10–15 min, puis rincez à l’eau bouillante.</li>
        <li><strong>Eau bouillante :</strong> pour les dépôts de graisse, versez de l’eau bouillante (par petites quantités) pour dissoudre les graisses accumulées.</li>
        <li><strong>Déboucheur enzymatique :</strong> il utilise des enzymes pour digérer les résidus organiques et est compatible avec la plupart des installations.</li>
      </ul>
    </section>

    <section id="prevention" class="mb-6">
      <h2 class="text-xl font-semibold">Prévention : gestes simples et réguliers</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2">
        <li>Installez des grilles ou crépines sur les bondes pour retenir cheveux et débris.</li>
        <li>Évitez de verser graisses et huiles dans l’évier ; jetez-les dans un récipient recyclable.</li>
        <li>Faites couler de l’eau chaude régulièrement après la vaisselle pour limiter les dépôts graisseux.</li>
        <li>Nettoyez le siphon tous les 3–6 mois si usage intensif.</li>
        <li>Ne jetez jamais de lingettes, coton-tiges ou serviettes hygiéniques dans les toilettes — elles obstruent la fosse et la colonne.</li>
      </ul>
    </section>

    <section id="signes" class="mb-6">
      <h2 class="text-xl font-semibold">Signes indiquant une obstruction sérieuse</h2>
      <p class="text-gray-700">Appelez un professionnel si vous constatez :</p>
      <ul class="list-disc list-inside text-gray-700 space-y-2">
        <li>Refoulement d’eau (plusieurs appareils affectés).</li>
        <li>Écoulement très lent malgré les méthodes manuelles.</li>
        <li>Mauvaises odeurs persistantes malgré nettoyage.</li>
        <li>Bruitage de canalisation (bulles, gargouillis) après avoir utilisé d’autres appareils.</li>
      </ul>
    </section>

    <section id="quand-pro" class="mb-6">
      <h2 class="text-xl font-semibold">Quand faire appel à HydroPlombier</h2>
      <p class="text-gray-700">Pour recherche d’obstruction en profondeur, curage, débouchage haute pression ou si le problème est récurrent, une intervention professionnelle évite des dégâts et un surcoût ultérieur. Nous proposons :</p>
      <ul class="list-disc list-inside text-gray-700 space-y-2">
        <li>Inspection par caméra pour localiser précisément l’obstruction.</li>
        <li>Débouchage à haute pression (sans casse) pour canalisations encombrées.</li>
        <li>Conseils personnalisés et plan d’entretien préventif.</li>
      </ul>
      <p class="mt-4"><a href="/contact" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-sm">Demandez un rendez-vous</a></p>
    </section>

    <section id="faq" class="mb-6">
      <h2 class="text-xl font-semibold">FAQ rapide</h2>
      <dl class="mt-3 space-y-4 text-gray-700">
        <div>
          <dt class="font-medium">Les recettes maison sont-elles vraiment efficaces ?</dt>
          <dd>Oui pour les bouchons légers (graisse, savon, cheveux). Pour les obstructions profondes ou mécaniques, il faudra un furet professionnel ou une inspection caméra.</dd>
        </div>

        <div>
          <dt class="font-medium">À quelle fréquence entretenir mes canalisations ?</dt>
          <dd>Un contrôle / nettoyage léger tous les 6 mois pour la cuisine et la salle de bain suffit dans la plupart des foyers. Si vous avez un grand nombre d'occupants ou un usage intensif, passez à tous les 3 mois.</dd>
        </div>
      </dl>
    </section>

    <section id="conclusion" class="mb-6">
      <h2 class="text-xl font-semibold">Conclusion</h2>
      <p class="text-gray-700">Prévenir est toujours plus simple que réparer : des gestes réguliers, des protections simples et des méthodes écologiques limitent grandement les risques d’obstruction. En cas de doute, mieux vaut consulter un professionnel pour éviter des interventions plus lourdes.</p>
    </section>

    <footer class="text-sm text-gray-600">
      <p>Besoin d’aide ? <a href="/contact" class="text-blue-600 underline">Contactez HydroPlombier</a> pour un diagnostic ou un débouchage professionnel.</p>
    </footer>
  `,
        image: '/images/debouchage-ecologique.webp',
        date: '2025-09-20',
        category: 'Entretien',
        readTime: '6 min',
        author: 'Martin leblanc',
    },
]

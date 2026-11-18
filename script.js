const PRICE_PER_BAG = 12;

const PRODUCT_CATALOG = {
    normal_nka: {
        id: 'normal_nka',
        category: {
            cv: 'Categoria 1 — Bolacha Normal Tradicional',
            pt: 'Categoria 1 — Bolacha Normal Tradicional',
            fr: 'Catégorie 1 — Biscuit Normal Traditionnel',
            en: 'Category 1 — Traditional Regular Cookie'
        },
        name: 'Bolacha Branca NKA (Normal)',
        tasteNote: {
            cv: '✨ Receita klássika: farinha normal, leiti, manteiga i açúcar tradicional.',
            pt: '✨ Receita clássica: farinha tradicional, leite, manteiga e açúcar.',
            fr: '✨ Recette classique : farine traditionnelle, lait, beurre et sucre.',
            en: '✨ Classic recipe: traditional flour, milk, butter, and sugar.'
        }
    },
    natural_eta: {
        id: 'natural_eta',
        category: {
            cv: 'Categoria 2 — Bolacha Natural Especial da Casa',
            pt: 'Categoria 2 — Bolacha Natural Especial da Casa',
            fr: 'Catégorie 2 — Biscuit Naturel Spécialité Maison',
            en: 'Category 2 — House Special Natural Cookie'
        },
        name: 'Bolacha Preta Natural ÊTA (Espelta & Tâmaras)',
        tasteNote: {
            cv: '🌿 Farinha di espelta pura, tâmaras, leiti i óliu di koku (Sen Lactose & Sen Açúcar Refinadu).',
            pt: '🌿 Farinha de espelta pura, tâmaras, leite e óleo de coco (Sem Lactose & Sem Açúcar Refinado).',
            fr: '🌿 Farine d’épeautre pure, dattes, lait et huile de coco (Sans Lactose & Sans Sucre Raffiné).',
            en: '🌿 Pure spelt flour, dates, coconut milk & coconut oil (Lactose-Free & No Refined Sugar).'
        }
    }
};

let cart = {};

const translations = {
    cv: {
        topBanner: "⚠️ Resta apénas 14 saku di fornada artesanal dês simana na Suíça — Garanti bu kaixa antis ki kaba.",
        brandTagline: "Haute Pâtisserie Artesanal di Cabo Verde • Suíça",
        cvSeal: "🇨🇻 Edição Limitada • Suíça",
        heroBadge: "✨ Koleson Gastronómika di Nôz Ilhas",
        heroTitle: "Krokância Dourada, Aroma di Fornu i Alma Pura di Cabo Verde",
        heroSubtitle: "Dôs kaza artesanal djuntu na un receita di família moldadu na mô. Textura estaladiçu ki ta derreti na boka — assadu na lotis semanal i entregue fresku na Suíça intera.",
        pill1: "100% Artesanal & Fresku",
        pill2: "Receita Klássika & Espelta Pura",
        pill3: "Entréga Diretu na Suíça",
        heritageSub: "Savoir-Faire Úniku",
        heritageTitle: "Excelência di Kada Fornada",
        step1Title: "Ingridientis Nobri",
        step1Desc: "Transparência total: désdi receita tradicional ku manteiga i leiti ti spesialidadi di kaza ku farinha di espelta pura, tâmaras, leiti i óliu di koku.",
        step2Title: "Mô di Mestre",
        step2Desc: "Kada bolacha é moldadu na mô sigindu saber ancestral di gerason pa gerason entri Kebra-Djundjun i Sabores da Veiga.",
        step3Title: "Kozedura Lenta",
        step3Desc: "Fornu kontroladu pa sela textura krokanti pa fora, suavi pa dentu i perfume irresistível.",
        pairingTitle: "☕ Ritual Sensorial di Degustason",
        pairingDesc: "Imagina kel estalar suavi di bolacha Kebra-Djundjun × Sabores da Veiga djuntu ku bu kafé espresso ou chá quenti aromátiku.",
        calcTitle: "Monta Bu Kaixa Artesanal",
        calcSub: "Skodji un kaixa pré-selecionadu ou mistura livrimenti • 12 CHF pa saku",
        quickLabel: "⚡ Seléçon Rápidu di Degustaçon (1 Kliki):",
        preset1Title: "Kaixa Descoberta (2 Sakus)",
        preset2Title: "Kaixa Família Gourmet (4 Sakus)",
        catNormalTitle: "✨ Categoria 1 — Bolacha Normal Tradicional (NKA / Branca)",
        catNormalIng: "Farinha tradicional • Leiti • Manteiga • Açúcar",
        descNka: "Verdadeira essência di infância na ilhas. Textura delicadu, amanteigadu i krokanti ki ta desmancha na boka.",
        catNaturalTitle: "🌿 Categoria 2 — Bolacha Natural Especial da Casa (ÊTA / Preta)",
        catNaturalIng: "Farinha di Espelta Pura • Tâmaras • Leiti di Koku • Óliu di Koku (Sem Lactose & Sem Açúcar Refinadu)",
        descEta: "Obra-prima rústika di kaza. Fetu ku farinha di espelta 100% pura, adoçadu ku tâmaras i enrikecidu ku leiti i óliu di koku fresku.",
        btnAdd: "+ Poi na Panier",
        panierTitle: "Bu Panier (Seléçon pa Produtor)",
        emptyPanier: "Inda bu ka poi bolacha. Skodji riba entri Categoria 1 (Branca NKA) ou Categoria 2 (Preta Natural ÊTA).",
        subtotalText: "Subtotal di Produtus:",
        shipNote: "Portes di entréga na Suíça ta ser kalkuladu na WhatsApp ku produtor di acordu ku morada exata.",
        payPrefLabel: "💳 Modi ki bu ta prefiri paga?",
        payTwintDesc: "(Recebi pididu/QR TWINT na WhatsApp)",
        payBankTitle: "Transferência / IBAN",
        payBankDesc: "(Dadus mandadu na WhatsApp)",
        payDirectTitle: "Kombina na WhatsApp",
        payDirectDesc: "(Pagamentu antis ou na entréga)",
        giftLabel: "🎁 É pa oferta? Mensagem na kaixa (opcional):",
        giftPlaceholder: "Ex: Parabéns! Ku karinhu...",
        addressLabel: "Morada Kompletu di Entréga na Suíça:",
        addressPlaceholder: "Rua, Número, Código Postal i Cidade (Ex: Rue du Rhône 40, 1204 Genève)",
        ctaBtn: "Garanti Nha Kaixa Artesanal & Kalkula Portes",
        socialTitle: "📱 Bastidõris & Fornadas Fresku di Nôz Dôs Kaza",
        socialDesc: "Sigui páginas oficiais di Kebra-Djundjun i Sabores da Veiga na Instagram i TikTok.",
        artisanSig: "“Fetu na mô ku korason na Cabo Verde i saboreadu ku alma na Suíça — Kebra-Djundjun × Sabores da Veiga.”",
        footerLegal: "Termos di Encomenda & Privacidade. Categoria 1 (NKA): farinha tradicional, leiti, manteiga i açúcar. Categoria 2 (ÊTA): farinha di espelta pura, tâmaras, leiti i óliu di koku."
    },
    pt: {
        topBanner: "⚠️ Restam apenas 14 sacos da fornada artesanal desta semana na Suíça — Garanta a sua caixa antes que esgote.",
        brandTagline: "Haute Pâtisserie Artesanal de Cabo Verde • Suíça",
        cvSeal: "🇨🇻 Edição Limitada • Suíça",
        heroBadge: "✨ Coleção Gastronómica das Ilhas",
        heroTitle: "Crocância Dourada, Aroma de Forno e a Alma Pura de Cabo Verde",
        heroSubtitle: "Duas casas artesanais unidas numa receita familiar moldada à mão. Textura estaladiça que derrete na boca e desperta memórias das ilhas — assada em lotes semanais estritos e entregue fresca em toda a Suíça.",
        pill1: "100% Artesanal & Fresco",
        pill2: "Receita Clássica & Espelta Pura",
        pill3: "Entrega Direta na Suíça",
        heritageSub: "Savoir-Faire Único",
        heritageTitle: "A Excelência por Trás de Cada Fornada",
        step1Title: "Ingredientes Nobres",
        step1Desc: "Transparência total: desde a receita tradicional com manteiga e leite até à especialidade da casa com farinha de espelta pura, tâmaras, leite e óleo de coco.",
        step2Title: "Mãos de Mestre",
        step2Desc: "Cada bolacha é moldada manualmente seguindo o saber ancestral transmitido de geração em geração entre Kebra-Djundjun e Sabores da Veiga.",
        step3Title: "Cozedura Lenta",
        step3Desc: "Forno controlado ao minuto para selar a textura estaladiça por fora, suave por dentro e o perfume irresistível de fornada acabada de sair.",
        pairingTitle: "☕ O Ritual Sensorial de Degustação",
        pairingDesc: "Imagine o estalar suave da bolacha Kebra-Djundjun × Sabores da Veiga ao acompanhar um café espresso acabado de tirar ou um chá quente aromático. O equilíbrio perfeito entre tradição e prazer gourmet.",
        calcTitle: "Monte a Sua Caixa Artesanal",
        calcSub: "Escolha uma caixa pré-selecionada ou misture livremente • 12 CHF por saco",
        quickLabel: "⚡ Seleção Rápida de Degustação (1 Clique):",
        preset1Title: "Caixa Descoberta (2 Sacos)",
        preset2Title: "Caixa Família Gourmet (4 Sacos)",
        catNormalTitle: "✨ Categoria 1 — Bolacha Normal Tradicional (NKA / Branca)",
        catNormalIng: "Farinha tradicional • Leite • Manteiga • Açúcar",
        descNka: "A verdadeira essência da infância nas ilhas. Textura delicada, amanteigada e levemente estaladiça que desmancha na boca ao primeiro toque.",
        catNaturalTitle: "🌿 Categoria 2 — Bolacha Natural Especial da Casa (ÊTA / Preta)",
        catNaturalIng: "Farinha de Espelta Pura • Tâmaras • Leite de Coco • Óleo de Coco (Sem Lactose & Sem Açúcar Refinado)",
        descEta: "A obra-prima rústica da casa. Feita com farinha de espelta 100% pura, adoçada naturalmente com o melado das tâmaras e enriquecida com leite e óleo de coco fresco. Sem lactose e sem açúcar refinado.",
        btnAdd: "+ Adicionar ao Panier",
        panierTitle: "O Seu Panier (Seleção Discriminada para o Produtor)",
        emptyPanier: "Ainda não adicionou bolachas. Escolha acima entre Categoria 1 (Branca NKA) ou Categoria 2 (Preta Natural ÊTA).",
        subtotalText: "Subtotal dos Produtos:",
        shipNote: "Portes de envio na Suíça calculados no WhatsApp com o produtor conforme a morada exata.",
        payPrefLabel: "💳 Como prefere efetuar o pagamento?",
        payTwintDesc: "(Receber pedido/QR TWINT no WhatsApp)",
        payBankTitle: "Transferência / IBAN",
        payBankDesc: "(Dados enviados no WhatsApp)",
        payDirectTitle: "Combinar no WhatsApp",
        payDirectDesc: "(Pagamento antecipado ou na entrega)",
        giftLabel: "🎁 É para oferta? Mensagem personalizada na caixa (opcional):",
        giftPlaceholder: "Ex: Parabéns! Com carinho...",
        addressLabel: "Morada Completa de Entrega na Suíça:",
        addressPlaceholder: "Rua, Número, Código Postal e Cidade (Ex: Rue du Rhône 40, 1204 Genève)",
        ctaBtn: "Garantir a Minha Caixa Artesanal & Calcular Portes",
        socialTitle: "📱 Bastidores & Fornadas Frescas das Nossas Duas Casas",
        socialDesc: "Siga as páginas oficiais da Kebra-Djundjun e Sabores da Veiga no Instagram e no TikTok para acompanhar cada fornada.",
        artisanSig: "“Feito à mão com o coração em Cabo Verde e saboreado com alma na Suíça — Kebra-Djundjun × Sabores da Veiga.”",
        footerLegal: "Termos de Encomenda & Política de Privacidade. Categoria 1 (NKA): farinha tradicional, leite, manteiga e açúcar. Categoria 2 (ÊTA): farinha de espelta pura, tâmaras, leite de coco e óleo de coco (sem lactose e sem açúcar refinado)."
    },
    fr: {
        topBanner: "⚠️ Plus que 14 sachets disponibles sur la fournée artisanale de la semaine en Suisse — Réservez votre coffret.",
        brandTagline: "Haute Pâtisserie Artisanale du Cap-Vert • Suisse",
        cvSeal: "🇨🇻 Édition Limitée • Suisse",
        heroBadge: "✨ Collection Gastronomique des Îles",
        heroTitle: "Croustillant Doré, Parfum du Four et l'Âme Pure du Cap-Vert",
        heroSubtitle: "Deux maisons artisanales réunies autour d'une recette familiale façonnée à la main. Une texture croquante qui fond en bouche — cuite en lots hebdomadaires et livrée fraîche dans toute la Suisse.",
        pill1: "100% Artisanal & Frais",
        pill2: "Recette Classique & Épeautre Pur",
        pill3: "Livraison Directe en Suisse",
        heritageSub: "Savoir-Faire Unique",
        heritageTitle: "L'Excellence Derrière Chaque Fournée",
        step1Title: "Ingrédients Nobles",
        step1Desc: "Transparence totale : de la recette traditionnelle au beurre et lait jusqu'à la spécialité maison à la farine d'épeautre pure, dattes, lait et huile de coco.",
        step2Title: "Mains de Maître",
        step2Desc: "Chaque biscuit est façonné à la main selon le savoir-faire ancestral transmis entre Kebra-Djundjun et Sabores da Veiga.",
        step3Title: "Cuisson Lente",
        step3Desc: "Cuisson maîtrisée pour sceller un croquant doré et un parfum irrésistible de fournée fraîche.",
        pairingTitle: "☕ Le Rituel Sensoriel de Dégustation",
        pairingDesc: "Imaginez le croquant délicat du biscuit Kebra-Djundjun × Sabores da Veiga accompagnant un café expresso ou un thé chaud aromatique.",
        calcTitle: "Composez Votre Coffret Artisanal",
        calcSub: "Choisissez un coffret dégustation ou composez librement • 12 CHF par sachet",
        quickLabel: "⚡ Sélection Rapide Dégustation (1 Clic) :",
        preset1Title: "Coffret Découverte (2 Sachets)",
        preset2Title: "Coffret Famille Gourmet (4 Sachets)",
        catNormalTitle: "✨ Catégorie 1 — Biscuit Normal Traditionnel (NKA / Blanc)",
        catNormalIng: "Farine traditionnelle • Lait • Beurre • Sucre",
        descNka: "L'essence authentique des îles. Texture délicate, beurrée et légèrement croquante qui fond en bouche dès la première bouchée.",
        catNaturalTitle: "🌿 Catégorie 2 — Biscuit Naturel Spécialité Maison (ÊTA / Noir)",
        catNaturalIng: "Farine d'Épeautre Pure • Dattes • Lait de Coco • Huile de Coco (Sans Lactose & Sans Sucre Raffiné)",
        descEta: "Le chef-d'œuvre rustique de la maison. Préparé avec de la farine d'épeautre 100% pure, sucré naturellement aux dattes et enrichi au lait et à l'huile de coco fraîche.",
        btnAdd: "+ Ajouter au Panier",
        panierTitle: "Votre Panier (Détail pour le Producteur)",
        emptyPanier: "Votre panier est vide. Choisissez ci-dessus entre Catégorie 1 (Blanc NKA) ou Catégorie 2 (Noir Naturel ÊTA).",
        subtotalText: "Sous-total des produits :",
        shipNote: "Frais de livraison en Suisse calculés sur WhatsApp avec le producteur selon l'adresse exacte.",
        payPrefLabel: "💳 Comment souhaitez-vous régler ?",
        payTwintDesc: "(Recevoir demande/QR TWINT sur WhatsApp)",
        payBankTitle: "Virement Bancaire / IBAN",
        payBankDesc: "(Coordonnées envoyées sur WhatsApp)",
        payDirectTitle: "Convenir sur WhatsApp",
        payDirectDesc: "(Paiement anticipé ou à la livraison)",
        giftLabel: "🎁 Est-ce un cadeau ? Message personnalisé sur le coffret (optionnel) :",
        giftPlaceholder: "Ex : Joyeux anniversaire ! Avec affection...",
        addressLabel: "Adresse complète de livraison en Suisse :",
        addressPlaceholder: "Rue, Numéro, NPA et Ville (Ex: Rue du Rhône 40, 1204 Genève)",
        ctaBtn: "Réserver Mon Coffret Artisanal & Calculer les Frais",
        socialTitle: "📱 Coulisses & Fournées Fraîches de Nos Deux Maisons",
        socialDesc: "Suivez les comptes officiels de Kebra-Djundjun et Sabores da Veiga sur Instagram et TikTok.",
        artisanSig: "« Façonné à la main avec le cœur au Cap-Vert et dégusté avec âme en Suisse — Kebra-Djundjun × Sabores da Veiga. »",
        footerLegal: "Conditions & Confidentialité. Catégorie 1 (NKA) : farine traditionnelle, lait, beurre et sucre. Catégorie 2 (ÊTA) : farine d'épeautre pure, dattes, lait et huile de coco (sans lactose et sans sucre raffiné)."
    },
    en: {
        topBanner: "⚠️ Only 14 bags left from this week's artisanal batch in Switzerland — Secure your box before it sells out.",
        brandTagline: "Artisanal Cape Verdean Haute Pâtisserie • Switzerland",
        cvSeal: "🇨🇻 Limited Edition • Switzerland",
        heroBadge: "✨ Island Gastronomic Collection",
        heroTitle: "Golden Crunch, Warm Oven Aroma and the Pure Soul of Cape Verde",
        heroSubtitle: "Two artisanal houses united in a hand-shaped family recipe. A crisp texture that melts in your mouth — baked in strict weekly batches and delivered fresh across Switzerland.",
        pill1: "100% Handcrafted & Fresh",
        pill2: "Classic & Pure Spelt Recipes",
        pill3: "Direct Swiss Delivery",
        heritageSub: "Unique Know-How",
        heritageTitle: "The Excellence Behind Every Batch",
        step1Title: "Noble Ingredients",
        step1Desc: "Full transparency: from the classic butter and milk recipe to our house specialty crafted with pure spelt flour, dates, coconut milk, and coconut oil.",
        step2Title: "Master Hands",
        step2Desc: "Every cookie is hand-shaped following ancestral craft passed down through generations between Kebra-Djundjun and Sabores da Veiga.",
        step3Title: "Slow Baking",
        step3Desc: "Carefully timed baking to seal a golden crunch and irresistible fresh-baked aroma.",
        pairingTitle: "☕ The Sensory Tasting Ritual",
        pairingDesc: "Picture the gentle crunch of Kebra-Djundjun × Sabores da Veiga cookies paired with a fresh espresso or warm aromatic tea.",
        calcTitle: "Build Your Artisanal Box",
        calcSub: "Choose a curated tasting box or freely mix • 12 CHF per bag",
        quickLabel: "⚡ Quick Tasting Selection (1 Click):",
        preset1Title: "Discovery Box (2 Bags)",
        preset2Title: "Family Gourmet Box (4 Bags)",
        catNormalTitle: "✨ Category 1 — Traditional Regular Cookie (NKA / White)",
        catNormalIng: "Traditional flour • Milk • Butter • Sugar",
        descNka: "The true essence of island childhood. Delicate, buttery, and lightly crisp texture that melts in your mouth.",
        catNaturalTitle: "🌿 Category 2 — House Special Natural Cookie (ÊTA / Dark)",
        catNaturalIng: "Pure Spelt Flour • Dates • Coconut Milk • Coconut Oil (Lactose-Free & No Refined Sugar)",
        descEta: "Our rustic house masterpiece. Crafted with 100% pure spelt flour, naturally sweetened with dates, and enriched with fresh coconut milk and oil.",
        btnAdd: "+ Add to Basket",
        panierTitle: "Your Basket (Itemized Selection for Producer)",
        emptyPanier: "Your basket is empty. Choose above between Category 1 (White NKA) or Category 2 (Dark Natural ÊTA).",
        subtotalText: "Products Subtotal:",
        shipNote: "Swiss delivery fees calculated via WhatsApp with the producer based on exact address.",
        payPrefLabel: "💳 Preferred payment method:",
        payTwintDesc: "(Receive TWINT request/QR via WhatsApp)",
        payBankTitle: "Bank Transfer / IBAN",
        payBankDesc: "(Details sent via WhatsApp)",
        payDirectTitle: "Arrange on WhatsApp",
        payDirectDesc: "(Pay upfront or upon delivery)",
        giftLabel: "🎁 Is this a gift? Personalized box note (optional):",
        giftPlaceholder: "E.g.: Happy Birthday! Warmest wishes...",
        addressLabel: "Full Delivery Address in Switzerland:",
        addressPlaceholder: "Street, Number, ZIP Code, and City (Ex: Rue du Rhône 40, 1204 Genève)",
        ctaBtn: "Secure My Artisanal Box & Calculate Shipping",
        socialTitle: "📱 Behind the Scenes & Fresh Batches from Our Two Houses",
        socialDesc: "Follow Kebra-Djundjun and Sabores da Veiga official pages on Instagram and TikTok.",
        artisanSig: "“Handcrafted with heart in Cape Verde and savored with soul in Switzerland — Kebra-Djundjun × Sabores da Veiga.”",
        footerLegal: "Terms & Privacy. Category 1 (NKA): traditional flour, milk, butter, sugar. Category 2 (ÊTA): pure spelt flour, dates, coconut milk, coconut oil (lactose-free & refined sugar-free)."
    }
};

let currentLang = 'pt';

function changeLang(lang, btnElement) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.placeholder = t[key];
    });

    renderPanier();
}

function applyPreset(qtyNka, qtyEta) {
    cart = {};
    if (qtyNka > 0) cart['normal_nka'] = qtyNka;
    if (qtyEta > 0) cart['natural_eta'] = qtyEta;
    renderPanier();
    document.querySelector('.panier-box').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function addToCart(productId) {
    if (!cart[productId]) {
        cart[productId] = 0;
    }
    cart[productId] += 1;
    renderPanier();
}

function updateItemQty(productId, delta) {
    if (!cart[productId]) return;
    cart[productId] += delta;
    if (cart[productId] <= 0) {
        delete cart[productId];
    }
    renderPanier();
}

function renderPanier() {
    const container = document.getElementById('panierItemsList');
    const totalEl = document.getElementById('totalPrice');
    const badgeEl = document.getElementById('panierCountBadge');
    const t = translations[currentLang];

    const entries = Object.entries(cart);
    let totalBags = 0;

    if (entries.length === 0) {
        container.innerHTML = `<p class="empty-panier">${t.emptyPanier}</p>`;
        totalEl.textContent = '0 CHF';
        badgeEl.textContent = currentLang === 'fr' ? '0 sachet' : (currentLang === 'en' ? '0 bags' : '0 sacos');
        return;
    }

    container.innerHTML = '';
    entries.forEach(([id, qty]) => {
        const prod = PRODUCT_CATALOG[id];
        totalBags += qty;
        const itemTotal = qty * PRICE_PER_BAG;

        const row = document.createElement('div');
        row.className = 'panier-row';
        row.innerHTML = `
            <div>
                <div class="panier-row-title"><strong>${qty}x</strong> ${prod.name}</div>
                <div class="panier-row-sub">${prod.category[currentLang]} • ${itemTotal} CHF</div>
                <div class="panier-row-taste">${prod.tasteNote[currentLang]}</div>
            </div>
            <div class="panier-controls">
                <button type="button" onclick="updateItemQty('${id}', -1)">−</button>
                <span>${qty}</span>
                <button type="button" onclick="updateItemQty('${id}', 1)">+</button>
            </div>
        `;
        container.appendChild(row);
    });

    const grandTotal = totalBags * PRICE_PER_BAG;
    totalEl.textContent = `${grandTotal} CHF`;
    const unitLabel = currentLang === 'fr' ? (totalBags > 1 ? 'sachets' : 'sachet')
                    : currentLang === 'en' ? (totalBags > 1 ? 'bags' : 'bag')
                    : (totalBags > 1 ? 'sacos' : 'saco');
    badgeEl.textContent = `${totalBags} ${unitLabel}`;
}

function sendWhatsAppOrder() {
    const entries = Object.entries(cart);
    if (entries.length === 0) {
        alert(currentLang === 'cv' ? 'Por favor, poi pelu menus 1 bolacha na bu panier!'
            : currentLang === 'fr' ? 'Veuillez ajouter au moins un sachet à votre panier !'
            : currentLang === 'en' ? 'Please add at least one bag to your basket!'
            : 'Por favor, adicione pelo menos 1 saco de bolachas ao seu panier!');
        return;
    }

    const address = document.getElementById('clientAddress').value.trim();
    if (!address) {
        alert(currentLang === 'cv' ? 'Por favor, indika bu morada di entréga!'
            : currentLang === 'fr' ? 'Veuillez indiquer votre adresse de livraison !'
            : currentLang === 'en' ? 'Please enter your delivery address!'
            : 'Por favor, indique a sua morada de entrega!');
        document.getElementById('clientAddress').focus();
        return;
    }

    const paymentInput = document.querySelector('input[name="paymentMethod"]:checked');
    const paymentChoice = paymentInput ? paymentInput.value : 'TWINT (Suíça)';
    const giftNote = document.getElementById('giftNote').value.trim();

    let totalBags = 0;
    const itemsLines = entries.map(([id, qty]) => {
        totalBags += qty;
        const prod = PRODUCT_CATALOG[id];
        return `• ${qty}x ${prod.name} (${qty * PRICE_PER_BAG} CHF)`;
    }).join('\n');

    const total = totalBags * PRICE_PER_BAG;
    const phone = "41779093515";
    let text = "";

    if (currentLang === 'cv') {
        text = `Olá Kebra-Djundjun × Sabores da Veiga! Krê garanti es kaixa artesanal:\n\n${itemsLines}\n\nTotal di sacos: ${totalBags}\nSubtotal: ${total} CHF\nPagamentu preferidu: ${paymentChoice}\n${giftNote ? `🎁 Mensagem di oferta: ${giftNote}\n` : ''}Morada na Suíça: ${address}\n\nN aguarda pa kalkula portes di entréga i dadus di pagamentu.`;
    } else if (currentLang === 'fr') {
        text = `Bonjour Kebra-Djundjun × Sabores da Veiga ! Je souhaite réserver ce coffret artisanal :\n\n${itemsLines}\n\nTotal sachets : ${totalBags}\nSous-total : ${total} CHF\nMode de paiement souhaité : ${paymentChoice}\n${giftNote ? `🎁 Message cadeau : ${giftNote}\n` : ''}Adresse en Suisse : ${address}\n\nDans l'attente des frais de port et des informations de paiement.`;
    } else if (currentLang === 'en') {
        text = `Hello Kebra-Djundjun × Sabores da Veiga! I would like to reserve this artisanal box:\n\n${itemsLines}\n\nTotal bags: ${totalBags}\nSubtotal: ${total} CHF\nPreferred payment: ${paymentChoice}\n${giftNote ? `🎁 Gift note: ${giftNote}\n` : ''}Delivery address in Switzerland: ${address}\n\nAwaiting shipping fee calculation and payment details.`;
    } else {
        text = `Olá Kebra-Djundjun × Sabores da Veiga! Quero garantir esta caixa artesanal:\n\n${itemsLines}\n\nTotal de sacos: ${totalBags}\nSubtotal: ${total} CHF\nPreferência de pagamento: ${paymentChoice}\n${giftNote ? `🎁 Mensagem de oferta: ${giftNote}\n` : ''}Morada de entrega na Suíça: ${address}\n\nFico a aguardar o cálculo dos portes de envio e os dados para pagamento.`;
    }

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
}

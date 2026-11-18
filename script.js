const PRICE_PER_BAG = 12;

const PRODUCT_CATALOG = {
    normal_inka: {
        id: 'normal_inka',
        category: { cv: 'Bolacha Normal', pt: 'Bolacha Normal', fr: 'Biscuit Normal', en: 'Regular Cookie' },
        name: 'Bolacha Normal INKA'
    },
    normal_branca: {
        id: 'normal_branca',
        category: { cv: 'Bolacha Normal', pt: 'Bolacha Normal', fr: 'Biscuit Normal', en: 'Regular Cookie' },
        name: 'Bolacha Normal Branca'
    },
    natural_eta: {
        id: 'natural_eta',
        category: { cv: 'Bolacha Natural', pt: 'Bolacha Natural', fr: 'Biscuit Naturel', en: 'Natural Cookie' },
        name: 'Bolacha Natural ETA'
    },
    natural_preta: {
        id: 'natural_preta',
        category: { cv: 'Bolacha Natural', pt: 'Bolacha Natural', fr: 'Biscuit Naturel', en: 'Natural Cookie' },
        name: 'Bolacha Natural Preta'
    }
};

// Estado do carrinho misto
let cart = {};

const translations = {
    cv: {
        topBanner: "✨ Fornadu Exclusivu: Loti semanal limitadu — 100% Sem Lactose, Sem Glúten & Sem Açúcar Refinadu.",
        brandTagline: "Bolacha Tradicional di Cabo Verde",
        cvSeal: "🇨🇻 Autenticidade Garantida",
        heroBadge: "✨ Alta Doçaria Tradicional & Pura",
        heroTitle: "Crokância Dourada, Aroma di Fornu i Alma di Cabo Verde",
        heroSubtitle: "Receita di família guardadu ku carinhu, fetu na mô ku ingridientis puru. Sabor rústicu i crokanti ki ta derreti na boca — entregue frescu na Suíça intera.",
        pillFree: "Sem Lactose • Sem Glúten • Sem Açúcar Refinadu",
        pill1: "100% Artesanal",
        pill2: "Entréga na Suíça",
        heritageSub: "Tradiçon i Amor",
        heritageTitle: "Nôz Prôcessu Artesanal",
        step1Title: "Pureza Absoluta",
        step1Desc: "Ingridientis skodjedu ku rigor: zeru lactose, zeru glúten i zeru açúcar refinadu, mantendo sabor nobre di nôz ilhas.",
        step2Title: "Segredu di Família",
        step2Desc: "Mô experiente ta faze cada bolacha sima nôz tradiçon ta enchina di geraçon pa geraçon.",
        step3Title: "Fornada Crokanti",
        step3Desc: "Cozedura branda pa fica estaladiçu i cheirozu pa cumpanha bu dia.",
        pairingTitle: "☕ Ritual Perfeitu pa Saboreia",
        pairingDesc: "Imagina kel crokância di bolacha Kebra-Djundjun djuntu ku bu café di palmanham ou un chá quenti. Leveza i prazer sem culpa.",
        calcTitle: "Monta Bu Caixa Artesanal",
        calcSub: "Mistura bu variedades favoritu • 12 CHF pa cada saku",
        dietaryRibbon: "✓ Sem Lactose  |  ✓ Sem Glúten  |  ✓ Sem Açúcar Refinadu",
        catNormalTitle: "✨ Bolacha Normal (Clássica)",
        catNormalSub: "Textura tradicional levi i douradu",
        catNaturalTitle: "🌿 Bolacha Natural (Rústica)",
        catNaturalSub: "Sabor intensu i integral di nôz terra",
        descInka: "Receita Clássica aromática, crokanti i equilibradu.",
        descBranca: "Massa clara delicadu, suavi i estaladiçu na boca.",
        descEta: "Receita rústica natural ku toki autêntiku i encorpadu.",
        descPreta: "Tostadu artesanalmenti, sabor profundu i marcanti.",
        btnAdd: "+ Poi na Panier",
        panierTitle: "Bu Panier (Seléçon pa Produtor)",
        emptyPanier: "Inda bu ka poi bolacha. Skodji riba entri Normal (INKA / Branca) ou Natural (ETA / Preta).",
        subtotalText: "Subtotal di Produtus:",
        shipNote: "Portes di entréga na Suíça ta ser calkuladu na WhatsApp ku produtor di acordu ku morada exata.",
        payPrefLabel: "💳 Modi ki bu ta prefiri paga?",
        payTwintDesc: "(Recebi pididu/QR na WhatsApp)",
        payBankTitle: "Transferência / IBAN",
        payBankDesc: "(Dadus mandadu na WhatsApp)",
        payDirectTitle: "Combina na WhatsApp",
        payDirectDesc: "(Pagamentu antis ou na entréga)",
        addressLabel: "Morada Completu di Entréga na Suíça:",
        addressPlaceholder: "Rua, Número, Código Postal i Cidade (Ex: Rue du Rhône 40, 1204 Genève)",
        ctaBtn: "Manda Pididu Detalhadu na WhatsApp",
        socialTitle: "📱 Acompanha Nôz Fornadas na Direto",
        socialDesc: "Odja bastidõris di nôz fabricu artesanal i novidades na nôz Instagram i TikTok oficiais.",
        footerLegal: "Termos di Encomenda & Privacidade Simples. Produtus 100% sem lactose, sem glúten i sem açúcar refinadu."
    },
    pt: {
        topBanner: "✨ Fornada Exclusiva: Lote semanal artesanal limitado — 100% Sem Lactose, Sem Glúten & Sem Açúcar Refinado.",
        brandTagline: "Bolachas Artesanais de Cabo Verde",
        cvSeal: "🇨🇻 Autenticidade Garantida",
        heroBadge: "✨ Haute Pâtisserie Traditionnelle & Pura",
        heroTitle: "Crocância Dourada, Aroma de Forno e a Alma de Cabo Verde",
        heroSubtitle: "Receita familiar guardada a sete chaves, moldada à mão com ingredientes puros. Uma textura estaladiça que derrete na boca e desperta memórias das ilhas — entregue fresca em toda a Suíça.",
        pillFree: "Sem Lactose • Sem Glúten • Sem Açúcar Refinado",
        pill1: "100% Artesanal",
        pill2: "Envio para toda a Suíça",
        heritageSub: "Savoir-Faire Único",
        heritageTitle: "O Nosso Processo Artesanal",
        step1Title: "Pureza Absoluta",
        step1Desc: "Ingredientes rigorosamente selecionados: zero lactose, zero glúten e zero açúcar refinado, mantendo todo o sabor nobre e autêntico do arquipélago.",
        step2Title: "Segredo Familiar",
        step2Desc: "Mãos experientes moldam cada bolacha seguindo a tradição ancestral transmitida de geração em geração em Cabo Verde.",
        step3Title: "Fornada Estaladiça",
        step3Desc: "Cozedura lenta e cuidadosa para garantir a textura crocante irresistível e o aroma quente que reconforta a alma.",
        pairingTitle: "☕ O Ritual Perfeito de Degustação",
        pairingDesc: "Imagine o estalar suave da bolacha Kebra-Djundjun ao mergulhar num café espresso acabado de tirar ou num chá quente aromático. Leveza, pureza e prazer sem culpa a qualquer hora do dia.",
        calcTitle: "Monte a Sua Caixa Artesanal",
        calcSub: "Misture livremente as suas variedades favoritas • 12 CHF por saco",
        dietaryRibbon: "✓ Sem Lactose  |  ✓ Sem Glúten  |  ✓ Sem Açúcar Refinado",
        catNormalTitle: "✨ Bolacha Normal (Clássica)",
        catNormalSub: "Textura tradicional leve e dourada",
        catNaturalTitle: "🌿 Bolacha Natural (Rústica)",
        catNaturalSub: "Sabor intenso e integral das ilhas",
        descInka: "Receita clássica aromática, crocante e equilibrada.",
        descBranca: "Massa clara delicada, suave e estaladiça na boca.",
        descEta: "Receita rústica natural com toque autêntico e encorpado.",
        descPreta: "Tostada artesanalmente, sabor profundo e marcante.",
        btnAdd: "+ Adicionar",
        panierTitle: "O Seu Panier (Seleção para o Produtor)",
        emptyPanier: "Ainda não adicionou bolachas. Escolha acima entre Normal (INKA / Branca) ou Natural (ETA / Preta).",
        subtotalText: "Subtotal dos Produtos:",
        shipNote: "Portes de envio na Suíça calculados no WhatsApp com o produtor conforme a morada exata.",
        payPrefLabel: "💳 Como prefere efetuar o pagamento?",
        payTwintDesc: "(Receber pedido/QR no WhatsApp)",
        payBankTitle: "Transferência / IBAN",
        payBankDesc: "(Dados enviados no WhatsApp)",
        payDirectTitle: "Combinar no WhatsApp",
        payDirectDesc: "(Pagamento antes ou na entrega)",
        addressLabel: "Morada Completa de Entrega na Suíça:",
        addressPlaceholder: "Rua, Número, Código Postal e Cidade (Ex: Rue du Rhône 40, 1204 Genève)",
        ctaBtn: "Enviar Pedido Detalhado no WhatsApp",
        socialTitle: "📱 Acompanhe as Nossas Fornadas ao Vivo",
        socialDesc: "Veja os bastidores da confeção artesanal, novidades e fornadas frescas no nosso Instagram e TikTok oficiais.",
        footerLegal: "Termos de Encomenda & Política de Privacidade Simples. Produtos 100% sem lactose, sem glúten e sem açúcar refinado. Pagamento (TWINT ou transferência) e envio acordados diretamente via WhatsApp com o produtor artesanal."
    },
    fr: {
        topBanner: "✨ Fournée Exclusive : Lot hebdomadaire limité — 100% Sans Lactose, Sans Gluten & Sans Sucre Raffiné.",
        brandTagline: "Biscuits Artisanaux du Cap-Vert",
        cvSeal: "🇨🇻 Authenticité Garantie",
        heroBadge: "✨ Haute Pâtisserie Traditionnelle & Pure",
        heroTitle: "Croustillant Doré, Parfum du Four et l'Âme du Cap-Vert",
        heroSubtitle: "Recette familiale façonnée à la main avec des ingrédients purs. Une texture croquante qui fond en bouche — livrée fraîche dans toute la Suisse.",
        pillFree: "Sans Lactose • Sans Gluten • Sans Sucre Raffiné",
        pill1: "100% Artisanal",
        pill2: "Livraison en Suisse",
        heritageSub: "Savoir-Faire Unique",
        heritageTitle: "Notre Procédé Artisanal",
        step1Title: "Pureté Absolue",
        step1Desc: "Ingrédients rigoureusement sélectionnés : zéro lactose, zéro gluten et zéro sucre raffiné, préservant toute la saveur authentique de l'archipel.",
        step2Title: "Secret de Famille",
        step2Desc: "Des mains expertes façonnent chaque biscuit selon la tradition ancestrale transmise de génération en génération.",
        step3Title: "Fournée Croustillante",
        step3Desc: "Cuisson lente pour garantir une texture croquante irrésistible et un arôme réconfortant.",
        pairingTitle: "☕ Le Rituel de Dégustation Parfait",
        pairingDesc: "Imaginez le croquant délicat du biscuit Kebra-Djundjun accompagnant votre café expresso ou un thé chaud aromatique.",
        calcTitle: "Composez Votre Coffret Artisanal",
        calcSub: "Mélangez librement vos variétés préférées • 12 CHF par sachet",
        dietaryRibbon: "✓ Sans Lactose  |  ✓ Sans Gluten  |  ✓ Sans Sucre Raffiné",
        catNormalTitle: "✨ Biscuit Normal (Classique)",
        catNormalSub: "Texture traditionnelle légère et dorée",
        catNaturalTitle: "🌿 Biscuit Naturel (Rustique)",
        catNaturalSub: "Saveur intense et authentique des îles",
        descInka: "Recette classique aromatique, croustillante et équilibrée.",
        descBranca: "Pâte claire délicate, douce et croquante en bouche.",
        descEta: "Recette rustique naturelle au caractère authentique.",
        descPreta: "Torréfié artisanalement, saveur profonde et intense.",
        btnAdd: "+ Ajouter",
        panierTitle: "Votre Panier (Détail pour le Producteur)",
        emptyPanier: "Votre panier est vide. Choisissez ci-dessus entre Normal (INKA / Branca) ou Naturel (ETA / Preta).",
        subtotalText: "Sous-total des produits :",
        shipNote: "Frais de livraison en Suisse calculés sur WhatsApp avec le producteur selon l'adresse exacte.",
        payPrefLabel: "💳 Comment souhaitez-vous régler ?",
        payTwintDesc: "(Recevoir demande/QR sur WhatsApp)",
        payBankTitle: "Virement Bancaire / IBAN",
        payBankDesc: "(Coordonnées envoyées sur WhatsApp)",
        payDirectTitle: "Convenir sur WhatsApp",
        payDirectDesc: "(Paiement avant ou à la livraison)",
        addressLabel: "Adresse complète de livraison en Suisse :",
        addressPlaceholder: "Rue, Numéro, NPA et Ville (Ex: Rue du Rhône 40, 1204 Genève)",
        ctaBtn: "Envoyer la Commande Détaillée sur WhatsApp",
        socialTitle: "📱 Suivez Nos Fournées en Direct",
        socialDesc: "Découvrez les coulisses de la confection artisanale sur nos comptes officiels Instagram et TikTok.",
        footerLegal: "Conditions de commande & Confidentialité. Produits 100% sans lactose, sans gluten et sans sucre raffiné."
    },
    en: {
        topBanner: "✨ Exclusive Batch: Limited weekly artisanal production — 100% Lactose-Free, Gluten-Free & Refined Sugar-Free.",
        brandTagline: "Handcrafted Cape Verdean Cookies",
        cvSeal: "🇨🇻 Guaranteed Authenticity",
        heroBadge: "✨ Traditional & Pure Gourmet Bakery",
        heroTitle: "Golden Crunch, Warm Oven Aroma and the Soul of Cape Verde",
        heroSubtitle: "Heirloom family recipe hand-shaped with pure ingredients. A crisp texture that melts in your mouth — delivered fresh across Switzerland.",
        pillFree: "Lactose-Free • Gluten-Free • No Refined Sugar",
        pill1: "100% Handcrafted",
        pill2: "Swiss Delivery",
        heritageSub: "Unique Know-How",
        heritageTitle: "Our Artisanal Process",
        step1Title: "Absolute Purity",
        step1Desc: "Carefully selected ingredients: zero lactose, zero gluten, and zero refined sugar, keeping the authentic island taste.",
        step2Title: "Family Secret",
        step2Desc: "Expert hands shape every cookie following ancestral traditions passed down through generations.",
        step3Title: "Crispy Batch",
        step3Desc: "Slow baking process ensuring an irresistible crunch and comforting aroma.",
        pairingTitle: "☕ The Perfect Tasting Ritual",
        pairingDesc: "Picture the gentle crunch of Kebra-Djundjun cookies paired with a fresh espresso or warm aromatic tea.",
        calcTitle: "Build Your Artisanal Box",
        calcSub: "Freely mix your favorite varieties • 12 CHF per bag",
        dietaryRibbon: "✓ Lactose-Free  |  ✓ Gluten-Free  |  ✓ No Refined Sugar",
        catNormalTitle: "✨ Regular Cookie (Classic)",
        catNormalSub: "Light, golden traditional texture",
        catNaturalTitle: "🌿 Natural Cookie (Rustic)",
        catNaturalSub: "Rich, whole-grain island flavor",
        descInka: "Aromatic classic recipe, crisp and balanced.",
        descBranca: "Delicate light dough, smooth and crunchy.",
        descEta: "Natural rustic recipe with an authentic full-bodied touch.",
        descPreta: "Artisanally toasted, deep and bold flavor.",
        btnAdd: "+ Add to Basket",
        panierTitle: "Your Basket (Selection for Producer)",
        emptyPanier: "Your basket is empty. Choose above between Regular (INKA / Branca) or Natural (ETA / Preta).",
        subtotalText: "Products Subtotal:",
        shipNote: "Swiss delivery fees calculated via WhatsApp with the producer based on exact address.",
        payPrefLabel: "💳 Preferred payment method:",
        payTwintDesc: "(Receive TWINT request/QR via WhatsApp)",
        payBankTitle: "Bank Transfer / IBAN",
        payBankDesc: "(Details sent via WhatsApp)",
        payDirectTitle: "Arrange on WhatsApp",
        payDirectDesc: "(Pay before or upon delivery)",
        addressLabel: "Full Delivery Address in Switzerland:",
        addressPlaceholder: "Street, Number, ZIP Code, and City (Ex: Rue du Rhône 40, 1204 Genève)",
        ctaBtn: "Send Detailed Order via WhatsApp",
        socialTitle: "📱 Follow Our Fresh Batches Live",
        socialDesc: "Watch behind-the-scenes artisanal baking on our official Instagram and TikTok pages.",
        footerLegal: "Order Terms & Privacy. 100% lactose-free, gluten-free, and refined sugar-free products."
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
        text = `Olá Kebra-Djundjun! Krê faze es encomenda (100% Sen Lactose, Sen Glúten & Sen Açúcar Refinadu):\n\n${itemsLines}\n\nTotal di sacos: ${totalBags}\nSubtotal: ${total} CHF\nPreferência di pagamentu: ${paymentChoice}\nMorada na Suíça: ${address}\n\nN aguarda pa kalkula portes di entréga i dadus di pagamentu.`;
    } else if (currentLang === 'fr') {
        text = `Bonjour Kebra-Djundjun ! Je souhaite commander (100% Sans Lactose, Sans Gluten & Sans Sucre Raffiné) :\n\n${itemsLines}\n\nTotal sachets : ${totalBags}\nSous-total : ${total} CHF\nMode de paiement souhaité : ${paymentChoice}\nAdresse en Suisse : ${address}\n\nDans l'attente des frais de port et des informations de paiement.`;
    } else if (currentLang === 'en') {
        text = `Hello Kebra-Djundjun! I would like to order (100% Lactose-Free, Gluten-Free & Refined Sugar-Free):\n\n${itemsLines}\n\nTotal bags: ${totalBags}\nSubtotal: ${total} CHF\nPreferred payment: ${paymentChoice}\nDelivery address in Switzerland: ${address}\n\nAwaiting shipping fee calculation and payment details.`;
    } else {
        text = `Olá Kebra-Djundjun! Quero encomendar (100% Sem Lactose, Sem Glúten & Sem Açúcar Refinado):\n\n${itemsLines}\n\nTotal de sacos: ${totalBags}\nSubtotal: ${total} CHF\nPreferência de pagamento: ${paymentChoice}\nMorada de entrega na Suíça: ${address}\n\nFico a aguardar o cálculo dos portes de envio e os dados para pagamento.`;
    }

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
}

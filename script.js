const PRICE_PER_BAG = 12;

// Dicionário Multilíngue (Crioulo de Cabo Verde, Português, Francês, Inglês)
const translations = {
    cv: {
        topBanner: "✨ Artesanal i Exclusivu: Loti semanal limitadu pa garanti frezcura total na Suíça.",
        brandTagline: "Bolacha Tradicional di Cabo Verde",
        heroBadge: "✨ Alta Doçaria Tradicional",
        heroTitle: "Arte Suprema di Bolacha Tradicional di Cabo Verde",
        heroSubtitle: "Sabor rústiku i exclusivu di nôz terra. Receita di família fetu ku amor, moldadu na mô i entregue na Suíça intera.",
        pill1: "100% Artesanal",
        pill2: "Entréga na Suíça",
        pill3: "Tradição di Nôz Ilhas",
        heritageSub: "Tradição i Amor",
        heritageTitle: "Nôz Prôcessu Artesanal",
        step1Title: "A Seleção Pura",
        step1Desc: "Nu ta skôdji ingridientis mâz nobre pa recria sabor autênticu di nôz arquipélagu.",
        step2Title: "Segredu di Família",
        step2Desc: "Mô experiente ta faze kada bolacha sima nôz tradiçon ta enchina di gerason pa gerason.",
        step3Title: "Furnada Kenti",
        step3Desc: "Kozedura na branda pa fika krostante i cheirozu pa kumpanha bu dia.",
        pairingTitle: "☕ Momentu Perfeitu pa Saboreia",
        pairingDesc: "Bolacha Kebra-Djundjun ta kumpanha dretu ku bu kafé di palmanham, chá quenti ou sima un mimôzu na final di dia.",
        calcTitle: "Seleção & Encomenda Ekskluziva",
        calcSub: "Prisu di referência: 12 CHF pa kada saku artesanal",
        box1Title: "Gourmet Solo",
        box3Title: "Gourmet Família",
        box5Title: "Gourmet Prestige",
        popTag: "Recomendadu",
        qtyLabel: "Kantu saku bu krê encomenda?",
        subtotalText: "Subtotal di Produtus:",
        shipNote: "Portes di entréga na Suíça ta ser kalkuladu na WhatsApp ku produtor di acordu ku morada exata.",
        addressLabel: "Morada Kompletu di Entréga na Suíça:",
        addressPlaceholder: "Rua, Número, Código Postal i Cidade (Ex: Rue du Rhône 40, 1204 Genève)",
        ctaBtn: "Finaliza Encomenda na WhatsApp",
        tiktokTitle: "📱 Sigui Nôz Processu na TikTok",
        tiktokDesc: "Odja na direto bastidõris di nôz fabricu tradicional i nôz trabadju artesanal.",
        footerLegal: "Termos di Encomenda & Privacidade Simples. Pagamentu i detalhis di entréga ta ser kombinadu diretamenti via WhatsApp ku produtor artesanal."
    },
    pt: {
        topBanner: "✨ Artesanal & Exclusivo: Lote semanal limitado para garantir frescura absoluta na Suíça.",
        brandTagline: "Bolachas Artesanais de Cabo Verde",
        heroBadge: "✨ Alta Doçaria Tradicional",
        heroTitle: "A Arte Suprema da Bolacha Tradicional de Cabo Verde",
        heroSubtitle: "Uma experiência gastronómica rústica e refinada. Receita familiar guardada com carinho, confecionada à mão e entregue em toda a Suíça.",
        pill1: "100% Artesanal",
        pill2: "Envio para toda a Suíça",
        pill3: "Tradição das Ilhas",
        heritageSub: "Savoir-Faire Único",
        heritageTitle: "O Nosso Processo Artesanal",
        step1Title: "A Seleção Pura",
        step1Desc: "Escolhemos rigorosamente os ingredientes mais nobres para recriar o sabor autêntico e inconfundível do arquipélago.",
        step2Title: "Segredo Familiar",
        step2Desc: "Mãos experientes moldam cada bolacha seguindo a tradição ancestral transmitida de geração em geração.",
        step3Title: "Fornada Fresca",
        step3Desc: "Cozedura lenta e cuidadosa para garantir a textura crocante e o aroma inconfundível que reconforta a alma.",
        pairingTitle: "☕ O Momento Perfeito de Degustação",
        pairingDesc: "As bolachas Kebra-Djundjun harmonizam perfeitamente com o seu café matinal espresso, um chá aromático quente ou como um acompanhamento digestivo refinado no final do dia.",
        calcTitle: "Seleção & Encomenda Exclusiva",
        calcSub: "Preço de referência: 12 CHF por saco artesanal",
        box1Title: "Gourmet Solo",
        box3Title: "Gourmet Família",
        box5Title: "Gourmet Prestige",
        popTag: "Recomendado",
        qtyLabel: "Quantidade personalizada de sacos:",
        subtotalText: "Subtotal dos Produtos:",
        shipNote: "Portes de envio na Suíça calculados no WhatsApp com o produtor conforme a morada exata.",
        addressLabel: "Morada Completa de Entrega na Suíça:",
        addressPlaceholder: "Rua, Número, Código Postal e Cidade (Ex: Rue du Rhône 40, 1204 Genève)",
        ctaBtn: "Finalizar Encomenda no WhatsApp",
        tiktokTitle: "📱 Siga o Nosso Processo no TikTok",
        tiktokDesc: "Assista em direto aos bastidores da confecção tradicional e acompanhe o nosso trabalho artesanal.",
        footerLegal: "Termos de Encomenda & Política de Privacidade Simples. Pagamento e detalhes de envio acordados diretamente via WhatsApp com o produtor artesanal."
    },
    fr: {
        topBanner: "✨ Artisanal & Exclusif : Lot hebdomadaire limité pour garantir une fraîcheur absolue en Suisse.",
        brandTagline: "Biscuits Artisanaux du Cap-Vert",
        heroBadge: "✨ Haute Pâtisserie Traditionnelle",
        heroTitle: "L'Art Suprême du Biscuit Traditionnel du Cap-Vert",
        heroSubtitle: "Une expérience gastronomique rustique et raffinée. Recette familiale confectionnée à la main et livrée dans toute la Suisse.",
        pill1: "100% Artisanal",
        pill2: "Livraison en Suisse",
        pill3: "Tradition des Îles",
        heritageSub: "Savoir-Faire Unique",
        heritageTitle: "Notre Procédé Artisanal",
        step1Title: "La Sélection Pure",
        step1Desc: "Nous sélectionnons rigoureusement les ingrédients les plus nobles pour recréer la saveur authentique de l'archipel.",
        step2Title: "Secret de Famille",
        step2Desc: "Des mains expertes façonnent chaque biscuit selon la tradition ancestrale transmise de génération en génération.",
        step3Title: "Fournée Fraîche",
        step3Desc: "Cuisson lente pour garantir une texture croustillante et un arôme réconfortant.",
        pairingTitle: "☕ Le Moment de Dégustation Parfait",
        pairingDesc: "Les biscuits Kebra-Djundjun s'harmonisent parfaitement avec votre café expresso, un thé chaud aromatique ou comme douceur en fin de journée.",
        calcTitle: "Sélection & Commande Exclusive",
        calcSub: "Prix de référence : 12 CHF par sachet artisanal",
        box1Title: "Gourmet Solo",
        box3Title: "Gourmet Famille",
        box5Title: "Gourmet Prestige",
        popTag: "Recommandé",
        qtyLabel: "Quantité personnalisée de sachets :",
        subtotalText: "Sous-total des produits :",
        shipNote: "Frais de livraison en Suisse calculés sur WhatsApp avec le producteur selon l'adresse exacte.",
        addressLabel: "Adresse complète de livraison en Suisse :",
        addressPlaceholder: "Rue, Numéro, NPA et Ville (Ex: Rue du Rhône 40, 1204 Genève)",
        ctaBtn: "Finaliser la commande sur WhatsApp",
        tiktokTitle: "📱 Suivez-nous sur TikTok",
        tiktokDesc: "Découvrez les coulisses de la confection traditionnelle en direct sur TikTok.",
        footerLegal: "Conditions de commande & Confidentialité. Paiement et frais de livraison convenus directement sur WhatsApp."
    },
    en: {
        topBanner: "✨ Artisanal & Exclusive: Limited weekly batch ensuring absolute freshness in Switzerland.",
        brandTagline: "Handcrafted Cape Verdean Cookies",
        heroBadge: "✨ Traditional Gourmet Bakery",
        heroTitle: "The Supreme Art of Traditional Cape Verdean Cookies",
        heroSubtitle: "A refined rustic gourmet experience. Family recipe handcrafted with care and delivered across Switzerland.",
        pill1: "100% Handcrafted",
        pill2: "Swiss Delivery",
        pill3: "Island Tradition",
        heritageSub: "Unique Know-How",
        heritageTitle: "Our Artisanal Process",
        step1Title: "Pure Selection",
        step1Desc: "We carefully select the finest ingredients to recreate the authentic taste of the archipelago.",
        step2Title: "Family Secret",
        step2Desc: "Expert hands shape every single cookie following ancestral traditions passed down through generations.",
        step3Title: "Fresh Batch",
        step3Desc: "Slow baking process ensuring a crispy texture and comforting aroma.",
        pairingTitle: "☕ The Perfect Tasting Moment",
        pairingDesc: "Kebra-Djundjun cookies pair seamlessly with your morning espresso, warm tea, or a refined evening treat.",
        calcTitle: "Exclusive Order Selection",
        calcSub: "Reference price: 12 CHF per handcrafted bag",
        box1Title: "Gourmet Solo",
        box3Title: "Gourmet Family",
        box5Title: "Gourmet Prestige",
        popTag: "Recommended",
        qtyLabel: "Custom quantity of bags:",
        subtotalText: "Products Subtotal:",
        shipNote: "Swiss delivery fees calculated via WhatsApp with the producer based on exact address.",
        addressLabel: "Full Delivery Address in Switzerland:",
        addressPlaceholder: "Street, Number, ZIP Code, and City (Ex: Rue du Rhône 40, 1204 Genève)",
        ctaBtn: "Complete Order via WhatsApp",
        tiktokTitle: "📱 Follow Our Process on TikTok",
        tiktokDesc: "Watch behind-the-scenes videos of our traditional artisanal process on TikTok.",
        footerLegal: "Order Terms & Privacy. Payment and shipping details agreed directly via WhatsApp with the producer."
    }
};

let currentLang = 'pt';

function changeLang(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.placeholder = t[key];
    });
}

function setPack(qty) {
    document.getElementById('quantity').value = qty;
    updateTotal();
}

function adjustQty(amount) {
    const qtyInput = document.getElementById('quantity');
    let val = parseInt(qtyInput.value) + amount;
    if (val < 1) val = 1;
    qtyInput.value = val;
    updateTotal();
}

function updateTotal() {
    const qty = parseInt(document.getElementById('quantity').value) || 1;
    const total = qty * PRICE_PER_BAG;
    document.getElementById('totalPrice').textContent = total + ' CHF';
}

function sendWhatsAppOrder() {
    const qty = document.getElementById('quantity').value;
    const total = qty * PRICE_PER_BAG;
    const address = document.getElementById('clientAddress').value.trim();

    if (!address) {
        alert(currentLang === 'cv' ? 'Por favor, indika bu morada di entréga!' : 'Por favor, indique a sua morada de entrega!');
        document.getElementById('clientAddress').focus();
        return;
    }

    const phone = "41779093515";
    let text = "";

    if (currentLang === 'cv') {
        text = `Olá! Krê faze encomenda di ${qty} saku(s) artesanal di Kebra-Djundjun (Subtotal: ${total} CHF). Morada di entréga na Suíça: ${address}. N aguarda pa nos kalkula portes di entréga i kombina pagamentu.`;
    } else if (currentLang === 'fr') {
        text = `Bonjour ! Je souhaite commander ${qty} sachet(s) artisanal(aux) de Kebra-Djundjun (Sous-total : ${total} CHF). Adresse de livraison en Suisse : ${address}. J'attends votre confirmation pour les frais de port et le paiement.`;
    } else if (currentLang === 'en') {
        text = `Hello! I would like to order ${qty} handcrafted bag(s) of Kebra-Djundjun (Subtotal: ${total} CHF). Delivery address in Switzerland: ${address}. Awaiting confirmation on shipping fees and payment options.`;
    } else {
        text = `Olá! Quero encomendar ${qty} saco(s) artesanal(ais) de Kebra-Djundjun (Subtotal: ${total} CHF). A minha morada de entrega na Suíça é: ${address}. Fico a aguardar a confirmação dos portes de envio e dados para pagamento.`;
    }

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
}
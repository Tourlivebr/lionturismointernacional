export interface SeoData {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  longDescription: string;
  keywords: string[];
  author: string;
  locale: string;
  canonical: string;
  ogImage: string;
  ogImageAlt: string;
  twitterHandle: string;
  twitterCard: 'summary_large_image' | 'summary';
  robots: {
    index: boolean;
    follow: boolean;
    googleBot: {
      index: boolean;
      follow: boolean;
      'max-video-preview'?: number;
      'max-image-preview'?: 'none' | 'standard' | 'large';
      'max-snippet'?: number;
    };
  };
  whatsappBusiness: {
    number: string;
    link: string;
    prefilledMessages: {
      turismo: string;
      imoveis: string;
      beleza: string;
      veiculos: string;
      multimarcas: string;
      atendimento: string;
      pacote: string;
    };
  };
  social: {
    instagram: string;
    instagramLink: string;
    facebook?: string;
    facebookLink?: string;
    youtubeLink?: string;
    googleBusinessUrl?: string;
  };
  category: string;
}

export interface ContactData {
  whatsapp: string;
  whatsappLink: string;
  email: string;
  instagram: string;
  instagramLink: string;
  address: string;
  addressLocality?: string;
  addressRegion?: string;
  addressCountry?: string;
  postalCode?: string;
  geoLat?: string;
  geoLng?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: 5 | 4;
  category: 'Turismo' | 'Imóveis' | 'Beleza' | 'Veículos' | 'Multimarcas';
  quote: string;
  highlight?: string;
  date?: string;
}

export interface BusinessArea {
  title: string;
  description: string;
  icon: string;
  highlighted?: boolean;
  link?: string;
}

export const siteConfig = {
  companyName: 'Lion Turismo Internacional',
  slogan: 'Gramado para todos.',
  institutionalPhrase: 'Gramado, a melhor cidade do Brasil, será apresentada ao mundo.',

  logo: '/img/logo_lion.png',
  institutionalImage: '/img/hero-bg1.png',

  seo: {
    siteName: 'Lion Turismo Internacional',
    siteUrl: 'https://lionturismointernacional.com',
    defaultTitle: 'Lion Turismo Internacional | Gramado para todos',
    titleTemplate: '%s | Lion Turismo Internacional',
    description:
      'Lion Turismo Internacional: pacotes de viagem para Gramado e Serra Gaúcha. City tour, ingressos, imóveis, beleza e locação de veículos. Atendimento familiar e WhatsApp direto (54) 99130-8073.',
    longDescription:
      'A Lion Turismo Internacional é uma empresa familiar multimarcas que conecta Gramado ao Brasil e ao mundo. Oferece pacotes de viagem personalizados, city tour com veículos de 5, 7 lugares, van, ônibus e blindado, ingressos para parques, passaporte de passeios, imóveis na Serra Gaúcha, locação de carros com e sem motorista, além de experiências de beleza e bem-estar. Tudo parcelado em até 48 vezes no cartão de crédito e atendimento próximo via WhatsApp.',
    keywords: [
      'turismo Gramado',
      'pacote Gramado',
      'serra gaucha turismo',
      'city tour Gramado',
      'veiculo blindado Gramado',
      'seguranca celebridades Gramado',
      'ingressos Gramado',
      'passaporte passeios Gramado',
      'imoveis Serra Gaucha',
      'locacao carros Gramado',
      'beleza bem estar Gramado',
      'hotel Gramado',
      'Canela RS turismo',
      'passeios Gramado',
      'Lion Turismo',
      'Lion Turismo Internacional',
      'pacote familiar Gramado',
      'turismo premium Gramado',
      'atendimento WhatsApp Gramado',
      '48 vezes cartao Gramado',
      'parcelamento passeios Gramado',
      'comprar ingresso Gramado',
      'investir Gramado',
      'morar em Gramado',
      'trabalhar em Gramado',
    ],
    author: 'Lion Turismo Internacional',
    locale: 'pt_BR',
    canonical: 'https://lionturismointernacional.com/',
    ogImage: '/img/lion_hero.png',
    ogImageAlt: 'Lion Turismo Internacional - Gramado para todos',
    twitterHandle: '@lionturismo',
    twitterCard: 'summary_large_image',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    whatsappBusiness: {
      number: '+5554991308073',
      link: 'https://wa.me/5554991308073',
      prefilledMessages: {
        turismo: 'Gostaria de informações sobre pacotes de Turismo em Gramado!',
        imoveis: 'Gostaria de informações sobre Imóveis na Serra Gaúcha!',
        beleza: 'Gostaria de informações sobre Beleza e bem estar!',
        veiculos: 'Gostaria de informações sobre Locação de carros com e sem motorista!',
        multimarcas: 'Gostaria de informações sobre Soluções Multimarcas!',
        atendimento: 'Olá! Gostaria de atendimento da Lion Turismo Internacional.',
        pacote: 'Quero montar meu pacote personalizado para Gramado!',
      },
    },
    social: {
      instagram: '@lionturismointernacional',
      instagramLink: '#',
      facebookLink: '#',
      googleBusinessUrl: '#',
    },
    category: 'Travel Agency',
  } as SeoData,

  hero: {
    eyebrow: 'Gramado para todos',
    titlePrimary: 'Gramado está mais',
    titleSecondary: 'perto do que você imagina',
    subtitle:
      'Experiências personalizadas para conhecer, morar, investir ou trabalhar em Gramado.',
    features: [
      'Atendimento personalizado',
      'Pacotes flexíveis',
      'Experiências únicas',
    ],
    backgroundImage: '/img/lion_hero.png',
    ctaPrimary: {
      label: 'Realize esse sonho',
      link: '#contato',
    },
    ctaSecondary: {
      label: 'Fale com a Lion',
      link: '#contato',
    },
  },

  about: {
    title: 'Uma empresa familiar conectando Gramado ao mundo',
    paragraphs: [
      'A Lion Turismo Internacional nasceu com o propósito de apresentar Gramado ao Brasil e ao mundo. Somos uma empresa familiar e multimarcas, preparada para ajudar pessoas que desejam conhecer, morar, investir ou trabalhar em uma das cidades mais desejadas do país.',
      'Trabalhamos para tornar essa experiência mais acessível, oferecendo atendimento personalizado, diferentes categorias de pacotes e condições que se adaptam ao perfil de cada cliente.',
    ],
  },

  positioning: {
    title: 'Conectando Gramado ao Brasil e ao mundo',
    description:
      'Trabalhamos para atrair turistas, novos moradores, investidores e profissionais interessados nas oportunidades oferecidas por Gramado e pela Serra Gaúcha.',
  },

  contact: {
    whatsapp: '(54) 99130-8073',
    whatsappLink: 'https://wa.me/5554991308073',
    email: 'lionturismointernacional@gmail.com',
    instagram: '@lionturismointernacional',
    instagramLink: '#',
    address: 'Gramado - RS, Brasil',
    addressLocality: 'Gramado',
    addressRegion: 'RS',
    addressCountry: 'BR',
    postalCode: '95670-000',
    geoLat: '-29.3766',
    geoLng: '-50.8737',
  } as ContactData,

  businessAreas: [
    {
      title: 'Turismo',
      description:
        'Pacotes personalizados para viver o melhor de Gramado e Canela com conforto, segurança e experiências inesquecíveis.',
      icon: 'suitcase',
      highlighted: true,
    },
    {
      title: 'Imóveis',
      description:
        'Imóveis residenciais e comerciais na Serra Gaúcha para quem quer morar, investir ou ter um refúgio de inverno.',
      icon: 'home',
      link: 'https://wa.me/5554991308073?text=Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Im%C3%B3veis!',
    },
    {
      title: 'Beleza',
      description:
        'Experiências de beleza e bem-estar com serviços premium para complementar sua estadia na Serra Gaúcha.',
      icon: 'sparkle',
      link: 'https://wa.me/5554991308073?text=Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Beleza%20e%20bem%20estar!',
    },
    {
      title: 'Veículos',
      description:
        'Veículos de qualidade para quem busca mobilidade, conforto e segurança durante toda a sua viagem.',
      icon: 'car',
      link: 'https://wa.me/5554991308073?text=Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Loca%C3%A7%C3%A3o%20de%20carros%20com%20e%20sem%20motorista!',
    },
    {
      title: 'Outras empresas',
      description:
        'Soluções multimarcas que conectam você a diferentes oportunidades em Gramado e região.',
      icon: 'building',
      link: 'https://wa.me/5554991308073?text=Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Solu%C3%A7%C3%B5es%20Multimarcas!',
    },
  ] as BusinessArea[],

  buttons: {
    buildPackage: {
      label: 'Monte seu pacote',
      link: 'https://wa.me/5554991308073',
      variant: 'primary',
    },
    talkToLion: {
      label: 'Fale com a Lion',
      link: '#contato',
      variant: 'outline',
    },
    meetGramado: {
      label: 'Quero conhecer Gramado',
      link: '#turismo',
      variant: 'primary',
    },
    requestService: {
      label: 'Solicitar atendimento',
      link: '#contato',
      variant: 'secondary',
    },
    whatsapp: {
      label: 'Chamar no WhatsApp',
      link: 'https://wa.me/5554991308073',
      variant: 'whatsapp',
    },
  },

  cityTour: {
    title: 'City Tour personalizado',
    subtitle:
      'Conheça Gramado e a Serra Gaúcha com veículos para todos os perfis, com conforto, segurança e mimos exclusivos a bordo.',
    region: 'Gramado e Serra Gaúcha - RS',
    freePerks: [
      'Bebidas grátis a bordo',
      'Chocolate grátis incluso',
    ],
    vehicles: [
      {
        name: 'Veículo 5 lugares',
        description: 'Ideal para casais e grupos pequenos. Conforto e agilidade nos roteiros.',
        icon: 'car',
      },
      {
        name: 'Veículo 7 lugares',
        description: 'Perfeito para famílias e amigos. Espaço amplo para até 7 passageiros.',
        icon: 'car',
      },
      {
        name: 'Van',
        description: 'Grupos maiores com todo o conforto e praticidade para passeios completos.',
        icon: 'suitcase',
      },
      {
        name: 'Ônibus',
        description: 'Para excursões, empresas e grandes grupos. Estrutura completa para longos roteiros.',
        icon: 'building',
      },
      {
        name: 'Veículo blindado',
        description: 'Máxima segurança para autoridades, famílias VIPs e perfis que exigem discrição.',
        icon: 'sparkle',
      },
      {
        name: 'Segurança para celebridades',
        description: 'Equipe treinada e estrutura exclusiva para atender artistas, personalidades e celebridades.',
        icon: 'suitcase',
      },
    ],
  },

  ticketsAndInstallments: {
    title: 'Ingressos, passaporte e passeios com parcelamento exclusivo',
    subtitle:
      'Tudo o que você precisa para viver a Serra Gaúcha, com condições de pagamento que cabem no seu bolso.',
    items: [
      'Todos os ingressos',
      'Passaporte de passeios',
      'Passeios guiados',
    ],
    installments: 'Até 48 vezes no cartão de crédito',
  },

  sections: {
    groupTitle: 'Um grupo, diferentes possibilidades',
    groupSubtitle:
      'Além do turismo, oferecemos soluções completas para diferentes momentos da sua vida em Gramado.',
    testimonialsTitle: 'O que nossos clientes contam',
    testimonialsEyebrow: 'Depoimentos',
    testimonialsSubtitle:
      'Centenas de famílias, investidores e visitantes já viveram Gramado com a Lion. Conheça algumas histórias reais.',
    testimonialsBadge: '+1.200 atendimentos realizados',
  },

  testimonials: [
    {
      id: 't1',
      name: 'Beatriz Andrade',
      role: 'Professora',
      location: 'Recife / PE',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
      rating: 5,
      category: 'Turismo',
      highlight: 'Atendimento familiar como se fôssemos da casa',
      quote:
        'Minha mãe sempre sonhou em conhecer Gramado no inverno. A Lion cuidou de absolutamente tudo — transfer, hospedagem, ingressos do Snowland e até um jantar especial no Natal Luz. Achei caro no começo, mas no fim valia cada centavo. Voltaremos no próximo ano!',
      date: 'Junho de 2026',
    },
    {
      id: 't2',
      name: 'Ricardo Fontoura',
      role: 'Empresário',
      location: 'São Paulo / SP',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
      rating: 5,
      category: 'Imóveis',
      highlight: 'Comprei um apartamento sem nunca ter pisado em Gramado',
      quote:
        'Eu conhecia a Serra Gaúcha só de fotos. A equipe me mandou vídeos reais, visita virtual, laudo completo do imóvel e até contatos de vizinhos. Hoje tenho um apartamento no Lago Negro com rentabilidade temporada — tudo parcelado, sem dor de cabeça. Confiança total.',
      date: 'Abril de 2026',
    },
    {
      id: 't3',
      name: 'Juliana Vasconcellos',
      role: 'Médica dermatologista',
      location: 'Belo Horizonte / MG',
      avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&auto=format&fit=crop&q=80',
      rating: 5,
      category: 'Beleza',
      highlight: 'Dia de noiva em Gramado simplesmente inesquecível',
      quote:
        'Me casei na Rua Coberta e a equipe da Beleza do Grupo veio até o hotel para fazer o meu make, cabelo, manicure e esmalteria. Produtos premium, horário respeitado, artista com anos de experiência em casamentos. Eu estava linda e relaxada para a cerimônia. Nota 10!',
      date: 'Março de 2026',
    },
    {
      id: 't4',
      name: 'Eduardo Bittencourt',
      role: 'Diretor financeiro',
      location: 'Curitiba / PR',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&auto=format&fit=crop&q=80',
      rating: 5,
      category: 'Veículos',
      highlight: 'Van com motorista por 5 dias no roteiro Serra Gaúcha',
      quote:
        'Somos família de 8 pessoas e eu não queria dirigir na neve. Pegamos a van da Lion com motorista experiente. Água e chocolate o dia inteiro, ar condicionado, porta-malas grande para nossas malas de inverno e a pontualidade foi cirúrgica. Recomendo para grupos grandes!',
      date: 'Julho de 2026',
    },
    {
      id: 't5',
      name: 'Fernanda Kessler',
      role: 'Gerente de marketing',
      location: 'Florianópolis / SC',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80',
      rating: 4,
      category: 'Multimarcas',
      highlight: 'Uma empresa, toda a minha mudança resolvida',
      quote:
        'Vim de Floripa para trabalhar em Gramado. A Lion me ajudou com imóvel para alugar, locação do carro do dia a dia e até me indicou o salão e academia perto do meu novo lar. Não imaginava que uma empresa de turismo pudesse me conectar com tantas soluções práticas. Economizei semanas de busca!',
      date: 'Maio de 2026',
    },
    {
      id: 't6',
      name: 'Antônio Carlos Vieira',
      role: 'Aposentado',
      location: 'Rio de Janeiro / RJ',
      avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&auto=format&fit=crop&q=80',
      rating: 5,
      category: 'Turismo',
      highlight: 'Parcelamos tudo em 48x e fomos eu, minha esposa e 3 netos',
      quote:
        'Achei que não ia conseguir levar os netos pro Natal Luz. A Lion me fez um orçamento com todos os ingressos, hotel com café da manhã e até o City Tour com chocolate e suco liberado. Parcelamos em 48 vezes no cartão, minha filha ajudou com as parcelas e a gente realizou o sonho em família. Agradeço muito!',
      date: 'Dezembro de 2025',
    },
  ] as Testimonial[],
};

export type SiteConfig = typeof siteConfig;

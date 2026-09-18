export interface ContactData {
  whatsapp: string;
  whatsappLink: string;
  email: string;
  instagram: string;
  instagramLink: string;
  address: string;
}

export interface BusinessArea {
  title: string;
  description: string;
  icon: string;
  highlighted?: boolean;
}

export interface ContactData {
  label: string;
  link: string;
  variant: 'primary' | 'secondary' | 'outline' | 'whatsapp';
}

export const siteConfig = {
  companyName: 'Lion Turismo Internacional',
  slogan: 'Gramado para todos.',
  institutionalPhrase: 'Gramado, a melhor cidade do Brasil, será apresentada ao mundo.',

  logo: '/img/hero-bg1.png',
  institutionalImage: '/img/hero-bg1.png',

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
    },
    {
      title: 'Beleza',
      description:
        'Experiências de beleza e bem-estar com serviços premium para complementar sua estadia na Serra Gaúcha.',
      icon: 'sparkle',
    },
    {
      title: 'Veículos',
      description:
        'Veículos de qualidade para quem busca mobilidade, conforto e segurança durante toda a sua viagem.',
      icon: 'car',
    },
    {
      title: 'Outras empresas',
      description:
        'Soluções multimarcas que conectam você a diferentes oportunidades em Gramado e região.',
      icon: 'building',
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
  },
};

export type SiteConfig = typeof siteConfig;

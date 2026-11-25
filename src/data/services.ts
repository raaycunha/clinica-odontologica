export interface ServiceItem {
  id: number;
  image: string;
  title: string;
  text: string;
  icon: string;
}

export const allServices: ServiceItem[] = [
  {
    id: 0,
    image: "clinica-familia.webp",
    title: "Clínica Geral",
    text: "Cuidados completos para manter sua saúde bucal em dia, com avaliações, prevenção, restaurações e acompanhamento.",
    icon: "icon-clinica.webp",
  },

  {
    id: 1,
    image: "clareamento.webp",
    title: "Clareamento Dental",
    text: "Recupere o brilho do seu sorriso com tratamentos seguros para deixar dentes mais claros e a aparência confiante.",
    icon: "icon-clareamento.webp",
  },

  {
    id: 2,
    image: "ortodontia.webp",
    title: "Ortodontia",
    text: "Tratamentos para corrigir o alinhamento dos dentes e a mordida, trazendo mais equilíbrio e harmonia no sorriso.",
    icon: "icon-ortodontia.webp",
  },

  {
    id: 3,
    image: "implantes.webp",
    title: "Implantes Dentários",
    text: "Soluções modernas para substituir dentes perdidos e recuperar a estética, a segurança e a função na mastigação.",
    icon: "icon-implante.webp",
  },

  {
    id: 4,
    image: "limpeza.webp",
    title: "Limpeza e Prevenção",
    text: "Prevenção é o melhor cuidado. Realizamos limpeza e acompanhamento para evitar cáries, tártaro e placas na boca.",
    icon: "icon-clean-dental.webp",
  },

  {
    id: 5,
    image: "lentes.webp",
    title: "Lentes de Contato Dental",
    text: "Transforme seu sorriso corrigindo formato, tamanho, imperfeições e tonalidade dos dentes com muita naturalidade.",
    icon: "icon-lente.webp",
  },
];

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
    text: "Cuidados completos para manter sua saúde bucal em dia, com avaliação, prevenção, restaurações e acompanhamento personalizado.",
    icon: "icon-clinica.webp",
  },

  {
    id: 1,
    image: "clareamento.webp",
    title: "Clareamento Dental",
    text: "Recupere o brilho do seu sorriso com tratamentos seguros para deixar seus dentes mais claros e sua aparência ainda mais confiante.",
    icon: "icon-clareamento.webp",
  },

  {
    id: 2,
    image: "ortodontia.webp",
    title: "Ortodontia",
    text: "Tratamentos para corrigir o alinhamento dos dentes e a mordida, proporcionando mais equilíbrio, saúde e harmonia ao sorriso.",
    icon: "icon-ortodontia.webp",
  },

  {
    id: 3,
    image: "implantes.webp",
    title: "Implantes Dentários",
    text: "Soluções modernas para substituir dentes perdidos, recuperando estética, segurança e qualidade na mastigação.",
    icon: "icon-implante.webp",
  },

  {
    id: 4,
    image: "limpeza.webp",
    title: "Limpeza e Prevenção",
    text: "Prevenção é o melhor cuidado. Realizamos limpeza profissional e acompanhamento para evitar cáries, tártaro e problemas gengivais.",
    icon: "icon-clean-dental.webp",
  },

  {
    id: 5,
    image: "lentes.webp",
    title: "Lentes de Contato Dental",
    text: "Transforme seu sorriso corrigindo formato, tamanho, pequenas imperfeições e tonalidade dos dentes com naturalidade.",
    icon: "icon-lente.webp",
  },
];

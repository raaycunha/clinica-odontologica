export interface ReviewItem {
  id: number;
  image: string;
  name: string;
  text: string;
  local: string;
  service: string;
}

export const allReviews: ReviewItem[] = [
  {
    id: 0,
    image: "mariana_souza.webp",
    name: "Mariana Souza",
    text: "Fiquei muito satisfeita com o atendimento. Desde a primeira consulta, a equipe explicou cada etapa com calma e me deixou muito segura. O resultado do clareamento ficou natural e superou minhas expectativas.",
    local: "Belo Horizonte – MG",
    service: "Clareamento Dental",
  },
  {
    id: 1,
    image: "rafael_lima.webp",
    name: "Rafael Lima",
    text: "Eu tinha bastante receio de fazer o tratamento, mas fui muito bem orientado durante todo o processo. O atendimento foi excelente e hoje voltei a sorrir e mastigar com muito mais confiança.",
    local: "Contagem – MG",
    service: "Implantes Dentários",
  },
  {
    id: 2,
    image: "camila_ferreira.webp",
    name: "Camila Ferreira",
    text: "Meu tratamento ortodôntico foi uma experiência muito positiva. Sempre fui atendida com atenção, pontualidade e muito cuidado. A diferença no meu sorriso foi incrível.",
    local: "Nova Lima – MG",
    service: "Ortodontia",
  },
  {
    id: 3,
    image: "lucas_almeida.webp",
    name: "Lucas Almeida",
    text: "Clínica muito organizada, moderna e acolhedora. Fiz minha avaliação e todo o tratamento foi explicado de forma simples. Gostei muito do cuidado e da atenção da equipe.",
    local: "Betim – MG",
    service: "Clínica Geral",
  },
  {
    id: 4,
    image: "juliana_martins.webp",
    name: "Juliana Martins",
    text: "O atendimento foi muito cuidadoso e confortável. A profissional explicou como melhorar minha rotina de higiene e fez uma limpeza excelente. Saí da clínica com uma sensação ótima.",
    local: "Lagoa Santa – MG",
    service: "Limpeza e Prevenção",
  },
  {
    id: 5,
    image: "bruno_carvalho.webp",
    name: "Bruno Carvalho",
    text: "Queria melhorar meu sorriso sem perder a naturalidade, e o resultado ficou exatamente como eu imaginava. Todo o planejamento foi muito bem feito e o atendimento foi impecável.",
    local: "Vespasiano – MG",
    service: "Lentes de Contato Dental",
  },
];

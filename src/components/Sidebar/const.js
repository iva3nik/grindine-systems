export const listCheckboxes = [
  {
    title: "Сортировать",
    type: "radio",
    id: "choose-sort",
    name: "sort",
    inputs: [
      {
        value: "increase",
        point: "- по возрастанию цены",
      },
      {
        value: "increase",
        point: "- по убыванию цены",
      },
      {
        value: "increase",
        point: "- по времени пути",
      },
    ],
  },
  {
    title: "Фильтровать",
    type: "checkbox",
    id: "filter",
    name: "filter",
    inputs: [
      {
        value: "with",
        point: "- 1 пересадка",
      },
      {
        value: "without",
        point: "- без пересадок",
      },
    ],
  },
  {
    title: "Цена",
    type: "number",
    id: "price",
    name: "price",
    inputs: [
      {
        label: "От",
        point: 0,
      },
      {
        label: "До",
        point: 1000000,
      },
    ],
  },
  {
    title: "Авиакомпании",
    type: "checkbox",
    id: "avia",
    name: "avia",
    inputs: [
      {
        value: "LOT",
        point: "- LOT Polish Airlines от 21049 р.",
      },
      {
        value: "Aeroflot",
        point: "- Аэрофлот - рос.... от 31733 р.",
      },
    ],
  },
];

interface InventoryItf {
  name: string
  type: string
  quantity: number
}

const inventory: InventoryItf[] = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

Object.groupBy(inventory, ({ type }) => type)

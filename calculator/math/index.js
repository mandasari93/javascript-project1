console.log("This is calculator math");

const itemSelected = {
  total: 0,
  totalPrice: 0,
  add: function(itemCost) {
    this.total += itemCost;
    this.totalPrice = itemCost;
  },
  select: function(item, quantity) {
    switch (item) {
      case "Samsung Galaxy s9+":
        this.add(12000000 * quantity);
        break;
      case "Iphone 8+":
        this.add(10000000 * quantity);
        break;
      case "Oppo f9+":
        this.add(8000000 * quantity);
        break;
      case "Xiaomi":
        this.add(6000000 * quantity);
        break;
      case "LG":
        this.add(4000000 * quantity);
        break;
    }
    return true;
  },

  voidTotalPrice: function() {
    this.total -= this.totalPrice;
    this.totalPrice = 0;
  }
};

itemSelected.select("Samsung Galaxy s9+", 1);
itemSelected.select("Xiaomi", 1);
itemSelected.select("Oppo f9+", 2);
itemSelected.select("LG", 3)

console.log(
  `your bill is: Rp ${itemSelected.total.toLocaleString("id", {
    style: "currency",
    currency: "IDR"
  })}`
);

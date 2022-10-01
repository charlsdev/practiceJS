class IcecreamBuilder {
  constructor(flavor, scoops) {
    this.flavor = flavor,
      this.scoops = scoops
  }
  
  setSize (size) {
    this.size = size;
    return this;
  }
  
  setPrice (price) {
    this.price = price;
    return this;
  }
  
  build () {
    if (!('flavor' in this)) {
      throw new Error('Flavor is missing');
    }
    
    if (!('scoops' in this)) {
      throw new Error('Scoops is missing');
    }
    
    return new IcecreamBuilder(
      this.flavor,
      this.scoops,
      this.size,
      this.price
    )
  }
}

const chocolate = new IcecreamBuilder('chocolate', 2)
    .setSize('medium')
    .setPrice('$2.25')
    .build();

console.log(chocolate);
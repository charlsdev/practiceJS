class Dog {  
  log () {
    console.log(this.is);
    return this;
  }
  
  barck() {
    this.is = "woofing";
    return this;
  }
  
  walk() {
    this.is = "walking";
    return this;
  }
}

const chainableDog = new Dog();

chainableDog
  .barck()
  .log()
  .walk()
  .log();
type Size = '' | 'S' | 'M' | 'XL';

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = '',
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if ((<string>this[key]).length <= 0)
            throw new Error(`${key} is empty`);
          break;
        case 'number':
          if (<number>this[key] <= 0) throw new Error(`${key} is zero`);
          break;
        default:
          throw new Error(`${typeof this[key]} is not supported`);
      }
    }

    return true;
  }

  tostring() {
    // No DRY
    // if (this.name.length <= 0) throw new Error('Name is emty');
    // if (this.price <= 0) throw new Error('Price is zero');
    // if (this.size.length <= 0) throw new Error('Zise is emty');

    if (!this.isProductReady()) return;
    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product('asd');
  console.log(bluePants.tostring());
})();

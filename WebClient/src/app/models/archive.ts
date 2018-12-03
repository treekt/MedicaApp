export class Desease {
  id: number;
  code: string;
  name: string;
  description: string;
}

export class Medicine {
  id: string;
  productName: string;
  productType: string;
  power: string;
  form: string;
  entityResponsible: string;
  activeSubstances: string[];
  packages: Package[];

  constructor() {
  }

  constructor(medicine: Medicine) {
    this.productName = medicine.productName;
    this.productType = medicine.productType;
    this.power = medicine.power;
    this.form = medicine.form;
  }
}

export class Package {
  id: string;
  size: string;
  unitSize: string;
}

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

}

export class Package {
  id: string;
  size: string;
  unitSize: string;
}

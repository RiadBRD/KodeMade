interface Rocket {
  reactors: number;
  vMax: number;
  takeOff: (action: string) => void;
}

//Equivalent
type Rocket2 = {
  reactors: number;
  vMax: number;
  takeOff: (action: string) => void;
};

//Merge with the the Rocket above
interface Rocket {
  price: number;
  modele: number;
}

class RocketFactory implements Rocket {
  reactors: number;
  vMax: number;
  price: number;
  modele: number;

  constructor(reactors: number, vMax: number, price: number, modele: number) {
    this.modele = modele;
    this.price = price;
    this.reactors = reactors;
    this.vMax = vMax;
  }

  takeOff(action: string) {
    console.log("Hello World");
  }
}

const Falcon1 = new RocketFactory(12, 9000, 2, 9000);
console.log(Falcon1);
Falcon1.takeOff("Decolle !");

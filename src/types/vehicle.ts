type Currency = 'ars' | 'usd';
type Transmission = 'manual' | 'auto';
type Fuel = 'diesel' | 'nafta' | 'gnc';

interface Seller {
  name: string;
  phone: number;
}

interface General {
  brand: string;
  model: string;
  version: string;
  vehicleType: string;
  condition: string;
  fuel: Fuel;
  countryOfOrigin: string;
  color: string;
  previousOwners: number;
  address: string;
}

interface Safety {
  autoHeadlights: boolean;
  rearFogLights: boolean;
  airbag: boolean;
  stabilityControl: boolean;
  tractionControl: boolean;
  tractionType: string;
  abs: boolean;
  centralLocking: boolean;
  thirdBrakeLight: boolean;
}

interface Performance {
  engine: number;
  transmission: string;
  frontBumper: boolean;
  displacement: number;
  power: number;
  acceleration: string;
  valvesPerCylinder: number;
  battery: string;
}

interface Dimensions {
  length: number;
  height: number;
  width: number;
  wheelbase: number;
  seats: number;
  doors: number;
  tankCapacity: number;
  averageConsumption: number;
  acceleration: number;
  topSpeed: number;
}

interface Equipment {
  rearCamera?: boolean;
  alarm?: boolean;
  alloyWheels?: boolean;
  bluetooth?: boolean;
  radio?: boolean;
  dvd?: boolean;
  cupHolder?: boolean;
  usbCharger?: boolean;
  tripComputer?: boolean;
  cruiseControl?: boolean;
  airConditioning?: boolean;
  electricWindows?: boolean;
  rearDefogger?: boolean;
  mp3?: boolean;
}

export interface Vehicle {
  vehicle: string;
  img: string;
  price: number;
  currency: Currency;
  year: number;
  kilometers: number;
  transmission: Transmission;
  location: string;
  tradeIn: boolean;
  financing: boolean;
  warranty: boolean;
  mechanical_warranty:boolean;
  id: string;
  seller: Seller;
  general: General;
  safety: Safety;
  performance: Performance;
  dimensions: Dimensions;
  equipment: Equipment;
}

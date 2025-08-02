import { Vehicle } from "@/types/vehicle";

export const vehicles: Vehicle[] = [
  {
    vehicle: "Auto deportivo",
    img: "https://example.com/auto1.jpg",
    price: 15000000,
    currency: "ars",
    year: 2021,
    kilometers: 20000,
    transmission: "auto",
    location: "Buenos Aires",
    tradeIn: true,
    financing: true,
    warranty: true,
    id: "vehiculo-001",
    seller: {
      name: "Juan Pérez",
      phone: 1123456789
    },
    general: {
      brand: "Toyota",
      model: "GR Supra",
      version: "3.0 Turbo",
      vehicleType: "cupé",
      condition: "nuevo",
      fuel: "nafta",
      countryOfOrigin: "Japón",
      color: "rojo",
      previousOwners: 0,
      address: "Av. Libertador 1234"
    },
    safety: {
      autoHeadlights: true,
      rearFogLights: true,
      airbag: true,
      stabilityControl: true,
      tractionControl: true,
      tractionType: "trasera",
      abs: true,
      centralLocking: true,
      thirdBrakeLight: true
    },
    performance: {
      engine: 3000,
      transmission: "automática",
      frontBumper: true,
      displacement: 2998,
      power: 340,
      acceleration: "4.1 seg",
      valvesPerCylinder: 4,
      battery: "iones de litio"
    },
    dimensions: {
      length: 4380,
      height: 1290,
      width: 1850,
      wheelbase: 2470,
      seats: 2,
      doors: 2,
      tankCapacity: 52,
      averageConsumption: 8.5,
      acceleration: 4.1,
      topSpeed: 250
    },
    equipment: {
      rearCamera: true,
      alarm: true,
      alloyWheels: true,
      bluetooth: true,
      radio: true,
      dvd: false,
      cupHolder: true,
      usbCharger: true,
      tripComputer: true,
      cruiseControl: true,
      airConditioning: true,
      electricWindows: true,
      rearDefogger: true,
      mp3: true
    }
  },
  {
    vehicle: "SUV familiar",
    img: "https://example.com/auto2.jpg",
    price: 45000,
    currency: "usd",
    year: 2019,
    kilometers: 45000,
    transmission: "manual",
    location: "Córdoba",
    tradeIn: false,
    financing: true,
    warranty: false,
    id: "vehiculo-002",
    seller: {
      name: "María López",
      phone: 1134567890
    },
    general: {
      brand: "Ford",
      model: "Kuga",
      version: "Titanium",
      vehicleType: "SUV",
      condition: "usado",
      fuel: "nafta",
      countryOfOrigin: "EE.UU.",
      color: "gris",
      previousOwners: 1,
      address: "Ruta 9, km 550"
    },
    safety: {
      autoHeadlights: true,
      rearFogLights: false,
      airbag: true,
      stabilityControl: true,
      tractionControl: true,
      tractionType: "integral",
      abs: true,
      centralLocking: true,
      thirdBrakeLight: true
    },
    performance: {
      engine: 2000,
      transmission: "manual",
      frontBumper: true,
      displacement: 1999,
      power: 180,
      acceleration: "9.2 seg",
      valvesPerCylinder: 4,
      battery: "convencional"
    },
    dimensions: {
      length: 4524,
      height: 1689,
      width: 1838,
      wheelbase: 2690,
      seats: 5,
      doors: 5,
      tankCapacity: 60,
      averageConsumption: 7.5,
      acceleration: 9.2,
      topSpeed: 200
    },
    equipment: {
      rearCamera: true,
      alarm: true,
      alloyWheels: true,
      bluetooth: true,
      radio: true,
      usbCharger: true,
      tripComputer: true,
      cruiseControl: true,
      airConditioning: true,
      electricWindows: true,
      rearDefogger: true
    }
  },
  {
    vehicle: "Pickup doble cabina",
    img: "https://example.com/auto3.jpg",
    price: 28000000,
    currency: "ars",
    year: 2023,
    kilometers: 5000,
    transmission: "manual",
    location: "Rosario",
    tradeIn: true,
    financing: false,
    warranty: true,
    id: "vehiculo-003",
    seller: {
      name: "Automotores S.A.",
      phone: 1145678901
    },
    general: {
      brand: "Volkswagen",
      model: "Amarok",
      version: "Highline",
      vehicleType: "pickup",
      condition: "nuevo",
      fuel: "diesel",
      countryOfOrigin: "Argentina",
      color: "negro",
      previousOwners: 0,
      address: "Blvd. Oroño 300"
    },
    safety: {
      autoHeadlights: true,
      rearFogLights: true,
      airbag: true,
      stabilityControl: true,
      tractionControl: true,
      tractionType: "4x4",
      abs: true,
      centralLocking: true,
      thirdBrakeLight: true
    },
    performance: {
      engine: 2400,
      transmission: "manual",
      frontBumper: true,
      displacement: 2398,
      power: 204,
      acceleration: "10.5 seg",
      valvesPerCylinder: 4,
      battery: "AGM"
    },
    dimensions: {
      length: 5254,
      height: 1834,
      width: 1954,
      wheelbase: 3097,
      seats: 5,
      doors: 4,
      tankCapacity: 80,
      averageConsumption: 9.5,
      acceleration: 10.5,
      topSpeed: 190
    },
    equipment: {
      rearCamera: true,
      alarm: true,
      alloyWheels: true,
      bluetooth: true,
      radio: true,
      airConditioning: true,
      electricWindows: true,
      rearDefogger: true,
      mp3: true
    }
  }
];

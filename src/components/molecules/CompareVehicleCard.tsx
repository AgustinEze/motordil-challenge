"use client";
import React, { useEffect, useMemo, useState } from "react";
import FlexCol from "../atoms/FlexCol";
import SelectCompareVehicle from "./SelectCompareVehicle";
import { Vehicle } from "@/types/vehicle";
import { useFakeFetch } from "@/helper/functions/fakeFetch";
import { vehicles } from "@/mock/vehicles";
import Image from "next/image";
import TradeInBadge from "../atoms/TradeInBadge";
import FinancingBadge from "../atoms/FinancingBadge";
import WarrantyBadge from "../atoms/WarrantyBadge";
import MechanicalWarrantyBadge from "../atoms/MechanicalWarrantyBadge";
import { Button } from "../ui/button";
import Flex from "../atoms/Flex";
import AccordionDetails from "../atoms/AccordionDetails";

interface CompareVehicleCardProps {
  selectOptions: Vehicle[];
  value: string | null;
  onChange: (value: string | null) => void;
}

const CompareVehicleCard = ({
  selectOptions,
  value,
  onChange,
}: CompareVehicleCardProps) => {
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  //simulo una llamada a vehicle/id
  const selectedVehicle = useMemo(() => {
    return vehicles.filter((vehicle) => vehicle.id === value);
  }, [value]);

  const { data } = useFakeFetch(selectedVehicle);

  useEffect(() => {
    if (data?.[0]) {
      setVehicle(data[0]);
    }
  }, [data, value]);

  return (
    <FlexCol className="gap-4 sm:gap-10 max-w-[136px] sm:w-[352px]">
      <SelectCompareVehicle
        selectOptions={selectOptions}
        value={value}
        onChange={onChange}
      />
      {vehicle && (
        <FlexCol className="gap-4 sm:gap-6">
          <Image
            className="rounded-[10px] w-[136px] h-[136px] sm:w-[352px] sm:h-[352px]"
            src={vehicle.img}
            width={352}
            height={352}
            alt="Car"
          />

          <span className="font-medium text-[32px] leading-[28.8px] tracking-[2px]">{`${vehicle.price} ${vehicle.currency}`}</span>
          <FlexCol className="gap-2 font-medium text-[14px] leading-[21px] tracking-[0.1em] align-middle uppercase">
            <span className="">{vehicle.year}</span>
            <span className="">{vehicle.kilometers} KMS</span>
            <span className="">{vehicle.transmission}</span>
            <span className="font-medium text-[11px] leading-[16px] tracking-[0.1em] uppercase text-[#9095A0]">
              {vehicle.location}
            </span>
          </FlexCol>
          <FlexCol className="gap-4">
            <TradeInBadge yes={vehicle.tradeIn} />
            <FinancingBadge yes={vehicle.financing} />
            <MechanicalWarrantyBadge yes={vehicle.mechanical_warranty} />
            <WarrantyBadge yes={vehicle.warranty} />
          </FlexCol>
          <Flex className="gap-4 w-[136px] sm:w-[352px]">
            <Button className="border-[1px] border-[#F0F2F6] rounded hidden sm:inline px-4 py-2 bg-[#F0F2F6] w-[136px] sm:w-[352px]">
              <span className=" font-medium text-[16px] leading-[24px] text-center align-middle text-[#1E4787]">
                Ver anuncio
              </span>
            </Button>
            <Button className="border-[1px] border-[#1E4787] rounded  px-4 py-2 bg-[#1E4787] w-[136px] sm:w-[352px]">
              <span className=" font-medium text-[16px] hidden sm:inline leading-[24px] text-center align-middle  text-[#FFFFFF]">
                Contactar al vendedor
              </span>
              <span className=" font-medium text-[16px] sm:hidden leading-[24px] text-center align-middle  text-[#FFFFFF]">
                Contactar
              </span>
            </Button>
          </Flex>
          <FlexCol className="max-w-[136px] sm:w-[352px]">
            <AccordionDetails
              title={"General"}
              headers={[
                "Marca",
                "Modelo",
                "Versión",
                "Tipo de vehículo",
                "Condición",
                "Combustible",
                "País de origen",
                "Color",
                "Dueños anteriores",
                "Dirección",
              ]}
              contentMap={{
                Marca: vehicle.general.brand,
                Modelo: vehicle.general.model,
                Versión: vehicle.general.version,
                "Tipo de vehículo": vehicle.general.vehicleType,
                Condición: vehicle.general.condition,
                Combustible: vehicle.general.fuel,
                "País de origen": vehicle.general.countryOfOrigin,
                Color: vehicle.general.color,
                "Dueños anteriores": vehicle.general.previousOwners,
                Dirección: vehicle.general.address,
              }}
            />
            <AccordionDetails
             title={"Seguridad"} 
             headers={[
              "Faros con regulación automática",
              "Faros antinieblas traseros",
              "Airbag",
              "Control de estabilidad",
              "Control de tracción",
              "Tipo de tracción",
              "Frenos ABS",
              "Cierre centralizado de puertas",
              "Tercera luz de freno LED",
             ]}
             contentMap={{
              "Faros con regulación automática": vehicle.safety.autoHeadlights?"Si":'No',
              "Faros antinieblas traseros": vehicle.safety.rearFogLights?"Si":'No',
              Airbag: vehicle.safety.airbag?"Si":'No',
              "Control de estabilidad": vehicle.safety.stabilityControl?"Si":'No',
              "Control de tracción": vehicle.safety.tractionControl?"Si":'No',
              "Tipo de tracción": vehicle.safety.tractionType,
              "Frenos ABS": vehicle.safety.abs?"Si":'No',
              "Cierre centralizado de puertas": vehicle.safety.centralLocking?"Si":'No',
              "Tercera luz de freno LED": vehicle.safety.thirdBrakeLight?"Si":'No',
             }}
             />
            <AccordionDetails 
            title={"Prestaciones y mecanica"}
            headers={[
              "Motor",
              "Transmisión",
              "Defensa delantero",
              "Cilindrada",
              "Potencia",
              "Aceleración",
              "Valvulas por cilindro",
              "Tipo de bateria",
            ]}
            contentMap={{
              Motor: vehicle.performance.engine,
              Transmisión: vehicle.performance.transmission,
              "Defensa delantero": vehicle.performance.frontBumper?"Si":'No',
              Cilindrada: vehicle.performance.displacement,
              Potencia: vehicle.performance.power,
              Aceleración: vehicle.performance.acceleration,
              "Valvulas por cilindro": vehicle.performance.valvesPerCylinder,
               "Tipo de bateria": vehicle.performance.battery,
            }}
            />
            <AccordionDetails 
            title={"Rendimiento y dimensiones"} 
            headers={[
              "Largo x Alto x Ancho",
              "Distancia entre ejes",
              "Asientos",
              "Puertas",
              "Capacidad de tanque",
              "Consumo medio",
              "Aceleración",
              "Velocidad máxima",
            ]}
            contentMap={{
              "Largo x Alto x Ancho": `${vehicle.dimensions.length} mm x ${vehicle.dimensions.height} mm x ${vehicle.dimensions.width} mm`,
              "Distancia entre ejes": vehicle.dimensions.wheelbase,
              Asientos: vehicle.dimensions.seats,
              Puertas: vehicle.dimensions.doors,
              "Capacidad de tanque": vehicle.dimensions.tankCapacity,
              "Consumo medio": vehicle.dimensions.averageConsumption,
              Aceleración: vehicle.dimensions.acceleration,
              "Velocidad máxima": vehicle.dimensions.topSpeed,
            }}
            />
            <AccordionDetails 
            title={"Equipamiento destacado"} 
            headers={[
              "Cámara trasera",
              "Alarma",
              "Llantas de aluminio",
              "Bluetooth",
              "Radio",
              "DVD",
              "Porta equipaje",
              "Cargador USB",
              "Computadora de viaje",
              "Control de cruza",
              "Aire acondicionado",
              "Ventanas eléctricas",
              "Desempañador trasero",
              "MP3",
            ]}
            contentMap={{
              "Cámara trasera": vehicle.equipment.rearCamera,
              Alarma: vehicle.equipment.alarm,
              "Llantas de aluminio": vehicle.equipment.alloyWheels,
              Bluetooth: vehicle.equipment.bluetooth,
              Radio: vehicle.equipment.radio,
              DVD: vehicle.equipment.dvd,
              "Porta equipaje": vehicle.equipment.cupHolder,
              "Cargador USB": vehicle.equipment.usbCharger,
              "Computadora de viaje": vehicle.equipment.tripComputer,
              "Control de cruza": vehicle.equipment.cruiseControl,
              "Aire acondicionado": vehicle.equipment.airConditioning,
              "Ventanas eléctricas": vehicle.equipment.electricWindows,
              "Desempañador trasero": vehicle.equipment.rearDefogger,
              MP3: vehicle.equipment.mp3,
            }}
            />
          </FlexCol>
        </FlexCol>
      )}
    </FlexCol>
  );
};

export default CompareVehicleCard;

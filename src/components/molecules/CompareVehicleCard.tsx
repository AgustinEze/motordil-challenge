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
              <span className=" font-medium text-[16px] leading-[24px] text-center align-middle text-[#1E4787]">Ver anuncio</span>
            </Button>
            <Button className="border-[1px] border-[#1E4787] rounded  px-4 py-2 bg-[#1E4787] w-[136px] sm:w-[352px]">
              <span className=" font-medium text-[16px] hidden sm:inline leading-[24px] text-center align-middle  text-[#FFFFFF]">Contactar al vendedor</span>
              <span className=" font-medium text-[16px] sm:hidden leading-[24px] text-center align-middle  text-[#FFFFFF]">Contactar</span>
            </Button>
          </Flex>
        </FlexCol>
      )}
    </FlexCol>
  );
};

export default CompareVehicleCard;

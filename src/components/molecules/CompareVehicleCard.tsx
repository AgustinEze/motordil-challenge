"use client";
import React, {  useEffect, useMemo, useState } from "react";
import FlexCol from "../atoms/FlexCol";
import SelectCompareVehicle from "./SelectCompareVehicle";
import { Vehicle } from "@/types/vehicle";
import { useFakeFetch } from "@/helper/functions/fakeFetch";
import { vehicles } from "@/mock/vehicles";
import Image from "next/image";
import TradeInBadge from "../atoms/TradeInBadge";
import FinancingBadge from "../atoms/FinancingBadge";
import MechanicalWarranty from "../atoms/MechanicalWarrantyBadge";
import WarrantyBadge from "../atoms/WarrantyBadge";
import MechanicalWarrantyBadge from "../atoms/MechanicalWarrantyBadge";

interface CompareVehicleCardProps {
  selectOptions: Vehicle[]
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
    <FlexCol className="gap-4 sm:gap-10 w-[137px] sm:w-[352px]">
      <SelectCompareVehicle
        selectOptions={selectOptions}
        value={value}
        onChange={onChange}
      />
      {vehicle && (
        <FlexCol className="gap-4 sm:gap-6">
          <Image className="rounded-[10px] w-[352px] h-[352px]" src={vehicle.img} width={352} height={352} alt="Car" />
          
          <span className="font-medium text-[32px] leading-[28.8px] tracking-[2px]">{`${vehicle.price} ${vehicle.currency}`}</span>
          <FlexCol className="gap-2 font-medium text-[14px] leading-[21px] tracking-[0.1em] align-middle uppercase">
            <span className="">
              {vehicle.year}
            </span>
            <span className="">
              {vehicle.kilometers} KMS
            </span>
            <span className="">
              {vehicle.transmission}
            </span>
            <span className="font-medium text-[11px] leading-[16px] tracking-[0.1em] uppercase text-[#9095A0]">
              {vehicle.location}
            </span>
          </FlexCol>
          <FlexCol className="gap-4">
            <TradeInBadge yes={vehicle.tradeIn}/>
            <FinancingBadge yes={vehicle.financing}/>
            <MechanicalWarrantyBadge yes={vehicle.mechanical_warranty}/>
            <WarrantyBadge yes={vehicle.warranty}/>


          </FlexCol>
        </FlexCol>
      )}
    </FlexCol>
  );
};


export default CompareVehicleCard;

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import FlexCol from "../atoms/FlexCol";
import { Vehicle } from "@/types/vehicle";

interface CompareVehicleCardProps {
  selectOptions: Vehicle[];

  value: string | null;
  onChange: (value: string | null) => void;
}
const SelectCompareVehicle = ({
  selectOptions,
  value,
  onChange,
}: CompareVehicleCardProps) => {
  const selectedVehicle = selectOptions.find((option) => option.id === value);
  return (
    <Select
      value={value ?? ''}
      onValueChange={(val) => onChange(val || null)}
    >
      <SelectTrigger className="w-[136px] sm:w-[352px]">
        <SelectValue
          placeholder="Seleccione un vehículo"
          // Solo mostramos el nombre del vehículo seleccionado
          className="text-left"
        >
          {selectedVehicle?.vehicle ?? ''}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {selectOptions.map((option) => (
          <SelectItem key={option.id} className='p-4 w-full  border-b-[1px] border-b-[#D6DBE4]' value={option.id}>
            <FlexCol className=" w-full">
              <span className="font-bold text-[16px] leading-[19.2px] text-[#31343A]">

            {option.vehicle}
              </span>
            <span className="font-medium text-[14px] leading-[21px] align-middle text-[#9095A0]">
              {`${option.year} . ${option.kilometers} kms . ${option.transmission} . `}
            </span>
            <span className="font-medium text-[14px] leading-[21px] text-[#9095A0]">
              Hace 15 días
            </span>
            <span className=" font-bold text-[18px] leading-[21.6px] text-[#31343A]">
              {`$ ${option.price}`}
            </span>
            </FlexCol>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectCompareVehicle;

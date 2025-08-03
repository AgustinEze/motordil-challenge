"use client";
import React, { Suspense } from "react";
import Flex from "../atoms/Flex";
import CompareVehicleCard from "./CompareVehicleCard";
import { useFakeFetch } from "@/helper/functions/fakeFetch";
import { vehicles } from "@/mock/vehicles";
import { useCardCountByBreakpoint } from "@/helper/functions/useCardCountByBreakpoint";
import { useCompareSelections } from "@/helper/functions/useCompareSelections";

const CompareSection = () => {
  const { data } = useFakeFetch(vehicles);
  const count = useCardCountByBreakpoint();
  const { selections, updateSelection } = useCompareSelections(count);

  if (!data) return null;

  return (
    <Flex className="gap-8 flex-wrap items-start">
      {Array.from({ length: count }).map((_, index) => {
        const selectedIds = selections.filter((_, i) => i !== index); // exclude current
        const options = data?.filter(
          (vehicle) => !selectedIds.includes(vehicle.id)
        );

        return (
          <Suspense fallback={<>Cargando</>} key={index}>
            <CompareVehicleCard
              selectOptions={options}
              value={selections[index] ?? null}
              onChange={(value) => updateSelection(index, value)}
            />
          </Suspense>
        );
      })}
    </Flex>
  );
};

export default CompareSection;

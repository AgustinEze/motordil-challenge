"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback } from "react";
import Flex from "../atoms/Flex";
import FlexCol from "../atoms/FlexCol";
import { Switch } from "../ui/switch";

const CompareToggle = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const toggleValue = searchParams.get("toggle") === "true";

  const handleToggleChange = useCallback(() => {
    const newParams = new URLSearchParams(searchParams.toString());
    const newValue = (!toggleValue).toString();

    newParams.set("toggle", newValue);

    // Actualiza la URL con los nuevos params (sin recargar)
    router.push(`?${newParams.toString()}`);
  }, [searchParams, router, toggleValue]);

  return (
    <Flex className="gap-4 sm:max-w-fit">
      <FlexCol className="gap-1 w-[396px]">
        <Flex className="h-[21px] items-start ">
          <span className="font-medium text-[14px] leading-[21px] text-[#0B1A32]">
            Ocultar similitudes
          </span>
        </Flex>
        <Flex className="h-[18x] items-start hidden sm:flex">
          <span className="font-medium text-[12px] leading-[18px] text-[#5D636E]">
            Compará tus anuncios guardados para analizar sus características.
          </span>
        </Flex>
      </FlexCol>
      <Suspense fallback={<>Cargando</>}>
        
      <Switch checked={toggleValue} onCheckedChange={handleToggleChange} />
      </Suspense>
    </Flex>
  );
};

export default CompareToggle;

import React from 'react'
import Flex from './Flex'

const CompareDescription = () => {
  return (
    <Flex className="h-[48px] items-start ">
        <span className="font-medium text-[20px] leading-[24px] hidden sm:inline">
          Compará tus anuncios guardados para analizar sus características.
        </span>
        <span className="font-normal text-[12px] leading-[18px] text-[#222222] sm:hidden inline">
          Seleccionalos directamente desde tu listado de anuncios guardados.
        </span>
      </Flex>
  )
}

export default CompareDescription
'use client';
import { useRouter, useSearchParams } from "next/navigation";

export const useCompareSelections = (count: number) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selections: (string | null)[] = [];

  for (let i = 0; i < count; i++) {
    const id = searchParams.get(`v${i + 1}`);
    selections.push(id);
  }

  const updateSelection = (index: number, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(`v${index + 1}`, value);
    else params.delete(`v${index + 1}`);
    router.replace(`?${params.toString()}`);
  };

  return { selections, updateSelection };
};

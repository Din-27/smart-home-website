import { useCallback, useEffect, useState } from "react";

export interface IUseChooseDate {
  aktif: boolean;
}

export const useChooseDate = (data: object) => {
  const [category, setCategory] = useState<IUseChooseDate[]>([]);

  const getCategori = useCallback(() => {
    const categoriActivated = [];
    for (const item of Object.keys(data)) {
      categoriActivated.push({
        aktif: Object.keys(data)[0] === item,
        label: item.replace("_", " "),
      });
    }
    setCategory(categoriActivated);
  }, [data]);

  useEffect(() => {
    getCategori();
  }, [getCategori]);

  return {
    category,
    setCategory,
  };
};

"use client";

import { ProductSearchParams } from "@/app/utils/api-routes/product-routes/product.routes";
import PriceRangePicker, {
  PriceRangeValue,
} from "@/components/slide-range/price-range-picker";

import { SelectField } from "@/components/ui/Select/select";
import {
  Box,
  createListCollection,
  Flex,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PiSortAscendingLight, PiSortDescendingLight } from "react-icons/pi";

interface Props {
  categories: string[];
}

export const ProductFilter = ({ categories }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState<string>(
    searchParams.get("search") ?? "",
  );

  const [sort, setsort] = useState<ProductSearchParams["sort"]>(
    (searchParams.get("sort") as "asc" | "desc") ?? "asc",
  );

  const [selectedCategory, selectCategory] = useState<string>(
    searchParams.get("category") ?? "",
  );

  const [PriceRange, setPriceRange] = useState<PriceRangeValue>([
    Number(searchParams.get("price.from")) ?? 0,
    Number(searchParams.get("price.to")) ?? 0,
  ]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("search", search);
    params.set("sort", sort);
    params.set("category", selectedCategory ?? "");
    params.set("price.from", PriceRange[0].toString() || "");
    params.set("price.to", PriceRange[1].toString() || "");
    router.replace(`${pathname}?${params}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, search, router, sort, selectedCategory, PriceRange]);

  const categoryList = createListCollection({
    items: categories.map((i) => ({
      label: i,
      value: i,
    })),
  });

  return (
    <Box className='bg-bg-secondary/20 flex w-full flex-col items-center gap-2 rounded-xl p-1 md:flex-row'>
      <Flex
        className='w-full'
        gap={"2"}>
        <Input
          className='flex-1'
          outline={"none"}
          size={"xs"}
          rounded={"xl"}
          placeholder='Search'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />{" "}
        <IconButton
          className='flex items-center justify-center md:hidden!'
          size={"xs"}
          rounded={"full"}
          variant={"solid"}
          onClick={() => {
            if (sort === "asc") {
              setsort("desc");
              return;
            }
            setsort("asc");
          }}>
          {sort === "asc" ? (
            <PiSortAscendingLight className='size-4' />
          ) : (
            <PiSortDescendingLight />
          )}
        </IconButton>
      </Flex>
      <PriceRangePicker
        onChange={(range) => {
          setPriceRange(range);
        }}
        value={PriceRange}
      />
      <SelectField
        placeHolder='Select Category'
        list={categoryList}
        value={[selectedCategory]}
        onValueChange={(e) => {
          selectCategory(e.value[0]);
        }}
      />
      <IconButton
        className='hidden! items-center justify-center md:flex!'
        size={"xs"}
        rounded={"full"}
        variant={"solid"}
        onClick={() => {
          if (sort === "asc") {
            setsort("desc");
            return;
          }
          setsort("asc");
        }}>
        {sort === "asc" ? (
          <PiSortAscendingLight className='size-4' />
        ) : (
          <PiSortDescendingLight />
        )}
      </IconButton>
    </Box>
  );
};

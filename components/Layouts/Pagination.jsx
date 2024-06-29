"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Pagination from "react-js-pagination";

const CustomPagination = ({ resultsPerPage, productsCount }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  let page = searchParams.get("page") || 1;
  page = Number(page);

  let queryParams;

  const handlePageChange = (currentPage) => {
    if (typeof window !== undefined) {
      queryParams = new URLSearchParams(window.location.search);

      if (queryParams.has("page")) {
        queryParams.set("page", currentPage);
      } else {
        queryParams.append("page", currentPage);
      }
      const path = window.location.pathname + "?" + queryParams.toString();
      router.push(path);
    }
  };
  return (
    <div className="flex mt-20 justify-center">
      <Pagination
        activePage={page}
        itemsCountPerPage={resultsPerPage}
        totalItemsCount={productsCount}
        onChange={handlePageChange}
        nextPageText={"Next"}
        prevPageText={"Prev"}
        firstPageText={"First"}
        lastPageText={"Last"}
        itemClass="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 cursor-pointer"
        activeLinkClass="z-10 inline-flex item-center border-none border-indigo-500 bg-indigo-50 text-sm font-meduim text-indigo-600 focus:z-20"
        activeClass="z-10 inline-flex item-center border border-indigo-500 bg-indigo-50 text-sm font-meduim text-indigo-600 focus:z-20"
      />
    </div>
  );
};

export default CustomPagination;

"use client";
import React, { useState } from "react";
import { Router, useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const submitHandler = (e) => {
    console.log("submitHandler");
    if (keyword) {
      router.push(`/?search=${keyword}`);
    } else {
      router.push("/");
    }
    e.preventDefault();
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4"
    >
      <input
        className="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter your keyword"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 inline-block text-white border border-transparent bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default Search;

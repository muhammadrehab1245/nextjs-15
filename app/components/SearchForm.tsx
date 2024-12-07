"use client";
import { Search } from "lucide-react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { useEffect } from "react";
const SearchForm = ({ query }: { query?: string }) => {
  // const query='Test'
  useEffect(() => {
    console.log(query);
  });
  return (
    <Form className="search-form" scroll={false} action="/search">
      {/* On submission, the input value will be appended to 
        the URL, e.g. /search?query=abc */}
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;

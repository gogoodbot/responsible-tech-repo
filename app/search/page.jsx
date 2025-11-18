'use client'

import Link from "next/link";
import Search from "@/components/home-page-ui/Search";
import SearchCard from "../comps/SearchCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const API_URL = process.env.NEXT_PUBLIC_GOODBOT_API_URL;

    const initialQuery = searchParams.get('q') || "";
    const [query, setQuery] = useState(initialQuery);
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (initialQuery) {
            fetchResults(initialQuery);
        }
    }, []);

    const fetchResults = async (term) => {
        try {
            const response = await axios.get(`${API_URL}/v1/search/${encodeURIComponent(term)}`);
            setResults(response.data);
            router.push(`/search?q=${encodeURIComponent(term)}`, { scroll: false });
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    const handleSearchChange = (value) => {
        setQuery(value);
    };

    const handleSearchSubmit = (e) => {
        fetchResults(query);
        console.log(results)
    };

    return (
        <section className="container py-8 flex flex-col gap-8">
            <div className="flex flex-col gap-8">
                <Link href='#' className="inline-flex gap-4 items-center text-base text-black">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.20437 3.18024C9.4447 3.42056 9.4447 3.8102 9.20437 4.05053L4.10105 9.15385H17.3846C17.7245 9.15385 18 9.42936 18 9.76923C18 10.1091 17.7245 10.3846 17.3846 10.3846H4.10105L9.20437 15.4879C9.4447 15.7283 9.4447 16.1179 9.20437 16.3582C8.96405 16.5985 8.57441 16.5985 8.33409 16.3582L2.18024 10.2044C1.93992 9.96405 1.93992 9.57441 2.18024 9.33409L8.33409 3.18024C8.57441 2.93992 8.96405 2.93992 9.20437 3.18024Z" fill="#0F172A" />
                    </svg>
                    Go Back
                </Link>
                <Search value={query} onChange={handleSearchChange} onSubmit={handleSearchSubmit} />
            </div>

            <div>
                {results.nonprofits &&
                    results.nonprofits.map(nonprofit => (
                        <SearchCard data={nonprofit} key={nonprofit.id} type='nonprofit' />
                    ))
                }

                {results.experts &&
                    results.experts.map(expert => (
                        <SearchCard data={expert} key={expert.id} type='expert' />
                    ))}

            </div>
        </section>
    );
}

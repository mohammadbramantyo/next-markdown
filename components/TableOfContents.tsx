'use client'

import { Header } from '@/lib/headings';
import React, { useEffect, useState, useRef } from 'react'


export default function TableOfContents({ headers }: { headers: Header[] }) {

    const [activeId, setActiveId] = useState("");
    const scrollRef = useRef(0);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.getAttribute("id")!;
                    if (entry.isIntersecting) {
                        setActiveId(id);
                        scrollRef.current = window.scrollY;
                    } else {
                        const diff = scrollRef.current - window.scrollY;
                        const isScrollingUp = diff > 0;
                        const currentIndex = headers.findIndex((h) => h.id === id);
                        const prevEntry = headers[currentIndex - 1];
                        const prevId = prevEntry?.id;
                        if (isScrollingUp && prevId) {
                            setActiveId(id);
                        }
                    }
                });
            },
            {
                rootMargin: "0% 0% -85% 0%",
            }
        );
        headers.forEach((heading) => {
            const elem = document.getElementById(heading.id);
            if (elem) {
                observer.observe(elem);
            }
        });
    }, []);

    return (
        <div className="pl-10 fixed">
            <h2 className="uppercase font-bold tracking-widest mt-8 scroll-mt-5">
                Content List
            </h2>
            <ul>
                {headers.map((heading) => {
                    const id = heading.id;
                    const activeClass = activeId === id ? "font-bold text-accent " : "text-base-content ";
                    const activeBorder = activeId === id ? "border-l-8 border-accent " : "border-l-4 ";
                    const indentation = {
                        "h3": " pl-4",
                        "h4": " pl-8",
                    };
                    const level = heading.level as keyof typeof indentation;
                    const paddingClass = indentation[level] ?? "";
                    return (
                        <li key={id} onClick={() => setActiveId(id)} className={activeBorder + " link-toc-hover py-2 max-w-sm"}>
                            <a
                                href={`#${id}`}
                                className={
                                    "transition-all ml-2 max-w-sm " +
                                    activeClass +
                                    paddingClass
                                }
                            >
                                {heading.text}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

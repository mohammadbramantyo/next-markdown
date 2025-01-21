import React from 'react'
import TableOfContents from './TableOfContents'
import { Header } from '@/lib/headings'

export default function ReadLayout({
    content,
    headers
}: {
    content: String,
    headers: Header[]
}) {
    return (
        <div className="container flex flex-row justify-start bg-base-100 min-w-full py-8">
            <div className="flex flex-row justify-start w-full">
                <div className="hidden md:block w-1/4 max-w-md">
                    <div className="sticky top-9 flex justify-center">
                        <TableOfContents headers={headers} />
                    </div>
                </div>
                <main className="md:w-3/4 text-justify font-helvetica md:pr-10 w-screen p-4">
                    <article className="lg:ml-8 prose prose-lg max-[767px]:prose text-justify" dangerouslySetInnerHTML={{ __html: content }}></article>
                </main>
            </div>
        </div>
    )
}



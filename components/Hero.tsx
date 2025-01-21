import React from 'react'

export default function Hero({ title, imgUrl }: { title: string, imgUrl:string }) {
    return (
        <div
            className="hero min-h-screen bg-center bg-cover"
            style={{
                backgroundImage: `url(${imgUrl})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">{ title }</h1>
                </div>
            </div>
        </div>
    )
}

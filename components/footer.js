import React from "react"
import Image from 'next/image'

function Footer() {
    return (
        <footer className="bg-white">
            <div className="container mx-auto px-8">
                <div className="w-full flex flex-col md:flex-row py-6">
                    <div className="flex-1 mb-6 text-black">
                        <Image src='/logo-vertical.jpg' className="w-3/4" height={200} width={200} alt="logo"/>
                    </div>
                    <div className="flex-1">
                        <b className="text-gray-500 md:mb-6">Funcoldes &copy; {new Date().getFullYear()} | Hecho por <a
                            href="https://github.com/kwnc" target="_blank" rel="noreferrer"
                            className="text-yellow-400">Konrad</a></b>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

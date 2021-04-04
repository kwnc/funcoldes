import React from "react"
import Image from 'next/image'
import {useTranslation} from "next-i18next";

function Footer() {
    const {t} = useTranslation('footer')

    return (
        <footer>
            <div className="container mx-auto px-8">
                <div className="w-full flex flex-col md:flex-row py-6">
                    <div className="flex-1 mb-6 text-black">
                        <Image src='/logo-description.jpg' className="w-4/5" height={130} width={650} alt="logo"/>
                    </div>
                    <div className="flex-1">
                        <b className="text-gray-500 md:mb-6">Funcoldes &copy; {new Date().getFullYear()} | {t('description')}
                            <a
                                href="https://github.com/kwnc" target="_blank" rel="noreferrer"
                                className="text-yellow-400">Konrad</a></b>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

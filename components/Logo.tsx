import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <Image src="/logo.png"
            alt="DocsNepal Logo"
            width={80}
            height={80}
            className="rounded-xl">
        </Image>
    )
}

export default Logo

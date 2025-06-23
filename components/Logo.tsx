import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <Image src="/logo.png"
            alt="DocsNepal Logo"
            width={90}
            height={90}
            className="rounded-xl">
        </Image>
    )
}

export default Logo

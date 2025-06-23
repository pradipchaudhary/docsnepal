import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <Image src="/logo.png"
            alt="DocsNepal Logo"
            width={400}
            height={400}
            className="rounded-xl">
        </Image>
    )
}

export default Logo

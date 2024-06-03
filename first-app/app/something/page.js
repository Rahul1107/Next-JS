import Link from 'next/link'
import React from 'react'

const something = () => {
    return (
        <div>something
            <p><Link href="/something/blog-1">blog-1</Link></p>
            <p><Link href="/something/blog-2">blog-2</Link></p>

        </div>
    )
}

export default something
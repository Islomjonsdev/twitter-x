import Auth from '@/components/auth/index'
import React from 'react'

const Page = () => {
    const user = false;

    if (!user) {
        return (
            <div className='container h-screen mx-auto max-w-7xl px-10'>
                <Auth />
            </div>
        )
    }
    return (
        <div>Page</div>
    )
}

export default Page
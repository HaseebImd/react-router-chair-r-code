import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const { userId } = useParams();
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="flex justify-center">
                    <div className="bg-gray-600 text-white text-3xl p-8 rounded-lg shadow-lg w-full max-w-xl text-center">
                        User: {userId}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
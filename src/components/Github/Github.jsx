import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    console.log(data);
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

    return (
        <div className="flex justify-center items-center min-h-[60vh] bg-gradient-to-br from-gray-800 to-gray-600 py-10">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center">
                <img
                    src={data.avatar_url}
                    alt="GitHub avatar"
                    className="w-40 h-40 rounded-full border-4 border-orange-500 shadow-lg mb-6 object-cover"
                />
                <h2 className="text-2xl font-bold text-gray-800 mb-1">{data.name || data.login}</h2>
                <p className="text-gray-500 text-lg mb-2">@{data.login}</p>
                {data.bio && (
                    <p className="text-gray-700 text-base mb-2 text-center italic">{data.bio}</p>
                )}
                <br></br>
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                    {data.company && (
                        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">🏢 {data.company}</span>
                    )}
                    {data.location && (
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">📍 {data.location}</span>
                    )}
                   
                   
                </div>
                <div className="flex gap-6 mb-6">
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-semibold text-orange-600">{data.followers}</span>
                        <span className="text-gray-600 text-sm">Followers</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-semibold text-orange-600">{data.following}</span>
                        <span className="text-gray-600 text-sm">Following</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-semibold text-orange-600">{data.public_repos}</span>
                        <span className="text-gray-600 text-sm">Repos</span>
                    </div>
                </div>
                <a
                    href={data.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full transition duration-200 shadow-md"
                >
                    View GitHub Profile
                </a>
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/HaseebImd')
    return response.json()
}
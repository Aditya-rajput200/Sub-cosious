'use client'

import axios from 'axios'
import React from 'react'
const port = process.env.NEXT_PUBLIC_PORT
function CreateComponent() {
    


    const handleSubmit = async (e) => {
        e.preventDefault()
    

        try {
            const response = await axios.post(`http://localhost:${port}/api/v1/user/createContent`, {
         
                headers: {
                    'Content-Type': 'application/json',
                    
                },withCredentials: true,
                body: JSON.stringify({
                    title: e.target.title.value,
                    type: e.target.type.value,
                    link: e.target.link.value,
                    description: e.target.description.value,
                    subtitle: e.target.subtitle.value,
                }),
            })

            if (response.ok) {
                alert('Content created successfully')
                e.target.reset() // Clear the form
            } else {
                const errorData = await response.json()
                alert(`Error: ${errorData.message || 'Something went wrong'}`)
            }
        } catch (error) {
            console.error('Error:', error)
            alert('An error occurred while creating content')
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
                <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Create Content</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="type" className="block text-lg font-medium text-gray-700 mb-1">
                            Type
                        </label>
                        <select
                            id="type"
                            name="type"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="">Select Type</option>
                            <option value="twitter">Twitter</option>
                            <option value="gitRepo">Git Repo</option>
                            <option value="video">Video</option>
                            <option value="blogs">Blogs</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="link" className="block text-lg font-medium text-gray-700 mb-1">
                            Link
                            required
                        </label>
                        <input
                            type="text"
                            id="link"
                            name="link"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                           
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 h-24"
                           
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="subtitle" className="block text-lg font-medium text-gray-700 mb-1">
                            Subtitle
                        </label>
                        <textarea
                            id="subtitle"
                            name="subtitle"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 h-24"
                           
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateComponent

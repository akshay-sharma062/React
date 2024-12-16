import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Contact() {
    // Step 1: Create state variables for the form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');

    // Step 2: Handle the form input changes
    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleTelChange = (e) => setTel(e.target.value);
    // handel visitors data with local api
    let formHandler=(e)=>{
        e.preventDefault()
        let payload={name,email,tel}
        axios.post("http://localhost:3000/visitors",payload)
        .then(()=>{
            alert("resposnse send");
            console.log("Data has been added");
        })
        .catch(()=>{
            console.log("Something is wrong");
        })
    }

    // // Step 3: Handle form submission with local storage methods
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Log the form data to the console (or handle it as needed)
    //     console.log('Form submitted:', { name, email, tel });
    //     //   const parsedData = JSON.parse(storedData)
        
    //     // You can save the data to localStorage, or send it to a server here
    //     alert(`Submitted! Name: ${name}, Email: ${email}, Phone: ${tel}`);
    // };
    // useEffect(() => {
    //         let visitor={
    //             name:name,
    //             email:email,
    //             tel:tel}

    //       localStorage.setItem('visitors', JSON.stringify(visitor))
    //     // JSON.parse(localStorage.setItem('visitors'))

    // }, [name,email,tel])
    

    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-black sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in touch: 
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                                Fill in the form to start a conversation
                            </p>
                            {/* Address, Phone, and Email info */}
                            {/* You can leave this part as is */}
                            <div className="flex items-center mt-8 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                   108 , Jai Lal Munshi Ka Rasta , Chandpol , Jaipur (Raj.)
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +91 9929046909
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    <a href='https://mail.google.com/mail/' className='text-blue-600 underline' > akshay.ku.sharma.062@gmail.com</a>
                                </div>
                            </div>
                        </div>
                       

                        <form  className="p-6 flex flex-col justify-center">
                            {/* Full Name Input */}
                            <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    value={name} // Bind state to input field
                                    onChange={handleNameChange} // Update state on input change
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-purple-600 focus:outline-none"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    value={email} // Bind state to input field
                                    onChange={handleEmailChange} // Update state on input change
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-purple-600 focus:outline-none"
                                />
                            </div>

                            {/* Phone Number Input */}
                            <div className="flex flex-col mt-2">
                                <label htmlFor="tel" className="hidden">Number</label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Telephone Number"
                                    value={tel} // Bind state to input field
                                    onChange={handleTelChange} // Update state on input change
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-purple-600 focus:outline-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={formHandler}
                                type="submit"
                                className="md:w-32 bg-purple-600 hover:bg-blue-dark text-black font-bold py-3 px-6 rounded-lg mt-10 ml-28 border-2 border-black duration-700 hover:bg-black hover:border-purple-600 transition ease-in-out hover:text-purple-600 hover:shadow-lg hover:shadow-purple-600 hover:-translate-y-2"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

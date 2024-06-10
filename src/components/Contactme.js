import React, { useState } from 'react';

const Contactme = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        setIsSubmitting(true); // Disable the submit button

        fetch("https://www.formbackend.com/f/7f16d78a0263cabd", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ name, email, message }),
        })
            .then((response) => {
                if (response.status === 422) {
                    throw new Error("Validation error");
                } else if (!response.ok) {
                    throw new Error("Something went wrong");
                }

                return response.json();
            })
            .then(data => {
                setSuccessMessage("Form submitted successfully");
                setIsSubmitting(false); // Enable the submit button after submission
            })
            .catch((error) => {
                console.error("Error:", error);
                setIsSubmitting(false); // Enable the submit button after submission
            });
    }

    return (
        <section id="contact" className="relative h-screen flex justify-center items-center flex-col">
            <div className="w-1/2">
                <div className="text-white text-center text-5xl subfont mb-2 lg:mb-10">
                    Contact me
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            name="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@gmail.com"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            id="name"
                            name="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your name"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea
                            onChange={(e) => setMessage(e.target.value)}
                            id="message"
                            name="message"
                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your message"
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        disabled={isSubmitting} // Disable the button when submitting
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </form>
                {successMessage && (
                    <div className="mt-5 text-green-500 text-center">
                        {successMessage}
                    </div>
                )}
            </div>
            <footer style={{ backgroundColor: 'rgb(30, 30, 30)' }} className="absolute w-full bottom-0 left-0 text-white text-2xl flex justify-center items-center ">
                <div>Made by SHIVAM RAIKAR</div>
            </footer>
        </section>
    );
}

export default Contactme;

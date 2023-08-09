const ContactForm = () => {
    return (
        <div className="m-20 py-12 bg-indigo-200 rounded-md w-80">
            <div className="mt-8 max-w-md">
                <div className="grid grid-cols-1 gap-6">
                    <form
                        action=""
                        className="text-black"
                    >
                        <label className="block m-4">
                            <span className="text-black">Full name</span>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
                                placeholder="John Doe"
                            />
                        </label>
                        <label className="block m-4">
                            <span className="text-black">Email address</span>
                            <input
                                type="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
                                placeholder="john@example.com"
                            />
                        </label>

                        <div className="flex place-items-center justify-center m-4">
                            <label className="block">
                                <span className="text-black">Message</span>
                                <textarea
                                    className="mt-1 block w-fullrounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
                                    rows="10"
                                    cols="20"
                                ></textarea>
                            </label>
                        </div>
                        <div className="flex place-items-center justify-center m-4">
                            <button className="rounded-full bg-indigo-700 p-3 m-2 hover:text-black hover:bg-yellow-500 text-black">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

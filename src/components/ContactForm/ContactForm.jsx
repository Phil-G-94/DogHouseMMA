const ContactForm = () => {
    return (
        <div className="py-12">
            <div className="mt-8 max-w-md">
                <div className="grid grid-cols-1 gap-6">
                    <form
                        action=""
                        className="text-black"
                    >
                        <label className="block">
                            <span className="text-slate-100">Full name</span>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
                                placeholder="John Doe"
                            />
                        </label>
                        <label className="block">
                            <span className="text-slate-100">
                                Email address
                            </span>
                            <input
                                type="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50
                  "
                                placeholder="john@example.com"
                            />
                        </label>
                        <label className="block">
                            <span className="text-slate-100">
                                When is your event?
                            </span>
                            <input
                                type="date"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
                            />
                        </label>

                        <label className="block">
                            <span className="text-slate-100">Message</span>
                            <textarea
                                className="mt-1 block w-fullrounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
                                rows="3"
                                cols="20"
                            ></textarea>
                        </label>
                        <button className="rounded-full bg-indigo-700 p-3 m-2 hover:text-black hover:bg-yellow-500 text-slate-100">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

/* 

Style source: https://github.com/tailwindlabs/tailwindcss-forms/blob/master/index.html


*/

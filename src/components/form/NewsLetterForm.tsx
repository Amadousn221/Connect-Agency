"use client"

import { toast } from "react-toastify";

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const NewsLetterForm = () => {

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("Thanks For Subscription!")
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <input type="email" placeholder="Your Email" className="form-control" name="email" required autoComplete="off" />
                <button type="submit">
                    <svg width={20} height={18} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 17L17 1H7.8" stroke="#232323" strokeWidth={2} />
                    </svg>
                </button>
            </form>
        </>
    );
};

export default NewsLetterForm;
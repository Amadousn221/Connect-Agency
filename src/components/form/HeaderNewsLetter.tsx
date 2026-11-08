"use client";
import { toast } from "react-toastify";

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const HeaderNewsLetter = () => {

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("Thanks For Subscription!")
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <div className="input-group stylish-input-group">
                    <input type="email" placeholder="Enter your e-mail" className="form-control" name="email" autoComplete="off" required />
                    <span className="input-group-addon">
                        <button type="submit">
                            <i className="arrow_right" />
                        </button>
                    </span>
                </div>
            </form>
        </>
    );
};

export default HeaderNewsLetter;
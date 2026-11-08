interface DataType {
    searchClose?: () => void;
    openSearch?: boolean;
    searchOpen?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const HeaderSearch = ({ searchClose, openSearch }: DataType) => {

    const handleSearch: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
    }

    return (
        <>
            <div className={`top-search ${openSearch ? "smooth-search" : ""}`}>
                <div className="container-xl">
                    <form onSubmit={handleSearch}>
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-search"></i>
                            </span>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                name="search"
                                autoComplete="off"
                            />

                            <span
                                className="input-group-addon close-search"
                                onClick={searchClose}
                            >
                                <i className="fa fa-times"></i>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default HeaderSearch;
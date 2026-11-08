import Link from "next/link";

const SocialShareV3 = () => {
    return (
        <>
            <li>
                <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin-in" />
                </Link>
            </li>

            <li>
                <Link
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-dribbble" />
                </Link>
            </li>

            <li>
                <Link
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-facebook-f" />
                </Link>
            </li>
        </>
    );
};

export default SocialShareV3;

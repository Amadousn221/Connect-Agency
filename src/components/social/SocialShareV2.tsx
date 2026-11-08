import Link from "next/link";

const SocialShareV2 = () => {
    return (
        <>
            <li className="dribbble">
                <Link
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-dribbble" />
                </Link>
            </li>

            <li className="twitter">
                <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-twitter" />
                </Link>
            </li>

            <li className="facebook">
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

export default SocialShareV2;

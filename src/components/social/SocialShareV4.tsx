import Link from "next/link";

const SocialShareV4 = () => {
    return (
        <>
            <li>
                <Link href="https://www.facebook.com/" target='_blank'>
                    <i className="fab fa-facebook-f" />
                </Link>
            </li>
            <li>
                <Link href="https://www.x.com/" target='_blank'>
                    <i className="fab fa-twitter" />
                </Link>
            </li>
            <li>
                <Link href="https://www.linkedin.com/" target='_blank'>
                    <i className="fab fa-linkedin-in" />
                </Link>
            </li>
            <li>
                <Link href="https://www.behance.com/" target='_blank'>
                    <i className="fab fa-behance" />
                </Link>
            </li>
        </>
    );
};

export default SocialShareV4;
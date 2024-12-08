'use client';   // https://nextjs.org/docs/app/api-reference/directives/use-client

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const parts = pathname.split("/")

    // hard coded for now
    // - if length of parts is greater than 3, then we're probably an entry page
    //   where the 4th item in the parts array is the id param.
    let links
    if (parts.length >= 3) {
        links = parts.slice(0, 2).concat(decodeURIComponent(parts[parts.length - 1]))
    } else {
        links = parts
    }

    return (
        <nav>
            <span>
                <Link href="/">leo_plus_coffee</Link>
                {
                    // SLICING LAST PART IN PATHNAME BECAUSE SHOULD BE NONCLICKABLE
                    links.slice(0, -1).map((part, index) => {
                        return (
                            <span key={index}>
                                <Link href={"/" + part}>{part}</Link>/
                            </span>
                        )
                    })
                }
                {/* Display the current page as a nonclickable link */}
                {links[links.length - 1].toLowerCase()}
            </span>

            {/* <span>
                <Link href="/">leo_plus_coffee</Link>{pathname}
            </span> */}
        </nav>
    );
};

export default Navbar;
import Link from "next/link";




const Nav = () => {
    return ( <nav>
        <Link href="/">
            <a> Home/</a>
        </Link>

    
        <Link href="/about">
            <a> About/</a>
        </Link>
        <Link href="/wallet">
            <a> Wallet</a>
        </Link>
    
    </nav> );
}
 
export default Nav;
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={128} height={77} />
      </div>
      <Link href="/"><div>Home</div></Link>
      <Link href="/about"><div>About</div></Link>
      <Link href="/ninjas/"><div>Ninja Listing</div></Link>
    </nav>
  );
}
 
export default Navbar;
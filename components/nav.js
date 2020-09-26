import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <ul>
        <li>
          <Link href="/about"><a>About Us</a></Link>
        </li>
        <li>
          <Link href="/contact"><a>Contact</a></Link>
        </li>
      </ul>
    </ul>

    <style jsx>{`
      body {
        font-family: Helvetica, sans-serif;
      }
      p {
        font-size: 16px;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 24px;
      }
    `}</style>
  </nav>
);

export default Nav;

import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li>
          <Link href="/users" className="text-blue-400">
            Users
          </Link>
        </li>
        <li>
          <Link href="/about-us" className="text-blue-400">
            About us
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="text-blue-400">
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

import { Link } from 'react-router'
export default function Home() {
  return (
    <nav>
      <Link to={'/route1'}>
        page1
      </Link>
      <Link to={'/route2'}>
        page2
      </Link>
      <Link to={'/route3'}>
        page3
      </Link>
    </nav>
  )
};

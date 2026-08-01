import {Link} from 'react-router';

const NavBar = () => {
  return (
    <nav>
        
        <Link to="/">Home</Link> {' | '}
        <Link to="/mailBox">Mailbox</Link>{' | '}
        <Link to="/new-mailBox">New Mailbox</Link>
    </nav>
  );
}

export default NavBar;
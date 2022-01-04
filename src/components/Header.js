import {Link} from 'react-router-dom'
import classes from './Header.module.css'


const Header = () =>{
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <Link to='/home'> Home</Link>
                </li>
                    <li>
                        <Link to='/login'> Sign In</Link>
                 </li>
                 <li>
                        <Link to='/signup'> Sign Up</Link>
                 </li>
                 <li>
                        <Link to='/admin'> Admin</Link>
                 </li>
                 <li>
                        <Link to='/fetchPassDetailsUser'> Passenger</Link>
                 </li>
                  
                </ul>
            </nav>
        </header>
    )
}


export default Header
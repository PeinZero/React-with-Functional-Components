import React, {useContext} from 'react';
import AuthContext from '../../store/auth-context';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  // Using useContext hook
  const ctx = useContext(AuthContext);
  
  return (
    // Using useContext hook
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <>
            <li>
              <a href="/">Users</a>
            </li>
            <li>
              <a href="/">Admin</a>
            </li>
            <li>
              <button onClick={props.onLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>

    // Using Consumer
    // <AuthContext.Consumer>
    //   {/* the child function with context data as an argument, named ctx*/}
    //   {(ctx) => {
    //     return(
    //       // the JSX code being returned
    //       <nav className={classes.nav}>
    //       <ul>
    //         {ctx.isLoggedIn && (
    //           <>
    //             <li>
    //               <a href="/">Users</a>
    //             </li>
    //             <li>
    //               <a href="/">Admin</a>
    //             </li>
    //             <li>
    //               <button onClick={props.onLogout}>Logout</button>
    //           </li>
    //           </>
    //         )}
    //       </ul>
    //     </nav>
    //     )
    //   }}
    // </AuthContext.Consumer>
  );
};

export default Navigation;

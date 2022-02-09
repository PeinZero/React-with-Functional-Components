import React from 'react';

// AuthContext itself is not a component but an object that contains a component.
const AuthContext = React.createContext({
    isLoggedIn: false
});

export default AuthContext; 
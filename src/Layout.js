import React from 'react';
import './App.scss';

import Text from './components/Text'

function Layout() {
    return (
        <div className="container">
            <div className="content">
                <Text />
            </div>
        </div>
    );
}

export default Layout;
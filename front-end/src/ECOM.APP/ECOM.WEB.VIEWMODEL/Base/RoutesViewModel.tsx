import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import ShellViewModel from '../Shell/ShellViewModel.tsx';
import TopBarViewModel from '../Shell/Parts/TopBarViewModel.tsx';
const RoutesViewModel = () => {
    return(
        <>
            <TopBarViewModel />
            <Router>
                <Routes>
                    <Route path='/' element={<ShellViewModel/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default RoutesViewModel;
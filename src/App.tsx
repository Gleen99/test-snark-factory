import React from 'react';
import Menu from './Front/Menu/Menu'
import Enter from './Front/Bandeau/Enter';
import EnterImg from './Front/Bandeau/EnterImg';
import News from './Front/News/News';
import Footer from './Front/Footer/Footer';

const App: React.FC = () => {
    return (
    <div>
        <Menu />
        <Enter/>
        <EnterImg/>
        <News/>
        <Footer/>
    </div>
    );
};

export default App;



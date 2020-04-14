import React from 'react';
import UserCreate from './UserCreate';
// import LanguageContext from '../contexts/LanguageContext';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from '../components/LanguageSelector';


class App extends React.Component {
    // we remove the state & onLanguageChange because we moved buisnis logic to Language store
    // state = { language: 'english'}; 
    // onLanguageChange = language => {
    //     this.setState({language:language})
    // };


    render(){
        // we put LanguageStore around everything so LanguageSelector would have access to the store
        return(
             <div className="ui container">
                <LanguageStore>
                    {/* we remove onLanguageChange={this.onLanguageChange} from LanguageSelector
                        since is not getting it from here but from LanguageStore
                     */}
                    <LanguageSelector />

                    <ColorContext.Provider value="red">
                        {/* <LanguageContext.Provider value={this.state.language}> */}
                            <UserCreate />
                        {/* </LanguageContext.Provider> */}
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        )
    }
}

export default App;

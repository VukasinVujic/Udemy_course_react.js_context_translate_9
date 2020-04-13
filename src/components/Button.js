import React from 'react';
import LanguageContext from '../contexts/LanguageContext';


class Button extends React.Component {
    // we use contextType for this.context(contextType must have this name)
    // static contextType = LanguageContext;

    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }
    
    render(){
        // for this.context 
        // const te?xt = this.context === 'english' ? 'Submit' : 'Voorleggen';
        

        return(
            <button className="ui button primary">
                {/* for this.context  */}
                {/* {text} */}

                {/* value got from Provider */}
                <LanguageContext.Consumer > 
                    { value => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        )
    }
}

export default Button;

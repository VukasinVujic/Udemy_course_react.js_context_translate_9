import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


class Button extends React.Component {
    // we use contextType for this.context(contextType must have this name)
    // static contextType = LanguageContext;

    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton(color) {
        return(

            <button className={`ui button ${color}`}>
                    {/* for this.context  */}
                    {/* {text} */}

                    {/* value got from Provider */}
                    <LanguageContext.Consumer > 
                        { ({language}) => this.renderSubmit(language)}
                    </LanguageContext.Consumer>
                </button>
            )
        }
    
    render(){
        // for this.context 
        // const te?xt = this.context === 'english' ? 'Submit' : 'Voorleggen';
        

        return(
            // this color is value passed from ColorContext.Promise , value ={}
            <ColorContext.Consumer>
            {(color)=> this.renderButton(color)}            
            </ColorContext.Consumer>
        )
    }
}

export default Button;

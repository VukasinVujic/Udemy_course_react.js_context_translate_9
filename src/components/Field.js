import React from 'react'
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {

    static contextType = LanguageContext;
    
    render(){
        //context contain now onChange and language , not only language like before
        const text = this.context.language  === 'english' ? 'Name' : 'Naam';
        return(
            <div className="ui field ">
                <label htmlFor="">{text}: </label>
                <input type=" "/>
            </div> 
        )
    }
}

export default Field; 
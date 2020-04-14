import React from 'react';

//  const lala = React.createContext('english');
//  console.log(lala)
// export default lala;

 const Context = React.createContext('english');

 export class LanguageStore extends React.Component {
     
    state={language: 'english'}

    onLanguageChange = (language) => {
        this.setState({language});
    }

    render(){
        return(
            // children is jsx from parent component
            <Context.Provider value={{...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        )
    }

 } 

 export default Context;
 


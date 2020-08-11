import React, { Component } from 'react';
import './words.css';
import icon from '../../img/icon.png';



const ALPHABETS = [
    {label: 'A', value: 'A'},
    {label: 'B', value: 'B'},
    {label: 'C', value: 'C'},
    {label: 'D', value: 'D'},
    {label: 'E', value: 'E'},
    {label: 'F', value: 'F'},
    {label: 'G', value: 'G'},
    {label: 'H', value: 'H'},
    {label: 'I', value: 'I'},
    {label: 'J', value: 'J'},
    {label: 'K', value: 'K'},
    {label: 'L', value: 'L'},
    {label: 'M', value: 'M'},
    {label: 'N', value: 'N'},
    {label: 'O', value: 'O'},
    {label: 'P', value: 'P'},
    {label: 'Q', value: 'Q'},
    {label: 'R', value: 'R'},
    {label: 'S', value: 'S'},
    {label: 'T', value: 'T'},
    {label: 'U', value: 'U'},
    {label: 'V', value: 'V'},
    {label: 'W', value: 'W'},
    {label: 'X', value: 'X'},
    {label: 'Y', value: 'Y'},
    {label: 'Z', value: 'Z'}
 ];

class Words extends Component {
    constructor(props){
        super(props);
        this.state = {
            word: '',
            words: []
        };
    }
      
    onAlphbetSelect = (alphabet) => {
        const { label } = alphabet;
        const newWord = this.state.word + label;
        this.setState({
          word: newWord
        });
    }


    render(){
        return <div>
            <div className='icon'><img src={icon} alt='icon' /></div>
             <h1>Give me Five</h1>
             <div className='alphabets-cont'>
                {
                    ALPHABETS.map( (alphabet, index) => {
                        return (
                            <div key = {index} className = 'alphabet' onClick = { () => this.onAlphbetSelect(alphabet)}>{alphabet.label}</div>
                        )
                    })
                }

             </div> 
             <div className = 'word-count-cont'>
                <div className='word'>{this.state.word}</div>
                { this.state.word.length >= 1 && <div className='word-count'>{this.state.word.length}</div> }
             </div>
        </div>
    }
}

export default Words;
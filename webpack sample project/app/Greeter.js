import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component{
  render() {
    return (
      <div>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter




// module.exports = function (){
//     var greeter = document.createElement('div');
//     greeter.textContent = con.greetText;
//     return greeter;
// }

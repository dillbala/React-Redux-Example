import React , {Component} from 'react';
import ReactDOM from 'react-dom';

import Home from './component/home'


class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <Home />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

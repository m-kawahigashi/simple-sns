import React from 'react';
import ReactDOM from 'react-dom';

// 試しに
import { Button } from '@material-ui/core';

const App: React.FC = () => {
    return (
        <div>
            <p>こんにちは</p>
            {/* Material-uiが使用できるか確認 */}
            <Button color="primary">Material-ui!</Button>
        </div>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
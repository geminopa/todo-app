import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '@material-ui/core';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">React導入成功!</div>

                        <div className="card-body">pages配下に置きました</div>

                        <Button color="primary" variant="contained">Hello World</Button>
                        <Button color="secondary" variant="contained">Homeに遷移ボタン</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

// if (document.getElementById('app')) {
//     const Index = ReactDOM.createRoot(document.getElementById("app"));

//     Index.render(
//         <React.StrictMode>
//             <Example/>
//         </React.StrictMode>
//     )
// }

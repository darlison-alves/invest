import React from 'react';
export class Home extends React.Component {
    render() {
        return(
            <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '40%', height: 300, border: '1px solid' , position: 'relative', alignItems: 'center'}} >
                    Hi there!
                </div>
            </div>
        )
    }
}
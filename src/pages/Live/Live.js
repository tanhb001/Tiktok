import { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';

function Live() {
    return (
        <div>
            <div style={{ padding: 100 }}>Video1</div>
            <div style={{ padding: 100 }}>Video2</div>
            <div style={{ padding: 100 }}>Video3</div>
            <div style={{ padding: 100 }}>Video4</div>
            <div style={{ padding: 100 }}>Video5</div>
            <Waypoint onEnter={() => console.log(12)} scrollableAncestor={window}>
                <div style={{ width: '10px', height: '10px', backgroundColor: '#f00' }}></div>
            </Waypoint>
            <div style={{ padding: 100 }}>Video6</div>
            <div style={{ padding: 100 }}>Video7</div>
            <div style={{ padding: 100 }}>Video8</div>
            <div style={{ padding: 100 }}>Video9</div>
            <div style={{ padding: 100 }}>Video10</div>
        </div>
    );
}

export default Live;

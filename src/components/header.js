import React, { useEffect } from 'react';
//import


function Header() {
    return (
        <div className='container' style={{ width: '100%'}}>
            <div className='row' style={{ width: '100%'}}>
                <div className='col-8'></div>
                <div className="col-4 blurred p-3" style={{ right: '100%', height: '100%', top: 0, left: 0, backgroundColor: ''}}>
                    <h1>The Lee Matrimony</h1>
                    <ul className='list-group'>
                            <button className='mob btn btn-outline-light m-1'>Wedding Program|></button>
                            <button className='mob btn btn-outline-light m-1'>Seating Chart|></button> 
                            <button className='mob btn btn-outline-light m-1'>Dinner Menu|></button>
                            <button className='mob btn btn-outline-light m-1'>Registry|></button>
                            <button className='mob btn btn-outline-light m-1'>Share Your Photos with Us</button>
                    </ul>
                </div>

            </div>

        </div>

    );
}

export default Header;
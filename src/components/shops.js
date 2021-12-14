import React, {useEffect, useState} from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

function shops() {
    const [shops, setShops] = useState([]);
    useEffect(() => {
        axios.get('https://medisocial.herokuapp.com/auth/find').then(response =>{
            setShops(response.data)
            console.log(response.data)
        }).catch((error) =>{
            console.log(error);
        })
    }, []);
    
    return (
        <div>
            <h3>Registered Shops</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Contact no.</th>
                        <th>Address:</th>
                    </tr>
                </thead>
                <tbody>
                {shops.map((currentshop)=>
           (
            <tr>
                <td>
                    {currentshop.name}
                </td>
                <td>
                    {currentshop.username}
                </td>
                <td>
                    {currentshop.address}
                </td>
            </tr>
        )
        )}
                </tbody>
            </table>
        </div>
    )
}

export default shops

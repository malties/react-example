import React from 'react'
const vehicleData = require('../../resources/vehicles.json');


export const Vehicle = 
({id, vehicleName, driver, vehicleStatus, fuelType, equipments}) => {
    if(!id) return <div/>
    return (
        <div>
            <h3>ID : {id}</h3>
            <h3>Vehicle name : {vehicleName}</h3>
            <h3>Driver : {driver}</h3>
            <h3>Vehicle Status : {vehicleStatus}</h3>
            <h3>Fuel Type : {fuelType}</h3>
            <h3>Equipment : {equipments}</h3>
        </div>
    )
}

export function mapVehicleFromJson(){
    return (
        <li className ="vehicle-container">
            {vehicleData.map((data, key) =>{               
                return(
                    <div key={key}>
                        <Vehicle id = {data.id}
                         vehicleName = {data.name}
                         driver = {data.driver}
                         vehicleStatus = {data.status}
                         fuelType = {data.fuelType}
                         equipments = {data.equipments} 
                         /> 
                    </div>
                )
            })}
        </li>
    )
}



export default Vehicle;
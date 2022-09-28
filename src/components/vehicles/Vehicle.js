import React from 'react'
import { Equipment } from '../equipment/Equipment'
const vehicleData = require('../../resources/vehicles.json');


export const Vehicle = 
({id, vehicleName, driver, vehicleStatus, fuelType, equipments}) => {
    if(!id) return <div/>
    return (
        <div>
            <h3>{id}</h3>
            <h3>{vehicleName}</h3>
            <h3>{driver}</h3>
            <h3>{vehicleStatus}</h3>
            <h3>{fuelType}</h3>
            <h3>{equipments}</h3>
        </div>
    )
}

export function mapFromJson(){
    return (
        <div className ="vehicle-container">
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
        </div>
    )
}



export default Vehicle;
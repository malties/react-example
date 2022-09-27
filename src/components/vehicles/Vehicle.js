import React from 'react'
const vehicleData = require('../../resources/vehicles.json');


export function Vehicle() {
    return (
        <div className ="vehicle-container">
            {vehicleData.map((data, key) =>{
                return(
                    <div key={key}>
                        {data.id + " , "
                        + data.name + " , "
                        + data. driver + " , "
                        + data.status + " , "
                        + data.fuelType + " , "
                        + data.equipments 
                        }   
                    </div>
                )
            })}
        </div>
    )
}

export default Vehicle;
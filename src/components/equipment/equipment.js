import React from 'react'
const equipmentData = require('../../resources/equipments.json');


export function Equipment(){
    return (
        <div className ="equipment-container">
            {equipmentData.map((data, key) =>{
                return(
                    <div key={key}>
                        {data.id + " , "
                            + data.name 
                        }   
                    </div>
                )
            })}
        </div>
    )
}

export default Equipment;
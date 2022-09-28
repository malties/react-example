import React from 'react'
const equipmentData = require('../../resources/equipments.json');


export const Equipment = ({id, name}) => {
    if(!id) return <div/>
    return (
        <div>
            <h3>{id} : {name}</h3>
        </div>
    )
}

export function mapEquipmentFromJson(){
    return (
        <div className ="equipment-container">
            {equipmentData.map((data, key) =>{
                return(
                    <div key={key}>
                        <Equipment
                        id= {data.id} 
                        name = {data.name} 
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Equipment;
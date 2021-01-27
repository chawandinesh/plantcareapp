import React from 'react'
const initialData = {
    Herbs:[],
    Shrubs:[],
    Trees:[],
    Climbers:[],
    Creepers:[]
}
export const PlantContext = React.createContext(null)
export default function Context(props) {
    const [state, setState] = React.useState(initialData)
    return (
        <PlantContext.Provider value={{state, setState}}>
            {props.children}
        </PlantContext.Provider>
    )
}

import  { useState } from 'react'

export const UseForm = ( initialState={ } ) => {
    

    //Recibe un objeto en el cual debe tener las propiedades.
    //handlinputchange lee rapidamente los datos
    const [values, setValues] = useState(initialState)

    const reset = ()=>{
        setValues(initialState);
    }
    const handleInputChange= ({ target })=>{
        
        setValues({
            ...values,
            [ target.name ]: target.value   
        });
    }

    return [values, handleInputChange,reset];
}


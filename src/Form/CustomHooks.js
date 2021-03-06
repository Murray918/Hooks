import React, { useState } from 'react'


//we are going use this to call our form events
const useSignUpForm = ( initialValues, callback )=> {
    const [inputs, setInputs] = useState(initialValues)


// this is the handle Submit func
    const handleSubmit = event => {
    //prevent HTML defaults if the event exists
    //then call our callback (the code to execute on submit)
        if (event) {
            event.preventDefault()
        }
        callback()
    }

    const handleInputChange = event => {
        // set our inputs state dynamically
        event.persist()
        setInputs(inputs => ({...inputs, [ event.target.name] : event.target.value}))
    }
    //return all of our functions
    return {
        handleSubmit,
        handleInputChange,
        inputs
    }
}

export default useSignUpForm
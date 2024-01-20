import React, {useState} from 'react';


const FormInput = ({ labelText, inputType, name, stateValue, onChange })=>{
    
    const [native_inputType, setNativeInputType] = useState(inputType)

    return (
        <div className="form-input-outer-wrapper">
            <h3 className="input-section-label">{labelText}</h3>
            <div className="form-input-container">
                <input type={native_inputType} 
                    name={name}
                    value={stateValue}
                    onChange={(e)=>onChange(e)}
                />

                {/* {
                    inputType=="password" && (
                        <button className="toggle-show-password-button"
                            onMouseEnter={()=>{
                                if (native_inputType==="password") {
                                    setNativeInputType('text');
                                }                                                                
                            }}
                            onMouseLeave={()=>{
                                if (native_inputType==="text") {
                                    setNativeInputType("password");
                                }
                            }}
                        >Show/hide
                        </button>
                    )
                } */
                }
            </div>
        </div>
    )
}

export default FormInput;
import React, {useState} from 'react';

const Input = ({name, label, error, ...rest}) => {
  const [errors, setError] = useState([])
  const validate = (e)=>{
    const val =e.target.value
    if (val.length <4){
      setError([...errors, 'length must be > 4']);
    } else {
      setError([]);
    }
  }
  return (

        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                onBlur={(e)=>validate(e)}
                {...rest}
                className="form-control"
            />
            {errors.length> 0  && <div className="alert alert-danger">{errors[0]}</div>}
        </div>
    );
};

export default Input;

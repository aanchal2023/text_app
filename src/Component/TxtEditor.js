import React ,{useState} from 'react'

  

function TxtEditor(props) {
    var [message,setMessage]=useState('')

    function input_onChange(e)
    {
        setMessage(e.target.value);
    }

    function upper_Click(e){
        setMessage(message.toUpperCase());
    }
    
    function lower_Click(e){
        setMessage(message.toLowerCase());
    }
function clear_All(e){
  setMessage(' ')
}

  return (
   <>
   
  <h1>{props.heading}</h1>
<div class="mb-3">
  
  <textarea className="form-control" id="txtbox" rows="10"onChange={input_onChange} value={message} ></textarea>
</div>
<button className='btn btn-outline-primary mx-4' onClick={upper_Click}>Convert to UpperCase</button>
<button className='btn btn-outline-primary mx-4' onClick={lower_Click}>Convert to lowerCase</button>
<button className='btn btn-outline-primary mx-4' onClick={clear_All}>Clear</button>

<div  className='container  '>
    <h2>Your text summary</h2>
    <p>{message.split(" ").length} words and {message.length} characters </p>
    <p className=''>{0.008 * message.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{message}</p>
</div>
 
   </>
  )
}

export default TxtEditor
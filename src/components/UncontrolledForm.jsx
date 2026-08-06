import { useRef } from "react";

function UncontrolledForm(){
    const nameRef = useRef(null);

    function handleSubmit(e){
        e.preventDefault();
        window.alert(nameRef.current.value);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder="Enter name" ref={nameRef}></input>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default UncontrolledForm;
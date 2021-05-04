
import React, {useState} from 'react';
import './style.css';
import './grid.css';
import Post from './post';


const Sections1 = () => {
    const [inputText, setInputText] = useState("");
    const [status, setStatus] = useState("You miss 100% of the shots you don't take.");
    const [theOwner, setTheOwner] = useState("#ManhHai");

    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
        
    }
    const submitPostHandler = (e) => {
        
            e.preventDefault();
            if(inputText === ""){
                setStatus("Set a goal for your self.");
            }
            else{
                setStatus(inputText);
            }            
            setInputText("");
    }
    
    const styleInput = {
        width: "96%",
        padding: "19% 10%",
        margin: "1%",
        border: "2px solid rgb(98, 140, 205)",
    }
    return(
        <div className="row">
            <div className="col span-1-of-2 box">
                <h3>Update your favourite quote!</h3>
                <input 
                    style={styleInput}
                    value={inputText}
                    onChange={inputTextHandler}
                    type="text"
                    className="status"
                    placeholder="What's your quote today?"
                />
                <button type="submit" className="btn-ghost" onClick={submitPostHandler}>Update status</button>
                <button className="btn-ghost">Add image</button>
            </div>
            <div className="col span-1-of-2 box">
                <Post status={status} theOwner={theOwner} />
            </div>
        </div>
    )
};

export default Sections1;
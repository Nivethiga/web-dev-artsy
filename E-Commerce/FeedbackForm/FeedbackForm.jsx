import React, { useState } from "react";
import './FeedbackForm.css'
import { Rating } from "@mui/material";


const FeedbackForm=()=>{
    const [author, setAuthor] = useState('');
    const handleName=(e)=>{
        setAuthor(e.target.value);
    }
    const [em, setEm] = useState('')
    const handleEmail=(e)=>{
        setEm(e.target.value);
    }
    const [rating, setRating] = useState(0);
    const handleRating=(e)=>{
        setRating(e.target.value);
    }
    const[comment,setComment]= useState('');
    const handleComm=(e)=>{
        setComment(e.target.value);
    }
   
      const abx=()=>{
      
        alert("Thank You" +author +" "+ em+" "+rating+" "+comment)
      }
      
    return(
<div className="ab">
<center>

<form className="form" onSubmit={abx}>
      
        <fieldset className="legend">
            <legend>Trainer</legend>
        <div>Title:</div>
    <select id="Title" name="Title">
  <option value="0"></option>
    <option value="2">Mr</option>
    <option value="3">Mrs</option>
    <option value="4">Miss</option>
  </select>
  <br/><br/>
        <label>Name :</label>
        <input 
        type="text" 
        placeholder="Trainer Name" 
       // value={author} 
        onChange={handleName} 
      /><br/><br/>
        <label>Email Address :</label>
        <input 
        type="email" 
        placeholder="Your email" 
      //  value={em} 
        onChange={handleEmail} 
      /><br/>
<div>Feedback:</div>
<h4>Rating for the course(1-5)</h4>
<input 
        type="number" 
        placeholder="Rating (1-5)" 
        min="1" 
        max="5" 
        //value={rating} 
        onChange={handleRating} 
      /><br/>
      
      <h4>The Explaination and understanding ?  <Rating/></h4>
      <h4>Responsive to questions and concerns?  <Rating/></h4>
      <h4>The instructor's approachabilities : <Rating/></h4>
      <h4>Overall rating for the educator(Tr):  <Rating/></h4>
      
    <div><h3>What could be done to improve this course</h3></div>
      
      <textarea 
        placeholder="Write your review..." 
        //value={comment} 
        onChange={handleComm} /><br/><br/>
      
      <center>
<button className="bs" type="Submit">Submit</button><button className="bs"><a href="mailto: guna.amypo@gmail.com">Email</a></button>
</center>
</fieldset>
    </form>
     </center>
</div>

    );
}
export default FeedbackForm;
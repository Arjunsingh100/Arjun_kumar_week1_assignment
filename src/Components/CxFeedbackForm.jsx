import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';

const CxFeedbackForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');

    const handleChange = (e) => {
        setRating(e.target.value)
    }
    const formValidation = () => {
        if(name.length<4){
            toast.error('Name is too short');
            return false;
        }
        else if(!rating) {
            toast.error('Please give us Rating');
            return false;
        }
        else if(comment.length<11) {
            toast.error('Comment is too short');
            return false;
        }
        return true;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formValidation()) {
            toast.success('Name:'+name+' Email:'+email+' Rating:'+rating+' Comment:'+comment)
        }
        else {
            console.log('There is some error while submitting Form');
        }
    }

    return (
        <>
            <Container>
                <div className="feedback-form">
                    <form onSubmit={(e) => { handleSubmit(e) }}>
                        <div className='form-fields'>
                            <label>Name</label>
                            <input required type='text' value={name} name='name' placeholder='Enter the name' onChange={((e) => { setName(e.target.value) })} />
                        </div>
                        <div className='form-fields'>
                            <label>Email</label>
                            <input required type='email' value={email} name='email' placeholder='Enter the Email' onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className='form-rating'>
                            <input type='radio' name='rating' value={1} id='1' onChange={(e) => { handleChange(e) }} />
                            <label className={rating == '1' ? 'checked-label' : 'unchecked-label'} htmlFor='1'>1</label>
                            <input type='radio' name='rating' value={2} id='2' onChange={(e) => { handleChange(e) }} />
                            <label className={rating == '2' ? 'checked-label' : 'unchecked-label'} htmlFor='2'>2</label>
                            <input type='radio' name='rating' value={3} id='3' onChange={(e) => { handleChange(e) }} />
                            <label className={rating == '3' ? 'checked-label' : 'unchecked-label'} htmlFor='3'>3</label>
                            <input type='radio' name='rating' value={4} id='4' onChange={(e) => { handleChange(e) }} />
                            <label className={rating == '4' ? 'checked-label' : 'unchecked-label'} htmlFor='4'>4</label>
                            <input type='radio' name='rating' value={5} id='5' onChange={(e) => { handleChange(e) }} />
                            <label className={rating == '5' ? 'checked-label' : 'unchecked-label'} htmlFor='5'>5</label>
                        </div>
                        <div className='form-fields'>
                            <label>Add Comment</label>
                            <input required type='text' value={comment} name='comment' placeholder='Type comments' onChange={(e) => { setComment(e.target.value) }} />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <ToastContainer />
            </Container>
        </>
    )
}

const Container = styled.div`
.feedback-form {
form {
background-color:white;
widht:300px;
padding:20px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border:2px solid black;
border-radius:12px;
gap:15px;
.form-fields {
display:flex;
flex-direction:column;
justify-content:flex-start;
gap:10px;
label {
display:block;
padding-left:0px;
font-size:1.25rem;
color:gray;
}
input {
padding:10px;
font-size:1.1rem;
}
}
.form-fields:hover input {
border:2px solid blue;
box-shadow:7px 5px outline blue 7px 5px outline blue;
border-radius:12px;
}
}
button {
width:4rem;
height:2rem;
outline:none;
border:none;
color:white;
background-color:blue;
border-radius:11px;
transition:letter-spacing 1s ease;
}
button:hover {
letter-spacing:2px;
}
}
`

export default CxFeedbackForm

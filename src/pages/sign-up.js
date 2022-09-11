import React from 'react';
import {useState} from 'react';

class SignUp extends React.Component {
    render() {
        return(
            <div>
                <>
                <Form>
                </Form>
                </>
            </div>
        );
    }
}

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
 
    function onChangeName(e) {
        setName(e.target.value)
    }
    function onChangeEmail(e) {
        setEmail(e.target.value)
    }
 
    function onSubmit(e) {
        e.preventDefault()
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
    }
 
    // function getData() {
    //     console.log(localStorage.getItem('name'));
    //     console.log(localStorage.getItem('email'))
    // }
    return (
        <>
            <div>
                <h1>Sign Up</h1>
 
                <div>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label>Username:   </label>
                            <input type="text" value={name} onChange={onChangeName} />
                        </div>
                        <div>
                            <label>Email:   </label>
                            <input type="text" value={email} onChange={onChangeEmail} />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;
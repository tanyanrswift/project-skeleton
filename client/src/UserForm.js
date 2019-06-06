import React from 'react';

export default function UserForm(props){
    return (
        <section>
            <p>User Sign Up</p>
            <form onSubmit={props.onSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="text" name="email" />
                <button>Create</button>
            </form>
        </section>

    )
}
import React from 'react';

export default function ListForm(props){
    return (
        <section>
            <p>Create A New List!</p>
            <form onSubmit={props.onSubmit}>
                <input type="text" name="title" />
                <br />
                <input type ="text" name="item" />
                <button>Create</button>
            </form>
        </section>
    )
}
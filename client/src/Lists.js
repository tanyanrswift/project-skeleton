import React, { Component } from 'react';
import ListForm from './ListForm';

class Lists extends Component {
    state = {
        lists: [],
        single: null
    }
    componentDidMount(){
        this.showAll();
    }
    showAll(){
        fetch('http://localhost:8000/api/lists')
        .then(res => res.json())
        .then(lists => this.setState({lists}))
    }
    showSingle(e, id){
        e.preventDefault();
        fetch(`http://localhost:8000/api/lists/${id}`)
        .then(res => res.json())
        .then(single => this.setState({single}))
    }
    createList(e){
        e.preventDefault();
        fetch('http://localhost:8000/api/lists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: e.target.title.value, item: e.target.item.value})
        })
        .then(res => res.json())
        .then(newList => this.setState({lists: [...this.state.lists,newList]}));
    }
    render(){
        return(
            <section>
                <ListForm onSubmit={(e) => this.createList(e)} />
                {/* <h2>{this.state.list.title}</h2> */}
                <ul>
                    {this.state.lists.map(list => {
                        return <a href={list.id} onClick={(e) => this.showSingle(e, list.id)}>
                            <li>{list.item}</li>
                        </a>
                    })}
                </ul>
            </section>
        )
    }
}

export default Lists;
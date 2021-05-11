import React, { useState } from 'react';
import ToDoList from './todolist';

const App = () =>{

    const [inputList , setInputList] = useState("");
    const [items,setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const ListOfItem = () =>{
        setItems((oldItems) => {
            return [...oldItems,inputList];
        });
        setInputList(" "); //to empty the input field
    };

    const deleteItems = (id) => {
//    console.log("deleted");
        setItems((oldItems)=>{
return oldItems.filter((arrEle,idx)=>{
    return idx !== id; //if id is not samse then deleted
});
        });
    };

    return(
        <>
            <div className="mainDiv">
                <div className="centerDiv">
                    <br/>
                    <h1>TODO LIST</h1>
                    <br/>
                    <input type="text" placeholder="Add a Item" onChange={itemEvent} value={inputList}></input>
                    <button onClick={ListOfItem}>+</button>

                    <ol>

                                {/* <li>{inputList}</li> */}
                        {items.map((itemval , index) => {
                           return <ToDoList // to render return is used
                                key={index}
                                id={index}
                                text = {itemval}
                                onSelect={deleteItems}

                            />;
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
};
export default App;
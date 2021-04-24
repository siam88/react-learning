import React from 'react';


const List = ({ datas, deletTodoListFunc, editTodoListFunc }) => {
    return (
        <>

            {/* {console.log(data)} */}
            <ul>
                {datas.map((e, i) => {
                    
                   
                    return <li key={i}>
                        {e.des} <button onClick={() => deletTodoListFunc(e.id)}> X </button>
                        <button onClick={() => editTodoListFunc(e.id)}> Edit  </button>
                    </li>
                })}
            </ul>
        </>)
}


export default List;


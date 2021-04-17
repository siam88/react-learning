import React from 'react';


const List = ({ datas, deletTodoListFunc }) => {
    return (
        <>

            {/* {console.log(data)} */}
            <ul>
                {datas.map((e, i) => {
                    // if (e.id === 3) {
                    //     return <li key={i}>{e.des}</li>
                    // }
                    return <li key={i}>{e.des} <button onClick={() => deletTodoListFunc(e.id)}> X </button></li>
                })}
            </ul>
        </>)
}


export default List;
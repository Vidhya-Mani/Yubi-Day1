import React, { useState, useEffect } from 'react';
import Searchbox from './Searchbox';
import axios from "axios"
const Dashboard = () => {

    // useEffect ,dependency array should be empty
    //axios 
    // store the data in state and than we will map it inside our react component
    let [data, setData] = useState([]);
    let [inputValue, setinputValue] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get("http://127.0.0.1:3001/bookstock");
            console.log(res.data);
            setData(res.data)

            // arryay of objects
        }
        fetchData()
    }, [])
    console.log(data);
    console.log(inputValue);


    let filterData = data.filter((ele) => ele.bookAuthor.toLowerCase() == inputValue.toLowerCase() ||ele.bookName.toLowerCase() == inputValue.toLowerCase());


    //inside map have either return or have () 
    //{data.length && data.map((ele) => (<div></div>))} 
    return (
        <div>
            <Searchbox setinputValue={setinputValue} />

            {filterData.length ? filterData.map((ele) => (
                <div>
                    <div>{ele.bookName}</div>
                    <div>{ele.bookAuthor}</div>

                </div>
            ))
                :
                data.length && data.map((ele) => (
                    <div>
                        <div>{ele.bookName}</div>
                        <div>{ele.bookAuthor}</div>

                    </div>
                ))
            }
        </div>
    );
}

export default Dashboard;

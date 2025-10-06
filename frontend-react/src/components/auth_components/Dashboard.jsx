import React, { useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../../providers/axios_instance';

const Dashboard = () => {

    // const accessToken = localStorage.getItem("stockAccessToken")
    // useEffect(() => {
    //     const fetchProtectedData = async () => {
    //         try {
    //             const response = await axios.get("http://127.0.0.1:8000/api/v1/protected-view/", {
    //                 headers: {
    //                     Authorization: `Bearer ${accessToken}`
    //                 }
    //             });

    //             console.log("Success: ", response.data);
    //         } catch (error) {
    //             console.error("Error fetching data", error);
    //         }
    //     }

    //     fetchProtectedData();
    // }, [])


    // Axios Instance
    // Axios Interceptors: allows you to modify requests and responses before they are handled by the success handler or error handler
    // Request Interceptors and Response Interceptors
    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const response = await axiosInstance.get("/protected-view/");
                console.log("Success: ", response.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }

        fetchProtectedData();
    }, [])
    return (
        <>
            <div className='container'>
                <h1>Dashboard</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vel odit. Rem, voluptates et. Iusto ut explicabo non! Incidunt vel maxime, explicabo consectetur quos aliquam voluptas dolor omnis veritatis? Earum minus quia consectetur asperiores, in consequuntur, rerum voluptas ea, veritatis dolore quidem debitis inventore officia? Illum nulla fugiat nihil ipsa dolore voluptatem veniam similique natus temporibus suscipit amet inventore, doloribus nisi provident dignissimos itaque fugit soluta doloremque placeat ipsum maiores? Repudiandae ratione quisquam, ad quam, similique quibusdam qui iste voluptatem eligendi recusandae earum velit fuga facilis minus aperiam omnis amet architecto quo ex. Porro commodi consequuntur veritatis, sed vitae accusamus.</p>
            </div>
        </>
    )
}

export default Dashboard
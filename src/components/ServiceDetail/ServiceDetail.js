import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../Footer/Footer";

const ServiceDetails = () => {
    const { id } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch("fakedata.json")
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    const ExactIteam = service.filter((td) => td._id === id);
    // const { name, description, img, _id } = ExactIteam;
    // console.log(service);
    return (
        <div>
            <div className="container mt-5 mb-5">
                {/* <h1>This is service Detail Page </h1>
                <h3>Name : {name}</h3>
                <h3>description : {ExactIteam.description}</h3> */}
                <h1>This is service Detail Page </h1>
                <h3>Name : {ExactIteam.name}</h3>
                <h3>Price : {ExactIteam.price}</h3>
                <h3>Description : {ExactIteam.description}</h3>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;

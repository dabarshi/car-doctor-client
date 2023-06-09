import { FaAngleRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10"><img src={img} alt="service-img" className="rounded-xl" /></figure>
            <div className="card-body px-10">
                <h2 className="card-title">{title}</h2>
                <p>Price : {price}</p>
                <div className="card-actions justify-end">

                    <button className="btn btn-circle">
                        <FaAngleRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
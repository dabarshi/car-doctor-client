import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";



const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div className="my-8">
            <div className="text-center mb-8 space-y-4">
                <h3 className="text-xl font-bold text-orange-500">Service</h3>
                <h2 className="text-3xl font-bold">Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised  <br /> words which do not look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
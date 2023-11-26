import { useParams } from "react-router-dom";
import TravelForm from "./TravelForm";
import { useEffect, useState } from "react";
import Axios from "axios";

function EditTravel() {
    const { id } = useParams();
    const [initialValue, setInitialValue] = useState({ Name: "", EmailID: "", PhoneNo: "", Travel_Destination: "" });
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        Axios.get("https://crud-deployment-backend-15pi.onrender.com/petRoute/update-Pet/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { Name,  EmailID , PhoneNo , Travel_Destination} = res.data;
                    setInitialValue({ Name,  EmailID , PhoneNo , Travel_Destination });
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }, [id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = { Name: newData[0], EmailID: newData[1], PhoneNo: newData[2],Travel_Destination: newData[3] };
        Axios.put("https://crud-deployment-backend-15pi.onrender.com/petRoute/update-Pet/" + id, data)
            .then((res) => {
                if (res.status === 200)
                    alert("Record updated successfully")
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <TravelForm getState={getState}
                NameValue={initialValue.Name}
                EmailIDValue={initialValue.EmailID}
                PhoneNoValue={initialValue.PhoneNo}
                Travel_DestinationValue={initialValue.Travel_Destination}
                >
                    Update Support
            </TravelForm>
        </form>
    )
}
export default EditTravel;
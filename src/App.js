import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";
import Input from "./Components/Input";
import formFields from "./Data/input-fields.json";

function App() {
  const [formData, setFormData] = useState({});
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiData([...apiData, formData]);
    // try {
    //   const response = await axios.post("YOUR_API_ENDPOINT", formData);

    //   console.log("Data submitted successfully:", response.data); // Log response data

    //   setApiData(response.data);
    //   setFormData({ email: "", password: "", mobile: "" }); //clear the form
    // } catch (error) {
    //   console.error("Error submitting data:", error); // Handle errors (e.g., display an error message)
    // }
  };

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get("YOUR_API_ENDPOINT");
  //       setApiData(response.data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err);
  //       setLoading(false);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  // if (loading) {
  //   return <p>Loading users...</p>;
  // }

  // if (error) {
  //   return <p>Error fetching users: {error.message}</p>;
  // }

  return (
    <>
      <form className="my-5" onSubmit={handleSubmit}>
        <div className="w-25 mx-auto px-3 border border-1 rounded shadow">
          <h2 className="mt-3">Registration Form</h2>
          {formFields.map((field, key) => (
            <div className="my-3" key={key}>
              {field.label && (
                <label htmlFor={field.id} className="form-label">
                  {field.label}
                </label>
              )}
              <Input
                field={field.fieldType}
                children={field?.children}
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                value={formData[field.id] || ""}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
      </form>
      <Card apiData={apiData} setApiData={setApiData} />
    </>
  );
}

export default App;

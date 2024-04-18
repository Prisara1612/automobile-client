import React,{useState}from 'react'
import './addcustomer.css'

const AddCustomers = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, for now, just log the form data
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: '',
      phone: '',
      address: '',
      gender: ''
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>Customer Details</h1>
      <label>
        Customer Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone No:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <label>
        Gender:
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <button type="submit">Add Customer</button>
    </form>
  );
}

export default AddCustomers
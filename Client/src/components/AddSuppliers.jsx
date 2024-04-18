import React, { useState } from 'react';
import './addsupplier.css'

const AddSupplierForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    plantAddress: '',
    plantId: ''
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
      plantAddress: '',
      plantId: ''
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>Supplier Details</h1>
      <label>
        Supplier Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Plant Address:
        <input
          type="text"
          name="plantAddress"
          value={formData.plantAddress}
          onChange={handleChange}
        />
      </label>
      <label>
        Plant ID:
        <input
          type="text"
          name="plantId"
          value={formData.plantId}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Supplier</button>
    </form>
  );
};

export default AddSupplierForm;

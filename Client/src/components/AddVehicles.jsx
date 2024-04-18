import React, { useState } from 'react';
import './addvehicles.css'

const AddVehicles = () => {
  const [formData, setFormData] = useState({
    color: '',
    manufactureDate: '',
    modelId: '',
    plantId: '',
    supplierId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
   <form className="form-container">
    <h1>Add vehicles</h1>
      <div>
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="manufactureDate">Manufacture Date:</label>
        <input
          type="date"
          id="manufactureDate"
          name="manufactureDate"
          value={formData.manufactureDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="modelId">Model ID:</label>
        <input
          type="text"
          id="modelId"
          name="modelId"
          value={formData.modelId}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="plantId">Plant ID:</label>
        <input
          type="text"
          id="plantId"
          name="plantId"
          value={formData.plantId}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="supplierId">Supplier ID:</label>
        <input
          type="text"
          id="supplierId"
          name="supplierId"
          value={formData.supplierId}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  
  )
}

export default AddVehicles
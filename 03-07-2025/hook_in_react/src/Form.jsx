import { useState } from 'react';
import './MyForm.css';

const initialState = {
  name: '',
  email: '',
  age: '',
  city: ''
};

const MyForm = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData(initialState);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <h2>User Form</h2>

        <label htmlFor='name'>Name:</label>
        <input type="text" name="name" id='name' value={formData.name} onChange={handleChange} />

        <label htmlFor='email'>Email:</label>
        <input type="email" id='email' name="email" value={formData.email} onChange={handleChange} />

        <label htmlFor='age'>Age:</label>
        <input type="number" id='age' name="age" value={formData.age} onChange={handleChange} />

        <label htmlFor='city'>City:</label>
        <input type="text" id='city' name="city" value={formData.city} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;

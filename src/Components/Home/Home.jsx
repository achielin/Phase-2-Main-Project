import React, { useState, useEffect} from 'react'
import './Home.css'

const Home = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState("");
  const [query, setQuery] = useState("")
  console.log(data);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?q=${formData}`)
    .then(response => response.json())
    .then(data => setData(data))
  }, [formData, query]);

  function handleChange(e){
    setFormData(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    setQuery(formData)
  }

  return (
    <div>
      <div>
        <input type="search" placeholder='Search Your Name' name='formData' value={formData} onChange={handleChange} className="search"/>
        {/* <button type='submit' onClick={handleSubmit}>Submit</button> */}
      </div>
      <div>
        <table className="table">
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Home
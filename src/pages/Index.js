import { useState } from "react";
import {Link} from "react-router-dom"

function Index(props) {
    const [newForm, setNewForm] = useState({
      name: "",
      countryOfOrigin: "",
      image: ""
    })
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createCheese(newForm)
        setNewForm({
          name: "",
          countryOfOrigin: "",
          image: ""
        })
    }
    
  const loaded = () => {
    return props.cheese.map((singleCheese) => (
      <div key={singleCheese._id} className="singleCheese">
        <Link to={`/cheese/${singleCheese._id}`}><h1>{singleCheese.name}</h1></Link>
        <img src={singleCheese.image} alt={singleCheese.name} />
        <h3>{singleCheese.countryOfOrigin}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="Country of Origin"
          onChange={handleChange}
        />
        <input type="submit" value="Create Cheese" />
      </form>
      {props.cheese ? loaded() : loading()}
    </section>
  );
 
}

export default Index;
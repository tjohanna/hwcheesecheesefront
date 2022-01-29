import { useState } from "react";
import {Link} from "react-router-dom"

function Index(props) {
    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        title: ""
    })
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createCheese(newForm)
        setNewForm({
            name: "",
            image: "",
            title: ""
        })
    }
    
  const loaded = () => {
    return props.cheese.map((typeCheese) => (
      <div key={typeCheese._id} className="typeCheese">
        <Link to={`/cheese/${typeCheese._id}`}><h1>{typeCheese.name}</h1></Link>
        <img src={typeCheese.image} alt={typeCheese.name} />
        <h3>{typeCheese.title}</h3>
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
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Create Cheese" />
      </form>
      {props.cheese ? loaded() : loading()}
    </section>
  );
 
}

export default Index;
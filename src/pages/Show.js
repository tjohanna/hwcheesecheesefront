import { useState } from "react";

function Show(props) {
  const id = props.match.params.id;
  const cheese = props.cheese;
  const onecheese = cheese.find((singleCheese) => {
    return singleCheese._id === id;
  });

  const [editForm, setEditForm] = useState(onecheese);

  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateCheese(editForm, onecheese._id)
    props.history.push("/")
  }

  const removeCheese = () => {
    props.deleteCheese(onecheese._id)
    props.history.push("/")

  }

  return (
    <div className="cheese">
      <h1>{onecheese.name}</h1>
      <h2>{onecheese.title}</h2>
      <img src={onecheese.image} alt={onecheese.name} />
      
      <button onClick={removeCheese} id="delete">Delete</button>

      <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={editForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
        />
        <input
        type="text"
        value={editForm.image}
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
        />
        <input 
        type="text"
        value={editForm.title}
        name="title"
        placeholder="title"
        onChange={handleChange}
        />
        <input type="submit" value="Update Cheese"/>
      </form>
    </div>
  );
}

export default Show;
import React  , {useState }from 'react'
import styled from "styled-components";
import axios from 'axios' ;

const AddRecipe = () => {

    // creating hooks used for our inputs 
    const [title , setTitle] = useState('');
    const [recipe , setRecipe] = useState('');
    const [authorname , setAuthorname] = useState('');


    // funtion when you click on it it passes the data to the database by axios
    const   changeOnClick  = e =>{ 
        e.preventDefault(); // not lodding the page again 
        
        const recipes =  {
            title, 
            recipe, 
            authorname

        };
        /// to clear the form after subming it

        setTitle('');
        setRecipe('');
        setAuthorname('');



        /// sending it to the MongoDb using axios
        axios.post('/recipes/add',recipes)
        .then(res => console.log(res.data))
        .catch(err => {
            console.log(err);
        })
    };


    return (

     <AddRecipeContainer>
         
        <div className="container">
        <h1>Add New Recipe</h1>
            <form onSubmit={changeOnClick} encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="authorname">Cooker  Name</label>
                    <input type="text"
                     className="form-control" 
                     value = {authorname}
                     onChange={e => {setAuthorname(e.target.value)}}
                     placeholder="Cooker Name" 
                      
                      />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title of the Recipe</label>
                    <input type="text"
                     className="form-control" 
                     value ={title}
                     onChange={e => {setTitle(e.target.value)}}
                     placeholder="Title" />
                </div>
                <div className="form-group">
                    <label htmlFor="recipe"> Ingredients  of the Recipe</label>
                    <textarea 

                    className="form-control" 
                    value = {recipe}
                    onChange={e => {setRecipe(e.target.value)}}
                    rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add Recipe</button>
            </form>
        </div>
    </AddRecipeContainer>
    )
}

export default AddRecipe;
 

////AMin container 
const AddRecipeContainer = styled.div`

    margin:3rem auto ; 
    padding :4 rem ; 
    width : 30rem ; 


    h1 { 
    font-weight : 900; 
    color: var(--dark-green);
    }
    .btn-primary {
        margin-top :2rem; 
        background: var(--dark-green);
        &:hover {
            background: var(--ligh-green);
        }
    }

`;
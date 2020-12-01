import React from 'react'
import styled from 'styled-components';
import spinner from "../spinner.gif";
const Recipes = ({posts }) => {
    return (
        <MainContainer>
            {!posts.length ? < img src={spinner} alt="lodding ..." />:  
            posts.map((recipe , key)  => (
               
                <div className="container">
                <h2>{recipe.title}</h2>
                <p>{recipe.recipe}</p>
                <span className="badge badge-secondary p-2">{recipe.authorname}</span>
                <div className="row my-5">
                    <div className="col-sm-2">
                        <a href= "" className=" btn btn-outline-success">Edit Recipe </a>
                    </div>
                    <div className="col-sm-2">
                        <a href= "" className=" btn btn-outline-danger">Delete  Recipe </a>
                    </div>
                </div>
                </div>
            ))}
        </MainContainer>
    )
}

export default Recipes

/// constainer 
const  MainContainer = styled.div`
margin : 7rem 0 ; 

img { 
    width: 10rem; 
    display: block;
    margin :0  auto ; 
}

`;
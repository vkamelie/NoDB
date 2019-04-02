import React, { Component } from 'react';
import "./Addbook.css"


export default class AddBook extends Component {
    constructor(props){
        super(props)
        this.state ={
         newTitle: "",
         newAuthor: "",
         newSummary: "",
         newGenre: "",
         newPhoto: "",
         
        }
    }
updateTitle = (value) => {
    console.log(value)
    this.setState({
        newTitle: value,
    })
}

updateAuthor = (value) => {
        this.setState({
            newAuthor: value
        })
}

updateSummary = (value) => {
    this.setState({
        newSummary: value
    })
}

updateGenre = (value) => {
    this.setState({
        newGenre : value
    })
}

updatePhoto = (value) => {
    this.setState({
        newPhoto : value
    })
}


updateList = () => {
    const {newTitle, newAuthor, newSummary, newGenre, newPhoto} = this.state
    
    this.props.updatebook(newTitle, newAuthor, newSummary, newGenre, newPhoto)

}

        render() {
            console.log(this.state.newPhoto)
              return (
              <div className="add-parent">
                
              <div className="add-child">
              <header>Add to the Library!</header>
              <form>
                  <div>
               <label for="title">Title: </label> 
               <br />
               <input className="child-3" type="text" onChange={(event) => this.updateTitle(event.target.value)}/>
               < br />
               </div>
               
               <div>
               <label>Author: </label>
               <br />
               <input type="text" onChange={(event) => this.updateAuthor(event.target.value)}/>
               <br />
               </div>
               
               <div>
               <label>Summary:</label>
               <br />
               <input type="text" onChange={(event) => this.updateSummary(event.target.value)} />
               <br />
               </div>
               <div>
               <label>genre:</label>
               <br />
               <input type="text" onChange={(event) => this.updateGenre(event.target.value)}/>
               <br />
               </div>
               <div>
               <label>Photo: </label>
               <br />
               <input onChange={(event) => this.updatePhoto(event.target.value)} type="text" accept="image/url"/>
               <br />
              <input type="submit" onClick={() => this.updateList()}/>
              </div>

              </form>
            
                </div>
               
              </div>
            )
          }
        
}

import React, { Component } from 'react';
import {Redirect } from 'react-router-dom'

class AddPresentation extends Component {
    state = {
        redirect: false,
        data : {
            presenter:'',
            evaluater:'',
            topic: '',
            articles: [],
            date: '',
            keywords: [],
            summary: ''
        }
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    save = (event) => {
        event.preventDefault();
        const data = this.state.data;
        this.props.addPresentation(data);
        this.setRedirect();
    }
    
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/presentations' />
        }
    }

    handleChange = (event) => {
        switch(event.target.name) {
            case 'presenter':
              this.setState({data: {...this.state.data,presenter: event.target.value}});
              break;
            case 'evaluater':
              this.setState({data: {...this.state.data,evaluater: event.target.value}});
              break;
            default:
              
          }
        
    }

  render() {
    return (
        <div className="formContainer">
            {this.renderRedirect()}
            <h3>New Presentation</h3>            
            <form  onSubmit={this.save}>
                <div className="inputWrapper">
                    <label className="inputLabel">Presenter:</label>
                    <input name="presenter" className="inputField" type="text" value={this.state.presenter} onChange={this.handleChange} />
                </div>
                <div className="inputWrapper">
                    <label className="inputLabel">Evaluater:</label>
                    <input name="evaluater" className="inputField" type="text" value={this.state.evaluater} onChange={this.handleChange} />
                </div> 
                <div className="inputWrapper">
                    <label className="inputLabel">Topic:</label>
                    <input name="topic" className="inputField" type="text" value={this.state.topic} onChange={this.handleChange} />
                </div>  
                <div className="inputWrapper">
                    <label className="inputLabel">Articles:</label>
                    <input name="articles" className="inputField" type="text" value={this.state.articles} onChange={this.handleChange} />
                </div>  
                <div className="inputWrapper">
                    <label className="inputLabel">Date:</label>
                    <input name="date" className="inputField" type="text" value={this.state.date} onChange={this.handleChange} />
                </div>  
                <div className="inputWrapper">
                    <label className="inputLabel">keywords:</label>
                    <input name="keywords" className="inputField" type="text" value={this.state.keywords} onChange={this.handleChange} />
                </div>  
                <label >Summary:</label>
                <textarea name="summary"value={this.state.summary} onChange={this.handleChange} rows="5"/>
                <div className="button-wrapper">
                    <button  type="submit" className="whiteFont blueBackground">Save</button>
                    <button type="button" onClick={this.setRedirect} className="whiteFont blueBackground">Cancel</button>
                </div>               
            </form>
        </div>        
    );
  }
}

export default AddPresentation;

import React, {Component} from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import Table from "./Table";
 

class CreateList extends Component{
    state = {
        search: "",
        allEmployees: [],
        order: "descend"
    };

    
    apiCall = () => {
      API.getEmployees()
      .then(res => this.setState({ allEmployees: res.data.results }))
      .catch(err => console.log(err));
    };
    
    componentDidMount() {
        this.apiCall();
    };
    
    handleInputChange = event => {
        const search = event.target.name;
        const value = event.target.value;
        this.setState({
        [search]: value
        });
    };

    nameArray = ()=> {
        const sorted = [ ...this.state.allEmployees ].sort((a, b) => a.name.first > b.name.first ? 1 : -1)
        this.setState({
            ...this.state,
            allEmployees: sorted
        })
    }

    render() {
        return (
            // <>
                <div>
                    <SearchForm
                        search = {this.state.search}
                        handleInputChange = {this.handleInputChange}
                    />
                    <Table allEmployees = {this.state.allEmployees} search = {this.state.search} nameArray = {this.nameArray} order = {this.state.order}/>
                </div>
            // {/* </> */}
        );
    }
}

export default CreateList;
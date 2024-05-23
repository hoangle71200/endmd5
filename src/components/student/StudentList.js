import {Component} from "react";

 class StudentList extends Component {
     constructor(props) {
         super(props);
     }
    render() {
        return (
            <>
            <h1>Student List of {this.props.nameClass}</h1>
            </>
        )
    }
}

export default StudentList;
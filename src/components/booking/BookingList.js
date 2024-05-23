import {Component} from "react";

 class BookingList extends Component {
     constructor(props) {
         super(props);
     }
    render() {
        return (
            <>
            <h1>Booking List of {this.props.nameClass}</h1>
            </>
        )
    }
}

export default BookingList;
import React from "react";

const Table = (props) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>
                        image
                    </th>
                    <th>
                        name
                    </th>
                    <th>
                        email
                    </th>
                    <th>
                        phone
                    </th>
                    <th>
                        date of birth
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.allEmployees.map(person => {
                    return(
                        <tr>
                            <td>
                                <img src={person.picture.thumbnail} alt=""/>
                            </td>
                            <td>
                                {person.name.first} {person.name.last}
                            </td>
                            <td>
                                {person.email}
                            </td>
                            <td>
                                {person.phone}
                            </td>
                            <td>
                                {person.dob.date.slice(0, 10)}
                            </td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    )
}

export default Table
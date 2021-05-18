import React from "react";

const Table = (props) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>
                        Image
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Phone
                    </th>
                    <th>
                        Date of Birth
                    </th>
                </tr>
            </thead>
            <tbody>

                {props.allEmployees.filter(employee => employee.name.first.toLowerCase().includes(props.search.toLowerCase())).map(person => {
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
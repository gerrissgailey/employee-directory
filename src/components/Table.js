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
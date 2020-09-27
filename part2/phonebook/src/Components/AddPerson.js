import React from 'react'
const AddPerson
    = ({ newName, nameChangedHandler, newNumber, numberChangedHandler, submitHandler }) =>{
        return (
            <form onSubmit={submitHandler}>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name: </td><td><input value={newName} onChange={nameChangedHandler} /></td>
                            </tr>
                            <tr>
                                <td>Phone #: </td><td><input value={newNumber} onChange={numberChangedHandler} /></td>
                            </tr>
                            <tr>
                            <td><button type="submit">Add</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
    
                </div>
            </form>
        )
    }

export default AddPerson;

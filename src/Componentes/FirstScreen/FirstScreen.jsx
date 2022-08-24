import React from "react";
import { data } from '../../Data/Data'
import './FirstScreen.css'


export default function FirstScreen() {


    return (
        <div>

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Profession</th>
                        <th scope="col">Hobbie</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(e =>

                            <tr className="container">
                                <td>{e.nombre} </td>
                                <td>{e.edad} </td>
                                <td>{e.carrera} </td>
                                <td>{e.hobbie} </td>
                            </tr>
        
                        )
                    }
                    
                </tbody>
            </table>

        </div>
    )
}
// Write your Character component here
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function Characters(props) {
    const { page, setPage, characters } = props;

    
    return (
        <div>
            <div>
                {
                    characters.map(char => {
                        return (
                            <div>
                                <h3>{char.name}</h3>
                                <div>
                                    <ul>
                                        <li>
                                            {char.birth_year}
                                        </li>
                                        <li>
                                            {char.gender}
                                        </li>
                                        <li>
                                            {char.height}
                                        </li>
                                        <li>
                                            {char.mass}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <button onClick={() => page > 1 ? setPage(page-1) : alert('On Page 1')}>Previous</button>
                <button onClick ={() => setPage(page+1)}>Next</button>
            </div>
        </div>

    )
}
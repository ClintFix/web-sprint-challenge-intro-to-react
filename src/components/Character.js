// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const CharactersList = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`

const CharacterCard = styled.div `
    width: 400px;
    box-shadow: 2px 2px 2px gray;
    background-color: rgb(169,169,169, .8);
    margin-bottom: 10px;
`

const Details = styled.div `
    font-size: 14px;
`

const Buttons = styled.button `
    width: 100px;
    margin: 20px 20px 100px;
`

export default function Characters(props) {
    const { page, setPage, characters } = props;
    
    return (
        <CharactersList>
                {
                    characters.map(char => {
                        return (
                            <CharacterCard>
                                <h3>{char.name}</h3>
                                <Details> 
                                    <p>
                                        Birth Year: {char.birth_year}
                                    </p>
                                    <p>
                                        Gender: {char.gender}
                                    </p>
                                    <p>
                                        Height: {char.height}
                                    </p>
                                    <p>
                                        Mass: {char.mass}
                                    </p>
                                </Details>
                            </CharacterCard>
                        )
                    })
                }
            <div>
                <Buttons onClick={() => page > 1 ? setPage(page-1) : alert('On Page 1')}>Previous</Buttons>
                <Buttons onClick ={() => setPage(page+1)}>Next</Buttons>
            </div>
        </CharactersList>

    )
}
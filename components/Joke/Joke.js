import React from 'react'
import {useGetRandomJokeQuery } from '../../services/jokes'

export default function Joke() {
    const { data: randomJoke, error, isLoading} = useGetRandomJokeQuery()

    if(isLoading) return <h1>...Loading </h1>

    return (
        <div>
        <pre>{JSON.stringify(randomJoke, null, 2) }</pre>
        </div>
    )
}

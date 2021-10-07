// PRZYKŁĄD 3

// JAK RADZIC SOBIE Z ASYNCHRONICZNOŚCIĄ W TESTACH

// Jak zareaguje widok w testach (jsdom) przy zdarzeniu?
// Czy warto tutaj mockować taką funkcję?

import React, {useEffect, useState} from "react";

const Trzeci = () => {
    const [text, setText] = useState('');

    const _fetchName =  () => fetch({
        url: 'foo',
        method: 'GET'
    })

    useEffect(async () => {
        try {
           const response = await _fetchName();
           const json = await response.json();
           setText(json.text)
        } catch {
            setText('Bad request')
        }
    }, [])

    return (
        <>
            {text && (<span>{text}</span>)}
        </>
    )
}

export default Trzeci;
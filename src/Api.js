import React from 'react';
import axios from 'axios';
const apiBaseURL = 'www.developers.themoviedb.org/3/find'

export function getData() {
    const url = `${apiBaseURL}`
        .then(res => res.json())
        .then(json => console.log(json));
};


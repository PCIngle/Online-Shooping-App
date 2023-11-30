import axios from 'axios'

const URL = "http://localhost:8000/api/";

const Token=
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjM3NWRjOTcyYjQwZTM5MTI4NWE0YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzQyNzE1MH0.RQOvIMvlP_JjIUqSSl0gm8wvnRBmPhp1ZiU1y01MCPI"

export const publicReq=axios.create({
        baseURL:URL,
});

export const userReq=axios.create({
        baseURL:URL,
        header:{token:`Bearer ${Token}`},
})
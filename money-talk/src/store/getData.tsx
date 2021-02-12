import * as React from 'react';

const getData = () => {

    const [data, setData] = React.useState([]);

    // React.useEffect(() => {
    //     const makeRequest = async () => {
    //         axios({
    //             method: 'get',
    //             url: 'https://api.github.com/users'
    //         }).then(response => {
    //             setUsers(response.data.reduce((acc, user) => [...acc, {
    //                 id: user.id,
    //                 name: user.login,
    //                 avatarUrl: user.avatar_url
    //             }], []))
    //         });
    //     }
    //
    //     makeRequest();
    // }, []);

    return data;
}

export default getData;

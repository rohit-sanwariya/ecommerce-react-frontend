const getAccessToken = () => {
    return sessionStorage.getItem('accessToken')?.toString();
}

export default getAccessToken;
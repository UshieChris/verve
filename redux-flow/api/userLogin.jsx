export const userLogin = async (user) => {
    const response = await fetch(endpoint.login,{
        method: 'POST',
        headers: { 
            'Content-Type' : 'application/json' 
        },
        body: JSON.stringify({
            email: user.email,
            password: user.password,
        })
    })
    if(!response.ok) throw new Error('Something Went Wrong!!');
    const responseData = await response.json()
    return responseData
}
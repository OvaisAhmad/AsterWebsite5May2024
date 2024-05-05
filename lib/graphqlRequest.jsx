export default async function graphqlRequest(query){
    const url = "https://asteromancms.xlab.ae/graphql";
    const headers = {'Content-Type' : 'application/json'};

    const res = await fetch(url,{
        next: { revalidate: 10 },
        headers,
        method:'POST',
        body:JSON.stringify(query)
    });
    const resJson = await res.json();
    return resJson;
}

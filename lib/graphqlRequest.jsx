export default async function graphqlRequest(query){
    const url = "https://deeppink-finch-401228.hostingersite.com/graphql";
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

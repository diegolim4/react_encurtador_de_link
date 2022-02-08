// Buscar os links salvos
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || []

    return linksSaves
}

// Salvar um link no localstorage
export async function saveLink(key, newLink){
    let linkStored = await getLinksSave(key)

    // Se já tiver link com o mesmo id
    const hasLink = linkStored.some(link => link.id === newLink.id)
    
    if(hasLink){
        console.log('Link já existente');
        return
    }
    //Add o novo link na lista
    linkStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linkStored))
    console.log('Link add com sucesso!');
}

// Deletar algum link salvo

    export function deleteLink(links, id){
        let myLinks = links.filter(item => {
            return (item.id !== id)
        })
        
        localStorage.setItem('key_links', JSON.stringify(myLinks))

        return myLinks
    
    }
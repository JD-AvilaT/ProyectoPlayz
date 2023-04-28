import { DataPublications } from "../mocks/publicationdata";
import { Publicationsdata } from "../mocks/publicationdata";

export async function getPublications(): Promise<DataPublications[]> {
    const publication: DataPublications[] = await new Promise((resolve)=>{
      setTimeout(()=> resolve(Publicationsdata), 1000)
    })
    return publication
}

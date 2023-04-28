import { DataPublications } from "../mocks/publicationdata";
import { Publicationsdata } from "../mocks/publicationdata";

class Publications {
    async getApi(): Promise<DataPublications[]> {
      const publication: DataPublications[] = await new Promise((resolve) => {
        setTimeout(() => resolve(Publicationsdata), 2000);
      });
      return publication;
    }
  }
  
  export default new Publications();
export class Produit {
    _id: string;
    titre: string;
    description: string;
    prix: number;

    constructor(_id: string, titre: string, description: string,prix: number) {
        this._id = _id;
        this.titre = titre;
        this.description = description;
        this.prix = prix;
    }
}
class LocationModel{
    #id: string;
    #name: string;
    #parentId?: string;

    constructor(id: string, name: string, parentId?: string){
        this.#id=id;
        this.#name=name;
        this.#parentId=parentId;
    }

    get id(){
        return this.#id;
    }

    get name(){
        return this.#name;
    }

    get parentId(){
        return this.#parentId;
    }

    static fromMap(map: Object): LocationModel{
        return new LocationModel(
            map["id"],
            map["name"],
            map["parentId"],
        );
    }

    isSubLocation(): boolean{
        return this.#parentId!=null;
    }
}
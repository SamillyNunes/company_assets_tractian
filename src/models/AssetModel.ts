class AssetModel{
    #id: string;
    #name: string;
    #parentId?: string;
    #sensorType?: string;
    #sensorId?: string;
    #status?: string;
    #gatewayId?: string;
    #locationId?: string;

    constructor(id: string, name: string, parentId?: string, sensorType?: string, sensorId?: string, status?: string, gatewayId?: string, locationId?: string){
        this.#id=id;
        this.#name=name;
        this.#parentId=parentId;
        this.#sensorType=sensorType;
        this.#sensorId=sensorId;
        this.#status=status;
        this.#gatewayId=gatewayId;
        this.#locationId=locationId;
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

    get sensorType(){
        return this.#sensorType;
    }

    get sensorId(){
        return this.#sensorId;
    }

    get status(){
        return this.#status;
    }

    get locationId(){
        return this.#locationId;
    }

    get gatewayId(){
        return this.#gatewayId;
    }

    isComponent(): boolean{
        return this.sensorType!=null;
    }

    /** Significa que eh um componente vindo direto da raiz  */
    isUnlike(): boolean{
        return this.#locationId==null && this.#parentId==null;
    }

    isAssetFromLocation(): boolean{
        return this.#locationId!=null && this.#sensorId==null;
    }

    isSubAsset(): boolean{
        return this.#parentId!=null && this.#sensorId==null;
    }
}
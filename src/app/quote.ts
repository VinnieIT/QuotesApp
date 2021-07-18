export class Quote {


    showDetails: boolean;

    constructor(public id: number, public topic: string, public postedBy: string,
         public description: string, public quoteBy: string,public postedOn: Date){
            this.showDetails = false;
         }
}

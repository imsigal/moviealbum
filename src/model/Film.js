export default class Film{

    constructor(ObjectOrName,lengthMinutes,director,imgSrcPoster,starActors)
    {

        if (arguments.length === 1) {
            this.name=ObjectOrName.name;
        this.lengthMinutes=ObjectOrName.lengthMinutes;
        this.director=ObjectOrName.director;
        this.imgSrcPoster=ObjectOrName.imgSrcPoster;
        this.starActors=ObjectOrName.starActors;
        }
        else{
        this.name=ObjectOrName;
        this.lengthMinutes=lengthMinutes;
        this.director=director;
        this.imgSrcPoster=imgSrcPoster;
        this.starActors=starActors;
        }
    }
}
  
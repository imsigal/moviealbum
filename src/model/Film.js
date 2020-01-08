export default class Film{

    constructor(ObjectOrName,lengthMinutes,director,imgSrcPoster,starActors,id)
    {
        var imageconstantPath="https://image.tmdb.org/t/p/w300_and_h450_bestv2"

        if (arguments.length === 1) {
            this.name=ObjectOrName.name;
            this.lengthMinutes=ObjectOrName.lengthMinutes;
            this.director=ObjectOrName.director;
            this.imgSrcPoster=imageconstantPath+ObjectOrName.imgSrcPoster;   // input is the relative path only
            this.starActors=ObjectOrName.starActors;
            this.id=ObjectOrName.id;
        }
        else{
            this.name=ObjectOrName;
            this.lengthMinutes=lengthMinutes;
            this.director=director;
            this.imgSrcPoster=imageconstantPath+imgSrcPoster;   // input is the relative path only
            this.starActors=starActors;
            this.id=id
        }

    }
}
  
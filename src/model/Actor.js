
//Class Actor has the following members:
//First name, Last name,Birthday,Image,IMDB link,
//Age (a method that calculates the age based on the birthday)

class Actor{

    constructor(ObjectOrFirstName,lastName,birthday,imgSrc,imDBlink)
    {

        if (arguments.length === 1) {
            this.firstName=ObjectOrFirstName.firstName;
        this.lastName=ObjectOrFirstName.lastName;
        this.birthday=new Date(ObjectOrFirstName.birthday);
        this.imgSrc=ObjectOrFirstName.imgSrc;
        this.imDBLink=ObjectOrFirstName.imDBlink;
        }
        else{
        this.firstName=ObjectOrFirstName;
        this.lastName=lastName;
        this.birthday=new Date(birthday);
        this.imgSrc=imgSrc;
        this.imDBLink=imDBlink;
        }
    }
    getAge=()=>
    {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.birthday.getFullYear();
        return age;
    }

}

export default Actor;
export class Transfer{
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
    }
}

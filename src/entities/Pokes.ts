import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("pokes")
export class Pokes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    height: string;

    @Column()
    weight: string;

    // constructor(){
    //     if(!this.id){
    //         throw new Error("Invalid ID")
    //     }
    // }
}

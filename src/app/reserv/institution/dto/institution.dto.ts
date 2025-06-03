import { InstitutionComponent } from "../institution.component";

export interface InstitutionDto {
    uuid: string;
    name: string;
    department?: string;
    province?: string;
}
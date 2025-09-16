export interface AppointmentDto {
    patientCi:number;
    doctorCi:number;
    specialty:string;
    date?:Date;
    institutionName:string;
    department:string;
    shift: string;
    startTime: string;
}
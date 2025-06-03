export interface ScheduleDto {
    id: number;
    shift: string;
    shiftDate: Date;
    startTime: string;
    endTime: string;
    medicalService: string;
}
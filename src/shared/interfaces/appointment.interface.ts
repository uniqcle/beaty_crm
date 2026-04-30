export interface IAppointment {
    id: number;
    date: Date;
    name: string;
    service: string;
    phone: string;
    canceled: boolean;
}

export type IActiveAppointment = Omit<IAppointment, "canceled">;
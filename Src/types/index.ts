export type AppointmentStatus =
  | 'Booked'
  | 'Confirmed'
  | 'Arrived'
  | 'Started'
  | 'Completed'
  | 'Cancelled';

export type PaymentStatus = 'Confirmed' | 'Paid to Confirm' | 'Expired';

export interface Appointment {
  id: string;
  name: string;
  service: string;
  time: string;
  status: AppointmentStatus;
  avatar: string;
}

export interface Payment {
  id: string;
  name: string;
  service: string;
  time: string;
  status: PaymentStatus;
  avatar: string;
}

export interface TabConfig {
  label: string;
  status: string | null;
  color: string;
  activeColor: string;
  textColor: string;
}

export type StepStatus =
  | 'Booked'
  | 'Confirmed'
  | 'Arrived'
  | 'Started'
  | 'Cancelled'
  | 'Expired'
  | 'Pending'
  | 'ToDo'
  | 'Ongoing'      
  | 'Completed';   
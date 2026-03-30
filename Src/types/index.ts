// ─── Appointment ──────────────────────────────────────────────────────────────
export interface Appointment {
  id: string;
  name: string;
  avatar: string;
  service: string;
  time: string;
  status: string;
}

// ─── Payment ───────────────────────────────────────────────────────────────────
export interface Payment {
  id: string;
  name: string;
  avatar: string;
  service: string;
  time: string;
  status: string;
  amount: string;
  email: string;
  phone: string;
  paymentMethod: string;
  cardEnding: string;
  notes: string;
  date?: string;
  invoiceNo?: string;
  cardLast4?: string;
  steps: {
    started: string;
    paid: string;
    confirm: string;
  };
}

// ─── Tab Config ────────────────────────────────────────────────────────────────
export interface TabConfig {
  label: string;
  status: string | null;
  color: string;
  activeColor: string;
  textColor: string;
}

// ─── Step Status (for Appointment BookingStep) ─────────────────────────────────
export type StepStatus =
  | 'ToDo'
  | 'Pending'
  | 'Booked'
  | 'Confirmed'
  | 'Arrived'
  | 'Started'
  | 'Completed'
  | 'Cancelled'
  | 'Expired'
  | 'Ongoing';

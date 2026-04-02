import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Printer } from 'lucide-react-native';
import styles from '../../Screen/HomeScreenAppoinments/HomeScreenAll/Style';
import BookingStepBoked from '../HomeScreenAllComponents/BookingStep';
import ListMenuIcon from '../svg/ListMenuIcon';
import type { Appointment } from '../../types';
import type { StepStatus } from '../../types';

// ─── Step Status Helper ───────────────────────────────────────────────────────
const getStepStatuses = (
  apptStatus: string,
): [StepStatus, StepStatus, StepStatus] => {
  switch (apptStatus) {
    case 'Completed':
    case 'Complete':
      return ['Completed', 'Completed', 'Completed'];
    case 'Cancelled':
      return ['Cancelled', 'Cancelled', 'Cancelled'];
    case 'Started':
      return ['Started', 'Pending', 'Pending'];
    case 'Arrived':
      return ['Arrived', 'Pending', 'Pending'];
    case 'Confirmed':
      return ['Confirmed', 'Pending', 'Pending'];
    case 'Booked':
      return ['ToDo', 'Pending', 'Pending'];
    default:
      return ['ToDo', 'Pending', 'Pending'];
  }
};

// ─── Appt Booking Steps ───────────────────────────────────────────────────────
const ApptBookingSteps = ({ status }: { status: string }) => {
  const [s1, s2, s3] = getStepStatuses(status);
  return (
    <View style={styles.stepsRow}>
      <BookingStepBoked
        number={1}
        status={s1}
        time="12:00 – 12:05"
        service="Shampoo"
        staffName="Angelica"
        isLast={false}
        isActive={true}
      />
      <BookingStepBoked
        number={2}
        status={s2}
        time="12:00 – 12:05"
        service="Shampoo"
        staffName="Angelica"
        isLast={false}
        isActive={true}
      />
      <BookingStepBoked
        number={3}
        status={s3}
        time="12:00 – 12:05"
        service="Shampoo"
        staffName="Angelica"
        isLast={true}
        isActive={false}
      />
    </View>
  );
};

// ─── Appt Action Buttons ──────────────────────────────────────────────────────
const ApptActionButtons = ({ status }: { status: string }) => {
  if (status === 'Booked' || status === 'Confirmed') {
    return (
      <>
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.printBtn} activeOpacity={0.8}>
            <Printer width={15} height={15} color="#635BFF" strokeWidth={2} />
            <Text style={styles.printBtnText}>Print Receipt</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailsBtn} activeOpacity={0.8}>
            <ListMenuIcon width={15} height={15} />
            <Text style={styles.detailsBtnText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  if (status === 'Cancelled') {
    return (
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.deleteBtn} activeOpacity={0.8}>
          <Text style={styles.deleteBtnText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailsBtn} activeOpacity={0.8}>
          <Text style={styles.detailsBtnText}>Rebook</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (status === 'Complete') {
    return (
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.printBtn} activeOpacity={0.8}>
          <Printer width={15} height={15} color="#635BFF" strokeWidth={2} />
          <Text style={styles.printBtnText}>Print Receipt</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailsBtn} activeOpacity={0.8}>
          <ListMenuIcon width={15} height={15} />
          <Text style={styles.detailsBtnText}>View Details</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Default: Started, Arrived
  return (
    <View style={styles.actionRow}>
      <TouchableOpacity style={styles.printBtn} activeOpacity={0.8}>
        <Printer width={15} height={15} color="#635BFF" strokeWidth={2} />
        <Text style={styles.printBtnText}>Print Receipt</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.detailsBtn} activeOpacity={0.8}>
        <ListMenuIcon width={15} height={15} />
        <Text style={styles.detailsBtnText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

// ─── AppointmentCard (shared) ─────────────────────────────────────────────────
const AppointmentCard = ({
  item,
}: {
  item: Appointment & { [key: string]: any };
}) => {
  return (
    <View style={styles.payExpandedPanel}>
      <Text style={styles.bookingOrderTitle}>Booking Order</Text>

      <ApptBookingSteps status={item.status} />

      <ApptActionButtons status={item.status} />
    </View>
  );
};

export default AppointmentCard;

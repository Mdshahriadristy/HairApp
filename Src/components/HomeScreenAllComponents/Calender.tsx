import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CalendarProps {
  value: Date | null;
  onChange: (date: Date) => void;
  minDate?: Date | null;
}

const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa'];

const todayDate = () => {
  const t = new Date();
  return new Date(t.getFullYear(), t.getMonth(), t.getDate());
};

const daysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const firstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

const sameDay = (a: Date, b: Date) => {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
};

const Calendar: React.FC<CalendarProps> = ({ value, onChange, minDate }) => {
  const now = value ?? todayDate();
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());

  const totalDays = daysInMonth(viewYear, viewMonth);
  const firstDay = firstDayOfMonth(viewYear, viewMonth);
  const today = todayDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= totalDays; d++) {
    cells.push(new Date(viewYear, viewMonth, d));
  }

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(y => y - 1);
    } else {
      setViewMonth(m => m - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(y => y + 1);
    } else {
      setViewMonth(m => m + 1);
    }
  };

  const rows: (Date | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  return (
    <View style={styles.wrapper}>
      {/* Month Navigation */}
      <View style={styles.nav}>
        <TouchableOpacity onPress={prevMonth} style={styles.navBtn}>
          <Text style={styles.navArrow}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.navTitle}>
          {MONTHS[viewMonth]} {viewYear}
        </Text>

        <TouchableOpacity onPress={nextMonth} style={styles.navBtn}>
          <Text style={styles.navArrow}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Day Names */}
      <View style={styles.row}>
        {DAYS.map(d => (
          <Text key={d} style={styles.dayHeader}>
            {d}
          </Text>
        ))}
      </View>

      {/* Calendar Days */}
      {rows.map((row, ri) => (
        <View key={ri} style={styles.row}>
          {row.map((date, ci) => {
            if (!date) return <View key={ci} style={styles.cell} />;

            const isSelected = value ? sameDay(date, value) : false;
            const isToday = sameDay(date, today);
            const isDisabled = minDate ? date < minDate : false;

            return (
              <TouchableOpacity
                key={ci}
                onPress={() => !isDisabled && onChange(date)}
                disabled={isDisabled}
                style={[
                  styles.cell,
                  isSelected && styles.cellSelected,
                  !isSelected && isToday && styles.cellToday,
                ]}
              >
                <Text
                  style={[
                    styles.cellText,
                    isSelected && styles.cellTextSelected,
                    !isSelected && isToday && styles.cellTextToday,
                    isDisabled && styles.cellTextDisabled,
                  ]}
                >
                  {date.getDate()}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
};

export default Calendar;


const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  navBtn: {
    paddingHorizontal: 8,
  },
  navArrow: {
    fontSize: 22,
    color: '#5B3FE4',
    fontWeight: '600',
  },
  navTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1a1a2e',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  dayHeader: {
    flex: 1,
    textAlign: 'center',
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '500',
    paddingBottom: 6,
  },
  cell: {
    flex: 1,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  cellSelected: {
    backgroundColor: '#5B3FE4',
  },
  cellToday: {
    backgroundColor: '#EEE9FF',
  },
  cellText: {
    fontSize: 13,
    color: '#1a1a2e',
  },
  cellTextSelected: {
    color: '#fff',
    fontWeight: '700',
  },
  cellTextToday: {
    color: '#5B3FE4',
    fontWeight: '700',
  },
  cellTextDisabled: {
    color: '#D1D5DB',
  },
});
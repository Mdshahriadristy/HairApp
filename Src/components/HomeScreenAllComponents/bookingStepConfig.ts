import type { StepStatus } from '../../types';

export type { StepStatus };

export const STATUS_CONFIG: Record<StepStatus, {
  circleBg:   string;
  circleText: string;
  pillBg:     string;
  pillBorder: string;
  pillText:   string;
}> = {
  Booked:    { circleBg: '#FFFDE5', circleText: '#A88400', pillBg: '#FFFDE5', pillBorder: '#E8C84A',     pillText: '#A88400' },
  Confirmed: { circleBg: '#E0FFFE', circleText: '#16CDC7', pillBg: '#E0FFFE', pillBorder: 'transparent',     pillText: '#16CDC7' },
  Arrived:   { circleBg: '#F0FAFF', circleText: '#A88400', pillBg: '#FFFDE5', pillBorder: 'transparent',     pillText: '#A88400' },
  Started:   { circleBg: '#FFF3E0', circleText: '#E65100', pillBg: '#FFF3E0', pillBorder: '#E65100',     pillText: '#E65100' },
  Cancelled: { circleBg: '#FEF0F0', circleText: '#EB5757', pillBg: '#FEF0F0', pillBorder: '#EB5757',     pillText: '#EB5757' },
  Expired:   { circleBg: '#FEF0F0', circleText: '#EB5757', pillBg: '#FFECF0', pillBorder: '#EB5757',     pillText: '#EB5757' },
  Pending:   { circleBg: '#98A4AE', circleText: '#FFFFFF', pillBg: '#FFFFFF', pillBorder: '#C8D0D6',     pillText: '#98A4AE' },
  ToDo:      { circleBg: '#FFFDE5', circleText: '#A88400', pillBg: '#FFFDE5', pillBorder: 'transparent', pillText: '#A88400' },

  Ongoing:   { circleBg: '#E0FFFE', circleText: '#16CDC7', pillBg: '#E0FFFE', pillBorder: 'transparent', pillText: '#16CDC7' },
  Completed: { circleBg: '#E8F9F0', circleText: '#27AE60', pillBg: '#ECFFF1', pillBorder: 'transparent', pillText: '#27AE60' },
};
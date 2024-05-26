export interface DayProps {
    disable: boolean;
    date: string;
    selectedDate: string;
    selectedDate2: string;
    hoveredDate: string;
    min: string;
    max: string;
    setHoverDate(date: string): void;
    setSelectedDate(date: string): void;
    setSelectedDate2(date: string): void;
    selectDate: (date: Date) => void;
    activeInput: number;
  }
  export interface statesInterface {
    isHover: boolean;
  }
  export interface SelectedDay {
    startDate: Date | null;
    endDate: Date | null;
  }
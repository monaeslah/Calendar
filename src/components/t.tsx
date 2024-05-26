import * as React from "react"; // ایمپورت کتابخانه React
import { useState } from "react"; // ایمپورت هوک useState از React
import { DayProps } from "../interfaces"; // ایمپورت اینترفیس DayProps از فایل اینترفیس‌ها

// تعریف کامپوننت تابعی Day و دیکانستراکت کردن پراپرتی‌های مورد نیاز از DayProps
const Day: React.FC<DayProps> = ({
  disable,
  date,
  selectedDate,
  selectedDate2,
  min,
  max,
  setHoverDate,
  setSelectedDate,
  setSelectedDate2,
  activeInput,
}) => {
  // تعریف هوک useState برای نگهداری حالت isHover
  const [isHover, setIsHover] = useState(false);

  // تعریف تابع handleMouseEnter برای زمانی که موس روی المان قرار می‌گیرد
  const handleMouseEnter = () => {
    setIsHover(true); // تغییر حالت isHover به true
    setHoverDate(date); // فراخوانی تابع setHoverDate با مقدار date
  };

  // تعریف تابع handleMouseLeave برای زمانی که موس از روی المان خارج می‌شود
  const handleMouseLeave = () => {
    setIsHover(false); // تغییر حالت isHover به false
    setHoverDate(""); // فراخوانی تابع setHoverDate با مقدار رشته خالی
  };

  // تعریف تابع handleClick برای زمانی که المان کلیک می‌شود
  const handleClick = () => {
    if (activeInput === 1) {
      // بررسی اینکه activeInput برابر 1 است
      if (!selectedDate2 || date < selectedDate2) {
        // اگر selectedDate2 مقدار نداشته باشد یا date کوچکتر از selectedDate2 باشد
        setSelectedDate(date); // تنظیم selectedDate با مقدار date
      } else {
        setSelectedDate(selectedDate2); // در غیر این صورت، تنظیم selectedDate با مقدار selectedDate2
        setSelectedDate2(date); // تنظیم selectedDate2 با مقدار date
      }
    } else if (activeInput === 2 && selectedDate) {
      // بررسی اینکه activeInput برابر 2 باشد و selectedDate مقدار داشته باشد
      if (date > selectedDate) {
        // اگر date بزرگتر از selectedDate باشد
        setSelectedDate2(date); // تنظیم selectedDate2 با مقدار date
      } else {
        setSelectedDate(date); // در غیر این صورت، تنظیم selectedDate با مقدار date
      }
    }
  };

  // تعریف تابع renderDayContent برای نمایش محتوای روز بر اساس مقدار date
  const renderDayContent = (date: string) => {
    return date[8] === "0" ? date.slice(9, 10) : date.slice(8, 10); // اگر کاراکتر نهم تاریخ '0' باشد، کاراکتر دهم را برگرداند، در غیر این صورت کاراکتر هشتم و نهم را برگرداند
  };

  // اگر پراپرتی disable برابر true باشد
  if (disable) {
    return (
      <div className="notInMonth" style={{ cursor: "not-allowed" }}>
        X
      </div>
    ); // بازگشت یک div با کلاس notInMonth و استایل cursor: 'not-allowed'
  }

  // اگر min مقدار داشته باشد و date کوچکتر از min باشد یا max مقدار داشته باشد و date بزرگتر از max باشد
  if ((min !== "" && date < min) || (max !== "" && date > max)) {
    return (
      <div
        className="dayInThisMonth"
        style={{ backgroundColor: "grey", cursor: "not-allowed" }}
      >
        {renderDayContent(date)} // نمایش محتوای روز
      </div>
    );
  }

  // بررسی اینکه آیا date بین selectedDate و selectedDate2 است یا خیر
  const isBetweenSelected = date > selectedDate && date < selectedDate2;
  // بررسی اینکه آیا date برابر با selectedDate یا selectedDate2 است یا خیر
  const isSelected = date === selectedDate || date === selectedDate2;
  // تعریف استایل‌ها بر اساس شرایط مختلف
  const style = {
    ...(isSelected
      ? { backgroundColor: "#000cff", cursor: "pointer" }
      : { cursor: "pointer" }),
    ...(isBetweenSelected ? { backgroundColor: "#56a2f6" } : {}),
    ...(isHover ? { backgroundColor: "#56a2f6" } : {}),
  };

  // بازگشت یک div با کلاس dayInThisMonth و استایل‌های تعریف شده
  return (
    <div
      className="dayInThisMonth"
      style={style}
      onMouseEnter={handleMouseEnter} // افزودن رویداد onMouseEnter به تابع handleMouseEnter
      onMouseLeave={handleMouseLeave} // افزودن رویداد onMouseLeave به تابع handleMouseLeave
      onClick={handleClick} // افزودن رویداد onClick به تابع handleClick
    >
      {renderDayContent(date)} // نمایش محتوای روز
    </div>
  );
};

export default Day;

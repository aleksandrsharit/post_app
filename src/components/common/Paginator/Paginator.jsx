import React from "react";
import s from "./Paginator.module.css"

const Paginator = () => {
    const year = 2023;
    const month = Math.floor(Math.random() * 12);
    const day = Math.floor(Math.random() * 31) + 1;
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    const dayOfWeek = Math.floor(Math.random() * 7);

    const fakeDate = new Date();
    fakeDate.setFullYear(year);
    fakeDate.setMonth(month);
    fakeDate.setDate(day);
    fakeDate.setHours(hours);
    fakeDate.setMinutes(minutes);

    const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    const fakeDayOfWeek = daysOfWeek[dayOfWeek];

    function addLeadingZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    const formattedDate = `${year}.${addLeadingZero(month)}.${fakeDayOfWeek}.${addLeadingZero(hours)}:${addLeadingZero(minutes)}`;

    return <div className={s.dataStyle}>
        <p>{formattedDate}</p>
    </div>;
};

export default Paginator;

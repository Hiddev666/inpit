import { useState } from "react"

const Countdown = (props) => {

    const [day, setDay] = useState("")
    const [hour, setHour] = useState("")
    const [minute, setMinute] = useState("")


    // Set the date we're counting down to
    var countDownDate = new Date("December 13, 2026 10:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        setDay(days)
        setHour(hours)
        setMinute(minutes)

        if (days <= 0) {
            setDay("0")
            setHour("0")
            setMinute("0")
        }

    }, 1000);

    return (
        <div className={`${props.font} flex w-1/2 justify-between h-min overflow-hidden z-10 absolute top-1/4`}>
            <div className="" data-aos="zoom-in-right" data-aos-duration="3000">
                <h1 className="text-[#672421] text-6xl text-center overflow-hidden font-semibold">{day}</h1>
                <p className="text-black text-center text-xl">Hari</p>
            </div>
            <div className="" data-aos="zoom-in-up" data-aos-duration="3000">
                <h1 className="text-[#672421] text-6xl text-center overflow-hidden font-semibold">{hour}</h1>
                <p className="text-black text-center text-xl">Jam</p>
            </div>
            <div className="" data-aos="zoom-in-left" data-aos-duration="3000">
                <h1 className="text-[#672421] text-6xl text-center overflow-hidden font-semibold">{minute}</h1>
                <p className="text-black text-center text-xl">Menit</p>
            </div>
        </div>
    )
}

export default Countdown

import { useState } from "react"

const Countdown = (props) => {

    const [day, setDay] = useState("")
    const [hour, setHour] = useState("")
    const [minute, setMinute] = useState("")


    // Set the date we're counting down to
    var countDownDate = new Date("April 13, 2025 15:37:25").getTime();

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

        if (days == 0 & hours == 0 & minutes == 0) {
            setDay("0")
            setHour("0")
            setMinute("0")
        }

    }, 1000);

    return (
        <div className={`${props.font} flex w-full justify-between h-min`}>
            <div className="">
                <h1 className="text-white text-5xl overflow-hidden font-semibold">{day}</h1>
                <p className="text-white text-center">Hari</p>
            </div>
            <div className="">
                <h1 className="text-white text-5xl overflow-hidden font-semibold">{hour}</h1>
                <p className="text-white text-center">Jam</p>
            </div>
            <div className="">
                <h1 className="text-white text-5xl overflow-hidden font-semibold">{minute}</h1>
                <p className="text-white text-center">Menit</p>
            </div>
        </div>
    )
}

export default Countdown

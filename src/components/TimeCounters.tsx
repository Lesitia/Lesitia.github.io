
"use client";

import { useEffect, useState } from "react";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

/**
 * 천 단위 구분 쉼표
 */
function formatNumber(value: number): string {
    return value.toLocaleString("en-US");
}

/**
 * 지원 언어별 시간 단위
 */
const timeUnits = {
    ko: {
        day: "일",
        hour: "시간",
        minute: "분",
        second: "초",
    },
    en: {
        day: "d",
        hour: "h",
        minute: "m",
        second: "s",
    },
    ja: {
        day: "日",
        hour: "時間",
        minute: "分",
        second: "秒",
    },
    zh: {
        day: "天",
        hour: "小时",
        minute: "分钟",
        second: "秒",
    },
    fr: {
        day: "j",
        hour: "h",
        minute: "min",
        second: "s",
    },
} as const;

type TimeCounterProps = {
    target: string | Date;
    className?: string;
};

type TimeLocale = keyof typeof timeUnits;

type ElapsedTimeCounterProps = TimeCounterProps & {
    format?: "clock" | "units" | "compact";
	locale?: TimeLocale;
	compactLen?: number;
};

/**
 * 현재 시간을 1초마다 갱신하는 공통 Hook
 * Hydration 오류 방지를 위해 초기값은 null
 */
function useCurrentTime() {
    const [now, setNow] = useState<number | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(Date.now());
        }, 33);

        return () => clearInterval(interval);
    }, []);

    return now;
}

/**
 * D-Day Counter
 *
 * 미래: D-3
 * 당일: D-Day
 * 과거: D+3
 */
export function DDayCounter({
    target,
    className = "",
}: TimeCounterProps) {
    const now = useCurrentTime();
    const targetTime = new Date(target).getTime();

    if (now === null || !Number.isFinite(targetTime)) {
        return <span className={className}>--</span>;
    }

    const diff = Math.ceil((targetTime - now) / DAY);

    const text =
        diff === 0
            ? "D-Day"
            : diff > 0
                ? `D-${formatNumber(diff)}`
                : `D+${formatNumber(Math.abs(diff))}`;

    return <span className={className}>{text}</span>;
}

/**
 * 숫자만 출력하는 D-Day Counter
 *
 * 미래: 3
 * 당일: 0
 * 과거: -3
 */
export function DDayNumber({
    target,
    className = "",
}: TimeCounterProps) {
    const now = useCurrentTime();
    const targetTime = new Date(target).getTime();

    if (now === null || !Number.isFinite(targetTime)) {
        return <span className={className}>--</span>;
    }

	const diff = Math.ceil((targetTime - now) / DAY);
	
	return (
		<span className={className}>
			{diff < 0
				? `-${formatNumber(Math.abs(diff))}`
				: formatNumber(diff)}
		</span>
	);
}

/**
 * 경과 시간 Counter
 *
 * clock: 172d 13:40:59
 * units:
 *   ko: 3일 17시간 45분 20초
 *   en: 3d 17h 45m 20s
 *   ja: 3日 17時間 45分 20秒
 *   zh: 3天 17小时 45分钟 20秒
 *   fr: 3j 17h 45min 20s
 */


export function ElapsedTimeCounter({
    target,
    className = "",
    format = "clock",
	locale = "en",
	compactLen = 2,
}: ElapsedTimeCounterProps) {
    const now = useCurrentTime();
    const targetTime = new Date(target).getTime();

    if (now === null || !Number.isFinite(targetTime)) {
        return <span className={className}>--</span>;
    }

    const elapsed = Math.max(0, (now - targetTime) / SECOND);
    const days = Math.floor(elapsed / 86400);
    const hours = Math.floor((elapsed % 86400) / 3600);
    const minutes = Math.floor((elapsed % 3600) / 60);
    const seconds = elapsed % 60;

    const unit = timeUnits[locale];

    let text: string;

    if (format === "clock") {
        const totalSeconds = Math.floor(elapsed);

        const clockDays = Math.floor(totalSeconds / 86400);
        const clockHours = Math.floor((totalSeconds % 86400) / 3600);
        const clockMinutes = Math.floor((totalSeconds % 3600) / 60);
        const clockSeconds = totalSeconds % 60;

        text = `${formatNumber(clockDays)}d ${String(clockHours).padStart(2, "0")}:${String(clockMinutes).padStart(2, "0")}:${String(clockSeconds).padStart(2, "0")}`;
    } else if (format === "units") {
        const isSecondsOnly = elapsed < 60;

		text = [
			days > 0 ? `${formatNumber(days)}${unit.day}` : null,
            hours > 0 ? `${hours}${unit.hour}` : null,
            minutes > 0 ? `${minutes}${unit.minute}` : null,
            isSecondsOnly
                ? `${seconds.toFixed(2)}${unit.second}`
                : `${Math.floor(seconds)}${unit.second}`,
        ]
            .filter(Boolean)
            .join(" ");
    } else {
        const values = [
            { value: days, label: unit.day, isDays: true },
            { value: hours, label: unit.hour, isDays: false },
            { value: minutes, label: unit.minute, isDays: false },
            { value: seconds, label: unit.second, isDays: false },
        ];

        const nonZeroValues = values.filter(
            (item) => item.value > 0
        );

        const displayValues = nonZeroValues.length > 0
            ? nonZeroValues.slice(0, compactLen)
            : [values[3]];

        text = displayValues
            .map((item) => {
				const value = item.isDays
					? formatNumber(item.value)
					: item === values[3] && elapsed < 60
						? item.value.toFixed(2)
						: Math.floor(item.value).toString();

                return `${value}${item.label}`;
            })
            .join(" ");
    }

    return <span className={className}>{text}</span>;
}
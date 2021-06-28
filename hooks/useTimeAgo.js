// para determinar cuanto tiempo ha pasado desde un punto anterior a ahora

import { useEffect, useState } from "react";

const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const getDateDiffs = (timeStamp) => {
  const elapsed = (timeStamp - Date.now()) / 1000;

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    const value = Math.round(elapsed / secondsInUnit);
    return { value, unit };
  }
};

export default function useTimeAgo(timeStamp) {
  const [timeago, setTimeago] = useState(() => getDateDiffs(timeStamp));

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeago = getDateDiffs(timeStamp);
      setTimeago(newTimeago);
    }, 5000);

    return () => clearInterval(interval);
  }, [timeStamp]);

  const rtf = new Intl.RelativeTimeFormat("es", { style: "short" });
  const { value, unit } = timeago;
  return rtf.format(value, unit);
}

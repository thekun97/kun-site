import { LOCALE } from "@config";

interface DatetimesProps {
  startDate: string | Date;
  endDate: string | Date | undefined | null;
}

interface Props extends DatetimesProps {
  size?: "sm" | "lg";
  className?: string;
}

function format(inputDate) {
  var date = new Date(inputDate);
  if (!isNaN(date.getTime())) {
    // Months use 0 index.
    return (
      (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  }
}

export default function StartEndDate({
  startDate,
  endDate,
  size = "sm",
  className,
}: Props) {
  return (
    <div className={`flex items-center space-x-2 opacity-80 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          size === "sm" ? "scale-90" : "scale-100"
        } inline-block h-6 w-6 min-w-[1.375rem] fill-skin-base`}
        aria-hidden="true"
      >
        <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
        <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path>
      </svg>
      <span className={`italic ${size === "sm" ? "text-sm" : "text-base"}`}>
        <FormattedDatetime
          date={startDate}
        />
      </span>
      <span aria-hidden="true"> - </span>
      <span className={`italic ${size === "sm" ? "text-sm" : "text-base"}`}>
        <FormattedDatetime
          date={endDate}
        />
      </span>
    </div>
  );
}

const FormattedDatetime = ({ date }) => {
  let dateFormat = "present"
  if (date !== "1970-01-11T22:58:30.521Z") {
    dateFormat = format(
      date
        .toISOString(LOCALE.langTag, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
        .split("T")[0]
    );
  }

  return (
    <>
      <time>{dateFormat}</time>
    </>
  );
};

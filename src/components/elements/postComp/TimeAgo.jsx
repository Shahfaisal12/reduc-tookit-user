import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <>
      <span title={timestamp}>
       <i className="mx-2 text-secondary">{timeAgo}</i>
      </span>
    </>
  );
};

export default TimeAgo;

import { DateTime } from "luxon";

function BlogInformation({ className, heartCount, owner, createdAt }) {
  return (
    <p className={className}>
      {heartCount} - {owner} - {DateTime.fromISO(createdAt).toRelative()}
    </p>
  );
}

export default BlogInformation;

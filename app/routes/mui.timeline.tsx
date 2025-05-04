import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  Timeline,
  TimelineOppositeContent,
} from "@mui/lab";

export default function TimelineDemo() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          23 members
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Girls</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          17 members
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Boys</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          17 team's
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>Workers</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

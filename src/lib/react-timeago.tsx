import TimeAgo from 'react-timeago';
import englishStrings from 'react-timeago/lib/language-strings/en';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

const formatter = buildFormatter(englishStrings);

const TimeAgoFormat: React.FC<{ date: string }> = ({ date }) => {
  return <TimeAgo date={date} formatter={formatter} />;
};

export default TimeAgoFormat;

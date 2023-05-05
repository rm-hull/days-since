import { Box, Flex, useInterval } from "@chakra-ui/react";
import human from "human-time";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Since(): JSX.Element | null {
  const { description, time } = useParams();
  const [elapsed, setElapsed] = useState<number>(0);
  const update = () => setElapsed(Date.now() - parseInt(time ?? ""));

  useEffect(update, [time]);
  useInterval(update, 1000);

  const [value, unit] = human(elapsed / 1000).split(" ");
  return (
    <Box>
      <Flex m={3}>
        {value} {unit} since {description}.
      </Flex>
    </Box>
  );
}

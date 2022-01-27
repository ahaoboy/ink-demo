import { render, Box, Text } from "ink";
import React from "react";

// error
// const width = 80;
// const height = 40;

// ok
const width = 40;
const height = 20;

const block = "█";
const inv = 100;
const Example = ({ width = 10, height = 10, color = 0 } = {}) => {
  return (
    <>
      {Array(height)
        .fill(0)
        .map((_, h) => (
          <Box key={h}>
            {Array(width)
              .fill(0)
              .map((_, w) => (
                <Text key={w} color={`rgb(${color},${color},${color})`}>
                  {block}
                </Text>
              ))}
          </Box>
        ))}
    </>
  );
};

async function main() {
  let color = 0;
  const handle = render(
    <Example width={width} height={height} color={color} />
  );

  while (color++ < 255) {
    await new Promise((r) => setTimeout(r, inv));
    handle.rerender(<Example width={width} height={height} color={color} />);
  }
  handle.cleanup()
  handle.clear()
}
main();

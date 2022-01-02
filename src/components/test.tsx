import React, { ReactNode } from 'react';

interface TestProps {
  children: ReactNode;
}

function Test({ children }: TestProps) {
  return (
    <>
      <h1>Test</h1>
      {children}
    </>
  );
}

export default Test;

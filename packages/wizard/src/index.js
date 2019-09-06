import React, { useState } from "react";

export default function wizard({ children, onComplete }) {
  const [currentIndex, setIndex] = useState(0);
  const [wizardState, setWizardState] = useState({});

  const hasPrevious = currentIndex > 0;
  const hasNext =
    children && children.length && currentIndex < children.length - 1;

  const onCompleteStep = mergeState => {
    setWizardState(previous => ({ ...previous, ...mergeState }));
    if (hasNext) {
      setIndex(previous => previous + 1);
      return;
    }

    onComplete({ ...wizardState, ...mergeState });
  };

  const onPrevious = () => {
    setIndex(previous => previous - 1);
  };

  return React.cloneElement(children[currentIndex], {
    hasPrevious,
    onCompleteStep,
    onPrevious,
    setWizardState
  });
}

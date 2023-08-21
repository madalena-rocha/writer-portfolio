import { useRef, useEffect } from "react";

import { Container } from "./styles";

export function Section({ id, title, children, setActiveSection }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [id, setActiveSection]);

  return (
    <Container ref={sectionRef} id={id}>
      <h2>{title}</h2>
      <div>{children}</div>
    </Container>
  );
}
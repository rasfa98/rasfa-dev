"use client";

import hljs from "highlight.js";
import { useEffect } from "react";

const CodeHighlight = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return null;
};

export default CodeHighlight;

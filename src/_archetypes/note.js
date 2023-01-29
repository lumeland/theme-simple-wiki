export default function note(id) {
  const path = id.replace(/\s+/g, "-").toLowerCase() + ".md";
  const title = id.split("/").pop();

  return {
    path,
    content: `# ${title}
`,
  };
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}
const groq = String.raw || ((strings, ...keys) => {
  const lastIndex = strings.length - 1;
  return strings.slice(0, lastIndex).reduce(
    (query, currentString, index) => query + currentString + keys[index],
    ""
  ) + strings[lastIndex];
});

export { formatDate as f, groq as g };
//# sourceMappingURL=groq-f43edbae.mjs.map

function mostFrequentCharacter(str) {
  let obj = { mostCount: 0, mostFrequent: "" };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }

    if (obj[str[i]] === undefined) {
      obj[str[i]] = 0;
    }
    obj[str[i]] += 1;

    if (obj[str[i]] > obj["mostCount"]) {
      obj["mostCount"] = obj[str[i]];
      obj["mostFrequent"] = str[i];
    }
  }
  return obj["mostFrequent"];
}

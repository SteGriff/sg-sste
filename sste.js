import { promises as fs } from "fs";
import path from "path";

const cache = {};

const readTemplate = async (filePath) => {
  if (cache[filePath])
    return cache[filePath];

  const content = await fs.readFile(filePath, "utf8");
  cache[filePath] = content;
  return content;
};

export const sste = async (filePath, callback) => {
  try {
    const mainTemplatePath = path.join(path.dirname(filePath), "main.htm");
    const [mainTemplate, contentTemplate] = await Promise.all([
      readTemplate(mainTemplatePath),
      readTemplate(filePath),
    ]);

    const placeholder = "<content/>";
    const rendered = mainTemplate.replace(placeholder, contentTemplate);

    if (callback)
      callback(null, rendered);
  } catch (err) {
    if (callback)
      callback(err);
  }
};

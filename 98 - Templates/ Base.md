--

--
<%*
// 1. Setup categories and folder mapping

const delimiterString = " - ";

const categoryPrefixMapping = {
  "project":    "01",
  "area":       "02",
  "resource":   "03",
  "archive":    "04",
  "daily":      "10",
  "weekly":     "11",
  "monthly":    "12",
  "quarterly":  "13",
  "yearly":     "14",
  "":           "00",
};

const categoryPluralMapping = {
  "project":    true,
  "area":       true,
  "resource":   true,
  "archive":    true,
  "daily":      false,
  "weekly":     false,
  "monthly":    false,
  "quarterly":  false,
  "yearly":     false,
  "":           false,
};

categoryRootFolderMapping = {};

for map in categoryPrefixMapping {
  prefix = `${categoryPrefixMapping[map]}`
  sweetNewMap = `${prefix}<% delimiterString}<% map}`

  if categoryPluralMapping[map] {
    sweetNewMap = `${sweetNewMap}s`
  }

  categoryRootFolderMapping[map] = sweetNewMap;
}

const category = await tp.system.suggester(Object.keys(categoryPrefixMapping), Object.keys(categoryPrefixMapping));

if (!category) {
    throw new Error("No interval selected");
}

const rootFolder = categoryRootFolderMapping[category];
const fileName = `00 - ${category} Base`;

// 2. Rename and move file
await tp.file.rename(fileName);
await tp.file.move(`${rootFolder}/${fileName}`);
%>title: "<% category %> Base"
date: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
lastmod: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
categories: <% category %>
tags:
  - base
aliases:
share: false
---

### Base View

```base
formulas:
  created time: file.ctime.format("y-MM-DD hh:mm:ss A Z")
  file fullname: link(file.fullname)
  modified time: lastmod.format("y-MM-DD hh:mm:ss A Z")
  root folder: file.folder.split("/")[0]
- views:
  "": link(file.fullname)
  - type: table
    name: Table
    filters:
      or:
        - categories == "<% category %>"
        - file.tags.containsAny("<% category %>", "<% category %>s")
        - 'formula["root folder"].containsAny("<% rootFolder %>")'
    groupBy:
      property: formula.
      direction: ASC
    order:
      - categories
      - tags
      - formula.Untitled
    sort:
      - property: file.folder
        direction: ASC
      - property: file.name
        direction: ASC
      - property: tags
        direction: ASC
      - property: file.mtime
        direction: DESC
      - property: file.ctime
        direction: ASC
      - property: categories
        direction: ASC
    columnSize:
      note.tags: 1460
```
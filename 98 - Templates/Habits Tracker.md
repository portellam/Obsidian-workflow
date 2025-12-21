---
<%*
// 1. Setup intervals and folder mapping
const mapping = {
  "Daily": "10 - Daily",
  "Weekly": "11 - Weekly",
  "Monthly": "12 - Monthly",
  "Quarterly": "13 - Quarterly",
  "Yearly": "14 - Yearly"
};

const selection = await tp.system.suggester(Object.keys(mapping), Object.keys(mapping));

if (!selection) {
    throw new Error("No interval selected");
}

const targetFolder = mapping[selection];
const fileName = `00 - ${selection} Habits Tracker`;

// 2. Rename and move file
await tp.file.rename(fileName);
await tp.file.move(`${targetFolder}/${fileName}`);
%>title: "<% selection %> Habits Tracker"
date: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
lastmod: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
categories: <% selection %>
tags:
  - habits
aliases:
share: false
---
# <% selection %> Habits Tracker
___
## Good <% selection %> Habits
___



## Bad <% selection %> Habits
___
